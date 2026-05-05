import {
  doc, setDoc, getDoc, updateDoc, deleteDoc, onSnapshot,
  deleteField, type Unsubscribe,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import {
  type Room, type Player, type GameMode, type BoardType, type GameState,
  PLAYER_COLORS,
} from './types'
import { initGameState } from '../game/gameLogic'

const ROOMS = (code: string) => doc(db, 'ludoex', 'rooms', 'list', code)

function genCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

function genPlayerId(): string {
  return Math.random().toString(36).substring(2, 12)
}

export async function createRoom(
  hostName: string,
  mode: GameMode,
): Promise<{ room: Room; playerId: string }> {
  let code = genCode()
  // retry on collision
  for (let i = 0; i < 5; i++) {
    const snap = await getDoc(ROOMS(code))
    if (!snap.exists()) break
    code = genCode()
  }

  const playerId = genPlayerId()
  const host: Player = {
    id: playerId,
    name: hostName,
    color: PLAYER_COLORS[0],
    isHost: true,
    connected: true,
  }

  const boardType: BoardType = 'standard'
  const room: Room = {
    code,
    hostId: playerId,
    status: 'waiting',
    mode,
    boardType,
    players: { [playerId]: host },
    createdAt: Date.now(),
  }

  await setDoc(ROOMS(code), room)
  return { room, playerId }
}

export async function joinRoom(
  code: string,
  playerName: string,
): Promise<{ room: Room; playerId: string }> {
  const snap = await getDoc(ROOMS(code))
  if (!snap.exists()) throw new Error('Room not found')

  const room = snap.data() as Room

  // Takeover: if a player with this name is marked autoBot, reclaim their slot (any status)
  const autoBotMatch = Object.values(room.players).find(
    p => p.autoBot === true && p.name === playerName
  )
  if (autoBotMatch) {
    await updateDoc(ROOMS(code), {
      [`players.${autoBotMatch.id}.autoBot`]: false,
      [`players.${autoBotMatch.id}.connected`]: true,
    })
    return {
      room: {
        ...room,
        players: {
          ...room.players,
          [autoBotMatch.id]: { ...autoBotMatch, autoBot: false, connected: true },
        },
      },
      playerId: autoBotMatch.id,
    }
  }

  if (room.status !== 'waiting') throw new Error('Game already started')

  const playerCount = Object.keys(room.players).length
  if (playerCount >= 8) throw new Error('Room is full')

  const usedColors = Object.values(room.players).map(p => p.color)
  const color = PLAYER_COLORS.find(c => !usedColors.includes(c))!

  const playerId = genPlayerId()
  const player: Player = {
    id: playerId,
    name: playerName,
    color,
    isHost: false,
    connected: true,
  }

  await updateDoc(ROOMS(code), {
    [`players.${playerId}`]: player,
  })

  return { room: { ...room, players: { ...room.players, [playerId]: player } }, playerId }
}

export async function leaveRoom(code: string, playerId: string): Promise<void> {
  const snap = await getDoc(ROOMS(code))
  if (!snap.exists()) return

  const room = snap.data() as Room
  const remaining = Object.values(room.players).filter(p => p.id !== playerId)

  // Delete room when no active humans remain
  const hasHuman = remaining.some(p => !p.name.startsWith('Bot ') && !p.autoBot)
  if (!hasHuman) {
    await deleteDoc(ROOMS(code))
    return
  }

  if (room.hostId === playerId) {
    const newHost = remaining.find(p => !p.name.startsWith('Bot ')) ?? remaining[0]
    await updateDoc(ROOMS(code), {
      hostId: newHost.id,
      [`players.${newHost.id}.isHost`]: true,
      [`players.${playerId}`]: deleteField(),
    })
  } else {
    await updateDoc(ROOMS(code), {
      [`players.${playerId}`]: deleteField(),
    })
  }
}

export async function startGame(code: string, playerId: string): Promise<void> {
  const snap = await getDoc(ROOMS(code))
  if (!snap.exists()) throw new Error('Room not found')

  const room = snap.data() as Room
  if (room.hostId !== playerId) throw new Error('Only host can start')

  const playerCount = Object.keys(room.players).length
  if (playerCount < 2) throw new Error('Need at least 2 players')

  const boardType: BoardType = playerCount <= 4 ? 'standard' : 'octagonal'

  const playerIds = Object.keys(room.players)
  const colors: Record<string, string> = {}
  for (const [id, p] of Object.entries(room.players)) colors[id] = p.color

  const gameState = initGameState(playerIds, colors, boardType)

  await updateDoc(ROOMS(code), { status: 'playing', boardType, gameState })
}

export async function updateGameState(code: string, gameState: GameState): Promise<void> {
  await updateDoc(ROOMS(code), { gameState })
}

export async function setPlayerAutoBot(code: string, playerId: string, autoBot: boolean): Promise<void> {
  await updateDoc(ROOMS(code), { [`players.${playerId}.autoBot`]: autoBot })
}

export async function rematchGame(code: string, playerId: string): Promise<void> {
  const snap = await getDoc(ROOMS(code))
  if (!snap.exists()) return
  const room = snap.data() as Room
  if (room.hostId !== playerId) throw new Error('Only host can rematch')

  const playerIds = Object.keys(room.players)
  const colors: Record<string, string> = {}
  for (const [id, p] of Object.entries(room.players)) colors[id] = p.color

  const gameState = initGameState(playerIds, colors, room.boardType)
  await updateDoc(ROOMS(code), { gameState })
}

export function subscribeRoom(
  code: string,
  callback: (room: Room | null) => void,
): Unsubscribe {
  return onSnapshot(ROOMS(code), snap => {
    callback(snap.exists() ? (snap.data() as Room) : null)
  })
}

export { genPlayerId }

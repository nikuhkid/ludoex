import * as THREE from 'three'
import { showLobby } from './ui/lobby'
import { SceneManager } from './render/SceneManager'
import { buildStandardBoard, buildOctagonalBoard, highlightTile } from './render/BoardRenderer'
import {
  spawnPieces, movePiece, tickPieceAnims, isAnimatingPiece, clearAllAnims,
  reconcileMergedPieces, unmergeByIndices, unmergeIfMerged,
  getMergedGroupForPiece, getActiveMergedGroups, clearAllMerges,
  type PieceMesh,
} from './render/PieceRenderer'
import { playCaptureAnimation, tickCaptureAnims, isCapturing, clearAllCaptureAnims } from './render/CaptureAnimator'
import { spawnEffect, tickEffects } from './render/EffectAnimator'
import { DieRenderer } from './render/DieRenderer'
import { subscribeRoom, updateGameState, rematchGame, leaveRoom, setPlayerAutoBot } from './room/roomService'
import {
  getValidMoves, getReverseValidMoves, getBlockedPieceReasons,
  applySetupRoll, applyRoll, applyMove, skipTurn,
  absolutePathIndex as getAbsolutePathIndex,
  getTileType, BOARD_PARAMS, type MoveOption,
} from './game/gameLogic'
import type { Room, GameState } from './room/types'
import type { BoardType, PlayerColor } from './room/types'
import type { Unsubscribe } from 'firebase/firestore'
import './ui/lobby.css'
import './ui/hud.css'

// ── Scene ─────────────────────────────────────────────────────

const canvas  = document.getElementById('game-canvas') as HTMLCanvasElement
const manager = new SceneManager(canvas)
const clock   = new THREE.Clock()

const raycaster = new THREE.Raycaster()
const mouse     = new THREE.Vector2()

// ── Runtime state ─────────────────────────────────────────────

let boardGroup: THREE.Group | null = null
let pieceMeshes: PieceMesh[] = []
let dieRenderer: DieRenderer | null = null
let gameUnsub: Unsubscribe | null = null

let currentRoom: Room | null = null
let myPlayerId: string | null = null
let myColors: Record<string, string> = {}
let isHost = false

let pendingMoves: MoveOption[] = []
let pendingActingId: string | null = null
let selectablePieces: Set<number> = new Set()
let botTurnActive = false

let prevProgress: Record<string, number[]> = {}
let gameOverEl: HTMLElement | null = null
let prevWinner: string | null = null
let setupTimerPid: string | null = null

// ── Camera focus ──────────────────────────────────────────────

const CAM_FOCUS_KEY = 'ludoex_camfocus'

function getCamFocus(): boolean {
  return localStorage.getItem(CAM_FOCUS_KEY) !== 'false'
}

let followTarget: THREE.Group | null = null
let followReturnTimer: ReturnType<typeof setTimeout> | null = null

function startFollowing(group: THREE.Group): void {
  if (!getCamFocus()) return
  if (followReturnTimer) { clearTimeout(followReturnTimer); followReturnTimer = null }
  followTarget = group
}

function stopFollowing(holdMs = 1200): void {
  followTarget = null
  if (followReturnTimer) { clearTimeout(followReturnTimer); followReturnTimer = null }
  if (holdMs === 0) { manager.returnToOverview(); return }
  followReturnTimer = setTimeout(() => {
    manager.returnToOverview()
    followReturnTimer = null
  }, holdMs)
}

function clearCamFollow(): void {
  followTarget = null
  if (followReturnTimer) { clearTimeout(followReturnTimer); followReturnTimer = null }
}

// ── Timers ────────────────────────────────────────────────────

let rollTimerId: ReturnType<typeof setTimeout> | null = null
let moveTimerId: ReturnType<typeof setTimeout> | null = null
let rollIntervalId: ReturnType<typeof setInterval> | null = null
let moveIntervalId: ReturnType<typeof setInterval> | null = null

function cancelAllTimers(): void {
  if (rollTimerId)    { clearTimeout(rollTimerId);     rollTimerId    = null }
  if (moveTimerId)    { clearTimeout(moveTimerId);     moveTimerId    = null }
  if (rollIntervalId) { clearInterval(rollIntervalId); rollIntervalId = null }
  if (moveIntervalId) { clearInterval(moveIntervalId); moveIntervalId = null }
}

function cancelMoveTimer(): void {
  if (moveTimerId)    { clearTimeout(moveTimerId);     moveTimerId    = null }
  if (moveIntervalId) { clearInterval(moveIntervalId); moveIntervalId = null }
}

function startRollTimer(actingId: string): void {
  cancelAllTimers()
  let secs = 10
  setStatusMsg(`Your turn — click the die! (${secs}s)`)
  rollIntervalId = setInterval(() => {
    secs--
    if (secs > 0) setStatusMsg(`Your turn — click the die! (${secs}s)`)
  }, 1000)
  rollTimerId = setTimeout(() => {
    if (rollIntervalId) { clearInterval(rollIntervalId); rollIntervalId = null }
    rollTimerId = null
    if (dieRenderer) dieRenderer.roll(v => onRollResult(v, actingId))
  }, 10000)
}

function startMoveTimer(actingId: string): void {
  cancelMoveTimer()
  let secs = 15
  setStatusMsg(`Rolled — pick a piece! (${secs}s)`)
  moveIntervalId = setInterval(() => {
    secs--
    if (secs > 0) setStatusMsg(`Rolled — pick a piece! (${secs}s)`)
  }, 1000)
  moveTimerId = setTimeout(() => {
    if (moveIntervalId) { clearInterval(moveIntervalId); moveIntervalId = null }
    moveTimerId = null
    autoPlayPending(actingId)
    markAFK(actingId)
  }, 15000)
}

function startSetupRollTimer(actingId: string): void {
  let secs = 30
  if (actingId === myPlayerId) {
    setStatusMsg(`Roll to set turn order! (${secs}s)`)
    rollIntervalId = setInterval(() => {
      secs--
      if (secs > 0) setStatusMsg(`Roll to set turn order! (${secs}s)`)
    }, 1000)
  }
  rollTimerId = setTimeout(() => {
    if (rollIntervalId) { clearInterval(rollIntervalId); rollIntervalId = null }
    rollTimerId = null
    if (!dieRenderer || !currentRoom) return
    if (currentRoom.gameState?.phase !== 'setup') return
    if (currentRoom.gameState.turnOrder[currentRoom.gameState.currentTurn] !== actingId) return
    if (!isHost && actingId !== myPlayerId) return
    dieRenderer.roll(v => onSetupRollResult(v, actingId))
  }, 30000)
}

function autoPlayPending(actingId: string): void {
  if (!currentRoom || !pendingMoves.length || !pendingActingId) return
  const room = currentRoom
  const gs   = room.gameState!
  const move = botPickMove(pendingMoves, gs, actingId, room)
  clearSelectableHighlights()
  selectablePieces = new Set()
  const savedId = pendingActingId
  pendingMoves = []
  pendingActingId = null
  const finalGs = applyMove(gs, savedId, move, room.boardType, room.mode, myColors)
  if (move.forceSplit) {
    const color = myColors[savedId] as PlayerColor
    for (let j = 0; j < 4; j++) {
      if (j === move.pieceIndex) continue
      unmergeByIndices(pieceMeshes, color, [move.pieceIndex, j] as [number, number], manager.scene)
    }
  }
  animateMove(savedId, move, room.boardType, () => { writeGameState(finalGs); botTurnActive = false })
}

// ── AFK ───────────────────────────────────────────────────────

let playerIsAFK = false
let afkPopupEl: HTMLElement | null = null
let afkTimerId: ReturnType<typeof setTimeout> | null = null
let afkIntervalId: ReturnType<typeof setInterval> | null = null

function markAFK(actingId: string): void {
  if (!currentRoom) return
  playerIsAFK = true
  setPlayerAutoBot(currentRoom.code, actingId, true).catch(console.error)
  showAFKPopup(
    () => { // I'm back
      if (!currentRoom || !myPlayerId) return
      playerIsAFK = false
      setPlayerAutoBot(currentRoom.code, myPlayerId, false).catch(console.error)
    },
    () => {}, // expired — stays AFK, bot continues
  )
}

function showAFKPopup(onBack: () => void, onExpire: () => void): void {
  hideAFKPopup()
  let secs = 7
  const el = document.createElement('div')
  el.id = 'afk-popup'
  el.innerHTML = `
    <div class="afk-card">
      <div class="afk-title">Still there?</div>
      <div class="afk-countdown" id="afk-countdown">Returning to bot in ${secs}s</div>
      <button class="btn btn-primary" id="btn-afk-back">I'm back!</button>
    </div>
  `
  document.body.appendChild(el)
  afkPopupEl = el

  afkIntervalId = setInterval(() => {
    secs--
    const cd = document.getElementById('afk-countdown')
    if (cd && secs > 0) cd.textContent = `Returning to bot in ${secs}s`
  }, 1000)

  afkTimerId = setTimeout(() => {
    if (afkIntervalId) { clearInterval(afkIntervalId); afkIntervalId = null }
    hideAFKPopup()
    onExpire()
  }, 7000)

  el.querySelector('#btn-afk-back')?.addEventListener('click', () => {
    if (afkIntervalId) { clearInterval(afkIntervalId); afkIntervalId = null }
    if (afkTimerId)    { clearTimeout(afkTimerId);     afkTimerId    = null }
    hideAFKPopup()
    onBack()
  })
}

function hideAFKPopup(): void {
  afkPopupEl?.remove()
  afkPopupEl = null
  if (afkIntervalId) { clearInterval(afkIntervalId); afkIntervalId = null }
  if (afkTimerId)    { clearTimeout(afkTimerId);     afkTimerId    = null }
}

// ── Bot helpers ───────────────────────────────────────────────

function isEffectiveBotPlayer(room: Room, playerId: string): boolean {
  const p = room.players[playerId]
  if (!p) return false
  return p.name.startsWith('Bot ') || (p.autoBot === true)
}

function botPickMove(moves: MoveOption[], gs: GameState, actingId: string, room: Room): MoveOption {
  const { pathLen } = BOARD_PARAMS[room.boardType]
  const color = myColors[actingId]

  // Under reverse curse: avoid going to base, prefer piece with least progress (safest to send back)
  if (moves.some(m => m.reverse)) {
    const safe = moves.filter(m => m.to !== -1)
    const pool = safe.length > 0 ? safe : moves
    return pool.reduce((best, m) => m.from < best.from ? m : best, pool[0])
  }

  function score(m: MoveOption): number {
    if (m.from === -1) {
      const active = gs.pieces[actingId].filter(p => p.progress >= 0 && p.progress < pathLen).length
      return active === 0 ? 100 : 50
    }
    if (m.to >= 0 && m.to < pathLen) {
      const absIdx = getAbsolutePathIndex(m.to, color, room.boardType)
      for (const [oppId, oppPieces] of Object.entries(gs.pieces)) {
        if (oppId === actingId) continue
        const oppColor = myColors[oppId]
        for (const op of oppPieces) {
          if (op.progress >= 0 && op.progress < pathLen &&
              getAbsolutePathIndex(op.progress, oppColor, room.boardType) === absIdx) {
            return 200
          }
        }
      }
    }
    if (m.to >= pathLen) return 80 + (m.to - pathLen) * 10
    return m.to
  }

  return moves.reduce((best, m) => score(m) >= score(best) ? m : best, moves[0])
}

// ── Mouse interaction ─────────────────────────────────────────

function getHitTargets(): THREE.Object3D[] {
  const t: THREE.Object3D[] = []
  if (boardGroup) t.push(boardGroup)
  pieceMeshes.forEach(pm => { if (pm.group.visible) t.push(pm.group) })
  getActiveMergedGroups().forEach(g => t.push(g))
  if (dieRenderer) t.push(dieRenderer.mesh)
  return t
}

canvas.addEventListener('mousemove', (e: MouseEvent) => {
  mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, manager.camera)
  const hits = raycaster.intersectObjects(getHitTargets(), true)
  const hit = hits.find(h => !!(getTopUserData(h.object)?.type))
  highlightTile(hit ? (hit.object as THREE.Mesh) : null)
})

canvas.addEventListener('click', (e: MouseEvent) => {
  mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, manager.camera)
  const hits = raycaster.intersectObjects(getHitTargets(), true)
  if (!hits.length) return
  const ud = getTopUserData(hits[0].object)
  if (!ud) return

  if (ud.type === 'die') {
    handleDieClick()
  } else if (ud.type === 'piece') {
    if (ud.merged) {
      const color   = ud.color as PlayerColor
      const indices = ud.pieceIndices as [number, number]
      if (indices.some(i => selectablePieces.has(i))) handleMergedPieceClick(color, indices)
    } else if (selectablePieces.has(ud.pieceIndex as number)) {
      handlePieceClick(ud.pieceIndex as number)
    }
  }
})

function getTopUserData(obj: THREE.Object3D): Record<string, unknown> | null {
  let cur: THREE.Object3D | null = obj
  while (cur) {
    if (cur.userData?.type) return cur.userData as Record<string, unknown>
    cur = cur.parent
  }
  return null
}

// ── Die interaction ───────────────────────────────────────────

function handleDieClick(): void {
  if (!dieRenderer?.clickable || !currentRoom || !myPlayerId) return
  const gs = currentRoom.gameState
  if (!gs) return

  if (gs.phase === 'setup') {
    if (gs.turnOrder[gs.currentTurn] !== myPlayerId) return
    cancelAllTimers()
    dieRenderer.roll((value) => onSetupRollResult(value, myPlayerId!))
    return
  }

  if (gs.phase !== 'roll') return
  if (gs.turnOrder[gs.currentTurn] !== myPlayerId) return
  cancelAllTimers()
  dieRenderer.roll((value) => onRollResult(value, myPlayerId!))
}

function triggerBotRoll(actingId: string): void {
  if (!dieRenderer || !currentRoom) return
  dieRenderer.roll((value) => {
    setTimeout(() => onRollResult(value, actingId), 500)
  })
}

function onSetupRollResult(value: number, actingId: string): void {
  if (!currentRoom) return
  const gs   = currentRoom.gameState!
  const room = currentRoom
  if (gs.phase !== 'setup') return
  if (gs.turnOrder[gs.currentTurn] !== actingId) return

  const name = room.players[actingId]?.name ?? '?'
  const newGs = applySetupRoll(gs, actingId, value, myColors, room.boardType)

  if (newGs.phase === 'roll') {
    const first = room.players[newGs.turnOrder[0]]
    setStatusMsg(`${first?.name ?? '?'} goes first!`)
  } else {
    setStatusMsg(`${name} rolled ${value}!`)
  }

  botTurnActive = false
  setTimeout(() => writeGameState(newGs), 600)
}

function handleSetupPhase(room: Room, gs: GameState): void {
  const setupPid = gs.turnOrder[gs.currentTurn]

  if (isEffectiveBotPlayer(room, setupPid) && isHost && !botTurnActive) {
    botTurnActive = true
    setupTimerPid = setupPid
    cancelAllTimers()
    if (dieRenderer) dieRenderer.clickable = false
    setStatusMsg(`${room.players[setupPid]?.name ?? 'Bot'} rolling for turn order...`)
    setTimeout(() => {
      if (!dieRenderer) return
      dieRenderer.roll(v => setTimeout(() => onSetupRollResult(v, setupPid), 400))
    }, 700)
    return
  }

  if (setupPid !== setupTimerPid) {
    setupTimerPid = setupPid
    cancelAllTimers()
    startSetupRollTimer(setupPid)
  }

  if (setupPid === myPlayerId) {
    if (dieRenderer) dieRenderer.clickable = true
  } else {
    if (dieRenderer) dieRenderer.clickable = false
    const name = room.players[setupPid]?.name ?? '?'
    setStatusMsg(`Waiting for ${name} to roll...`)
  }
}

function onRollResult(value: number, actingId: string): void {
  if (!currentRoom) return
  const gs   = currentRoom.gameState!
  const room = currentRoom

  if (value === 6 && gs.consecutiveSixes + 1 >= 3) {
    setStatusMsg('Three 6s in a row — turn forfeited!')
    const forfeitGs: GameState = {
      ...gs,
      phase: 'roll',
      diceValue: null,
      consecutiveSixes: 0,
      currentTurn: (gs.currentTurn + 1) % gs.turnOrder.length,
    }
    setTimeout(() => { writeGameState(forfeitGs); botTurnActive = false }, 1000)
    return
  }

  const curse = gs.pendingCurse?.[actingId]?.[0]

  // Fumble: halve the effective roll
  let effectiveRoll = value
  if (curse === 'fumble') {
    effectiveRoll = Math.max(1, Math.floor(value / 2))
  }

  const newGs = applyRoll(gs, value)

  // Reverse: pieces move backward this turn
  let moves: MoveOption[]
  if (curse === 'reverse') {
    moves = getReverseValidMoves(newGs, actingId, value, room.boardType)
    if (moves.length > 0) setStatusMsg(`Cursed — pieces move backward!`)
  } else {
    moves = getValidMoves(newGs, actingId, effectiveRoll, room.boardType, room.mode, myColors)
    if (curse === 'fumble' && effectiveRoll !== value) setStatusMsg(`Fumble! Roll ${value} → ${effectiveRoll}`)
  }

  // Notify if any pieces are shackled (skipping mention of which ones)
  const shackledCount = (gs.shackled?.[actingId] ?? []).length
  if (shackledCount > 0 && actingId === myPlayerId) {
    setStatusMsg(`${shackledCount} piece${shackledCount > 1 ? 's' : ''} shackled this turn.`)
  }

  if (moves.length === 0) {
    setStatusMsg(`Rolled ${value} — no moves. Skipping.`)
    setTimeout(() => { writeGameState(skipTurn(newGs)); botTurnActive = false }, 800)
    return
  }

  const isBot = isEffectiveBotPlayer(room, actingId)

  if (moves.length === 1 || isBot) {
    const move  = (isBot && moves.length > 1) ? botPickMove(moves, newGs, actingId, room) : moves[0]
    const delay = isBot ? 700 : 0
    setStatusMsg(`Rolled ${value}${isBot ? ` (${room.players[actingId]?.name})` : ' — auto moved.'}`)
    const doMove = () => {
      if (move.forceSplit) {
        const color = myColors[actingId] as PlayerColor
        unmergeIfMerged(pieceMeshes, color, move.pieceIndex, manager.scene)
      }
      const finalGs = applyMove(newGs, actingId, move, room.boardType, room.mode, myColors)
      animateMove(actingId, move, room.boardType, () => { writeGameState(finalGs); botTurnActive = false })
    }
    if (delay) setTimeout(doMove, delay)
    else doMove()
    return
  }

  pendingMoves = moves
  pendingActingId = actingId
  selectablePieces = new Set(moves.map(m => m.pieceIndex))
  highlightSelectablePieces(actingId, selectablePieces)
  highlightBlockedPieces(actingId, selectablePieces, newGs, room.boardType, effectiveRoll)
  setStatusMsg(`Rolled ${value} — pick a piece.`)
  writeGameState(newGs)

  if (actingId === myPlayerId) startMoveTimer(actingId)
}

function handlePieceClick(pieceIndex: number): void {
  if (!currentRoom || !pendingActingId) return
  const move = pendingMoves.find(m => m.pieceIndex === pieceIndex)
  if (!move) return

  cancelMoveTimer()
  clearSelectableHighlights()
  selectablePieces = new Set()
  const actingId = pendingActingId
  pendingMoves = []
  pendingActingId = null

  const gs = currentRoom.gameState!
  if (move.forceSplit) {
    const color = myColors[actingId] as PlayerColor
    unmergeIfMerged(pieceMeshes, color, pieceIndex, manager.scene)
  }
  const finalGs = applyMove(gs, actingId, move, currentRoom.boardType, currentRoom.mode, myColors)
  animateMove(actingId, move, currentRoom.boardType, () => writeGameState(finalGs))
}

function handleMergedPieceClick(color: PlayerColor, indices: [number, number]): void {
  if (!currentRoom || !pendingActingId) return
  const actorColor = myColors[pendingActingId] as PlayerColor
  if (actorColor !== color) return

  const selectableInPair = indices.filter(i => selectablePieces.has(i))
  if (!selectableInPair.length) return

  const chosen = selectableInPair[Math.floor(Math.random() * selectableInPair.length)]
  const move   = pendingMoves.find(m => m.pieceIndex === chosen)
  if (!move) return

  cancelMoveTimer()
  clearSelectableHighlights()
  selectablePieces = new Set()
  const actingId = pendingActingId
  pendingMoves = []
  pendingActingId = null

  unmergeByIndices(pieceMeshes, color, indices, manager.scene)

  const gs = currentRoom.gameState!
  const finalGs = applyMove(gs, actingId, move, currentRoom.boardType, currentRoom.mode, myColors)
  animateMove(actingId, move, currentRoom.boardType, () => writeGameState(finalGs))
}

// ── Piece animation ───────────────────────────────────────────

function animateMove(actingId: string, move: MoveOption, boardType: BoardType, onDone?: () => void): void {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin   = pathLen + colLen
  const color = myColors[actingId] as PlayerColor
  const pm    = pieceMeshes.find(p => p.color === color && p.pieceIndex === move.pieceIndex)
  if (!pm) { onDone?.(); return }

  let dest: { type: 'base' | 'path' | 'home-col' | 'finished'; index: number }
  if (move.to === -1)         dest = { type: 'base',     index: move.pieceIndex }
  else if (move.to < pathLen) dest = { type: 'path',     index: getAbsolutePathIndex(move.to, color, boardType) }
  else if (move.to < fin)     dest = { type: 'home-col', index: move.to - pathLen }
  else                        dest = { type: 'finished',  index: move.pieceIndex }

  if (actingId === myPlayerId) startFollowing(pm.group)

  const wrapped = () => {
    if (actingId === myPlayerId) stopFollowing(1200)
    // Spawn tile effect if landing on a special tile
    if (currentRoom?.mode === 'remix' && move.to >= 0 && move.to < pathLen) {
      const absIdx = getAbsolutePathIndex(move.to, color, boardType)
      const tileType = getTileType(absIdx, boardType)
      if (tileType) spawnEffect(manager.scene, tileType, pm.group.position.clone())
    }
    onDone?.()
  }

  movePiece(pm, boardType, dest, wrapped)
}

// ── Sync pieces to game state ─────────────────────────────────

function syncPieces(gs: GameState, boardType: BoardType): void {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin = pathLen + colLen

  for (const [playerId, pieces] of Object.entries(gs.pieces)) {
    const color = myColors[playerId] as PlayerColor
    if (!prevProgress[playerId]) prevProgress[playerId] = []

    pieces.forEach((p, pi) => {
      const pm   = pieceMeshes.find(pm => pm.color === color && pm.pieceIndex === pi)
      if (!pm) return

      const prev = prevProgress[playerId][pi] ?? -1
      const curr = p.progress

      if (prev >= 0 && curr === -1 && !isCapturing(pm)) {
        unmergeIfMerged(pieceMeshes, color, pi, manager.scene)
        if (playerId === myPlayerId) startFollowing(pm.group)
        playCaptureAnimation(pm, manager.scene, () => {
          if (playerId === myPlayerId) stopFollowing(0)
          movePiece(pm, boardType, { type: 'base', index: pi })
        })
        prevProgress[playerId][pi] = curr
        return
      }

      if (!isAnimatingPiece(pm) && !isCapturing(pm) && curr !== prev) {
        let dest: { type: 'base' | 'path' | 'home-col' | 'finished'; index: number }
        if (curr === -1)         dest = { type: 'base',     index: pi }
        else if (curr < pathLen) dest = { type: 'path',     index: getAbsolutePathIndex(curr, color, boardType) }
        else if (curr < fin)     dest = { type: 'home-col', index: curr - pathLen }
        else                     dest = { type: 'finished',  index: pi }
        movePiece(pm, boardType, dest)
      }

      prevProgress[playerId][pi] = curr
    })
  }
}

// ── Shackle visual ────────────────────────────────────────────

function updateShackleVisuals(gs: GameState): void {
  if (!myPlayerId) return
  const myColor   = myColors[myPlayerId] as PlayerColor
  if (!myColor) return
  const shackled = new Set(gs.shackled?.[myPlayerId] ?? [])

  pieceMeshes.forEach(pm => {
    if (pm.color !== myColor) return
    const dim = shackled.has(pm.pieceIndex)
    pm.group.traverse(child => {
      const mesh = child as THREE.Mesh
      if (!mesh.isMesh) return
      const m = mesh.material as THREE.MeshStandardMaterial
      if (dim) {
        m.transparent = true
        m.opacity = 0.42
        m.depthWrite = false
      } else if (m.opacity < 1.0) {
        m.transparent = false
        m.opacity = 1.0
        m.depthWrite = true
      }
    })
  })
}

// ── Highlight helpers ─────────────────────────────────────────

const SEL_EMISSIVE     = new THREE.Color(0x00ff88)
const SHACKLE_EMISSIVE = new THREE.Color(0x2244aa)
const BLOCKADE_EMISSIVE = new THREE.Color(0xaa1111)
let highlightedGroups: THREE.Group[] = []

function highlightSelectablePieces(actingId: string, indices: Set<number>): void {
  const color = myColors[actingId] as PlayerColor
  clearSelectableHighlights()
  const done = new Set<THREE.Group>()

  pieceMeshes.forEach(pm => {
    if (pm.color !== color || !indices.has(pm.pieceIndex)) return
    const mergedGroup = getMergedGroupForPiece(color, pm.pieceIndex)
    const target = mergedGroup ?? pm.group
    if (done.has(target)) return
    done.add(target)
    highlightedGroups.push(target)
    target.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return
      const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial
      m.emissive = SEL_EMISSIVE.clone()
      m.emissiveIntensity = 0.35
      child.userData.selectable = true
    })
  })
}

function clearSelectableHighlights(): void {
  highlightedGroups.forEach(g => {
    g.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return
      if (!child.userData.selectable && !child.userData.blocked) return
      const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial
      m.emissive.set(0x000000)
      m.emissiveIntensity = 0
      delete child.userData.selectable
      delete child.userData.blocked
    })
  })
  highlightedGroups = []
  pieceMeshes.forEach(pm => {
    pm.group.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return
      if (!child.userData.selectable && !child.userData.blocked) return
      const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial
      m.emissive.set(0x000000)
      m.emissiveIntensity = 0
      delete child.userData.selectable
      delete child.userData.blocked
    })
  })
}

function highlightBlockedPieces(
  actingId: string,
  validIndices: Set<number>,
  gs: GameState,
  boardType: BoardType,
  roll: number,
): void {
  const reasons = getBlockedPieceReasons(gs, actingId, roll, boardType, myColors, validIndices)
  if (reasons.size === 0) return
  const color = myColors[actingId] as PlayerColor

  pieceMeshes.forEach(pm => {
    if (pm.color !== color) return
    const reason = reasons.get(pm.pieceIndex)
    if (!reason) return
    const emissive = reason === 'shackled' ? SHACKLE_EMISSIVE : BLOCKADE_EMISSIVE
    const target = getMergedGroupForPiece(color, pm.pieceIndex) ?? pm.group
    target.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return
      const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial
      m.emissive = emissive.clone()
      m.emissiveIntensity = 0.45
      child.userData.blocked = reason
    })
  })
}

// ── Game over overlay ─────────────────────────────────────────

function showGameOver(room: Room, winnerId: string): void {
  if (gameOverEl) return

  const winner = room.players[winnerId]
  const hex    = winner ? colorHex(winner.color) : '#fff'
  const name   = winner ? escHtml(winner.name) : 'Unknown'
  const amHost = myPlayerId === room.hostId

  const el = document.createElement('div')
  el.id = 'gameover-overlay'
  el.innerHTML = `
    <div class="gameover-card">
      <div class="gameover-crown" style="color:${hex}">&#9813;</div>
      <div class="gameover-name" style="color:${hex}">${name}</div>
      <div class="gameover-sub">wins!</div>
      <div class="gameover-actions">
        <button class="btn btn-ghost" id="btn-go-leave">Leave</button>
        ${amHost
          ? `<button class="btn btn-primary" id="btn-go-rematch">Rematch</button>`
          : `<p class="gameover-waiting">Waiting for host...</p>`}
      </div>
    </div>
  `
  document.body.appendChild(el)
  gameOverEl = el

  el.querySelector('#btn-go-leave')?.addEventListener('click', () => handleLeaveGame())
  el.querySelector('#btn-go-rematch')?.addEventListener('click', () => handleRematch())
}

function hideGameOver(): void {
  gameOverEl?.remove()
  gameOverEl = null
}

async function handleLeaveGame(): Promise<void> {
  if (!currentRoom || !myPlayerId) return
  if (gameUnsub) { gameUnsub(); gameUnsub = null }
  hideGameOver()
  await leaveRoom(currentRoom.code, myPlayerId)
  cleanupGame()
  showLobby({ onGameStart })
}

async function handleRematch(): Promise<void> {
  if (!currentRoom || !myPlayerId) return
  try {
    hideGameOver()
    await rematchGame(currentRoom.code, myPlayerId)
  } catch (e) {
    console.error('Rematch failed', e)
  }
}

function cleanupGame(): void {
  cancelAllTimers()
  hideAFKPopup()
  clearCamFollow()
  playerIsAFK = false
  clearAllAnims()
  clearAllCaptureAnims()
  clearAllMerges(manager.scene, pieceMeshes)
  pieceMeshes.forEach(pm => manager.scene.remove(pm.group))
  pieceMeshes = []
  highlightedGroups = []
  if (boardGroup) { manager.scene.remove(boardGroup); boardGroup = null }
  if (dieRenderer) { dieRenderer.remove(manager.scene); dieRenderer = null }
  prevProgress = {}
  prevWinner = null
  botTurnActive = false
  setupTimerPid = null
  pendingMoves = []
  pendingActingId = null
  selectablePieces = new Set()
}

// ── Game state update ─────────────────────────────────────────

function handleGameStateUpdate(room: Room): void {
  currentRoom = room
  const gs = room.gameState
  if (!gs) return

  reconcileMergedPieces(pieceMeshes, gs, room.boardType, manager.scene, myColors, isCapturing)
  syncPieces(gs, room.boardType)
  updateShackleVisuals(gs)
  updateHUD(room)

  if (prevWinner !== null && gs.winner === null) {
    hideGameOver()
    prevWinner = null
    botTurnActive = false
    playerIsAFK = false
    if (dieRenderer) dieRenderer.clickable = true
  }

  if (gs.winner) {
    prevWinner = gs.winner
    cancelAllTimers()
    if (dieRenderer) dieRenderer.clickable = false
    stopFollowing(0)
    showGameOver(room, gs.winner)
    return
  }

  if (gs.phase === 'move') return  // waiting for piece selection — timers already running

  // ── Setup phase: roll to determine turn order ─────────────────
  if (gs.phase === 'setup') {
    handleSetupPhase(room, gs)
    return
  }

  const currentPid = gs.turnOrder[gs.currentTurn]
  const botTurn    = isEffectiveBotPlayer(room, currentPid)

  // ── Skip curse: host auto-skips the affected player ──────────
  if (isHost && gs.phase === 'roll' && gs.pendingCurse?.[currentPid]?.[0] === 'skip') {
    cancelAllTimers()
    if (dieRenderer) dieRenderer.clickable = false
    setStatusMsg(`${room.players[currentPid]?.name ?? '?'} — skipped by curse!`)
    setTimeout(() => { writeGameState(skipTurn(gs)); botTurnActive = false }, 900)
    return
  }

  if (botTurn && isHost && gs.phase === 'roll' && !botTurnActive) {
    botTurnActive = true
    cancelAllTimers()
    setStatusMsg(`${room.players[currentPid]?.name ?? 'Bot'} is thinking...`)
    if (dieRenderer) dieRenderer.clickable = false
    setTimeout(() => triggerBotRoll(currentPid), 1200)
    return
  }

  if (gs.phase === 'roll' && currentPid === myPlayerId && !botTurn) {
    if (dieRenderer) dieRenderer.clickable = true

    if (playerIsAFK) {
      if (!afkPopupEl) {
        showAFKPopup(
          () => {
            playerIsAFK = false
            if (currentRoom && myPlayerId) {
              setPlayerAutoBot(currentRoom.code, myPlayerId, false).catch(console.error)
            }
            if (dieRenderer) dieRenderer.clickable = true
            startRollTimer(currentPid)
          },
          () => {}, // expired, stays AFK — host drives as bot
        )
      }
    } else {
      startRollTimer(currentPid)
    }
    return
  }

  if (gs.phase === 'roll' && !botTurn) {
    cancelAllTimers()
    setStatusMsg(`${room.players[currentPid]?.name ?? '...'}'s turn`)
    if (dieRenderer) dieRenderer.clickable = false
  }
}

async function writeGameState(gs: GameState): Promise<void> {
  if (!currentRoom) return
  try { await updateGameState(currentRoom.code, gs) }
  catch (e) { console.error('writeGameState failed', e) }
}

// ── Game start ────────────────────────────────────────────────

function onGameStart(room: Room, playerId: string): void {
  myPlayerId  = playerId
  currentRoom = room
  isHost      = room.hostId === playerId
  prevWinner  = null

  myColors = {}
  for (const [id, p] of Object.entries(room.players)) myColors[id] = p.color

  const overlay = document.getElementById('ui-overlay')!
  overlay.style.pointerEvents = 'none'
  overlay.innerHTML = buildHUD(room)
  bindCamToggle()
  bindLegend()
  bindAFKBack()

  const players = Object.values(room.players).map(p => p.color)

  cleanupGame()
  boardGroup = room.boardType === 'standard'
    ? buildStandardBoard(manager.scene, players, room.mode)
    : buildOctagonalBoard(manager.scene, players, room.mode)

  pieceMeshes = spawnPieces(manager.scene, players, room.boardType)
  pieceMeshes.forEach(pm => {
    pm.group.userData.type       = 'piece'
    pm.group.userData.color      = pm.color
    pm.group.userData.pieceIndex = pm.pieceIndex
  })

  dieRenderer = new DieRenderer(manager.scene)

  if (gameUnsub) gameUnsub()
  gameUnsub = subscribeRoom(room.code, updatedRoom => {
    if (!updatedRoom || updatedRoom.status === 'waiting') return
    handleGameStateUpdate(updatedRoom)
  })

  if (room.gameState) handleGameStateUpdate(room)
}

// ── HUD ───────────────────────────────────────────────────────

function buildHUD(room: Room): string {
  const focusOn = getCamFocus()
  return `
    <div id="hud">
      <div id="hud-info">
        <span class="hud-code">${room.code}</span>
        <span class="hud-mode mode-${room.mode}">${room.mode}</span>
        <button id="btn-cam-toggle" class="cam-toggle ${focusOn ? 'cam-on' : 'cam-off'}" title="Toggle camera follow">
          ${focusOn ? 'CAM: FOLLOW' : 'CAM: FREE'}
        </button>
        ${room.mode === 'remix' ? `<button id="btn-legend" class="legend-btn" title="Tile guide">?</button>` : ''}
      </div>
      <div id="hud-players">
        ${Object.values(room.players).map(p => `
          <div class="hud-player" data-pid="${p.id}">
            <div class="hud-dot" style="background:${colorHex(p.color)}"></div>
            <span>${escHtml(p.name)}</span>
            ${p.name.startsWith('Bot ') ? '<span class="hud-bot-badge">BOT</span>' : ''}
            ${p.autoBot ? '<span class="hud-bot-badge hud-afk-badge">AFK</span>' : ''}
            <span class="hud-curse" data-cpid="${p.id}"></span>
            <span class="hud-score" data-spid="${p.id}">○○○○</span>
          </div>
        `).join('')}
      </div>
      <div id="hud-effects"></div>
      <button id="hud-afk-back" class="hud-afk-back-btn" style="display:none">I'm back!</button>
      <div id="hud-turn-indicator"></div>
      <div id="hud-status"></div>
    </div>
  `
}

function showLegend(): void {
  if (document.getElementById('legend-overlay')) return
  const el = document.createElement('div')
  el.id = 'legend-overlay'
  el.innerHTML = `
    <div class="legend-card">
      <div class="legend-title">Remix Tile Guide</div>
      <div class="legend-items">
        <div class="legend-item"><span class="legend-icon li-star">★</span><div><b>Star</b> — roll again</div></div>
        <div class="legend-item"><span class="legend-icon li-skull">☠</span><div><b>Skull</b> — piece sent back to base</div></div>
        <div class="legend-item"><span class="legend-icon li-boost">⚡</span><div><b>Boost</b> — jump forward 6 more tiles</div></div>
        <div class="legend-item"><span class="legend-icon li-bomb">💣</span><div><b>Bomb</b> — opponents within 3 tiles sent to base</div></div>
        <div class="legend-item"><span class="legend-icon li-swap">↔</span><div><b>Swap</b> — trade places with furthest opponent piece</div></div>
        <hr class="legend-hr">
        <div class="legend-item"><span class="legend-icon li-skip">🚫</span><div><b>Skip curse</b> — your next turn is skipped</div></div>
        <div class="legend-item"><span class="legend-icon li-reverse">↩</span><div><b>Reverse curse</b> — next turn pieces move backward</div></div>
        <div class="legend-item"><span class="legend-icon li-fumble">½</span><div><b>Fumble curse</b> — next roll value is halved</div></div>
        <div class="legend-item"><span class="legend-icon li-shackle">🔒</span><div><b>Shackle curse</b> — this piece can't move next turn</div></div>
      </div>
      <div class="legend-hint">Curses affect you on your <em>next</em> turn.</div>
      <button class="btn btn-ghost legend-close" id="btn-legend-close">Close</button>
    </div>
  `
  document.body.appendChild(el)
  el.addEventListener('click', e => { if (e.target === el) hideLegend() })
  el.querySelector('#btn-legend-close')?.addEventListener('click', hideLegend)
}

function hideLegend(): void {
  document.getElementById('legend-overlay')?.remove()
}

function bindLegend(): void {
  document.getElementById('btn-legend')?.addEventListener('click', showLegend)
}

function bindAFKBack(): void {
  document.getElementById('hud-afk-back')?.addEventListener('click', () => {
    if (!currentRoom || !myPlayerId) return
    playerIsAFK = false
    hideAFKPopup()
    setPlayerAutoBot(currentRoom.code, myPlayerId, false).catch(console.error)
    if (dieRenderer && currentRoom.gameState?.turnOrder[currentRoom.gameState.currentTurn] === myPlayerId) {
      dieRenderer.clickable = true
    }
  })
}

function bindCamToggle(): void {
  document.getElementById('btn-cam-toggle')?.addEventListener('click', () => {
    const next = !getCamFocus()
    localStorage.setItem(CAM_FOCUS_KEY, next ? 'true' : 'false')
    const btn = document.getElementById('btn-cam-toggle')
    if (btn) {
      btn.textContent = next ? 'CAM: FOLLOW' : 'CAM: FREE'
      btn.className = `cam-toggle ${next ? 'cam-on' : 'cam-off'}`
    }
    if (!next) stopFollowing(0)
  })
}

function updateHUD(room: Room): void {
  const gs = room.gameState
  if (!gs) return
  const pid = gs.turnOrder[gs.currentTurn]
  const { pathLen, colLen } = BOARD_PARAMS[room.boardType]
  const fin = pathLen + colLen

  document.querySelectorAll('.hud-player').forEach(el => {
    const hel = el as HTMLElement
    hel.classList.toggle('hud-player--active', gs.phase !== 'setup' && hel.dataset.pid === pid)
    const afkBadge = hel.querySelector('.hud-afk-badge')
    const p = room.players[hel.dataset.pid ?? '']
    if (p) {
      if (p.autoBot && !afkBadge) {
        const badge = document.createElement('span')
        badge.className = 'hud-bot-badge hud-afk-badge'
        badge.textContent = 'AFK'
        hel.appendChild(badge)
      } else if (!p.autoBot && afkBadge) {
        afkBadge.remove()
      }
    }
  })

  // ── Score + curse spans ───────────────────────────────────────
  for (const [spid, plyr] of Object.entries(room.players)) {
    const scoreEl = document.querySelector(`.hud-score[data-spid="${spid}"]`) as HTMLElement
    if (scoreEl) {
      if (gs.phase === 'setup') {
        const roll = gs.setupRolls?.[spid]
        scoreEl.style.color = ''
        if (roll !== undefined) {
          scoreEl.innerHTML = `<span style="color:#ffe066;font-weight:700">&#x1F3B2; ${roll}</span>`
        } else {
          scoreEl.innerHTML = `<span style="color:rgba(255,255,255,0.25)">&#x1F3B2; ?</span>`
        }
      } else {
        const pieces = gs.pieces[spid] ?? []
        const count  = pieces.filter(p => p.progress === fin).length
        const hex    = colorHex(plyr.color)
        scoreEl.innerHTML = Array.from({ length: 4 }, (_, i) =>
          `<span style="color:${i < count ? hex : 'rgba(255,255,255,0.2)'}">${i < count ? '●' : '○'}</span>`,
        ).join('')
      }
    }

    const curseEl = document.querySelector(`.hud-curse[data-cpid="${spid}"]`) as HTMLElement
    if (curseEl && gs.phase === 'setup') {
      const rolls = gs.setupRolls ?? {}
      const myRoll = rolls[spid]
      if (myRoll !== undefined) {
        const maxRoll = Math.max(...Object.values(rolls))
        curseEl.innerHTML = myRoll === maxRoll ? '<span title="Turn order leader">&#x1F451;</span>' : ''
      } else {
        curseEl.innerHTML = ''
      }
    } else if (curseEl) {
      const curseQueue = gs.pendingCurse?.[spid] ?? []
      const shackleCount = (gs.shackled?.[spid] ?? []).length
      const icons: string[] = []
      curseQueue.forEach((c, idx) => {
        const label = idx === 0 ? 'Next turn' : `+${idx + 1} turns`
        if (c === 'skip')    icons.push(`<span title="${label}: SKIP">⏭</span>`)
        if (c === 'reverse') icons.push(`<span title="${label}: REVERSE">↩</span>`)
        if (c === 'fumble')  icons.push(`<span title="${label}: FUMBLE">½</span>`)
      })
      if (shackleCount > 0) icons.push(`<span title="${shackleCount} piece${shackleCount > 1 ? 's' : ''} shackled this turn">&#x1F512;</span>`)
      curseEl.innerHTML = icons.join('')
    }
  }

  // ── AFK back button ──────────────────────────────────────────
  const afkBackBtn = document.getElementById('hud-afk-back') as HTMLElement | null
  if (afkBackBtn && myPlayerId) {
    afkBackBtn.style.display = room.players[myPlayerId]?.autoBot ? '' : 'none'
  }

  // ── Effects panel for local player ───────────────────────────
  const effectsEl = document.getElementById('hud-effects')
  if (effectsEl && myPlayerId && gs.phase !== 'setup') {
    const curseQueue = gs.pendingCurse?.[myPlayerId] ?? []
    const shackled   = gs.shackled?.[myPlayerId] ?? []
    const parts: string[] = []
    curseQueue.forEach((c, idx) => {
      const label = idx === 0 ? 'Next turn' : `In ${idx + 1} turns`
      if (c === 'skip')    parts.push(`<span class="effect-badge effect-skip">&#x23ED; ${label}: SKIP</span>`)
      if (c === 'reverse') parts.push(`<span class="effect-badge effect-reverse">&#x21A9; ${label}: REVERSE</span>`)
      if (c === 'fumble')  parts.push(`<span class="effect-badge effect-fumble">&#xBD; ${label}: roll halved</span>`)
    })
    shackled.forEach(pi => parts.push(`<span class="effect-badge effect-shackle">&#x1F512; Piece ${pi + 1} shackled this turn</span>`))
    effectsEl.innerHTML = parts.join('')
  } else if (effectsEl) {
    effectsEl.innerHTML = ''
  }

  const turnEl = document.getElementById('hud-turn-indicator')
  if (turnEl) {
    if (gs.phase === 'setup') {
      turnEl.textContent = 'Roll to set turn order'
    } else {
      turnEl.textContent = room.players[pid] ? `${room.players[pid].name}'s turn` : ''
    }
  }
}

function setStatusMsg(msg: string): void {
  const el = document.getElementById('hud-status')
  if (el) el.textContent = msg
}

// ── Render loop ───────────────────────────────────────────────

manager.start(() => {
  const delta = clock.getDelta()
  if (followTarget && getCamFocus()) manager.focusOn(followTarget.position.clone())
  manager.tick(delta)
  tickPieceAnims(delta)
  tickCaptureAnims(delta)
  tickEffects(delta, manager.scene)
  dieRenderer?.tick(delta)
  if (currentRoom?.gameState && pieceMeshes.length > 0) {
    reconcileMergedPieces(
      pieceMeshes, currentRoom.gameState, currentRoom.boardType,
      manager.scene, myColors, isCapturing,
    )
  }
})

// ── Entry ─────────────────────────────────────────────────────

showLobby({ onGameStart })

// ── Utils ─────────────────────────────────────────────────────

function escHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function colorHex(c: string): string {
  const map: Record<string, string> = {
    red: '#e74c3c', blue: '#3498db', green: '#2ecc71', yellow: '#f1c40f',
    purple: '#9b59b6', orange: '#e67e22', pink: '#e91e8c', cyan: '#1abc9c',
  }
  return map[c] ?? '#fff'
}

import { createRoom, joinRoom, startGame, subscribeRoom, leaveRoom } from '../room/roomService'
import { type Room, type GameMode, COLOR_HEX } from '../room/types'
import type { Unsubscribe } from 'firebase/firestore'

interface LobbyCallbacks {
  onGameStart: (room: Room, playerId: string) => void
}

let unsub: Unsubscribe | null = null
let currentCode: string | null = null
let currentPlayerId: string | null = null

export function showLobby(callbacks: LobbyCallbacks): void {
  document.getElementById('ui-overlay')!.innerHTML = renderLandingHTML()
  bindLanding(callbacks)
}

function renderLandingHTML(): string {
  return `
    <div class="lobby-screen">
      <div class="lobby-card">
        <h1 class="game-title">Ludo<span class="title-ex">EX</span></h1>
        <p class="game-subtitle">Classic Ludo. Reimagined.</p>
        <div class="lobby-actions">
          <button class="btn btn-primary" id="btn-create">Create Room</button>
          <button class="btn btn-secondary" id="btn-join">Join Room</button>
        </div>
      </div>
    </div>
  `
}

function bindLanding(callbacks: LobbyCallbacks): void {
  document.getElementById('btn-create')!.addEventListener('click', () => showCreateForm(callbacks))
  document.getElementById('btn-join')!.addEventListener('click', () => showJoinForm(callbacks))
}

function showCreateForm(callbacks: LobbyCallbacks): void {
  document.getElementById('ui-overlay')!.innerHTML = `
    <div class="lobby-screen">
      <div class="lobby-card">
        <h2>Create Room</h2>
        <div class="form-group">
          <label>Your name</label>
          <input id="input-name" class="input" type="text" maxlength="16" placeholder="Enter name" autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Game mode</label>
          <div class="mode-toggle">
            <button class="mode-btn active" data-mode="classic">Classic</button>
            <button class="mode-btn" data-mode="remix">Remix</button>
          </div>
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-back">Back</button>
          <button class="btn btn-primary" id="btn-confirm">Create</button>
        </div>
      </div>
    </div>
  `

  let selectedMode: GameMode = 'classic'
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      selectedMode = (btn as HTMLElement).dataset.mode as GameMode
    })
  })

  document.getElementById('btn-back')!.addEventListener('click', () => showLobby(callbacks))
  document.getElementById('btn-confirm')!.addEventListener('click', async () => {
    const name = (document.getElementById('input-name') as HTMLInputElement).value.trim()
    if (!name) return showError('Enter a name')
    try {
      setLoading(true)
      const { room, playerId } = await createRoom(name, selectedMode)
      currentCode = room.code
      currentPlayerId = playerId
      showWaitingRoom(room, playerId, callbacks)
    } catch (e) {
      showError((e as Error).message)
      setLoading(false)
    }
  })

  document.getElementById('input-name')!.focus()
}

function showJoinForm(callbacks: LobbyCallbacks): void {
  document.getElementById('ui-overlay')!.innerHTML = `
    <div class="lobby-screen">
      <div class="lobby-card">
        <h2>Join Room</h2>
        <div class="form-group">
          <label>Your name</label>
          <input id="input-name" class="input" type="text" maxlength="16" placeholder="Enter name" autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Room code</label>
          <input id="input-code" class="input input-code" type="text" maxlength="6" placeholder="ABC123" autocomplete="off" />
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-back">Back</button>
          <button class="btn btn-primary" id="btn-confirm">Join</button>
        </div>
      </div>
    </div>
  `

  document.getElementById('input-code')!.addEventListener('input', e => {
    const el = e.target as HTMLInputElement
    el.value = el.value.toUpperCase()
  })

  document.getElementById('btn-back')!.addEventListener('click', () => showLobby(callbacks))
  document.getElementById('btn-confirm')!.addEventListener('click', async () => {
    const name = (document.getElementById('input-name') as HTMLInputElement).value.trim()
    const code = (document.getElementById('input-code') as HTMLInputElement).value.trim()
    if (!name) return showError('Enter a name')
    if (code.length !== 6) return showError('Code must be 6 characters')
    try {
      setLoading(true)
      const { room, playerId } = await joinRoom(code, name)
      currentCode = room.code
      currentPlayerId = playerId
      showWaitingRoom(room, playerId, callbacks)
    } catch (e) {
      showError((e as Error).message)
      setLoading(false)
    }
  })

  document.getElementById('input-name')!.focus()
}

function showWaitingRoom(initialRoom: Room, playerId: string, callbacks: LobbyCallbacks): void {
  renderWaitingRoom(initialRoom, playerId, callbacks)

  if (unsub) unsub()
  unsub = subscribeRoom(initialRoom.code, room => {
    if (!room) return showLobby(callbacks)
    if (room.status === 'playing') {
      if (unsub) { unsub(); unsub = null }
      callbacks.onGameStart(room, playerId)
      return
    }
    renderWaitingRoom(room, playerId, callbacks)
  })

  window.addEventListener('beforeunload', handleUnload)
}

function renderWaitingRoom(room: Room, playerId: string, callbacks: LobbyCallbacks): void {
  const players = Object.values(room.players)
  const isHost = room.hostId === playerId
  const canStart = isHost && players.length >= 2

  document.getElementById('ui-overlay')!.innerHTML = `
    <div class="lobby-screen">
      <div class="lobby-card waiting-card">
        <div class="waiting-header">
          <h2>Room <span class="room-code">${room.code}</span></h2>
          <span class="mode-badge mode-${room.mode}">${room.mode}</span>
        </div>
        <p class="waiting-hint">Share the code with friends</p>
        <div class="player-list">
          ${players.map(p => `
            <div class="player-slot">
              <div class="player-color-dot" style="background:${COLOR_HEX[p.color]}"></div>
              <span class="player-name">${escapeHtml(p.name)}</span>
              ${p.isHost ? '<span class="host-badge">HOST</span>' : ''}
              ${p.id === playerId ? '<span class="you-badge">YOU</span>' : ''}
            </div>
          `).join('')}
          ${Array.from({ length: 8 - players.length }, (_, i) => `
            <div class="player-slot player-slot-empty">
              <div class="player-color-dot empty"></div>
              <span class="player-name-empty">Waiting${i === 0 && players.length < 8 ? '...' : ''}</span>
            </div>
          `).join('')}
        </div>
        <div id="form-error" class="form-error hidden"></div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="btn-leave">Leave</button>
          ${isHost ? `<button class="btn btn-primary" id="btn-start" ${canStart ? '' : 'disabled'}>
            ${canStart ? 'Start Game' : 'Need 2+ players'}
          </button>` : '<p class="waiting-for-host">Waiting for host to start...</p>'}
        </div>
      </div>
    </div>
  `

  document.getElementById('btn-leave')?.addEventListener('click', async () => {
    if (unsub) { unsub(); unsub = null }
    window.removeEventListener('beforeunload', handleUnload)
    await leaveRoom(room.code, playerId)
    showLobby(callbacks)
  })

  if (isHost) {
    document.getElementById('btn-start')?.addEventListener('click', async () => {
      try {
        await startGame(room.code, playerId)
      } catch (e) {
        showError((e as Error).message)
      }
    })
  }
}

function handleUnload(): void {
  if (currentCode && currentPlayerId) {
    leaveRoom(currentCode, currentPlayerId)
  }
}

function showError(msg: string): void {
  const el = document.getElementById('form-error')
  if (!el) return
  el.textContent = msg
  el.classList.remove('hidden')
}

function setLoading(on: boolean): void {
  const btn = document.getElementById('btn-confirm') as HTMLButtonElement | null
  if (btn) btn.disabled = on
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

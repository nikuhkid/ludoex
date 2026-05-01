import * as THREE from 'three'
import { showLobby } from './ui/lobby'
import { SceneManager } from './render/SceneManager'
import { buildStandardBoard, buildOctagonalBoard, highlightTile } from './render/BoardRenderer'
import { spawnPieces, tickPieceAnims } from './render/PieceRenderer'
import type { Room } from './room/types'
import './ui/lobby.css'
import './ui/hud.css'

// ── Scene (always running, even behind lobby) ─────────────────

const canvas  = document.getElementById('game-canvas') as HTMLCanvasElement
const manager = new SceneManager(canvas)
const clock   = new THREE.Clock()

// Raycaster for hover/click
const raycaster = new THREE.Raycaster()
const mouse     = new THREE.Vector2()
let boardGroup: THREE.Group | null = null

function onMouseMove(e: MouseEvent) {
  if (!boardGroup) return
  mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, manager.camera)
  const hits = raycaster.intersectObject(boardGroup, true)
  highlightTile(hits.length > 0 ? (hits[0].object as THREE.Mesh) : null)
}
canvas.addEventListener('mousemove', onMouseMove)

// ── Game start ────────────────────────────────────────────────

function onGameStart(room: Room, _playerId: string): void {
  const overlay = document.getElementById('ui-overlay')!
  overlay.style.pointerEvents = 'none'   // allow mouse events through to canvas
  overlay.innerHTML = buildHUD(room)

  const players = Object.values(room.players).map(p => p.color)

  // Clear any previous board
  if (boardGroup) manager.scene.remove(boardGroup)

  boardGroup = room.boardType === 'standard'
    ? buildStandardBoard(manager.scene, players, room.mode)
    : buildOctagonalBoard(manager.scene, players, room.mode)

  spawnPieces(manager.scene, players, room.boardType)
}

function buildHUD(room: Room): string {
  const players = Object.values(room.players)
  return `
    <div id="hud">
      <div id="hud-info">
        <span class="hud-code">${room.code}</span>
        <span class="hud-mode mode-${room.mode}">${room.mode}</span>
      </div>
      <div id="hud-players">
        ${players.map(p => `
          <div class="hud-player">
            <div class="hud-dot" style="background:${colorHex(p.color)}"></div>
            <span>${escHtml(p.name)}</span>
          </div>
        `).join('')}
      </div>
      <div id="hud-hint">Game logic coming in Phase 4</div>
    </div>
  `
}

// ── Render loop ───────────────────────────────────────────────

manager.start(() => {
  const delta = clock.getDelta()
  tickPieceAnims(delta)
})

// ── Entry ────────────────────────────────────────────────────

showLobby({ onGameStart })

// ── Utils ────────────────────────────────────────────────────

function escHtml(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

function colorHex(c: string): string {
  const map: Record<string,string> = {
    red:'#e74c3c',blue:'#3498db',green:'#2ecc71',yellow:'#f1c40f',
    purple:'#9b59b6',orange:'#e67e22',pink:'#e91e8c',cyan:'#1abc9c',
  }
  return map[c] ?? '#fff'
}

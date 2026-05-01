import * as THREE from 'three'
import { showLobby } from './ui/lobby'
import type { Room } from './room/types'
import './ui/lobby.css'

// ── Renderer ──────────────────────────────────────────────
const canvas = document.getElementById('game-canvas') as HTMLCanvasElement

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.2

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x0a0a0f)
scene.fog = new THREE.Fog(0x0a0a0f, 20, 60)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 14, 0)
camera.lookAt(0, 0, 0)

// ── Placeholder scene (replaced in Phase 3) ───────────────
const boardGeo = new THREE.PlaneGeometry(10, 10)
const boardMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e })
const board = new THREE.Mesh(boardGeo, boardMat)
board.rotation.x = -Math.PI / 2
board.receiveShadow = true
scene.add(board)

const cubeGeo = new THREE.BoxGeometry(1, 1, 1)
const cubeMat = new THREE.MeshStandardMaterial({ color: 0x7c6af7, metalness: 0.3, roughness: 0.4 })
const cube = new THREE.Mesh(cubeGeo, cubeMat)
cube.position.y = 0.5
cube.castShadow = true
scene.add(cube)

// ── Lighting ──────────────────────────────────────────────
const ambient = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambient)

const sun = new THREE.DirectionalLight(0xfff5e0, 1.5)
sun.position.set(6, 12, 6)
sun.castShadow = true
sun.shadow.mapSize.set(2048, 2048)
sun.shadow.camera.near = 0.1
sun.shadow.camera.far = 50
sun.shadow.camera.left = -15
sun.shadow.camera.right = 15
sun.shadow.camera.top = 15
sun.shadow.camera.bottom = -15
scene.add(sun)

const fill = new THREE.DirectionalLight(0xa0c4ff, 0.4)
fill.position.set(-4, 6, -4)
scene.add(fill)

// ── Resize ────────────────────────────────────────────────
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// ── Render loop ───────────────────────────────────────────
const clock = new THREE.Clock()

function tick() {
  const t = clock.getElapsedTime()
  cube.rotation.x = t * 0.4
  cube.rotation.y = t * 0.7
  renderer.render(scene, camera)
  requestAnimationFrame(tick)
}

tick()

// ── App entry ─────────────────────────────────────────────
function onGameStart(room: Room, playerId: string): void {
  // Phase 3: board renders here
  console.log('Game starting', room.code, playerId, room.boardType)
}

showLobby({ onGameStart })

import * as THREE from 'three'

// Face layout for a BoxGeometry: +X=0, -X=1, +Y=2, -Y=3, +Z=4, -Z=5
// We want: right(+X)=1, left(-X)=6, top(+Y)=2, bottom(-Y)=5, front(+Z)=3, back(-Z)=4
const FACE_VALUES = [1, 6, 2, 5, 3, 4]

function makePipCanvas(value: number): HTMLCanvasElement {
  const SIZE = 128
  const c = document.createElement('canvas')
  c.width = c.height = SIZE
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#f5f5f0'
  ctx.fillRect(0, 0, SIZE, SIZE)

  // Pip positions per face value
  const pip_positions: [number, number][][] = [
    [],
    [[0.5, 0.5]],
    [[0.25, 0.25], [0.75, 0.75]],
    [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]],
    [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]],
    [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]],
    [[0.25, 0.2], [0.75, 0.2], [0.25, 0.5], [0.75, 0.5], [0.25, 0.8], [0.75, 0.8]],
  ]

  ctx.fillStyle = value === 1 ? '#c0392b' : '#1a1a2e'
  const R = SIZE * 0.08
  for (const [fx, fy] of pip_positions[value]) {
    ctx.beginPath()
    ctx.arc(fx * SIZE, fy * SIZE, R, 0, Math.PI * 2)
    ctx.fill()
  }
  return c
}

function makeFaceMaterials(): THREE.MeshStandardMaterial[] {
  return FACE_VALUES.map(v => {
    const tex = new THREE.CanvasTexture(makePipCanvas(v))
    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.3,
      metalness: 0.1,
    })
  })
}

// ── Rotation to show face on top (+Y) ────────────────────────
// BoxGeometry face order: +X -X +Y -Y +Z -Z
// We want face with value V to be on top (+Y face = index 2).
// Precomputed quaternions: rotate so that each original face ends up on +Y.
// Face 0 (+X) on top: rotate -90° around Z
// Face 1 (-X) on top: rotate +90° around Z
// Face 2 (+Y) on top: no rotation
// Face 3 (-Y) on top: rotate 180° around X
// Face 4 (+Z) on top: rotate +90° around X
// Face 5 (-Z) on top: rotate -90° around X

const FACE_UP_QUATS: THREE.Quaternion[] = [
  new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0,  Math.PI / 2)),  // face 0 (+X) → top
  new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -Math.PI / 2)),  // face 1 (-X) → top
  new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)),              // face 2 → top
  new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI, 0, 0)),        // face 3 → top
  new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)),   // face 4 → top
  new THREE.Quaternion().setFromEuler(new THREE.Euler( Math.PI / 2, 0, 0)),   // face 5 → top
]

// value → which face index in FACE_VALUES array shows that value
function faceIndexForValue(v: number): number {
  return FACE_VALUES.indexOf(v)
}

export class DieRenderer {
  mesh: THREE.Mesh
  private rolling = false
  private rollDuration = 0.7  // seconds
  private rollElapsed = 0
  private rollStart = new THREE.Quaternion()
  private rollTarget = new THREE.Quaternion()
  private onRollDone: ((value: number) => void) | null = null
  private pendingValue = 1
  clickable = true

  constructor(scene: THREE.Scene) {
    const geo  = new THREE.BoxGeometry(0.9, 0.9, 0.9)
    const mats = makeFaceMaterials()
    this.mesh = new THREE.Mesh(geo, mats)
    this.mesh.position.set(0, 2.5, 0)
    this.mesh.castShadow = true
    this.mesh.userData.type = 'die'
    scene.add(this.mesh)
  }

  roll(onDone: (value: number) => void): void {
    if (this.rolling) return
    const value = Math.floor(Math.random() * 6) + 1
    this.pendingValue = value

    // Random spin start
    this.rollStart.copy(this.mesh.quaternion)
    // Random intermediate rotation for animation
    const spin = new THREE.Quaternion()
    spin.setFromEuler(new THREE.Euler(
      Math.random() * Math.PI * 4,
      Math.random() * Math.PI * 4,
      Math.random() * Math.PI * 4,
    ))
    // Target: correct face up
    const faceIdx = faceIndexForValue(value)
    this.rollTarget.copy(FACE_UP_QUATS[faceIdx]).premultiply(spin).normalize()
    // Actually just go to the face-up orientation directly with some wobble
    this.rollTarget.copy(FACE_UP_QUATS[faceIdx])

    this.rolling = true
    this.rollElapsed = 0
    this.onRollDone = onDone
    this.clickable = false
  }

  tick(delta: number): void {
    if (!this.rolling) return
    this.rollElapsed += delta
    const t = Math.min(this.rollElapsed / this.rollDuration, 1)

    // Bounce easing + spin
    const spinQ = new THREE.Quaternion()
    spinQ.setFromEuler(new THREE.Euler(
      t * Math.PI * 6,
      t * Math.PI * 4,
      0,
    ))
    const faceIdx = faceIndexForValue(this.pendingValue)
    const target = FACE_UP_QUATS[faceIdx].clone().premultiply(spinQ)

    if (t < 1) {
      this.mesh.quaternion.slerpQuaternions(this.rollStart, target, t)
    } else {
      this.mesh.quaternion.copy(FACE_UP_QUATS[faceIdx])
      this.rolling = false
      this.clickable = true
      this.onRollDone?.(this.pendingValue)
      this.onRollDone = null
    }
  }

  remove(scene: THREE.Scene): void {
    scene.remove(this.mesh)
  }
}

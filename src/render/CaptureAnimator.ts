import * as THREE from 'three'
import type { PieceMesh } from './PieceRenderer'

interface CaptureAnim {
  elapsed: number
  duration: number
  tick: (t: number, delta: number) => void
  onEnd: () => void
}

const active: CaptureAnim[] = []
const capturingSet = new WeakSet<PieceMesh>()

export function isCapturing(piece: PieceMesh): boolean {
  return capturingSet.has(piece)
}

export function tickCaptureAnims(delta: number): void {
  for (let i = active.length - 1; i >= 0; i--) {
    const a = active[i]
    a.elapsed += delta
    const t = Math.min(a.elapsed / a.duration, 1)
    a.tick(t, delta)
    if (t >= 1) {
      a.onEnd()
      active.splice(i, 1)
    }
  }
}

export function clearAllCaptureAnims(): void {
  active.length = 0
}

export function playCaptureAnimation(
  piece: PieceMesh,
  scene: THREE.Scene,
  onDone: () => void,
): void {
  if (capturingSet.has(piece)) return
  capturingSet.add(piece)
  const wrapped = () => { capturingSet.delete(piece); onDone() }
  const roll = Math.floor(Math.random() * 3)
  if (roll === 0) animPuff(piece, wrapped)
  else if (roll === 1) animTumble(piece, wrapped)
  else animThanos(piece, scene, wrapped)
}

// ── 1. Puff ───────────────────────────────────────────────────
// Squash flat like something heavy landed on the piece, then pops to nothing.

function animPuff(piece: PieceMesh, onDone: () => void): void {
  const g     = piece.group
  const origY = g.position.y

  active.push({
    elapsed: 0,
    duration: 0.42,
    tick(t) {
      if (t < 0.45) {
        const s = t / 0.45
        // Squash: flatten Y, bulge XZ — cartoon impact
        g.scale.set(1 + s * 0.9, 1 - s * 0.88, 1 + s * 0.9)
        g.position.y = origY - s * 0.06
      } else {
        // Shrink to nothing, float up slightly
        const s = 1 - (t - 0.45) / 0.55
        g.scale.setScalar(s * 0.6)
        g.position.y = origY + (1 - s) * 0.35
      }
    },
    onEnd() {
      g.scale.set(1, 1, 1)
      g.position.y = origY
      onDone()
    },
  })
}

// ── 2. Chess tumble / disassemble ────────────────────────────
// Piece tips over dramatically, then parts scatter and fade.

function animTumble(piece: PieceMesh, onDone: () => void): void {
  const g       = piece.group
  const origRotX = g.rotation.x
  const origRotZ = g.rotation.z
  const origY    = g.position.y
  const tipDir   = Math.random() > 0.5 ? 1 : -1

  // Snapshot child state + assign scatter velocities
  const parts = g.children.map(child => ({
    obj:     child,
    origPos: child.position.clone(),
    origRot: child.rotation.clone(),
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 3 + 0.5,
    vz: (Math.random() - 0.5) * 5,
    vrx: (Math.random() - 0.5) * 14,
    vrz: (Math.random() - 0.5) * 14,
  }))

  // Enable transparency
  setGroupOpacity(g, 1, true)

  active.push({
    elapsed: 0,
    duration: 0.85,
    tick(t, delta) {
      if (t < 0.28) {
        // Tip over — rapid rotation
        const s = t / 0.28
        g.rotation.x = origRotX + tipDir * easeIn(s) * Math.PI * 0.45
        g.rotation.z = origRotZ + tipDir * easeIn(s) * Math.PI * 0.15
        g.position.y = origY + easeIn(s) * 0.1
      } else {
        // Parts scatter with gravity
        const GRAVITY = 14
        parts.forEach(p => {
          p.obj.position.x += p.vx * delta
          p.obj.position.y += p.vy * delta
          p.obj.position.z += p.vz * delta
          p.vy -= GRAVITY * delta
          p.obj.rotation.x += p.vrx * delta
          p.obj.rotation.z += p.vrz * delta
        })
        const fadeT = (t - 0.28) / 0.72
        setGroupOpacity(g, 1 - fadeT, true)
      }
    },
    onEnd() {
      parts.forEach(p => {
        p.obj.position.copy(p.origPos)
        p.obj.rotation.copy(p.origRot)
      })
      g.rotation.x = origRotX
      g.rotation.z = origRotZ
      g.position.y = origY
      setGroupOpacity(g, 1, false)
      onDone()
    },
  })
}

// ── 3. Thanos snap / disintegration ──────────────────────────
// A golden snap ring flares at the piece, then it crumbles to dust.

function animThanos(piece: PieceMesh, scene: THREE.Scene, onDone: () => void): void {
  const g       = piece.group
  const basePos = g.position.clone()

  // Snap ring
  const ringGeo = new THREE.TorusGeometry(0.42, 0.045, 8, 32)
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: new THREE.Color(0xffd700),
    emissiveIntensity: 2.5,
    transparent: true,
    opacity: 1,
  })
  const snapRing = new THREE.Mesh(ringGeo, ringMat)
  snapRing.position.set(basePos.x, basePos.y + 0.3, basePos.z)
  scene.add(snapRing)

  // Piece color for particle tint
  const pieceColor = getMeshColor(g)

  // Dust particles
  const COUNT = 30
  const pGeo = new THREE.BoxGeometry(0.075, 0.075, 0.075)
  const pts: { mesh: THREE.Mesh; vel: THREE.Vector3; rotV: THREE.Vector3 }[] = []

  for (let i = 0; i < COUNT; i++) {
    const pMat = new THREE.MeshStandardMaterial({
      color:             i % 2 === 0 ? pieceColor : new THREE.Color(0xffd700),
      emissive:          i % 2 === 0 ? pieceColor.clone().multiplyScalar(0.4) : new THREE.Color(0xaa7700),
      emissiveIntensity: 0.6,
      transparent:       true,
      opacity:           1,
    })
    const p = new THREE.Mesh(pGeo, pMat)
    p.position.set(
      basePos.x + (Math.random() - 0.5) * 0.5,
      basePos.y + Math.random() * 0.55,
      basePos.z + (Math.random() - 0.5) * 0.5,
    )
    scene.add(p)

    const theta = Math.random() * Math.PI * 2
    const phi   = Math.acos(2 * Math.random() - 1)
    const spd   = Math.random() * 4 + 2
    pts.push({
      mesh: p,
      vel:  new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * spd,
        Math.abs(Math.cos(phi)) * spd * 0.6 + 1.5,
        Math.sin(phi) * Math.sin(theta) * spd,
      ),
      rotV: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
      ),
    })
  }

  setGroupOpacity(g, 1, true)

  active.push({
    elapsed: 0,
    duration: 0.95,
    tick(t, delta) {
      // Ring: expand + fade in first 0.3s
      snapRing.scale.setScalar(1 + t * 2.5)
      snapRing.rotation.y += delta * 5
      ringMat.opacity = Math.max(0, 1 - t / 0.3)

      // Particles: fly + gravity + fade
      const GRAVITY = 9
      pts.forEach(({ mesh: p, vel, rotV }) => {
        p.position.addScaledVector(vel, delta)
        vel.y -= GRAVITY * delta
        p.rotation.x += rotV.x * delta
        p.rotation.y += rotV.y * delta
        p.rotation.z += rotV.z * delta
        ;(p.material as THREE.MeshStandardMaterial).opacity = Math.max(0, 1 - t * 1.15)
      })

      // Piece: hold solid briefly, then dissolve
      const pieceOp = t < 0.18 ? 1 : Math.max(0, 1 - (t - 0.18) / 0.82)
      setGroupOpacity(g, pieceOp, true)
    },
    onEnd() {
      scene.remove(snapRing)
      ringGeo.dispose()
      ringMat.dispose()
      pts.forEach(({ mesh: p }) => {
        scene.remove(p)
        p.geometry.dispose()
        ;(p.material as THREE.MeshStandardMaterial).dispose()
      })
      setGroupOpacity(g, 1, false)
      onDone()
    },
  })
}

// ── Helpers ───────────────────────────────────────────────────

function setGroupOpacity(g: THREE.Group, opacity: number, transparent: boolean): void {
  g.traverse(obj => {
    const mesh = obj as THREE.Mesh
    if (!mesh.isMesh) return
    const m = mesh.material as THREE.MeshStandardMaterial
    m.transparent = transparent
    m.opacity = opacity
  })
}

function getMeshColor(g: THREE.Group): THREE.Color {
  for (const child of g.children) {
    const mesh = child as THREE.Mesh
    if (mesh.isMesh) {
      return (mesh.material as THREE.MeshStandardMaterial).color.clone()
    }
  }
  return new THREE.Color(0xffffff)
}

function easeIn(t: number): number {
  return t * t
}

import * as THREE from 'three'
import { COLOR_HEX, type PlayerColor } from '../room/types'
import type { GameState } from '../room/types'
import {
  STANDARD_BASE_TILES, STANDARD_MAIN_PATH, STANDARD_HOME_COLS,
  genOctBase, genOctPath, genOctHomeCol, OCT_COLOR_ORDER,
} from '../game/boardData'
import { BOARD_PARAMS } from '../game/gameLogic'
import type { BoardType } from '../room/types'

const HALF = 7

// ── Solo piece geometries ─────────────────────────────────────
const BODY_GEO = new THREE.CylinderGeometry(0.18, 0.22, 0.38, 20)
const HEAD_GEO = new THREE.SphereGeometry(0.16, 16, 12)
const RING_GEO = new THREE.TorusGeometry(0.18, 0.03, 8, 20)

// ── Merged (double) piece geometries ─────────────────────────
const M_BODY_GEO = new THREE.CylinderGeometry(0.25, 0.30, 0.34, 20)   // stockier
const M_HEAD_GEO = new THREE.SphereGeometry(0.155, 14, 10)             // same size, two of them
const M_RING_GEO = new THREE.TorusGeometry(0.26, 0.04, 8, 22)          // wider ring

export interface PieceMesh {
  group: THREE.Group
  color: PlayerColor
  pieceIndex: number
}

function makeMat(color: THREE.Color, opts: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, ...opts })
}

function buildPieceMesh(color: PlayerColor): THREE.Group {
  const col     = new THREE.Color(COLOR_HEX[color])
  const darkCol = col.clone().multiplyScalar(0.5)

  const mat     = makeMat(col,     { metalness: 0.4, roughness: 0.3 })
  const darkMat = makeMat(darkCol, { metalness: 0.5, roughness: 0.2 })
  const ringMat = makeMat(new THREE.Color(0xffd700), { metalness: 0.8, roughness: 0.2 })

  const group = new THREE.Group()

  const body = new THREE.Mesh(BODY_GEO, mat)
  body.position.y = 0.19
  body.castShadow = true
  group.add(body)

  const head = new THREE.Mesh(HEAD_GEO, darkMat)
  head.position.y = 0.48
  head.castShadow = true
  group.add(head)

  const ring = new THREE.Mesh(RING_GEO, ringMat)
  ring.position.y = 0.28
  ring.rotation.x = Math.PI / 2
  group.add(ring)

  return group
}

function buildMergedPieceMesh(color: PlayerColor): THREE.Group {
  const col     = new THREE.Color(COLOR_HEX[color])
  const darkCol = col.clone().multiplyScalar(0.5)

  const mat     = makeMat(col,     { metalness: 0.45, roughness: 0.28 })
  const darkMat = makeMat(darkCol, { metalness: 0.55, roughness: 0.18 })
  const ringMat = makeMat(new THREE.Color(0xffd700), { metalness: 0.85, roughness: 0.15 })

  const group = new THREE.Group()

  // Wider body
  const body = new THREE.Mesh(M_BODY_GEO, mat)
  body.position.y = 0.17
  body.castShadow = true
  group.add(body)

  // Two heads side by side
  const headL = new THREE.Mesh(M_HEAD_GEO, darkMat)
  headL.position.set(-0.15, 0.50, 0)
  headL.castShadow = true
  group.add(headL)

  const headR = new THREE.Mesh(M_HEAD_GEO, darkMat)
  headR.position.set(0.15, 0.50, 0)
  headR.castShadow = true
  group.add(headR)

  // Wide ring
  const ring = new THREE.Mesh(M_RING_GEO, ringMat)
  ring.position.y = 0.26
  ring.rotation.x = Math.PI / 2
  group.add(ring)

  return group
}

// ── Spawn ─────────────────────────────────────────────────────

export function spawnPieces(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  boardType: BoardType,
): PieceMesh[] {
  const pieces: PieceMesh[] = []

  playerColors.forEach(color => {
    const baseTiles = boardType === 'standard'
      ? STANDARD_BASE_TILES[color] ?? []
      : genOctBase(OCT_COLOR_ORDER.indexOf(color))

    baseTiles.forEach((pos, pieceIndex) => {
      const [x, z] = boardType === 'standard'
        ? [pos[0] - HALF, pos[1] - HALF]
        : pos

      const group = buildPieceMesh(color)
      group.position.set(x, 0, z)
      group.userData = { color, pieceIndex, state: 'base', pathIndex: -1, homeColIndex: -1 }
      scene.add(group)

      pieces.push({ group, color, pieceIndex })
    })
  })

  return pieces
}

// ── Animation ─────────────────────────────────────────────────

const LIFT_HEIGHT = 1.2
const ANIM_SPEED  = 3.5

interface AnimTarget {
  piece: PieceMesh
  target: THREE.Vector3
  initialDist: number
  onDone?: () => void
}

const activeAnims: AnimTarget[] = []

export function movePiece(
  piece: PieceMesh,
  boardType: BoardType,
  destination: { type: 'base' | 'path' | 'home-col' | 'finished'; index: number },
  onDone?: () => void,
): void {
  const pos = resolvePosition(piece.color, boardType, destination)
  if (!pos) return

  const target = new THREE.Vector3(pos[0], 0, pos[1])

  if (activeAnims.some(a => a.piece === piece)) return

  const dx = pos[0] - piece.group.position.x
  const dz = pos[1] - piece.group.position.z
  const initialDist = Math.sqrt(dx * dx + dz * dz)
  if (initialDist < 0.02) {
    piece.group.position.copy(target)
    onDone?.()
    return
  }

  activeAnims.push({ piece, target, initialDist, onDone })
  piece.group.userData = {
    ...piece.group.userData,
    state: destination.type,
    pathIndex:    destination.type === 'path'     ? destination.index : -1,
    homeColIndex: destination.type === 'home-col' ? destination.index : -1,
  }
}

export function tickPieceAnims(delta: number): void {
  for (let i = activeAnims.length - 1; i >= 0; i--) {
    const anim = activeAnims[i]
    const cur  = anim.piece.group.position

    const dxz = Math.sqrt(
      (cur.x - anim.target.x) ** 2 + (cur.z - anim.target.z) ** 2,
    )

    if (dxz < 0.02) {
      cur.copy(anim.target)
      anim.onDone?.()
      activeAnims.splice(i, 1)
      continue
    }

    const t    = anim.initialDist > 0 ? 1 - dxz / anim.initialDist : 1
    const lift = Math.sin(Math.max(0, Math.min(t, 1)) * Math.PI) * LIFT_HEIGHT
    cur.lerp(anim.target, Math.min(ANIM_SPEED * delta / dxz, 1))
    cur.y = lift
  }
}

export function isAnimatingPiece(piece: PieceMesh): boolean {
  return activeAnims.some(a => a.piece === piece)
}

export function clearAllAnims(): void {
  activeAnims.length = 0
}

// ── Merged piece reconciliation ───────────────────────────────

interface MergeEntry {
  group: THREE.Group
  color: PlayerColor
  indices: [number, number]
}

// key: "${color}-${pi}-${pj}"  (pi < pj always)
const activeMerges = new Map<string, MergeEntry>()

function mergeKey(color: PlayerColor, i: number, j: number): string {
  const [lo, hi] = i < j ? [i, j] : [j, i]
  return `${color}-${lo}-${hi}`
}

export function reconcileMergedPieces(
  pieceMeshes: PieceMesh[],
  gs: GameState,
  boardType: BoardType,
  scene: THREE.Scene,
  myColors: Record<string, string>,
  isCapturingFn: (piece: PieceMesh) => boolean,
): void {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin = pathLen + colLen

  // Build desired merge set from game state
  const desired = new Map<string, { color: PlayerColor; i: number; j: number }>()

  for (const [playerId, pieces] of Object.entries(gs.pieces)) {
    const color = myColors[playerId] as PlayerColor
    if (!color) continue
    const byProgress = new Map<number, number[]>()
    pieces.forEach((p, pi) => {
      if (p.progress < 0 || p.progress >= fin) return
      if (!byProgress.has(p.progress)) byProgress.set(p.progress, [])
      byProgress.get(p.progress)!.push(pi)
    })
    for (const indices of byProgress.values()) {
      if (indices.length === 2) {
        const [i, j] = indices[0] < indices[1] ? [indices[0], indices[1]] : [indices[1], indices[0]]
        const key = mergeKey(color, i, j)
        desired.set(key, { color, i, j })
      }
    }
  }

  // Remove stale merges
  for (const [key, entry] of activeMerges) {
    if (!desired.has(key)) {
      scene.remove(entry.group)
      activeMerges.delete(key)
      pieceMeshes
        .filter(pm => pm.color === entry.color && entry.indices.includes(pm.pieceIndex))
        .forEach(pm => { pm.group.visible = true })
    }
  }

  // Create new merges
  for (const [key, { color, i, j }] of desired) {
    if (activeMerges.has(key)) continue

    const pmI = pieceMeshes.find(pm => pm.color === color && pm.pieceIndex === i)
    const pmJ = pieceMeshes.find(pm => pm.color === color && pm.pieceIndex === j)
    if (!pmI || !pmJ) continue
    if (isAnimatingPiece(pmI) || isAnimatingPiece(pmJ)) continue
    if (isCapturingFn(pmI) || isCapturingFn(pmJ)) continue

    const mergedGroup = buildMergedPieceMesh(color)
    mergedGroup.position.copy(pmI.group.position)
    mergedGroup.userData = {
      type: 'piece',
      merged: true,
      color,
      pieceIndices: [i, j],
    }
    scene.add(mergedGroup)
    activeMerges.set(key, { group: mergedGroup, color, indices: [i, j] })

    pmI.group.visible = false
    pmJ.group.visible = false
  }
}

// Immediately un-merge a pair (called before animating the chosen piece)
export function unmergeByIndices(
  pieceMeshes: PieceMesh[],
  color: PlayerColor,
  indices: [number, number],
  scene: THREE.Scene,
): void {
  const key = mergeKey(color, indices[0], indices[1])
  const entry = activeMerges.get(key)
  if (!entry) return
  scene.remove(entry.group)
  activeMerges.delete(key)
  pieceMeshes
    .filter(pm => pm.color === color && indices.includes(pm.pieceIndex))
    .forEach(pm => { pm.group.visible = true })
}

// Get merged group for a given piece (if it's currently merged)
export function getMergedGroupForPiece(
  color: PlayerColor,
  pieceIndex: number,
): THREE.Group | null {
  for (const entry of activeMerges.values()) {
    if (entry.color === color && entry.indices.includes(pieceIndex)) return entry.group
  }
  return null
}

export function getActiveMergedGroups(): THREE.Group[] {
  return Array.from(activeMerges.values()).map(e => e.group)
}

export function unmergeIfMerged(
  pieceMeshes: PieceMesh[],
  color: PlayerColor,
  pieceIndex: number,
  scene: THREE.Scene,
): void {
  for (const [key, entry] of activeMerges) {
    if (entry.color === color && entry.indices.includes(pieceIndex)) {
      scene.remove(entry.group)
      activeMerges.delete(key)
      pieceMeshes
        .filter(pm => pm.color === color && entry.indices.includes(pm.pieceIndex))
        .forEach(pm => { pm.group.visible = true })
      return
    }
  }
}

export function clearAllMerges(scene: THREE.Scene, pieceMeshes: PieceMesh[]): void {
  for (const entry of activeMerges.values()) {
    scene.remove(entry.group)
    pieceMeshes
      .filter(pm => pm.color === entry.color && entry.indices.includes(pm.pieceIndex))
      .forEach(pm => { pm.group.visible = true })
  }
  activeMerges.clear()
}

// ── Position resolver (exported for camera focus) ─────────────

export function resolvePosition(
  color: PlayerColor,
  boardType: BoardType,
  dest: { type: string; index: number },
): [number, number] | null {
  if (dest.type === 'finished') {
    const a = (dest.index / 4) * Math.PI * 2
    return [Math.cos(a) * 0.18, Math.sin(a) * 0.18]
  }
  if (boardType === 'standard') {
    if (dest.type === 'base') {
      const t = STANDARD_BASE_TILES[color]?.[dest.index]
      return t ? [t[0] - HALF, t[1] - HALF] : null
    }
    if (dest.type === 'path') {
      const t = STANDARD_MAIN_PATH[dest.index]
      return t ? [t[0] - HALF, t[1] - HALF] : null
    }
    if (dest.type === 'home-col') {
      const t = STANDARD_HOME_COLS[color]?.[dest.index]
      return t ? [t[0] - HALF, t[1] - HALF] : null
    }
  } else {
    const sideIndex = OCT_COLOR_ORDER.indexOf(color)
    if (dest.type === 'base')     return genOctBase(sideIndex)[dest.index] ?? null
    if (dest.type === 'path')     return genOctPath()[dest.index] ?? null
    if (dest.type === 'home-col') return genOctHomeCol(sideIndex)[dest.index] ?? null
  }
  return null
}

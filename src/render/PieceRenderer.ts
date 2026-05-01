import * as THREE from 'three'
import { COLOR_HEX, type PlayerColor } from '../room/types'
import {
  STANDARD_BASE_TILES, STANDARD_MAIN_PATH, STANDARD_HOME_COLS,
  genOctBase, genOctPath, genOctHomeCol, OCT_COLOR_ORDER,
} from '../game/boardData'
import type { BoardType } from '../room/types'

const HALF = 7  // centers a 15×15 grid

const BODY_GEO = new THREE.CylinderGeometry(0.18, 0.22, 0.38, 20)
const HEAD_GEO = new THREE.SphereGeometry(0.16, 16, 12)
const RING_GEO = new THREE.TorusGeometry(0.18, 0.03, 8, 20)

export interface PieceMesh {
  group: THREE.Group
  color: PlayerColor
  pieceIndex: number // 0-3 within this player's 4 pieces
}

function buildPieceMesh(color: PlayerColor): THREE.Group {
  const hex = COLOR_HEX[color]
  const col = new THREE.Color(hex)
  const darkCol = col.clone().multiplyScalar(0.5)

  const mat = new THREE.MeshStandardMaterial({
    color: col,
    metalness: 0.4,
    roughness: 0.3,
  })
  const darkMat = new THREE.MeshStandardMaterial({
    color: darkCol,
    metalness: 0.5,
    roughness: 0.2,
  })
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.8,
    roughness: 0.2,
  })

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

// ── Piece movement (immediate + animated) ────────────────────

const LIFT_HEIGHT = 1.2
const ANIM_SPEED  = 3.5  // units/sec

export interface AnimTarget {
  piece: PieceMesh
  target: THREE.Vector3
  onDone?: () => void
}

const activeAnims: AnimTarget[] = []

export function movePiece(
  piece: PieceMesh,
  boardType: BoardType,
  destination: { type: 'base' | 'path' | 'home-col', index: number },
  onDone?: () => void,
): void {
  const pos = resolvePosition(piece.color, boardType, destination)
  if (!pos) return

  const target = new THREE.Vector3(pos[0], 0, pos[1])
  activeAnims.push({ piece, target, onDone })
  piece.group.userData = {
    ...piece.group.userData,
    state: destination.type,
    pathIndex: destination.type === 'path' ? destination.index : -1,
    homeColIndex: destination.type === 'home-col' ? destination.index : -1,
  }
}

export function tickPieceAnims(delta: number): void {
  for (let i = activeAnims.length - 1; i >= 0; i--) {
    const anim = activeAnims[i]
    const cur  = anim.piece.group.position
    const dist = cur.distanceTo(anim.target)

    if (dist < 0.02) {
      cur.copy(anim.target)
      anim.onDone?.()
      activeAnims.splice(i, 1)
      continue
    }

    // Arc: lift piece mid-travel
    const progress = 1 - dist / cur.distanceTo(anim.target.clone().addScalar(0.001))
    const lift = Math.sin(Math.min(progress * Math.PI, Math.PI)) * LIFT_HEIGHT
    cur.lerp(anim.target, Math.min(ANIM_SPEED * delta / dist, 1))
    cur.y = lift
  }
}

function resolvePosition(
  color: PlayerColor,
  boardType: BoardType,
  dest: { type: string; index: number },
): [number, number] | null {
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
    if (dest.type === 'base') {
      return genOctBase(sideIndex)[dest.index] ?? null
    }
    if (dest.type === 'path') {
      return genOctPath()[dest.index] ?? null
    }
    if (dest.type === 'home-col') {
      return genOctHomeCol(sideIndex)[dest.index] ?? null
    }
  }
  return null
}

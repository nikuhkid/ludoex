import * as THREE from 'three'
import {
  STANDARD_MAIN_PATH, STANDARD_HOME_COLS, STANDARD_CENTER,
  STANDARD_BASE_TILES, STANDARD_SAFE_INDICES, STANDARD_STAR_INDICES,
  STANDARD_SKULL_INDICES, STANDARD_COLORS,
  genOctPath, genOctHomeCol, genOctBase, OCT_COLOR_ORDER,
  OCT_SAFE_INDICES, OCT_STAR_INDICES, OCT_SKULL_INDICES,
} from '../game/boardData'
import { COLOR_HEX, type PlayerColor } from '../room/types'
import type { GameMode } from '../room/types'

const TILE_W  = 0.92
const TILE_H  = 0.09
const HALF    = 15 / 2 - 0.5  // 7  → centers a 15×15 grid at origin

// Shared geometries / materials reused across all tiles
const TILE_GEO    = new THREE.BoxGeometry(TILE_W, TILE_H, TILE_W)
const OCT_GEO     = new THREE.BoxGeometry(0.8, TILE_H, 0.8)
const BASE_GEO    = new THREE.CylinderGeometry(0.32, 0.32, TILE_H + 0.01, 24)

function mat(color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, ...opts })
}

const M = {
  track:    mat(0xf0ece0),
  safe:     mat(0xffe88a, { roughness: 0.4 }),
  star:     mat(0x7ec8e3, { roughness: 0.3, metalness: 0.2 }),
  skull:    mat(0xc77dff, { roughness: 0.3, metalness: 0.1 }),
  center:   mat(0xffd700, { roughness: 0.2, metalness: 0.5 }),
  board:    mat(0x1e1e2e),
  homeArea: (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.5).getHex(),
    { roughness: 0.8, transparent: true, opacity: 0.85 },
  ),
  homeCol: (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.65).getHex(),
    { roughness: 0.6 },
  ),
  base: (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.45).getHex(),
    { roughness: 0.7, transparent: true, opacity: 0.9 },
  ),
}

// Tile mesh with user-data for raycasting
function makeTile(
  geo: THREE.BufferGeometry,
  material: THREE.MeshStandardMaterial,
  x: number, z: number,
  meta: Record<string, unknown> = {},
): THREE.Mesh {
  const mesh = new THREE.Mesh(geo, material)
  mesh.position.set(x, TILE_H / 2, z)
  mesh.receiveShadow = true
  mesh.castShadow = false
  Object.assign(mesh.userData, meta)
  return mesh
}

// ── Exit triangle helper ──────────────────────────────────────

function addExitTriangle(
  group: THREE.Group,
  color: PlayerColor,
  cx: number, cz: number,   // home area center (X, Z)
  dx: number, dz: number,   // unit direction toward cross
): void {
  const px = -dz, pz = dx   // perpendicular
  const ax = cx + dx * 2.1, az = cz + dz * 2.1        // apex
  const lx = cx - dx * 1.6 - px * 1.7, lz = cz - dz * 1.6 - pz * 1.7  // base-left
  const rx = cx - dx * 1.6 + px * 1.7, rz = cz - dz * 1.6 + pz * 1.7  // base-right

  const verts = new Float32Array([ax, 0.12, az, lx, 0.12, lz, rx, 0.12, rz])
  const geo   = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3))
  geo.computeVertexNormals()

  const triMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(COLOR_HEX[color]).multiplyScalar(0.72),
    roughness: 0.45,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.82,
  })
  group.add(new THREE.Mesh(geo, triMat))
}

// ── Standard board ────────────────────────────────────────────

export function buildStandardBoard(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  mode: GameMode,
): THREE.Group {
  const group = new THREE.Group()

  // Background board slab
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(15.4, 0.06, 15.4),
    M.board,
  )
  slab.position.y = -0.04
  slab.receiveShadow = true
  group.add(slab)

  const usedColors = playerColors.slice(0, 4) as PlayerColor[]

  // Home areas (colored 6×6 corners)
  const homeAreaRanges: Record<string, [number, number, number, number]> = {
    red:    [0, 0, 5, 5],
    blue:   [9, 0, 14, 5],
    yellow: [9, 9, 14, 14],
    green:  [0, 9, 5, 14],
  }

  for (const color of STANDARD_COLORS) {
    if (!usedColors.includes(color)) continue
    const hex = COLOR_HEX[color]
    const [c0, r0, c1, r1] = homeAreaRanges[color]
    for (let c = c0; c <= c1; c++) {
      for (let r = r0; r <= r1; r++) {
        const isBase = STANDARD_BASE_TILES[color].some(([bc, br]) => bc === c && br === r)
        const geo  = isBase ? BASE_GEO : TILE_GEO
        const mat2 = isBase ? M.base(hex) : M.homeArea(hex)
        group.add(makeTile(geo, mat2, c - HALF, r - HALF, { type: 'home-area', color }))
      }
    }
  }

  // Main path tiles
  STANDARD_MAIN_PATH.forEach(([c, r], idx) => {
    let tileMat: THREE.MeshStandardMaterial
    if (STANDARD_SAFE_INDICES.has(idx)) {
      // Player start tiles colored, others gold
      const startEntry = Object.entries({ red:0, blue:13, yellow:26, green:39 })
        .find(([,i]) => i === idx)
      tileMat = startEntry ? M.homeArea(COLOR_HEX[startEntry[0] as PlayerColor]) : M.safe
    } else if (mode === 'remix' && STANDARD_STAR_INDICES.has(idx)) {
      tileMat = M.star
    } else if (mode === 'remix' && STANDARD_SKULL_INDICES.has(idx)) {
      tileMat = M.skull
    } else {
      tileMat = M.track
    }
    group.add(makeTile(TILE_GEO, tileMat, c - HALF, r - HALF, {
      type: 'path', pathIndex: idx,
    }))
  })

  // Home columns
  for (const color of STANDARD_COLORS) {
    if (!usedColors.includes(color)) continue
    const hex = COLOR_HEX[color]
    STANDARD_HOME_COLS[color].forEach(([c, r], i) => {
      group.add(makeTile(TILE_GEO, M.homeCol(hex), c - HALF, r - HALF, {
        type: 'home-col', color, homeColIndex: i,
      }))
    })
  }

  // Cross interior — corner junctions (exit triangle connector at cross arms)
  // These are the 4 tiles at inner corners of the cross, colored per nearby player
  const crossCorners: [string, number, number][] = [
    ['red', 6, 6], ['blue', 8, 6], ['green', 6, 8], ['yellow', 8, 8],
  ]
  for (const [color, c, r] of crossCorners) {
    if (!usedColors.includes(color as PlayerColor)) continue
    group.add(makeTile(TILE_GEO, M.homeArea(COLOR_HEX[color as PlayerColor]), c - HALF, r - HALF, {
      type: 'junction', color,
    }))
  }

  // Cross interior — home column connectors (bridge home cols to center)
  const homeColConnectors: [string, number, number][] = [
    ['red', 6, 7], ['blue', 7, 6], ['yellow', 8, 7], ['green', 7, 8],
  ]
  for (const [color, c, r] of homeColConnectors) {
    if (!usedColors.includes(color as PlayerColor)) continue
    group.add(makeTile(TILE_GEO, M.homeCol(COLOR_HEX[color as PlayerColor]), c - HALF, r - HALF, {
      type: 'home-col', color, homeColIndex: 5,
    }))
  }

  // Exit triangles inside each home area (pointing toward inner cross corner)
  // Direction is diagonal inward: top-left→(+,+), top-right→(-,+), etc.
  const exitArrows: [string, number, number, number, number][] = [
    ['red',    -4.5, -4.5,  0.707,  0.707],
    ['blue',    4.5, -4.5, -0.707,  0.707],
    ['yellow',  4.5,  4.5, -0.707, -0.707],
    ['green',  -4.5,  4.5,  0.707, -0.707],
  ]
  for (const [color, cx, cz, dx, dz] of exitArrows) {
    if (!usedColors.includes(color as PlayerColor)) continue
    addExitTriangle(group, color as PlayerColor, cx, cz, dx, dz)
  }

  // Center tile
  const [cc, cr] = STANDARD_CENTER
  group.add(makeTile(TILE_GEO, M.center, cc - HALF, cr - HALF, { type: 'center' }))

  scene.add(group)
  return group
}

// ── Octagonal board ───────────────────────────────────────────

export function buildOctagonalBoard(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  mode: GameMode,
): THREE.Group {
  const group = new THREE.Group()

  // Background disc
  const disc = new THREE.Mesh(
    new THREE.CylinderGeometry(12.5, 12.5, 0.06, 8),
    M.board,
  )
  disc.position.y = -0.04
  disc.receiveShadow = true
  group.add(disc)

  const octPath = genOctPath()
  const usedColors = playerColors.slice(0, 8) as PlayerColor[]

  // Main path tiles
  octPath.forEach(([x, z], idx) => {
    let tileMat: THREE.MeshStandardMaterial
    if (OCT_SAFE_INDICES.has(idx)) {
      tileMat = M.safe
    } else if (mode === 'remix' && OCT_STAR_INDICES.has(idx)) {
      tileMat = M.star
    } else if (mode === 'remix' && OCT_SKULL_INDICES.has(idx)) {
      tileMat = M.skull
    } else {
      tileMat = M.track
    }
    group.add(makeTile(OCT_GEO, tileMat, x, z, { type: 'path', pathIndex: idx }))
  })

  // Home columns + bases per player
  usedColors.forEach((color) => {
    const hex = COLOR_HEX[color]
    const sideIndex = OCT_COLOR_ORDER.indexOf(color)
    if (sideIndex === -1) return

    genOctHomeCol(sideIndex).forEach(([x, z], j) => {
      group.add(makeTile(OCT_GEO, M.homeCol(hex), x, z, {
        type: 'home-col', color, homeColIndex: j,
      }))
    })

    genOctBase(sideIndex).forEach(([x, z]) => {
      group.add(makeTile(BASE_GEO, M.base(hex), x, z, { type: 'home-area', color }))
    })
  })

  // Center tile
  group.add(makeTile(OCT_GEO, M.center, 0, 0, { type: 'center' }))

  scene.add(group)
  return group
}

// ── Hover highlight ───────────────────────────────────────────

let highlightedMesh: THREE.Mesh | null = null

export function highlightTile(mesh: THREE.Mesh | null): void {
  if (highlightedMesh && highlightedMesh !== mesh) {
    const m = highlightedMesh.material as THREE.MeshStandardMaterial
    m.emissive.set(0x000000)
    m.emissiveIntensity = 0
  }
  if (mesh) {
    const m = mesh.material as THREE.MeshStandardMaterial
    m.emissive.set(0xffffff)
    m.emissiveIntensity = 0.18
  }
  highlightedMesh = mesh
}

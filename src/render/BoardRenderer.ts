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

const TILE_W = 0.92
const TILE_H = 0.09
const HALF   = 7   // centers a 15×15 grid: col-HALF, row-HALF

// ── Geometry / material factories ────────────────────────────

const TILE_GEO = new THREE.BoxGeometry(TILE_W, TILE_H, TILE_W)
const OCT_GEO  = new THREE.BoxGeometry(0.9, TILE_H, 0.9)
const BASE_GEO = new THREE.CylinderGeometry(0.32, 0.32, TILE_H + 0.01, 24)

function mat(
  color: number | THREE.Color,
  opts: Partial<THREE.MeshStandardMaterialParameters> = {},
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, ...opts })
}

const M = {
  track:       mat(0xf0ece0),
  safe:        mat(0xffe88a, { roughness: 0.4 }),
  star:        mat(0x7ec8e3, { roughness: 0.3, metalness: 0.2 }),
  skull:       mat(0xc77dff, { roughness: 0.3, metalness: 0.1 }),
  center:      mat(0xffd700, { roughness: 0.2, metalness: 0.5 }),
  board:       mat(0x1e1e2e),
  inactive:    mat(0x26263a, { roughness: 0.9 }),  // unused player slot
  homeArea:    (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.5),
    { roughness: 0.8 },
  ),
  homeCol:     (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.68),
    { roughness: 0.6 },
  ),
  base:        (hex: string) => mat(
    new THREE.Color(hex).multiplyScalar(0.42),
    { roughness: 0.7 },
  ),
}

function makeTile(
  geo: THREE.BufferGeometry,
  material: THREE.MeshStandardMaterial,
  x: number, z: number,
  meta: Record<string, unknown> = {},
): THREE.Mesh {
  const mesh = new THREE.Mesh(geo, material)
  mesh.position.set(x, TILE_H / 2, z)
  mesh.receiveShadow = true
  Object.assign(mesh.userData, meta)
  return mesh
}

// ── Standard board (15×15, always fully rendered) ────────────

const HOME_AREA_RANGES: Record<string, [number, number, number, number]> = {
  red:    [0, 0, 5, 5],
  blue:   [9, 0, 14, 5],
  yellow: [9, 9, 14, 14],
  green:  [0, 9, 5, 14],
}

// Tiles in cross interior that are NOT on main path or home columns.
// These are always structural — needed for path continuity regardless of players.
// [color they belong to visually, col, row]
const CROSS_CORNERS: [string, number, number][] = [
  ['red', 6, 6], ['blue', 8, 6], ['green', 6, 8], ['yellow', 8, 8],
]
const HOME_COL_CONNECTORS: [string, number, number][] = [
  ['red', 6, 7], ['blue', 7, 6], ['yellow', 8, 7], ['green', 7, 8],
]

const PLAYER_START_INDICES: Record<string, number> = {
  red: 0, blue: 13, yellow: 26, green: 39,
}

export function buildStandardBoard(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  mode: GameMode,
): THREE.Group {
  const group = new THREE.Group()
  const active = new Set(playerColors.slice(0, 4))

  // Board slab
  group.add(Object.assign(
    new THREE.Mesh(new THREE.BoxGeometry(15.4, 0.06, 15.4), M.board),
    { position: new THREE.Vector3(0, -0.04, 0) },
  ))

  // ── Home areas — ALL 4 always rendered ───────────────────
  for (const color of STANDARD_COLORS) {
    const hex    = COLOR_HEX[color]
    const isOn   = active.has(color)
    const [c0, r0, c1, r1] = HOME_AREA_RANGES[color]
    for (let c = c0; c <= c1; c++) {
      for (let r = r0; r <= r1; r++) {
        const isBase = isOn && STANDARD_BASE_TILES[color].some(([bc, br]) => bc === c && br === r)
        group.add(makeTile(
          isBase ? BASE_GEO : TILE_GEO,
          isBase ? M.base(hex) : isOn ? M.homeArea(hex) : M.inactive,
          c - HALF, r - HALF,
          { type: 'home-area', color, active: isOn },
        ))
      }
    }
  }

  // ── Main path — all 52 tiles ──────────────────────────────
  STANDARD_MAIN_PATH.forEach(([c, r], idx) => {
    let tileMat: THREE.MeshStandardMaterial
    if (STANDARD_SAFE_INDICES.has(idx)) {
      const owner = Object.entries(PLAYER_START_INDICES).find(([, i]) => i === idx)
      tileMat = owner && active.has(owner[0] as PlayerColor)
        ? M.homeArea(COLOR_HEX[owner[0] as PlayerColor])
        : M.safe
    } else if (mode === 'remix' && STANDARD_STAR_INDICES.has(idx)) {
      tileMat = M.star
    } else if (mode === 'remix' && STANDARD_SKULL_INDICES.has(idx)) {
      tileMat = M.skull
    } else {
      tileMat = M.track
    }
    group.add(makeTile(TILE_GEO, tileMat, c - HALF, r - HALF, { type: 'path', pathIndex: idx }))
  })

  // ── Home columns — ALL 4 always rendered ─────────────────
  for (const color of STANDARD_COLORS) {
    const hex  = COLOR_HEX[color]
    const isOn = active.has(color)
    STANDARD_HOME_COLS[color].forEach(([c, r], i) => {
      group.add(makeTile(
        TILE_GEO,
        isOn ? M.homeCol(hex) : M.track,
        c - HALF, r - HALF,
        { type: 'home-col', color, homeColIndex: i },
      ))
    })
  }

  // ── Cross interior — ALWAYS rendered (path continuity) ───
  for (const [color, c, r] of CROSS_CORNERS) {
    const isOn = active.has(color as PlayerColor)
    group.add(makeTile(
      TILE_GEO,
      isOn ? M.homeArea(COLOR_HEX[color as PlayerColor]) : M.track,
      c - HALF, r - HALF,
      { type: 'junction', color },
    ))
  }
  for (const [color, c, r] of HOME_COL_CONNECTORS) {
    const isOn = active.has(color as PlayerColor)
    group.add(makeTile(
      TILE_GEO,
      isOn ? M.homeCol(COLOR_HEX[color as PlayerColor]) : M.track,
      c - HALF, r - HALF,
      { type: 'home-col', color, homeColIndex: 5 },
    ))
  }

  // ── Center ────────────────────────────────────────────────
  const [cc, cr] = STANDARD_CENTER
  group.add(makeTile(TILE_GEO, M.center, cc - HALF, cr - HALF, { type: 'center' }))

  scene.add(group)
  return group
}

// ── Octagonal board ───────────────────────────────────────────

// Octagon vertex positions — used to place corner tiles that bridge adjacent sides
function octVertices(radius = 9): [number, number][] {
  return Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2
    return [radius * Math.cos(a), radius * Math.sin(a)]
  })
}

export function buildOctagonalBoard(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  mode: GameMode,
): THREE.Group {
  const group   = new THREE.Group()
  const active  = new Set(playerColors.slice(0, 8))
  const octPath = genOctPath()

  // Board disc
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 0.06, 8), M.board)
  disc.position.y = -0.04
  group.add(disc)

  // ── Main path tiles ───────────────────────────────────────
  octPath.forEach(([x, z], idx) => {
    let tileMat: THREE.MeshStandardMaterial
    if (OCT_SAFE_INDICES.has(idx))                              tileMat = M.safe
    else if (mode === 'remix' && OCT_STAR_INDICES.has(idx))    tileMat = M.star
    else if (mode === 'remix' && OCT_SKULL_INDICES.has(idx))   tileMat = M.skull
    else                                                        tileMat = M.track
    group.add(makeTile(OCT_GEO, tileMat, x, z, { type: 'path', pathIndex: idx }))
  })

  // ── Corner tiles at octagon vertices (fill gaps between sides) ──
  for (const [x, z] of octVertices()) {
    group.add(makeTile(OCT_GEO, M.track, x, z, { type: 'corner' }))
  }

  // ── Home columns + bases — active players only, cols extended to near center ──
  OCT_COLOR_ORDER.forEach((color, sideIndex) => {
    const isOn = active.has(color)
    const hex  = COLOR_HEX[color]

    // Render 8 home col tiles toward center (5 = game logic, 3 extra = visual bridge)
    genOctHomeCol(sideIndex, 8).forEach(([x, z], j) => {
      group.add(makeTile(
        OCT_GEO,
        isOn ? M.homeCol(hex) : M.track,
        x, z,
        { type: 'home-col', color, homeColIndex: j, active: isOn },
      ))
    })

    // Base tiles only for active players
    if (isOn) {
      genOctBase(sideIndex).forEach(([x, z]) => {
        group.add(makeTile(BASE_GEO, M.base(hex), x, z, { type: 'home-area', color }))
      })
    }
  })

  // ── Center hub — octagonal disc covering home col tips ────
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(1.8, 1.8, TILE_H, 8),
    M.center,
  )
  hub.position.y = TILE_H / 2
  hub.userData   = { type: 'center' }
  group.add(hub)

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

import * as THREE from 'three'
import {
  STANDARD_MAIN_PATH, STANDARD_HOME_COLS, STANDARD_CENTER,
  STANDARD_BASE_TILES, STANDARD_SAFE_INDICES, STANDARD_STAR_INDICES,
  STANDARD_SKULL_INDICES, STANDARD_BOOST_INDICES, STANDARD_BOMB_INDICES, STANDARD_SWAP_INDICES,
  STANDARD_SKIP_INDICES, STANDARD_REVERSE_INDICES, STANDARD_FUMBLE_INDICES, STANDARD_SHACKLE_INDICES,
  STANDARD_COLORS,
  genOctPath, genOctHomeCol, genOctBase, OCT_COLOR_ORDER,
  OCT_SAFE_INDICES, OCT_STAR_INDICES, OCT_SKULL_INDICES,
  OCT_BOOST_INDICES, OCT_BOMB_INDICES, OCT_SWAP_INDICES,
  OCT_SKIP_INDICES, OCT_REVERSE_INDICES, OCT_FUMBLE_INDICES, OCT_SHACKLE_INDICES,
} from '../game/boardData'
import { COLOR_HEX, type PlayerColor } from '../room/types'
import type { GameMode } from '../room/types'

const TILE_W = 0.92
const TILE_H = 0.09
const HALF   = 7   // centers a 15×15 grid: col-HALF, row-HALF

// ── Geometry / material factories ────────────────────────────

const TILE_GEO     = new THREE.BoxGeometry(TILE_W, TILE_H, TILE_W)
const OCT_TILE_GEO = new THREE.CylinderGeometry(0.40, 0.40, TILE_H, 20)  // r=0.40 → same 0.80 footprint, no overlap
const BASE_GEO     = new THREE.CylinderGeometry(0.32, 0.32, TILE_H + 0.01, 24)

function mat(
  color: number | THREE.Color,
  opts: Partial<THREE.MeshStandardMaterialParameters> = {},
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, ...opts })
}

const M = {
  track:       mat(0xf0ece0),
  safe:        mat(0xffe88a, { roughness: 0.4 }),
  star:        mat(0x7ec8e3, { roughness: 0.2, metalness: 0.25, emissive: 0x2a9cbf, emissiveIntensity: 0.35 }),
  skull:       mat(0xc77dff, { roughness: 0.2, metalness: 0.1,  emissive: 0x9933ff, emissiveIntensity: 0.4  }),
  boost:       mat(0xffe033, { roughness: 0.2, metalness: 0.3,  emissive: 0xd4a000, emissiveIntensity: 0.4  }),
  bomb:        mat(0xff6622, { roughness: 0.2, metalness: 0.1,  emissive: 0xcc3300, emissiveIntensity: 0.45 }),
  swap:        mat(0x00e5cc, { roughness: 0.2, metalness: 0.25, emissive: 0x00aa99, emissiveIntensity: 0.4  }),
  skip:        mat(0xcc2244, { roughness: 0.2, metalness: 0.1,  emissive: 0x880022, emissiveIntensity: 0.45 }),
  reverse:     mat(0x5566ee, { roughness: 0.2, metalness: 0.15, emissive: 0x2233aa, emissiveIntensity: 0.4  }),
  fumble:      mat(0xb06820, { roughness: 0.3, metalness: 0.1,  emissive: 0x804000, emissiveIntensity: 0.35 }),
  shackle:     mat(0x556677, { roughness: 0.3, metalness: 0.3,  emissive: 0x334455, emissiveIntensity: 0.3  }),
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

function makeSymbolOverlay(symbol: string, color: string, x: number, z: number): THREE.Mesh {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = color
  ctx.font = `bold ${size * 0.68}px serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(symbol, size / 2, size / 2)
  const tex = new THREE.CanvasTexture(canvas)
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.62),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
  )
  mesh.rotation.x = -Math.PI / 2
  mesh.position.set(x, TILE_H + 0.006, z)
  return mesh
}

function makeTile(
  geo: THREE.BufferGeometry,
  material: THREE.MeshStandardMaterial,
  x: number, z: number,
  meta: Record<string, unknown> = {},
): THREE.Mesh {
  const mesh = new THREE.Mesh(geo, material.clone())
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
  const slab = new THREE.Mesh(new THREE.BoxGeometry(15.4, 0.06, 15.4), M.board)
  slab.position.y = -0.04
  slab.receiveShadow = true
  group.add(slab)

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
    const wx = c - HALF, wz = r - HALF
    if (STANDARD_SAFE_INDICES.has(idx)) {
      const owner = Object.entries(PLAYER_START_INDICES).find(([, i]) => i === idx)
      tileMat = owner && active.has(owner[0] as PlayerColor)
        ? M.homeArea(COLOR_HEX[owner[0] as PlayerColor])
        : M.safe
    } else if (mode === 'remix' && STANDARD_STAR_INDICES.has(idx)) {
      tileMat = M.star
    } else if (mode === 'remix' && STANDARD_SKULL_INDICES.has(idx)) {
      tileMat = M.skull
    } else if (mode === 'remix' && STANDARD_BOOST_INDICES.has(idx)) {
      tileMat = M.boost
    } else if (mode === 'remix' && STANDARD_BOMB_INDICES.has(idx)) {
      tileMat = M.bomb
    } else if (mode === 'remix' && STANDARD_SWAP_INDICES.has(idx)) {
      tileMat = M.swap
    } else if (mode === 'remix' && STANDARD_SKIP_INDICES.has(idx)) {
      tileMat = M.skip
    } else if (mode === 'remix' && STANDARD_REVERSE_INDICES.has(idx)) {
      tileMat = M.reverse
    } else if (mode === 'remix' && STANDARD_FUMBLE_INDICES.has(idx)) {
      tileMat = M.fumble
    } else if (mode === 'remix' && STANDARD_SHACKLE_INDICES.has(idx)) {
      tileMat = M.shackle
    } else {
      tileMat = M.track
    }
    group.add(makeTile(TILE_GEO, tileMat, wx, wz, { type: 'path', pathIndex: idx }))
    if (mode === 'remix') {
      if (STANDARD_STAR_INDICES.has(idx))    group.add(makeSymbolOverlay('★', '#ffe066', wx, wz))
      if (STANDARD_SKULL_INDICES.has(idx))   group.add(makeSymbolOverlay('☠', '#ffffff', wx, wz))
      if (STANDARD_BOOST_INDICES.has(idx))   group.add(makeSymbolOverlay('⚡', '#1a1a00', wx, wz))
      if (STANDARD_BOMB_INDICES.has(idx))    group.add(makeSymbolOverlay('💣', '#ffffff', wx, wz))
      if (STANDARD_SWAP_INDICES.has(idx))    group.add(makeSymbolOverlay('↔', '#001a1a', wx, wz))
      if (STANDARD_SKIP_INDICES.has(idx))    group.add(makeSymbolOverlay('🚫', '#ffffff', wx, wz))
      if (STANDARD_REVERSE_INDICES.has(idx)) group.add(makeSymbolOverlay('↩', '#ffffff', wx, wz))
      if (STANDARD_FUMBLE_INDICES.has(idx))  group.add(makeSymbolOverlay('½', '#fff0cc', wx, wz))
      if (STANDARD_SHACKLE_INDICES.has(idx)) group.add(makeSymbolOverlay('🔒', '#ffffff', wx, wz))
    }
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

// ── Hexadecagonal board (8 players) ──────────────────────────

// Flat ring-sector geometry in the XZ plane (Y = 0).
// angle = center angle, r1/r2 = inner/outer radius, halfAng = half-span in radians.
function buildSectorGeo(angle: number, r1: number, r2: number, halfAng: number, segs = 10): THREE.BufferGeometry {
  const verts: number[] = []
  const idx:   number[] = []
  for (let i = 0; i <= segs; i++) {
    const a = angle - halfAng + (2 * halfAng * i / segs)
    verts.push(r1 * Math.cos(a), 0, r1 * Math.sin(a))
    verts.push(r2 * Math.cos(a), 0, r2 * Math.sin(a))
  }
  for (let i = 0; i < segs; i++) {
    const b = i * 2
    idx.push(b, b + 2, b + 1)
    idx.push(b + 1, b + 2, b + 3)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return geo
}

export function buildOctagonalBoard(
  scene: THREE.Scene,
  playerColors: PlayerColor[],
  mode: GameMode,
): THREE.Group {
  const group   = new THREE.Group()
  const active  = new Set(playerColors.slice(0, 8))
  const octPath = genOctPath()

  // Board disc — 16-sided
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 0.06, 16), M.board)
  disc.position.y = -0.04
  group.add(disc)

  // ── Home base sectors — one 45° pie slice per player ──────
  // Each sector spans from the path ring (r ≈ 9.4) to the board edge (r ≈ 12.8).
  // Center angle = (2k+1)/16 · 2π − π/2  (matches genOctHomeCol/genOctBase midAngle).
  OCT_COLOR_ORDER.forEach((color, k) => {
    const isOn       = active.has(color)
    const hex        = COLOR_HEX[color]
    const centerAngle = ((k + 0.5) / 8) * Math.PI * 2 - Math.PI / 2
    const sectorMat  = isOn
      ? new THREE.MeshStandardMaterial({ color: new THREE.Color(hex).multiplyScalar(0.38), roughness: 0.85 })
      : new THREE.MeshStandardMaterial({ color: 0x1a1a2a, roughness: 0.95 })
    const sectorMesh = new THREE.Mesh(buildSectorGeo(centerAngle, 9.4, 12.8, Math.PI / 8), sectorMat)
    sectorMesh.position.y = 0.01
    sectorMesh.receiveShadow = true
    sectorMesh.userData = { type: 'home-area', color }
    group.add(sectorMesh)

    // Base circles in sector (active players only)
    if (isOn) {
      genOctBase(k).forEach(([x, z]) => {
        group.add(makeTile(BASE_GEO, M.base(hex), x, z, { type: 'home-area', color }))
      })
    }
  })

  // ── Main path tiles (hexagonal) ───────────────────────────
  octPath.forEach(([x, z], idx) => {
    let tileMat: THREE.MeshStandardMaterial
    if (OCT_SAFE_INDICES.has(idx))                              tileMat = M.safe
    else if (mode === 'remix' && OCT_STAR_INDICES.has(idx))    tileMat = M.star
    else if (mode === 'remix' && OCT_SKULL_INDICES.has(idx))   tileMat = M.skull
    else if (mode === 'remix' && OCT_BOOST_INDICES.has(idx))   tileMat = M.boost
    else if (mode === 'remix' && OCT_BOMB_INDICES.has(idx))    tileMat = M.bomb
    else if (mode === 'remix' && OCT_SWAP_INDICES.has(idx))    tileMat = M.swap
    else if (mode === 'remix' && OCT_SKIP_INDICES.has(idx))    tileMat = M.skip
    else if (mode === 'remix' && OCT_REVERSE_INDICES.has(idx)) tileMat = M.reverse
    else if (mode === 'remix' && OCT_FUMBLE_INDICES.has(idx))  tileMat = M.fumble
    else if (mode === 'remix' && OCT_SHACKLE_INDICES.has(idx)) tileMat = M.shackle
    else                                                        tileMat = M.track
    group.add(makeTile(OCT_TILE_GEO, tileMat, x, z, { type: 'path', pathIndex: idx }))
    if (mode === 'remix') {
      if (OCT_STAR_INDICES.has(idx))    group.add(makeSymbolOverlay('★', '#ffe066', x, z))
      if (OCT_SKULL_INDICES.has(idx))   group.add(makeSymbolOverlay('☠', '#ffffff', x, z))
      if (OCT_BOOST_INDICES.has(idx))   group.add(makeSymbolOverlay('⚡', '#1a1a00', x, z))
      if (OCT_BOMB_INDICES.has(idx))    group.add(makeSymbolOverlay('💣', '#ffffff', x, z))
      if (OCT_SWAP_INDICES.has(idx))    group.add(makeSymbolOverlay('↔', '#001a1a', x, z))
      if (OCT_SKIP_INDICES.has(idx))    group.add(makeSymbolOverlay('🚫', '#ffffff', x, z))
      if (OCT_REVERSE_INDICES.has(idx)) group.add(makeSymbolOverlay('↩', '#ffffff', x, z))
      if (OCT_FUMBLE_INDICES.has(idx))  group.add(makeSymbolOverlay('½', '#fff0cc', x, z))
      if (OCT_SHACKLE_INDICES.has(idx)) group.add(makeSymbolOverlay('🔒', '#ffffff', x, z))
    }
  })

  // ── Home columns — 8 players, pointing from path ring toward center ──
  OCT_COLOR_ORDER.forEach((color, sideIndex) => {
    const isOn = active.has(color)
    const hex  = COLOR_HEX[color]
    genOctHomeCol(sideIndex, 6).forEach(([x, z], j) => {
      group.add(makeTile(
        OCT_TILE_GEO,
        isOn ? M.homeCol(hex) : M.track,
        x, z,
        { type: 'home-col', color, homeColIndex: j, active: isOn },
      ))
    })
  })

  // ── Center hub ────────────────────────────────────────────
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, TILE_H, 16), M.center)
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

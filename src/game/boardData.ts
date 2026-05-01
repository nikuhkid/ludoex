import { type PlayerColor } from '../room/types'

// ── Standard board (15×15, 4 players) ────────────────────────

export const STANDARD_MAIN_PATH: [number, number][] = [
  [1,6],[2,6],[3,6],[4,6],[5,6],
  [6,5],[6,4],[6,3],[6,2],[6,1],
  [6,0],[7,0],[8,0],
  [8,1],[8,2],[8,3],[8,4],[8,5],
  [9,6],[10,6],[11,6],[12,6],[13,6],
  [14,6],[14,7],[14,8],
  [13,8],[12,8],[11,8],[10,8],[9,8],
  [8,9],[8,10],[8,11],[8,12],[8,13],
  [8,14],[7,14],[6,14],
  [6,13],[6,12],[6,11],[6,10],[6,9],
  [5,8],[4,8],[3,8],[2,8],[1,8],
  [0,8],[0,7],[0,6],
]

export const STANDARD_HOME_COLS: Record<string, [number, number][]> = {
  red:    [[1,7],[2,7],[3,7],[4,7],[5,7]],
  blue:   [[7,1],[7,2],[7,3],[7,4],[7,5]],
  yellow: [[13,7],[12,7],[11,7],[10,7],[9,7]],
  green:  [[7,13],[7,12],[7,11],[7,10],[7,9]],
}

export const STANDARD_CENTER: [number, number] = [7,7]

export const STANDARD_BASE_TILES: Record<string, [number, number][]> = {
  red:    [[1,1],[2,1],[1,2],[2,2]],
  blue:   [[12,1],[13,1],[12,2],[13,2]],
  yellow: [[12,12],[13,12],[12,13],[13,13]],
  green:  [[1,12],[2,12],[1,13],[2,13]],
}

export const STANDARD_PLAYER_START: Record<string, number> = {
  red: 0, blue: 13, yellow: 26, green: 39,
}

export const STANDARD_HOME_ENTRY: Record<string, number> = {
  red: 50, blue: 11, yellow: 24, green: 37,
}

export const STANDARD_SAFE_INDICES  = new Set([0, 4, 13, 17, 26, 30, 39, 43])
export const STANDARD_STAR_INDICES  = new Set([7, 20, 33, 46])
export const STANDARD_SKULL_INDICES = new Set([2, 15, 28, 41])

// ── Octagonal board (8 players, computed positions) ──────────

const OCT_TILES_PER_SIDE = 7
const OCT_PATH_RADIUS    = 9

export function genOctPath(): [number, number][] {
  const path: [number, number][] = []
  for (let side = 0; side < 8; side++) {
    const a0 = (side / 8) * Math.PI * 2 - Math.PI / 2
    const a1 = ((side + 1) / 8) * Math.PI * 2 - Math.PI / 2
    const x0 = OCT_PATH_RADIUS * Math.cos(a0)
    const z0 = OCT_PATH_RADIUS * Math.sin(a0)
    const x1 = OCT_PATH_RADIUS * Math.cos(a1)
    const z1 = OCT_PATH_RADIUS * Math.sin(a1)
    for (let t = 0; t < OCT_TILES_PER_SIDE; t++) {
      const alpha = (t + 0.5) / OCT_TILES_PER_SIDE
      path.push([x0 + (x1 - x0) * alpha, z0 + (z1 - z0) * alpha])
    }
  }
  return path
}

export function genOctHomeCol(sideIndex: number, length = 5): [number, number][] {
  const midAngle = ((sideIndex + 0.5) / 8) * Math.PI * 2 - Math.PI / 2
  const mx = OCT_PATH_RADIUS * Math.cos(midAngle)
  const mz = OCT_PATH_RADIUS * Math.sin(midAngle)
  const d  = Math.sqrt(mx * mx + mz * mz)
  const dx = -mx / d
  const dz = -mz / d
  return Array.from({ length }, (_, i) => [mx + dx * (i + 1), mz + dz * (i + 1)])
}

export function genOctBase(sideIndex: number): [number, number][] {
  const midAngle = ((sideIndex + 0.5) / 8) * Math.PI * 2 - Math.PI / 2
  const mx = OCT_PATH_RADIUS * Math.cos(midAngle)
  const mz = OCT_PATH_RADIUS * Math.sin(midAngle)
  const d  = Math.sqrt(mx * mx + mz * mz)
  const dx = mx / d; const dz = mz / d
  const px = -dz;    const pz = dx
  const cx = mx + dx * 2.2
  const cz = mz + dz * 2.2
  return [
    [cx + px * 0.6, cz + pz * 0.6],
    [cx - px * 0.6, cz - pz * 0.6],
    [cx + dx * 0.9 + px * 0.6, cz + dz * 0.9 + pz * 0.6],
    [cx + dx * 0.9 - px * 0.6, cz + dz * 0.9 - pz * 0.6],
  ]
}

export const OCT_PLAYER_START: Record<string, number> = {
  red: 0, blue: 7, green: 14, yellow: 21,
  purple: 28, orange: 35, pink: 42, cyan: 49,
}

export const OCT_HOME_ENTRY: Record<string, number> = {
  red: 54, blue: 5, green: 12, yellow: 19,
  purple: 26, orange: 33, pink: 40, cyan: 47,
}

export const OCT_SAFE_INDICES  = new Set([0,7,14,21,28,35,42,49,4,11,18,25,32,39,46,53])
export const OCT_STAR_INDICES  = new Set([3,10,17,24,31,38,45,52])
export const OCT_SKULL_INDICES = new Set([6,13,20,27,34,41,48,55])

// ── Shared ────────────────────────────────────────────────────

export const STANDARD_COLORS: PlayerColor[] = ['red','blue','yellow','green']
export const OCT_COLOR_ORDER: PlayerColor[] = [
  'red','blue','green','yellow','purple','orange','pink','cyan'
]

import type { GameState, PieceState, GameMode } from '../room/types'
import type { BoardType } from '../room/types'
import {
  STANDARD_PLAYER_START, STANDARD_HOME_ENTRY, STANDARD_SAFE_INDICES,
  STANDARD_STAR_INDICES, STANDARD_SKULL_INDICES,
  STANDARD_BOOST_INDICES, STANDARD_BOMB_INDICES, STANDARD_SWAP_INDICES,
  STANDARD_SKIP_INDICES, STANDARD_REVERSE_INDICES, STANDARD_FUMBLE_INDICES, STANDARD_SHACKLE_INDICES,
  OCT_PLAYER_START, OCT_HOME_ENTRY, OCT_SAFE_INDICES,
  OCT_STAR_INDICES, OCT_SKULL_INDICES,
  OCT_BOOST_INDICES, OCT_BOMB_INDICES, OCT_SWAP_INDICES,
  OCT_SKIP_INDICES, OCT_REVERSE_INDICES, OCT_FUMBLE_INDICES, OCT_SHACKLE_INDICES,
} from './boardData'

// ── Board params ──────────────────────────────────────────────

const BOARD_PARAMS = {
  standard:  { pathLen: 52, colLen: 5 },
  octagonal: { pathLen: 48, colLen: 5 },
} as const

function finished(boardType: BoardType): number {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  return pathLen + colLen
}

function playerStart(color: string, boardType: BoardType): number {
  return boardType === 'standard' ? STANDARD_PLAYER_START[color] : OCT_PLAYER_START[color]
}

function homeEntry(color: string, boardType: BoardType): number {
  return boardType === 'standard' ? STANDARD_HOME_ENTRY[color] : OCT_HOME_ENTRY[color]
}

function isSafe(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_SAFE_INDICES.has(pathIdx) : OCT_SAFE_INDICES.has(pathIdx)
}

function isStar(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_STAR_INDICES.has(pathIdx) : OCT_STAR_INDICES.has(pathIdx)
}

function isSkull(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_SKULL_INDICES.has(pathIdx) : OCT_SKULL_INDICES.has(pathIdx)
}

function isBoost(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_BOOST_INDICES.has(pathIdx) : OCT_BOOST_INDICES.has(pathIdx)
}

function isBomb(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_BOMB_INDICES.has(pathIdx) : OCT_BOMB_INDICES.has(pathIdx)
}

function isSwap(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_SWAP_INDICES.has(pathIdx) : OCT_SWAP_INDICES.has(pathIdx)
}

function isSkipCurse(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_SKIP_INDICES.has(pathIdx) : OCT_SKIP_INDICES.has(pathIdx)
}

function isReverseCurse(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_REVERSE_INDICES.has(pathIdx) : OCT_REVERSE_INDICES.has(pathIdx)
}

function isFumbleCurse(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_FUMBLE_INDICES.has(pathIdx) : OCT_FUMBLE_INDICES.has(pathIdx)
}

function isShackleCurse(pathIdx: number, boardType: BoardType): boolean {
  return boardType === 'standard' ? STANDARD_SHACKLE_INDICES.has(pathIdx) : OCT_SHACKLE_INDICES.has(pathIdx)
}

// Convert absolute path index → player-relative progress
function absToProgress(absIdx: number, color: string, boardType: BoardType): number {
  const { pathLen } = BOARD_PARAMS[boardType]
  return (absIdx - playerStart(color, boardType) + pathLen) % pathLen
}

// ── Progress encoding ─────────────────────────────────────────
// -1            → base
// 0..pathLen-1  → path (relative steps from player start)
// pathLen+k     → homeCol index k
// pathLen+colLen → finished

export function absolutePathIndex(progress: number, color: string, boardType: BoardType): number {
  const { pathLen } = BOARD_PARAMS[boardType]
  return (playerStart(color, boardType) + progress) % pathLen
}

function stepsToEntry(progress: number, color: string, boardType: BoardType): number {
  const { pathLen } = BOARD_PARAMS[boardType]
  const start = playerStart(color, boardType)
  const entry = homeEntry(color, boardType)
  const entryProgress = (entry - start + pathLen) % pathLen
  return entryProgress - progress + 1
}

// ── Stacking helpers ──────────────────────────────────────────

// Count how many of my pieces are already at `progress` (excluding piece `excludeIdx`)
function stackCount(pieces: PieceState[], progress: number, excludeIdx: number, fin: number): number {
  if (progress < 0 || progress >= fin) return 0
  return pieces.filter((p, i) => i !== excludeIdx && p.progress === progress).length
}

// Returns set of piece indices that are in a merged pair (same progress, on board)
export function getMergedPieceIndices(pieces: PieceState[], fin: number): Set<number> {
  const result = new Set<number>()
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i]
    if (p.progress < 0 || p.progress >= fin) continue
    for (let j = i + 1; j < pieces.length; j++) {
      if (pieces[j].progress === p.progress) {
        result.add(i)
        result.add(j)
      }
    }
  }
  return result
}

// ── Init ──────────────────────────────────────────────────────

export function initGameState(
  playerIds: string[],
  _colors: Record<string, string>,
  _boardType: BoardType,
): GameState {
  const pieces: Record<string, PieceState[]> = {}
  for (const id of playerIds) {
    pieces[id] = [{ progress: -1 }, { progress: -1 }, { progress: -1 }, { progress: -1 }]
  }
  return {
    turnOrder: playerIds,
    currentTurn: 0,
    phase: 'setup',
    diceValue: null,
    consecutiveSixes: 0,
    pieces,
    winner: null,
    pendingCurse: {},
    shackled: {},
    pendingShackle: {},
    setupRolls: {},
  }
}

// ── Setup roll order ──────────────────────────────────────────

function computeSetupTurnOrder(
  playerIds: string[],
  rolls: Record<string, number>,
  colors: Record<string, string>,
  boardType: BoardType,
): string[] {
  // Highest roll wins; tie → earlier in original join order
  let winner = playerIds[0]
  for (const id of playerIds) {
    if ((rolls[id] ?? 0) > (rolls[winner] ?? 0)) winner = id
  }

  // Sort by clockwise board position (playerStart value)
  const sorted = [...playerIds].sort(
    (a, b) => playerStart(colors[a], boardType) - playerStart(colors[b], boardType),
  )

  // Rotate so winner is first
  const wi = sorted.indexOf(winner)
  return [...sorted.slice(wi), ...sorted.slice(0, wi)]
}

export function applySetupRoll(
  gs: GameState,
  playerId: string,
  rollValue: number,
  colors: Record<string, string>,
  boardType: BoardType,
): GameState {
  if (gs.turnOrder[gs.currentTurn] !== playerId) return gs

  const newSetupRolls = { ...(gs.setupRolls ?? {}), [playerId]: rollValue }
  const nextTurn = gs.currentTurn + 1

  if (nextTurn < gs.turnOrder.length) {
    return { ...gs, setupRolls: newSetupRolls, currentTurn: nextTurn }
  }

  // All players rolled — compute final turn order and start game
  const turnOrder = computeSetupTurnOrder(gs.turnOrder, newSetupRolls, colors, boardType)
  return {
    ...gs,
    setupRolls: newSetupRolls,
    phase: 'roll',
    currentTurn: 0,
    consecutiveSixes: 0,
    turnOrder,
  }
}

// ── Blockade helpers ──────────────────────────────────────────

function hasOppBlockade(
  absIdx: number,
  playerId: string,
  allPieces: Record<string, PieceState[]>,
  colors: Record<string, string>,
  pathLen: number,
  boardType: BoardType,
): boolean {
  for (const [oppId, oppPieces] of Object.entries(allPieces)) {
    if (oppId === playerId) continue
    const oppColor = colors[oppId]
    let count = 0
    for (const op of oppPieces) {
      if (op.progress >= 0 && op.progress < pathLen &&
          absolutePathIndex(op.progress, oppColor, boardType) === absIdx) {
        if (++count >= 2) return true
      }
    }
  }
  return false
}

// Returns true if path from `from` to `to` crosses an opponent blockade
// (checks intermediate squares only — landing square checked separately).
function crossesOppBlockade(
  from: number,
  to: number,
  color: string,
  playerId: string,
  allPieces: Record<string, PieceState[]>,
  colors: Record<string, string>,
  boardType: BoardType,
  pathLen: number,
): boolean {
  if (from < 0) return false  // releasing from base: no intermediate squares
  const limit = Math.min(to, pathLen)
  for (let step = from + 1; step < limit; step++) {
    if (hasOppBlockade(absolutePathIndex(step, color, boardType), playerId, allPieces, colors, pathLen, boardType)) return true
  }
  return false
}

// ── Move validation ───────────────────────────────────────────

export interface MoveOption {
  pieceIndex: number
  from: number
  to: number
  forceSplit?: boolean  // true when move is allowed only because of a forced pair separation
  reverse?: boolean     // true when this is a backward move (reverse curse)
}

export function getReverseValidMoves(
  gs: GameState,
  playerId: string,
  roll: number,
  boardType: BoardType,
): MoveOption[] {
  const { pathLen } = BOARD_PARAMS[boardType]
  const myPieces = gs.pieces[playerId]
  const shackledPieces = new Set(gs.shackled?.[playerId] ?? [])
  const moves: MoveOption[] = []

  for (let pi = 0; pi < myPieces.length; pi++) {
    if (shackledPieces.has(pi)) continue
    const from = myPieces[pi].progress
    if (from < 0 || from >= pathLen) continue  // only main-path pieces can reverse
    const to = from - roll < 0 ? -1 : from - roll
    moves.push({ pieceIndex: pi, from, to, reverse: true })
  }

  return moves
}

export function getValidMoves(
  gs: GameState,
  playerId: string,
  roll: number,
  boardType: BoardType,
  mode: GameMode,
  colors: Record<string, string>,
): MoveOption[] {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin      = finished(boardType)
  const myPieces = gs.pieces[playerId]
  const color    = colors[playerId]
  const shackledPieces = new Set(gs.shackled?.[playerId] ?? [])

  const freeOptions: MoveOption[] = []
  const crossOptions: MoveOption[] = []   // cross blockade without landing on it
  const blockedByStack: MoveOption[] = []

  for (let pi = 0; pi < myPieces.length; pi++) {
    if (shackledPieces.has(pi)) continue
    const from = myPieces[pi].progress
    if (from === fin) continue

    // ── Compute destination ──
    let to: number
    if (from === -1) {
      if (roll !== 6) continue
      to = 0
    } else if (from < pathLen) {
      const stepsLeft = stepsToEntry(from, color, boardType)
      if (roll <= stepsLeft) {
        to = from + roll
      } else {
        const over = roll - stepsLeft
        if (over > colLen) continue
        to = over === colLen ? fin : pathLen + (over - 1)
      }
    } else {
      const colIdx = from - pathLen
      const newCol = colIdx + roll
      if (newCol > colLen) continue
      to = newCol === colLen ? fin : pathLen + newCol
    }

    // ── Blockade: can't land on opponent blockade ──
    if (to >= 0 && to < pathLen) {
      const absTo = absolutePathIndex(to, color, boardType)
      if (hasOppBlockade(absTo, playerId, gs.pieces, colors, pathLen, boardType)) continue
    }

    // ── Own stacking limit ──
    const sc = to !== fin ? stackCount(myPieces, to, pi, fin) : 0
    const stackBlocked = sc >= 2

    // ── Blockade: path crosses opponent blockade ──
    const crosses = crossesOppBlockade(from, to, color, playerId, gs.pieces, colors, boardType, pathLen)

    if (crosses) {
      if (!stackBlocked) crossOptions.push({ pieceIndex: pi, from, to })
    } else if (stackBlocked) {
      blockedByStack.push({ pieceIndex: pi, from, to })
    } else {
      freeOptions.push({ pieceIndex: pi, from, to })
    }
  }

  // ── Skull filter (remix) ──
  function skullFilter(opts: MoveOption[]): MoveOption[] {
    if (mode !== 'remix' || opts.length === 0) return opts
    const safe = opts.filter(o =>
      o.to < 0 || o.to >= pathLen || !isSkull(absolutePathIndex(o.to, color, boardType), boardType),
    )
    return safe.length > 0 ? safe : opts
  }

  const finalFree = skullFilter(freeOptions)
  if (finalFree.length > 0) return finalFree

  // ── Cross-blockade moves: only allowed if roll=6 and no free options ──
  if (roll === 6 && crossOptions.length > 0) {
    return skullFilter(crossOptions)
  }

  // ── Force-split: if all moves blocked by stacking, allow merged-pair pieces to break out ──
  if (blockedByStack.length > 0) {
    const merged = getMergedPieceIndices(myPieces, fin)
    if (merged.size > 0) {
      const splits = blockedByStack.filter(m => merged.has(m.pieceIndex))
      if (splits.length > 0) return splits.map(m => ({ ...m, forceSplit: true }))
    }
  }

  return []
}

// ── Apply roll ────────────────────────────────────────────────

export function applyRoll(gs: GameState, roll: number): GameState {
  return { ...gs, phase: 'move', diceValue: roll }
}

// ── Apply move ────────────────────────────────────────────────

export function applyMove(
  gs: GameState,
  playerId: string,
  move: MoveOption,
  boardType: BoardType,
  mode: GameMode,
  colors: Record<string, string>,
): GameState {
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin   = finished(boardType)
  const roll  = gs.diceValue!
  const color = colors[playerId]

  const newPieces = deepCopyPieces(gs.pieces)
  newPieces[playerId][move.pieceIndex].progress = move.to

  // ── Capture ──
  if (move.to >= 0 && move.to < pathLen) {
    const absIdx = absolutePathIndex(move.to, color, boardType)
    if (!isSafe(absIdx, boardType)) {
      for (const [oppId, oppPieces] of Object.entries(newPieces)) {
        if (oppId === playerId) continue
        const oppColor = colors[oppId]
        for (const opp of oppPieces) {
          if (opp.progress < 0 || opp.progress >= pathLen) continue
          if (absolutePathIndex(opp.progress, oppColor, boardType) !== absIdx) continue
          const blockade = oppPieces.filter(
            p => p.progress >= 0 && p.progress < pathLen &&
                 absolutePathIndex(p.progress, oppColor, boardType) === absIdx
          )
          if (blockade.length < 2) opp.progress = -1
        }
      }
    }
  }

  // ── Remix skull ──
  let selfSentHome = false
  if (mode === 'remix' && move.to >= 0 && move.to < pathLen) {
    const absIdx = absolutePathIndex(move.to, color, boardType)
    if (isSkull(absIdx, boardType)) {
      newPieces[playerId][move.pieceIndex].progress = -1
      selfSentHome = true
    }
  }

  // ── Remix powerups (boost / bomb / swap) ──────────────────
  if (mode === 'remix' && !selfSentHome) {
    const curProg = newPieces[playerId][move.pieceIndex].progress
    if (curProg >= 0 && curProg < pathLen) {
      const absLanded = absolutePathIndex(curProg, color, boardType)

      // ── Boost: jump forward 6 more tiles ──
      if (isBoost(absLanded, boardType)) {
        const BOOST = 6
        const stepsLeft = stepsToEntry(curProg, color, boardType)
        let newProg: number
        if (BOOST <= stepsLeft) {
          newProg = curProg + BOOST
        } else {
          const over = BOOST - stepsLeft
          newProg = over <= colLen ? pathLen + (over - 1) : pathLen + colLen - 1
        }
        newPieces[playerId][move.pieceIndex].progress = newProg
        // Capture at boost destination
        if (newProg >= 0 && newProg < pathLen) {
          const boostAbs = absolutePathIndex(newProg, color, boardType)
          if (!isSafe(boostAbs, boardType)) {
            for (const [oppId, oppPieces] of Object.entries(newPieces)) {
              if (oppId === playerId) continue
              const oppColor = colors[oppId]
              for (const opp of oppPieces) {
                if (opp.progress < 0 || opp.progress >= pathLen) continue
                if (absolutePathIndex(opp.progress, oppColor, boardType) !== boostAbs) continue
                const blockade = oppPieces.filter(
                  p => p.progress >= 0 && p.progress < pathLen &&
                       absolutePathIndex(p.progress, oppColor, boardType) === boostAbs,
                )
                if (blockade.length < 2) opp.progress = -1
              }
            }
          }
        }
      }

      // ── Bomb: send all opponents within 3 absolute tiles back to base ──
      else if (isBomb(absLanded, boardType)) {
        const RANGE = 3
        for (const [oppId, oppPieces] of Object.entries(newPieces)) {
          if (oppId === playerId) continue
          const oppColor = colors[oppId]
          for (const opp of oppPieces) {
            if (opp.progress < 0 || opp.progress >= pathLen) continue
            const oppAbs = absolutePathIndex(opp.progress, oppColor, boardType)
            const dist = Math.min(
              Math.abs(oppAbs - absLanded),
              pathLen - Math.abs(oppAbs - absLanded),
            )
            if (dist <= RANGE) opp.progress = -1
          }
        }
      }

      // ── Swap: trade positions with the opponent piece furthest along the path ──
      else if (isSwap(absLanded, boardType)) {
        let bestOppId: string | null = null
        let bestOppIdx = -1
        let bestAbs = -1
        for (const [oppId, oppPieces] of Object.entries(newPieces)) {
          if (oppId === playerId) continue
          const oppColor = colors[oppId]
          oppPieces.forEach((op, opIdx) => {
            if (op.progress < 0 || op.progress >= pathLen) return
            const oppAbs = absolutePathIndex(op.progress, oppColor, boardType)
            if (oppAbs > bestAbs) { bestAbs = oppAbs; bestOppId = oppId; bestOppIdx = opIdx }
          })
        }
        if (bestOppId !== null && bestOppIdx >= 0) {
          const myAbs = absolutePathIndex(curProg, color, boardType)
          newPieces[playerId][move.pieceIndex].progress = absToProgress(bestAbs, color, boardType)
          newPieces[bestOppId][bestOppIdx].progress = absToProgress(myAbs, colors[bestOppId], boardType)
        }
      }
    }
  }

  // ── Curse effects ─────────────────────────────────────────
  const newPendingCurse: Record<string, string[]> = {}
  for (const [k, v] of Object.entries(gs.pendingCurse ?? {})) newPendingCurse[k] = [...v]
  const newShackled: Record<string, number[]>   = { ...(gs.shackled ?? {}) }
  const newPendingShackle: Record<string, number[]> = { ...(gs.pendingShackle ?? {}) }

  // Consume first curse in queue (was active this turn)
  newPendingCurse[playerId] = (newPendingCurse[playerId] ?? []).slice(1)

  // Check if landed on a curse tile
  if (mode === 'remix' && !selfSentHome) {
    const curProg = newPieces[playerId][move.pieceIndex].progress
    if (curProg >= 0 && curProg < pathLen) {
      const absLanded = absolutePathIndex(curProg, color, boardType)
      if (isSkipCurse(absLanded, boardType)) {
        newPendingCurse[playerId] = [...(newPendingCurse[playerId] ?? []), 'skip']
      } else if (isReverseCurse(absLanded, boardType)) {
        newPendingCurse[playerId] = [...(newPendingCurse[playerId] ?? []), 'reverse']
      } else if (isFumbleCurse(absLanded, boardType)) {
        newPendingCurse[playerId] = [...(newPendingCurse[playerId] ?? []), 'fumble']
      } else if (isShackleCurse(absLanded, boardType)) {
        const existing = newPendingShackle[playerId] ?? []
        if (!existing.includes(move.pieceIndex)) {
          newPendingShackle[playerId] = [...existing, move.pieceIndex]
        }
      }
    }
  }

  // ── Win check ──
  let winner = gs.winner
  if (!selfSentHome) {
    if (newPieces[playerId].every(p => p.progress === fin)) winner = playerId
  }

  // ── Next turn ──
  const rolledStar = !selfSentHome && mode === 'remix' && move.to >= 0 && move.to < pathLen
    && isStar(absolutePathIndex(move.to, color, boardType), boardType)

  // Three consecutive sixes are caught in onRollResult before applyMove is ever called.
  const newConsecutiveSixes = roll === 6 ? gs.consecutiveSixes + 1 : 0
  const rollAgain = roll === 6 || rolledStar

  let nextTurn = gs.currentTurn
  let consecutiveSixes = newConsecutiveSixes
  if (winner) {
    consecutiveSixes = 0
  } else if (!rollAgain) {
    nextTurn = (gs.currentTurn + 1) % gs.turnOrder.length
    consecutiveSixes = 0
    // Advance shackles: pending → active (old active already consumed by getValidMoves)
    newShackled[playerId] = newPendingShackle[playerId] ?? []
    delete newPendingShackle[playerId]
  }

  return {
    ...gs,
    pieces: newPieces,
    phase: 'roll',
    diceValue: null,
    currentTurn: nextTurn,
    consecutiveSixes,
    winner,
    pendingCurse: newPendingCurse,
    shackled: newShackled,
    pendingShackle: newPendingShackle,
  }
}

export function skipTurn(gs: GameState): GameState {
  const pid = gs.turnOrder[gs.currentTurn]

  const newPendingCurse: Record<string, string[]> = {}
  for (const [k, v] of Object.entries(gs.pendingCurse ?? {})) newPendingCurse[k] = [...v]
  newPendingCurse[pid] = (newPendingCurse[pid] ?? []).slice(1)

  const newShackled = { ...(gs.shackled ?? {}) }
  const newPendingShackle = { ...(gs.pendingShackle ?? {}) }
  newShackled[pid] = newPendingShackle[pid] ?? []
  delete newPendingShackle[pid]

  return {
    ...gs,
    pendingCurse: newPendingCurse,
    shackled: newShackled,
    pendingShackle: newPendingShackle,
    phase: 'roll',
    diceValue: null,
    consecutiveSixes: 0,
    currentTurn: (gs.currentTurn + 1) % gs.turnOrder.length,
  }
}

function deepCopyPieces(pieces: Record<string, PieceState[]>): Record<string, PieceState[]> {
  const out: Record<string, PieceState[]> = {}
  for (const [id, arr] of Object.entries(pieces)) out[id] = arr.map(p => ({ ...p }))
  return out
}

// ── Blocked piece reasons (for UI indicators) ─────────────────

export function getBlockedPieceReasons(
  gs: GameState,
  playerId: string,
  roll: number,
  boardType: BoardType,
  colors: Record<string, string>,
  validPieceIndices: Set<number>,
): Map<number, 'shackled' | 'blockade'> {
  const result = new Map<number, 'shackled' | 'blockade'>()
  const { pathLen, colLen } = BOARD_PARAMS[boardType]
  const fin = pathLen + colLen
  const myPieces = gs.pieces[playerId]
  const color = colors[playerId]
  const shackledSet = new Set(gs.shackled?.[playerId] ?? [])

  for (let pi = 0; pi < myPieces.length; pi++) {
    if (validPieceIndices.has(pi)) continue
    const from = myPieces[pi].progress
    if (from === fin) continue

    if (shackledSet.has(pi)) {
      result.set(pi, 'shackled')
      continue
    }

    // Compute where this piece would land (ignoring blockade)
    let to: number | null = null
    if (from === -1) {
      if (roll === 6) to = 0
    } else if (from < pathLen) {
      const stepsLeft = stepsToEntry(from, color, boardType)
      if (roll <= stepsLeft) {
        to = from + roll
      } else {
        const over = roll - stepsLeft
        if (over <= colLen) to = pathLen + (over - 1)
      }
    } else {
      const colIdx = from - pathLen
      const newCol = colIdx + roll
      if (newCol <= colLen) to = pathLen + newCol
    }

    if (to === null || to < 0 || to >= pathLen) continue  // no valid move regardless

    const absTo = absolutePathIndex(to, color, boardType)
    if (hasOppBlockade(absTo, playerId, gs.pieces, colors, pathLen, boardType)) {
      result.set(pi, 'blockade')
    }
  }

  return result
}

export type TileType = 'star' | 'skull' | 'boost' | 'bomb' | 'swap' | 'skip' | 'reverse' | 'fumble' | 'shackle'

export function getTileType(absIdx: number, boardType: BoardType): TileType | null {
  if (isStar(absIdx, boardType))         return 'star'
  if (isSkull(absIdx, boardType))        return 'skull'
  if (isBoost(absIdx, boardType))        return 'boost'
  if (isBomb(absIdx, boardType))         return 'bomb'
  if (isSwap(absIdx, boardType))         return 'swap'
  if (isSkipCurse(absIdx, boardType))    return 'skip'
  if (isReverseCurse(absIdx, boardType)) return 'reverse'
  if (isFumbleCurse(absIdx, boardType))  return 'fumble'
  if (isShackleCurse(absIdx, boardType)) return 'shackle'
  return null
}

export { absolutePathIndex as getAbsolutePathIndex, finished as finishedProgress }
export { BOARD_PARAMS }

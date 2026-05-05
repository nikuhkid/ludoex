export type GameMode = 'classic' | 'remix'
export type BoardType = 'standard' | 'octagonal'
export type RoomStatus = 'waiting' | 'playing' | 'finished'

export interface Player {
  id: string
  name: string
  color: PlayerColor
  isHost: boolean
  connected: boolean
  autoBot?: boolean   // true when player is AFK/disconnected and being driven as bot
}

export type PlayerColor =
  | 'red' | 'blue' | 'green' | 'yellow'
  | 'purple' | 'orange' | 'pink' | 'cyan'

export const PLAYER_COLORS: PlayerColor[] = [
  'red', 'blue', 'green', 'yellow',
  'purple', 'orange', 'pink', 'cyan',
]

export const COLOR_HEX: Record<PlayerColor, string> = {
  red:    '#e74c3c',
  blue:   '#3498db',
  green:  '#2ecc71',
  yellow: '#f1c40f',
  purple: '#9b59b6',
  orange: '#e67e22',
  pink:   '#e91e8c',
  cyan:   '#1abc9c',
}

export interface PieceState {
  progress: number  // -1=base, 0..pathLen-1=path index, pathLen..pathLen+colLen-1=homeCol, pathLen+colLen=finished
}

export interface GameState {
  turnOrder: string[]        // playerIds in turn order
  currentTurn: number        // index into turnOrder
  phase: 'setup' | 'roll' | 'move'
  diceValue: number | null
  consecutiveSixes: number
  pieces: Record<string, PieceState[]>  // playerId -> 4 pieces
  winner: string | null      // playerId or null
  pendingCurse?: Record<string, string[]>   // playerId → curse queue ['skip'|'reverse'|'fumble']
  shackled?: Record<string, number[]>      // playerId → [pieceIndices] restricted THIS turn
  pendingShackle?: Record<string, number[]> // playerId → [pieceIndices] shackled this turn, active next
  setupRolls?: Record<string, number>       // playerId → roll during initial order determination
}

export interface Room {
  code: string
  hostId: string
  status: RoomStatus
  mode: GameMode
  boardType: BoardType
  players: Record<string, Player>
  createdAt: number
  gameState?: GameState
}

export type GameMode = 'classic' | 'remix'
export type BoardType = 'standard' | 'octagonal'
export type RoomStatus = 'waiting' | 'playing' | 'finished'

export interface Player {
  id: string
  name: string
  color: PlayerColor
  isHost: boolean
  connected: boolean
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

export interface Room {
  code: string
  hostId: string
  status: RoomStatus
  mode: GameMode
  boardType: BoardType
  players: Record<string, Player>
  createdAt: number
}

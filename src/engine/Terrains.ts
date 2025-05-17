export enum TerrainName {
  None = 'none',
  Electric = 'electric',
  Grassy = 'grassy',
  Misty = 'misty',
  Psychic = 'psychic',
}

export interface TerrainEffect {
  modifyPower?: (move: import('./Interfaces').MoveData) => number
}

export const TERRAINS: Record<TerrainName, TerrainEffect> = {
  [TerrainName.None]: {},
  [TerrainName.Electric]: {
    modifyPower: (move) => (move.type === 'Electric' ? 1.3 : 1),
  },
  [TerrainName.Grassy]: {
    modifyPower: (move) => (move.type === 'Grass' ? 1.3 : 1),
  },
  [TerrainName.Misty]: {
    modifyPower: (move) => (move.type === 'Dragon' ? 0.5 : 1),
  },
  [TerrainName.Psychic]: {
    modifyPower: (move) => (move.type === 'Psychic' ? 1.3 : 1),
  },
}


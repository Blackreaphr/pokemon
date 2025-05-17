export enum TerrainName {
  None = 'none',
  Grassy = 'grassy',
  Electric = 'electric',
  Psychic = 'psychic',
  Misty = 'misty',
}

export interface TerrainEffect {}

export const TERRAINS: Record<TerrainName, TerrainEffect> = {
  [TerrainName.None]: {},
  [TerrainName.Grassy]: {},
  [TerrainName.Electric]: {},
  [TerrainName.Psychic]: {},
  [TerrainName.Misty]: {},
}


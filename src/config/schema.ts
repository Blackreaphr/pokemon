export interface Move {
  name: string
  type: string
  power: number | null
  accuracy: number | null
  pp: number
  category: 'Physical' | 'Special' | 'Status'
  priority: number
  flags: {
    contact: boolean
    protect: boolean
    sound: boolean
    punch: boolean
  }
}

export interface PokemonEntry {
  name: string
  types: [string, string?]
  stats: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number }
  abilities: [string, string?]
  weight: number
}

export interface AbilityEntry {
  name: string
  effect: string
}

export interface AiPreset {
  predictionDepth: number
  riskTolerance: number
  autoSwitchPercent: number
  tiltFactor: number
}

export interface BattleSettings {
  levelCap: number
  clauseSet: string[]
  critMultiplier: number
  gen: number
  rngSeed: number
}

export interface MetaPreset {
  bannedPokemon?: string[]
  itemRestrictions?: string[]
  levelCap?: number
  randomTeams?: boolean
}

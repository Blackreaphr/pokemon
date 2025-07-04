/**
 * Shared interfaces for the battle engine.
 */

export interface Stats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface MoveData {
  name: string
  type: string
  power: number
  accuracy: number
  pp: number
  priority?: number
  effect?: (user: any, target: any) => void
}

/** Representation of temporary stat modifiers. */
export interface StatStages {
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

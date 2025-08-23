/**
 * Shared interfaces for the battle engine.
 */

import type { Pokemon } from './Pokemon'

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
  /** Optional side effect executed after dealing damage. */
  effect?: (user: Pokemon, target: Pokemon) => void
}

/** Representation of temporary stat modifiers. */
export interface StatStages {
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

/**
 * Status conditions and their behaviors.
 */

export enum StatusName {
  Burn = 'burn',
  Poison = 'poison',
  Paralysis = 'paralysis',
  Sleep = 'sleep',
  Freeze = 'freeze',
}

import type { Pokemon } from './Pokemon'

export interface StatusEffect {
  onBeforeMove?: (pokemon: Pokemon) => boolean
  onAfterTurn?: (pokemon: Pokemon) => void
}

export const STATUS_EFFECTS: Record<StatusName, StatusEffect> = {
  [StatusName.Burn]: {
    onAfterTurn(pokemon) {
      pokemon.receiveDamage(Math.floor(pokemon.stats.hp / 8))
    },
  },
  [StatusName.Poison]: {
    onAfterTurn(pokemon) {
      pokemon.receiveDamage(Math.floor(pokemon.stats.hp / 8))
    },
  },
  [StatusName.Paralysis]: {
    onBeforeMove() {
      return Math.random() < 0.25
    },
  },
  [StatusName.Sleep]: {
    onBeforeMove() {
      return true
    },
  },
  [StatusName.Freeze]: {
    onBeforeMove() {
      return true
    },
  },
}

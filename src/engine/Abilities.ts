/**
 * Pokemon abilities that trigger under certain conditions.
 */

import type { Pokemon } from './Pokemon'
import type { MoveData } from './Interfaces'

export interface Ability {
  readonly name: string
  onStart?: (pokemon: Pokemon) => void
  onBeforeMove?: (pokemon: Pokemon, move: MoveData) => void
  onAfterMove?: (pokemon: Pokemon, move: MoveData) => void
  modifyDamage?: (
    pokemon: Pokemon,
    move: MoveData,
    target: Pokemon,
    damage: number
  ) => number
}

export const ABILITIES: Record<string, Ability> = {
  Overgrow: {
    name: 'Overgrow',
    modifyDamage(pokemon, move, _target, damage) {
      if (move.type === 'Grass' && pokemon.currentHP <= pokemon.stats.hp / 3) {
        return Math.floor(damage * 1.5)
      }
      return damage
    },
  },
  Blaze: {
    name: 'Blaze',
    modifyDamage(pokemon, move, _target, damage) {
      if (move.type === 'Fire' && pokemon.currentHP <= pokemon.stats.hp / 3) {
        return Math.floor(damage * 1.5)
      }
      return damage
    },
  },
  Torrent: {
    name: 'Torrent',
    modifyDamage(pokemon, move, _target, damage) {
      if (move.type === 'Water' && pokemon.currentHP <= pokemon.stats.hp / 3) {
        return Math.floor(damage * 1.5)
      }
      return damage
    },
  },
}

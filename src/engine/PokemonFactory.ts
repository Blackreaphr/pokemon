/**
 * Factory utilities for creating Pokemon instances.
 */

import { Pokemon } from './Pokemon'
import type { Stats } from './Interfaces'
import { DEFAULT_LEVEL } from './Constants'

export class PokemonFactory {
  /** Create a basic Pokemon with given stats. */
  static create(name: string, stats: Stats, level = DEFAULT_LEVEL): Pokemon {
    return new Pokemon(name, stats, level)
  }

  /** TODO: generate random legal Pokemon across generations. */
  static random(): Pokemon {
    return new Pokemon('MissingNo', { hp: 1, attack: 1, defense: 1, specialAttack: 1, specialDefense: 1, speed: 1 })
  }
}


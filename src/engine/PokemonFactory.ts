/**
 * Factory utilities for creating Pokemon instances.
 */

import { Pokemon } from './Pokemon'
import type { Stats } from './Interfaces'
import type { TypeName } from './Types'
import { DEFAULT_LEVEL } from './Constants'

export class PokemonFactory {
  /** Create a basic Pokemon with given stats. */
  static create(
    name: string,
    stats: Stats,
    types: TypeName[],
    level = DEFAULT_LEVEL
  ): Pokemon {
    return new Pokemon(name, stats, types, level)
  }

  /** TODO: generate random legal Pokemon across generations. */
  static random(): Pokemon {
    const sampleStats: Stats = {
      hp: 35,
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    }
    return new Pokemon('Eevee', sampleStats, ['Normal'])
  }
}


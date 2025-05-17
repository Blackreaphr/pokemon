/**
 * Factory utilities for creating Pokemon instances.
 */

import { Pokemon } from './Pokemon'
import type { Stats } from './Interfaces'
import type { TypeName } from './Types'
import { DEFAULT_LEVEL } from './Constants'

const POKEDEX: { name: string; stats: Stats; types: TypeName[] }[] = [
  {
    name: 'Pikachu',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    types: ['Electric'],
  },
  {
    name: 'Bulbasaur',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    types: ['Grass'],
  },
]

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

  /** Return a random Pokemon from the tiny built-in dex. */
  static random(rng: () => number = Math.random): Pokemon {
    const idx = Math.floor(rng() * POKEDEX.length)
    const base = POKEDEX[idx]
    return new Pokemon(base.name, base.stats, base.types)
  }
}


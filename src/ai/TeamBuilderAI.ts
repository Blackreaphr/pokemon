/**
 * Very small team builder using MetaKnowledge entries.
 */

import { PokemonFactory } from '../engine/PokemonFactory'
import { MetaKnowledge } from './MetaKnowledge'

export class TeamBuilderAI {
  build(names: string[]): any[] {
    return names.map((n) => {
      const meta = MetaKnowledge.lookup(n)
      return PokemonFactory.create(n, { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 }, ['Normal'], meta?.item)
    })
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('TeamBuilderAI.ts')) {
  const team = new TeamBuilderAI().build(['Garchomp'])
  console.assert(team[0].name === 'Garchomp')
  console.log('TeamBuilderAI tests passed')
}


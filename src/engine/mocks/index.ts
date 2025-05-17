import { BattleState } from '../BattleState'
import { PokemonFactory } from '../PokemonFactory'

/** Create a simple mock BattleState with two Pokemon. */
export function createMockState(): BattleState {
  const p1 = PokemonFactory.create('Pikachu', { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 }, ['Electric'])
  const p2 = PokemonFactory.create('Bulbasaur', { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 }, ['Grass'])
  return new BattleState([p1], [p2])
}

export const mockState = createMockState()

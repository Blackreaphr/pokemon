/**
 * Orchestrates the flow of a Pokemon battle.
 */

import { BattleState } from './BattleState'
import { BattleCalculator } from './BattleCalculator'
import type { MoveData } from './Interfaces'
import type { Pokemon } from './Pokemon'
import { WEATHERS } from './Weather'
import { MOVES } from './Moves'
import { PokemonFactory } from './PokemonFactory'

export class BattleEngine {
  state: BattleState
  calculator: BattleCalculator

  constructor(state = new BattleState(), calculator = new BattleCalculator()) {
    this.state = state
    this.calculator = calculator
  }

  /** Execute a turn in the battle. */
  takeTurn(move1: MoveData, move2: MoveData): void {
    const p1 = this.state.active1
    const p2 = this.state.active2
    if (!p1 || !p2) return

    const first: { user: Pokemon; move: MoveData; target: Pokemon } =
      p1.stats.speed >= p2.stats.speed
        ? { user: p1, move: move1, target: p2 }
        : { user: p2, move: move2, target: p1 }
    const second: { user: Pokemon; move: MoveData; target: Pokemon } =
      first.user === p1
        ? { user: p2, move: move2, target: p1 }
        : { user: p1, move: move1, target: p2 }

    this.executeMove(first.user, first.target, first.move)
    if (!first.target.isFainted()) {
      this.executeMove(second.user, second.target, second.move)
    }

    this.applyResidualEffects()
    this.state.turn++
  }

  /** Determine the winner and end the battle. */
  endBattle(): void {
    if (this.state.active1?.isFainted()) {
      this.state.active1 = null
    }
    if (this.state.active2?.isFainted()) {
      this.state.active2 = null
    }
  }

  private executeMove(user: Pokemon, target: Pokemon, move: MoveData): void {
    let damage = BattleCalculator.calculateDamage(
      user,
      target,
      move,
      this.state.weather,
      this.state.terrain
    )
    if (user.ability?.modifyDamage) {
      damage = user.ability.modifyDamage(user, move, target, damage)
    }
    target.receiveDamage(damage)
  }

  private applyResidualEffects(): void {
    for (const mon of [this.state.active1, this.state.active2]) {
      if (!mon || mon.isFainted()) continue
      const weatherEffect = WEATHERS[this.state.weather]
      weatherEffect.onResidual?.(mon)
    }
  }
}

// Simple demo when executed directly with ts-node
if (process.argv[1] && process.argv[1].endsWith('BattleEngine.ts')) {
  const pikachu = PokemonFactory.create(
    'Pikachu',
    { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    ['Electric']
  )
  const bulbasaur = PokemonFactory.create(
    'Bulbasaur',
    { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    ['Grass']
  )
  const engine = new BattleEngine(new BattleState([pikachu], [bulbasaur]))
  console.log('Start demo battle!')
  while (engine.state.active1 && engine.state.active2) {
    engine.takeTurn(MOVES.Tackle, MOVES.Tackle)
    console.log(
      `Turn ${engine.state.turn}: Pikachu ${pikachu.currentHP} HP vs Bulbasaur ${bulbasaur.currentHP} HP`
    )
    if (pikachu.isFainted() || bulbasaur.isFainted()) engine.endBattle()
  }
  console.log('Battle finished.')
}

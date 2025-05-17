/**
 * Orchestrates the flow of a Pokemon battle.
 */

import { BattleState } from './BattleState'
import { BattleCalculator } from './BattleCalculator'
import type { MoveData } from './Interfaces'
import type { Pokemon } from './Pokemon'
import { WEATHERS } from './Weather'

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

    const weather = WEATHERS[this.state.weather]
    if (weather?.onTurnEnd) {
      weather.onTurnEnd(this.state)
    }

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
}

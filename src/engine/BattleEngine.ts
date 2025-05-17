/**
 * Orchestrates the flow of a Pokemon battle.
 */

import { BattleState } from './BattleState'
import { BattleCalculator } from './BattleCalculator'

export class BattleEngine {
  state: BattleState
  calculator: BattleCalculator

  constructor(state = new BattleState(), calculator = new BattleCalculator()) {
    this.state = state
    this.calculator = calculator
  }

  /** Execute a turn in the battle. */
  takeTurn(): void {
    this.state.turn++
    // TODO: integrate move selection and damage calculation
  }

  /** Determine the winner and end the battle. */
  endBattle(): void {
    // TODO
  }
}

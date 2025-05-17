/**
 * Contains combat formulas such as damage and accuracy.
 */

import type { Pokemon } from './Pokemon'
import type { MoveData } from './Interfaces'

export class BattleCalculator {
  /** Calculate damage from an attacker using a move on a defender. */
  static calculateDamage(attacker: Pokemon, defender: Pokemon, move: MoveData): number {
    // Placeholder damage formula
    return move.power
  }
}

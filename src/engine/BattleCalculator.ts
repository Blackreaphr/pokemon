/**
 * Contains combat formulas such as damage and accuracy.
 */

import type { Pokemon } from './Pokemon'
import type { MoveData } from './Interfaces'
import type { TypeName } from './Types'
import { TYPE_CHART } from './Types'
import { CRIT_CHANCE, CRIT_MOD, STAB_MOD } from './Constants'
import { randInt } from './Utils'

export class BattleCalculator {
  /** Calculate damage from an attacker using a move on a defender. */
  static calculateDamage(attacker: Pokemon, defender: Pokemon, move: MoveData): number {
    const levelFactor = (2 * attacker.level) / 5 + 2
    const attack = attacker.stats.attack
    const defense = defender.stats.defense
    let base = Math.floor(((levelFactor * move.power * attack) / defense) / 50) + 2

    // Same-type attack bonus
    if (attacker.types.includes(move.type as TypeName)) {
      base = Math.floor(base * STAB_MOD)
    }

    const typeMult = BattleCalculator.getTypeMultiplier(
      move.type as TypeName,
      defender.types
    )
    base = Math.floor(base * typeMult)

    // Critical hits
    if (Math.random() < CRIT_CHANCE) {
      base = Math.floor(base * CRIT_MOD)
    }

    const random = randInt(85, 100) / 100
    return Math.max(1, Math.floor(base * random))
  }

  static getTypeMultiplier(attacking: TypeName, defending: TypeName[]): number {
    return defending.reduce((mult, type) => {
      const row = TYPE_CHART[attacking]
      if (row && row[type] !== undefined) {
        mult *= row[type] as number
      }
      return mult
    }, 1)
  }
}

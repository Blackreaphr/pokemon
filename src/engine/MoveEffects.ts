/**
 * Implementation of move side effects.
 */

import type { Pokemon } from './Pokemon'
import { MAX_STAT_STAGE } from './Constants'

export type MoveEffect = (user: Pokemon, target: Pokemon) => void

export const MOVE_EFFECTS: Record<string, MoveEffect> = {
  Drain: (user, target) => {
    const drain = Math.floor(target.stats.hp / 8)
    target.receiveDamage(drain)
    user.heal(drain)
  },
  BoostAttack: (user) => {
    user.boostStat('attack', 1)
  },
}

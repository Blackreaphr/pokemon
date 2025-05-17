/**
 * Evaluates whether switching Pokemon is favorable.
 */

import type { Pokemon } from '../engine/Pokemon'
import { BattleState } from '../engine/BattleState'

export interface SwitchScore {
  best: Pokemon
  score: number
}

export class SwitchEvaluator {
  /** Simple heuristic: prefer the healthiest reserve Pokemon. */
  scoreSwitch(active: Pokemon, opponent: Pokemon, state: BattleState): SwitchScore {
    let best: Pokemon | null = null
    let bestScore = -Infinity
    for (const mon of state.team1) {
      if (mon === active || mon.isFainted()) continue
      const score = mon.currentHP
      if (score > bestScore) {
        bestScore = score
        best = mon
      }
    }
    return { best: best ?? active, score: bestScore }
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('SwitchEvaluator.ts')) {
  const p1 = { currentHP: 20, isFainted: () => false } as Pokemon
  const p2 = { currentHP: 50, isFainted: () => false } as Pokemon
  const state = new BattleState([p1, p2], [])
  const evalr = new SwitchEvaluator()
  const res = evalr.scoreSwitch(p1, {} as Pokemon, state)
  console.assert(res.best === p2, 'should switch to healthiest')
  console.log('SwitchEvaluator tests passed')
}


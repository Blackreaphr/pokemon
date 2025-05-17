/**
 * Maintains a basic battle game plan.
 */

import { BattleState } from '../engine/BattleState'

export type Plan = 'hyper' | 'balanced' | 'stall'

export class GamePlan {
  private plan: Plan

  constructor(format: string) {
    this.plan = 'balanced'
  }

  updatePlan(state: BattleState, risk: number): void {
    if (risk > 1.1) this.plan = 'stall'
    else if (risk < 0.9) this.plan = 'hyper'
    else this.plan = 'balanced'
  }

  get current(): Plan {
    return this.plan
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('GamePlan.ts')) {
  const gp = new GamePlan('singles')
  gp.updatePlan({} as BattleState, 1.2)
  console.assert(gp.current === 'stall', 'plan updates')
  console.log('GamePlan tests passed')
}


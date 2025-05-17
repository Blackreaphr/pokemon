/**
 * Combines prediction output and battle state to gauge risk.
 */

import { BattleState } from '../engine/BattleState'

export class RiskAssessment {
  evaluateRisk(state: BattleState, predictions: Record<string, number>): number {
    const oppHP = state.active2?.currentHP ?? 0
    const myHP = state.active1?.currentHP ?? 0
    const aggression = oppHP > myHP ? 1.2 : 0.8
    const variance = Object.values(predictions).reduce((a, b) => a + b * (1 - b), 0)
    return aggression * (1 + variance)
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('RiskAssessment.ts')) {
  const risk = new RiskAssessment().evaluateRisk({ active1: { currentHP: 30 }, active2: { currentHP: 40 } } as any, { Tackle: 1 })
  console.assert(risk > 1, 'opponent ahead => risk > 1')
  console.log('RiskAssessment tests passed')
}


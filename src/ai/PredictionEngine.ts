/**
 * Naive opponent action prediction using move history frequencies.
 */

import { BattleState } from '../engine/BattleState'

export class PredictionEngine {
  private history: Record<string, number> = {}

  /** Record the opponent's last move for future predictions. */
  record(move: string): void {
    this.history[move] = (this.history[move] || 0) + 1
  }

  /**
   * Predict probability distribution over opponent moves.
   * @returns Map of move name to probability
   */
  predictOpponent(state: BattleState): Record<string, number> {
    const total = Object.values(this.history).reduce((a, b) => a + b, 0)
    if (total === 0) return {}
    const dist: Record<string, number> = {}
    for (const [move, count] of Object.entries(this.history)) {
      dist[move] = count / total
    }
    return dist
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('PredictionEngine.ts')) {
  const engine = new PredictionEngine()
  engine.record('Tackle')
  engine.record('Tackle')
  engine.record('Growl')
  const dist = engine.predictOpponent({} as BattleState)
  console.assert(Math.abs(dist.Tackle - 2 / 3) < 1e-6, 'Tackle prob')
  console.log('PredictionEngine tests passed')
}


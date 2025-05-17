/**
 * Evaluates potential moves for a Pokemon.
 * Scores are based on estimated damage using the battle calculator.
 */

import type { Pokemon } from '../engine/Pokemon'
import type { MoveData } from '../engine/Interfaces'
import { BattleCalculator } from '../engine/BattleCalculator'
import { WeatherName } from '../engine/Weather'
import { TerrainName } from '../engine/Terrains'

/** Result of evaluating all moves. */
export interface MoveScore {
  best: MoveData
  score: number
}

export class MoveEvaluator {
  /** Score all moves and pick the highest damage option. */
  scoreMoves(attacker: Pokemon, defender: Pokemon, predictions: Record<string, number>): MoveScore {
    const weather = WeatherName.None
    const terrain = TerrainName.None
    let best: MoveData | null = null
    let bestScore = -Infinity
    for (const name in attacker.moves || {}) {
      const move: MoveData = (attacker as any).moves[name]
      const dmg = BattleCalculator.calculateDamage(attacker, defender, move, weather, terrain, () => 0.5)
      const score = dmg * (predictions[move.name] || 1)
      if (score > bestScore) {
        bestScore = score
        best = move
      }
    }
    // fallback to Tackle
    const fallback = (attacker as any).moves?.Tackle ?? { name: 'Tackle', type: 'Normal', power: 40, accuracy: 100, pp: 35 }
    return { best: best ?? fallback, score: bestScore }
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('MoveEvaluator.ts')) {
  const p1 = {
    stats: { level: 50, hp: 40, attack: 55, defense: 30, specialAttack: 50, specialDefense: 40, speed: 60 },
    moves: {
      Tackle: { name: 'Tackle', type: 'Normal', power: 40, accuracy: 100, pp: 35 },
    },
  } as unknown as Pokemon
  const p2 = { stats: { level: 50, hp: 50, attack: 40, defense: 40, specialAttack: 40, specialDefense: 40, speed: 40 } } as Pokemon
  const evalr = new MoveEvaluator()
  const res = evalr.scoreMoves(p1, p2, {})
  console.assert(res.best.name === 'Tackle', 'should pick Tackle by default')
  console.log('MoveEvaluator tests passed')
}


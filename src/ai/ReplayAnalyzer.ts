/**
 * Parses simplified Showdown replay JSON for statistics.
 */

import fs from 'fs'
import { AdaptiveLearning } from './AdaptiveLearning'

export class ReplayAnalyzer {
  static analyze(pathToReplay: string): void {
    const data = JSON.parse(fs.readFileSync(pathToReplay, 'utf8'))
    const won = data.winner === data.player
    const learner = new AdaptiveLearning()
    learner.record(won)
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('ReplayAnalyzer.ts')) {
  const tmp = 'tmpReplay.json'
  fs.writeFileSync(tmp, JSON.stringify({ player: 'me', winner: 'me' }))
  ReplayAnalyzer.analyze(tmp)
  fs.unlinkSync(tmp)
  console.log('ReplayAnalyzer tests passed')
}


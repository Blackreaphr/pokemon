/**
 * Learns from battle outcomes and persists to data/ai-memory.json.
 */

import fs from 'fs'
import path from 'path'

const FILE = path.resolve('data', 'ai-memory.json')

export interface Memory {
  games: number
  wins: number
}

export class AdaptiveLearning {
  memory: Memory

  constructor() {
    if (fs.existsSync(FILE)) {
      this.memory = JSON.parse(fs.readFileSync(FILE, 'utf8'))
    } else {
      this.memory = { games: 0, wins: 0 }
    }
  }

  record(win: boolean): void {
    this.memory.games++
    if (win) this.memory.wins++
    fs.mkdirSync(path.dirname(FILE), { recursive: true })
    fs.writeFileSync(FILE, JSON.stringify(this.memory))
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('AdaptiveLearning.ts')) {
  const a = new AdaptiveLearning()
  a.record(true)
  console.assert(a.memory.games >= 1)
  console.log('AdaptiveLearning tests passed')
}


/**
 * Simple opponent behavior profiler.
 */

export type Profile = 'aggressive' | 'conservative'

export class OpponentProfiler {
  private aggression = 0
  private turns = 0

  record(attackUsed: boolean): void {
    this.turns++
    if (attackUsed) this.aggression++
  }

  get profile(): Profile {
    if (this.turns === 0) return 'conservative'
    return this.aggression / this.turns > 0.6 ? 'aggressive' : 'conservative'
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('OpponentProfiler.ts')) {
  const p = new OpponentProfiler()
  p.record(true)
  p.record(false)
  p.record(true)
  console.assert(p.profile === 'aggressive')
  console.log('OpponentProfiler tests passed')
}


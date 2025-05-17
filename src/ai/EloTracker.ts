/**
 * Basic Elo tracker adjusting rating after battles.
 */

export class EloTracker {
  rating: number
  rd: number

  constructor(rating = 1500, rd = 350) {
    this.rating = rating
    this.rd = rd
  }

  update(result: 1 | 0): void {
    const k = 32
    const expected = 1 / (1 + Math.pow(10, (-this.rating + 1500) / 400))
    this.rating = this.rating + k * (result - expected)
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].endsWith('EloTracker.ts')) {
  const elo = new EloTracker()
  elo.update(1)
  console.assert(elo.rating > 1500)
  console.log('EloTracker tests passed')
}


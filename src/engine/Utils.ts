/**
 * Miscellaneous helper functions for the battle engine.
 */

/** Deterministic linear congruential generator for predictable randomness. */
export class LCG {
  private seed: number

  constructor(seed = Date.now() % 2147483647) {
    this.seed = seed
  }

  /**
   * Generate the next pseudo random number in [0, 1).
   */
  next(): number {
    this.seed = (this.seed * 48271) % 2147483647
    return this.seed / 2147483647
  }
}

/** Generate a random integer between min and max inclusive using provided RNG. */
export function randInt(min: number, max: number, rng: () => number = Math.random): number {
  return Math.floor(rng() * (max - min + 1)) + min
}

/** Shuffle an array in place. */
export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(0, i)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

import { describe, it, expect } from 'vitest'
import { LCG, randInt, shuffle } from '../Utils'

describe('LCG', () => {
  it('generates deterministic sequence with same seed', () => {
    const lcg1 = new LCG(1)
    const lcg2 = new LCG(1)
    const values1 = [lcg1.next(), lcg1.next(), lcg1.next()]
    const values2 = [lcg2.next(), lcg2.next(), lcg2.next()]
    expect(values1).toEqual(values2)
  })
})

describe('randInt', () => {
  it('generates numbers in inclusive range', () => {
    const rng = () => 0.5
    const num = randInt(1, 3, rng)
    expect(num).toBe(2)
  })
})

describe('shuffle', () => {
  it('shuffles array elements', () => {
    const arr = [1, 2, 3]
    const shuffled = shuffle([...arr])
    expect(shuffled.sort()).toEqual(arr)
  })
})

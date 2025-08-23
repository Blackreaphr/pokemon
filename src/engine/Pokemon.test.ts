import { describe, expect, test } from 'vitest'
import { Pokemon } from './Pokemon'
import type { Stats } from './Interfaces'

describe('Pokemon class', () => {
  test('receives damage and faints correctly', () => {
    const stats: Stats = {
      hp: 10,
      attack: 10,
      defense: 10,
      specialAttack: 10,
      specialDefense: 10,
      speed: 10,
    }
    const mon = new Pokemon('Testmon', stats, ['Normal'])
    expect(mon.currentHP).toBe(10)
    mon.receiveDamage(5)
    expect(mon.currentHP).toBe(5)
    mon.receiveDamage(5)
    expect(mon.isFainted()).toBe(true)
  })
})

/**
 * Runtime representation of the current battle state.
 */

import type { Pokemon } from './Pokemon'

export class BattleState {
  turn = 0
  party1: Pokemon[] = []
  party2: Pokemon[] = []

  constructor() {}
}

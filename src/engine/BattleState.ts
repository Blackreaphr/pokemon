/**
 * Runtime representation of the current battle state.
 */

import type { Pokemon } from './Pokemon'
import { WeatherName } from './Weather'
import { TerrainName } from './Terrains'

export class BattleState {
  turn = 0
  party1: Pokemon[] = []
  party2: Pokemon[] = []
  active1: Pokemon | null = null
  active2: Pokemon | null = null
  weather: WeatherName = WeatherName.Clear
  terrain: TerrainName = TerrainName.None

  constructor(party1: Pokemon[] = [], party2: Pokemon[] = []) {
    this.party1 = party1
    this.party2 = party2
    this.active1 = party1[0] ?? null
    this.active2 = party2[0] ?? null
  }
}

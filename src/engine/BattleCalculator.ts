/**
 * Contains combat formulas such as damage and accuracy.
 */

import type { Pokemon } from './Pokemon'
import type { MoveData } from './Interfaces'
import type { TypeName } from './Types'
import { TYPE_CHART } from './Types'
import { WeatherName } from './Weather'
import { TerrainName } from './Terrains'
import { CRIT_CHANCE, CRIT_MOD, STAB_MOD } from './Constants'
import { randInt } from './Utils'

export class BattleCalculator {
  /**
   * Calculate damage from an attacker using a move on a defender.
   * @param attacker The attacking Pokemon
   * @param defender The defending Pokemon
   * @param move The move being used
   * @param weather Current weather condition
   * @param terrain Current terrain condition
   * @param rng Random number generator for deterministic results
   */
  static calculateDamage(
    attacker: Pokemon,
    defender: Pokemon,
    move: MoveData,
    weather: WeatherName,
    terrain: TerrainName,
    rng: () => number = Math.random
  ): number {
    const levelFactor = (2 * attacker.level) / 5 + 2
    const attack = attacker.stats.attack
    const defense = defender.stats.defense
    let base = Math.floor(((levelFactor * move.power * attack) / defense) / 50) + 2

    if (attacker.types.includes(move.type as TypeName)) {
      base = Math.floor(base * STAB_MOD)
    }

    const typeMult = this.getTypeMultiplier(move.type as TypeName, defender.types)
    base = Math.floor(base * typeMult)

    base = Math.floor(
      base * this.getWeatherTerrainMod(move.type as TypeName, weather, terrain)
    )

    if (rng() < CRIT_CHANCE) {
      base = Math.floor(base * CRIT_MOD)
    }

    const random = randInt(85, 100, rng) / 100
    return Math.max(1, Math.floor(base * random))
  }

  static getTypeMultiplier(attacking: TypeName, defending: TypeName[]): number {
    return defending.reduce((mult, type) => {
      const row = TYPE_CHART[attacking]
      if (row && row[type] !== undefined) {
        mult *= row[type] as number
      }
      return mult
    }, 1)
  }

  private static getWeatherTerrainMod(
    type: TypeName,
    weather: WeatherName,
    terrain: TerrainName
  ): number {
    let mod = 1
    if (weather === WeatherName.Rain) {
      if (type === 'Water') mod *= 1.5
      if (type === 'Fire') mod *= 0.5
    } else if (weather === WeatherName.Sun) {
      if (type === 'Fire') mod *= 1.5
      if (type === 'Water') mod *= 0.5
    }

    if (terrain === TerrainName.Grassy && type === 'Grass') mod *= 1.3
    if (terrain === TerrainName.Electric && type === 'Electric') mod *= 1.3
    if (terrain === TerrainName.Psychic && type === 'Psychic') mod *= 1.3
    if (terrain === TerrainName.Misty && type === 'Dragon') mod *= 0.5

    return mod
  }
}

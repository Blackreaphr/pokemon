/**
 * Core Pokemon class representing a combatant.
 */

import type { Stats, StatStages } from './Interfaces'
import type { TypeName } from './Types'
import type { Ability } from './Abilities'
import type { StatusName } from './Statuses'
import { DEFAULT_LEVEL, MAX_STAT_STAGE } from './Constants'

export class Pokemon {
  readonly name: string
  level: number
  stats: Stats
  readonly types: TypeName[]
  ability?: Ability
  currentHP: number
  statStages: StatStages

  status?: StatusName

  constructor(
    name: string,
    stats: Stats,
    types: TypeName[],
    level = DEFAULT_LEVEL,
    ability?: Ability
  ) {
    this.name = name
    this.level = level
    this.stats = stats
    this.types = types
    this.ability = ability
    this.currentHP = stats.hp
    this.statStages = {
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    }
    this.status = undefined

  }

  /** True if the Pokemon has fainted. */
  isFainted(): boolean {
    return this.currentHP <= 0
  }

  /** Apply damage and return the final HP remaining. */
  receiveDamage(amount: number): number {
    this.currentHP = Math.max(0, this.currentHP - Math.floor(amount))
    return this.currentHP
  }

  heal(amount: number): number {
    this.currentHP = Math.min(this.stats.hp, this.currentHP + Math.floor(amount))
    return this.currentHP
  }

  /** Increase a stat stage, respecting the maximum stage cap. */
  boostStat(stat: keyof StatStages, amount: number): void {
    this.statStages[stat] = Math.min(
      MAX_STAT_STAGE,
      this.statStages[stat] + amount
    )
  }
}

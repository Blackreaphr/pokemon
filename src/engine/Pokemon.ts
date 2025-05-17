/**
 * Core Pokemon class representing a combatant.
 */

import type { Stats } from './Interfaces'
import { DEFAULT_LEVEL } from './Constants'

export class Pokemon {
  readonly name: string
  level: number
  stats: Stats

  constructor(name: string, stats: Stats, level = DEFAULT_LEVEL) {
    this.name = name
    this.level = level
    this.stats = stats
  }
}

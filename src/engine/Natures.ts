import type { Stats } from "./Interfaces"
/**
 * Pokemon natures that modify stats.
 */

export interface NatureEffect {
  readonly increase: keyof Stats
  readonly decrease: keyof Stats
}

export const NATURES: Record<string, NatureEffect> = {
  Hardy: { increase: 'attack', decrease: 'attack' },
  Lonely: { increase: 'attack', decrease: 'defense' },
  Brave: { increase: 'attack', decrease: 'speed' },
  Bold: { increase: 'defense', decrease: 'attack' },
  Timid: { increase: 'speed', decrease: 'attack' },
}

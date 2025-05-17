/**
 * Static move metadata.
 */

import type { MoveData } from './Interfaces'
import { MOVE_EFFECTS } from './MoveEffects'

export const MOVES: Record<string, MoveData> = {
  Tackle: { name: 'Tackle', type: 'Normal', power: 40, accuracy: 100, pp: 35 },
  Ember: { name: 'Ember', type: 'Fire', power: 40, accuracy: 100, pp: 25 },
  VineWhip: { name: 'Vine Whip', type: 'Grass', power: 45, accuracy: 100, pp: 25 },
  WaterGun: { name: 'Water Gun', type: 'Water', power: 40, accuracy: 100, pp: 25 },
  Absorb: {
    name: 'Absorb',
    type: 'Grass',
    power: 20,
    accuracy: 100,
    pp: 25,
    effect: MOVE_EFFECTS.Drain,
  },
}

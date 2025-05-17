/**
 * Static move metadata.
 */

import type { MoveData } from './Interfaces'

export const MOVES: Record<string, MoveData> = {
  Tackle: { name: 'Tackle', type: 'Normal', power: 40, accuracy: 100, pp: 35 },
  Ember: { name: 'Ember', type: 'Fire', power: 40, accuracy: 100, pp: 25 },
  // ...others trimmed
}

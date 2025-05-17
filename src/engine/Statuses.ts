/**
 * Status conditions and their behaviors.
 */

export enum StatusName {
  Burn = 'burn',
  Poison = 'poison',
  Paralysis = 'paralysis',
  Sleep = 'sleep',
  Freeze = 'freeze',
}

export interface StatusEffect {
  onBeforeMove?: () => boolean
  onAfterTurn?: () => void
}

export const STATUS_EFFECTS: Record<StatusName, StatusEffect> = {
  [StatusName.Burn]: {},
  [StatusName.Poison]: {},
  [StatusName.Paralysis]: {},
  [StatusName.Sleep]: {},
  [StatusName.Freeze]: {},
}

/**
 * Implementation of move side effects.
 */

export type MoveEffect = (user: any, target: any) => void

export const MOVE_EFFECTS: Record<string, MoveEffect> = {
  Drain: (user, target) => {
    /* TODO */
  },
  BoostAttack: (user, target) => {
    /* TODO */
  },
}

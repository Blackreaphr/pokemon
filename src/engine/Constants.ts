/**
 * Basic constants used throughout the battle engine.
 */

export const DEFAULT_LEVEL = 50
export const MAX_STAT_STAGE = 6

/** Modifier applied when a Pokemon uses a move of its own type. */
export const STAB_MOD = 1.5

/**
 * Base chance for a critical hit. This implementation keeps it simple and
 * exposes the value so it can be tweaked if desired.
 */
export const CRIT_CHANCE = 0.0625

/** Damage modifier applied on a critical hit. */
export const CRIT_MOD = 1.5

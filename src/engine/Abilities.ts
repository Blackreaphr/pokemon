/**
 * Pokemon abilities that trigger under certain conditions.
 */

export interface Ability {
  readonly name: string
  onStart?: () => void
  onBeforeMove?: () => void
  onAfterMove?: () => void
}

export const ABILITIES: Record<string, Ability> = {
  Overgrow: { name: 'Overgrow' },
  Blaze: { name: 'Blaze' },
  Torrent: { name: 'Torrent' },
  // ...others truncated
}

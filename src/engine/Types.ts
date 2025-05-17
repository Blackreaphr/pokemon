/**
 * Type effectiveness matrix.
 */

export type TypeName =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy'

export const TYPE_CHART: Record<TypeName, Partial<Record<TypeName, number>>> = {
  Fire: { Grass: 2, Water: 0.5, Rock: 0.5, Steel: 2 },
  Water: { Fire: 2, Grass: 0.5, Rock: 2 },
  Grass: { Water: 2, Fire: 0.5, Ground: 2 },
  // ...others trimmed
}

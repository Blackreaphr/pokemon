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

export const TYPE_CHART: Partial<Record<TypeName, Partial<Record<TypeName, number>>>> = {
  Fire: { Grass: 2, Water: 0.5, Rock: 0.5, Steel: 2 },
  Water: { Fire: 2, Grass: 0.5, Rock: 2 },
  Grass: { Water: 2, Fire: 0.5, Ground: 2 },
  Electric: { Water: 2, Ground: 0, Flying: 2 },
  Normal: { Rock: 0.5, Ghost: 0 },
  Fighting: { Normal: 2, Rock: 2, Ghost: 0 },
}

export enum WeatherName {
  Clear = 'clear',
  Sun = 'sun',
  Rain = 'rain',
  Sandstorm = 'sandstorm',
  Hail = 'hail',
}

import type { Pokemon } from './Pokemon'

export interface WeatherEffect {
  onResidual?: (pokemon: Pokemon) => void
}

export const WEATHERS: Record<WeatherName, WeatherEffect> = {
  [WeatherName.Clear]: {},
  [WeatherName.Sun]: {},
  [WeatherName.Rain]: {},
  [WeatherName.Sandstorm]: {
    onResidual(pokemon) {
      if (!['Rock', 'Ground', 'Steel'].some(t => pokemon.types.includes(t as any))) {
        pokemon.receiveDamage(Math.floor(pokemon.stats.hp / 16))
      }
    },
  },
  [WeatherName.Hail]: {
    onResidual(pokemon) {
      if (!pokemon.types.includes('Ice')) {
        pokemon.receiveDamage(Math.floor(pokemon.stats.hp / 16))
      }
    },
  },
}


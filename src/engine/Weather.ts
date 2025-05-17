export enum WeatherName {
  Clear = 'clear',
  Sun = 'sun',
  Rain = 'rain',
  Sandstorm = 'sandstorm',
  Hail = 'hail',
}

export interface WeatherEffect {
  modifyPower?: (attacker: import('./Pokemon').Pokemon, move: import('./Interfaces').MoveData) => number
  onTurnEnd?: (state: import('./BattleState').BattleState) => void
}

export const WEATHERS: Record<WeatherName, WeatherEffect> = {
  [WeatherName.Clear]: {},
  [WeatherName.Sun]: {
    modifyPower: (_attacker, move) => {
      if (move.type === 'Fire') return 1.5
      if (move.type === 'Water') return 0.5
      return 1
    },
  },
  [WeatherName.Rain]: {
    modifyPower: (_attacker, move) => {
      if (move.type === 'Water') return 1.5
      if (move.type === 'Fire') return 0.5
      return 1
    },
  },
  [WeatherName.Sandstorm]: {
    onTurnEnd: (state) => {
      ;[state.active1, state.active2].forEach((p) => {
        if (p && !['Rock', 'Steel', 'Ground'].some((t) => p.types.includes(t as any))) {
          p.receiveDamage(Math.floor(p.stats.hp / 16))
        }
      })
    },
  },
  [WeatherName.Hail]: {
    onTurnEnd: (state) => {
      ;[state.active1, state.active2].forEach((p) => {
        if (p && !p.types.includes('Ice' as any)) {
          p.receiveDamage(Math.floor(p.stats.hp / 16))
        }
      })
    },
  },
}


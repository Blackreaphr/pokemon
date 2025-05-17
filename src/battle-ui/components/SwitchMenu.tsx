import React from 'react'
import { Pokemon } from '../../engine/Pokemon'
import { StatusIcons } from './StatusIcons'
import { HealthBar } from './HealthBar'

export interface SwitchMenuProps {
  team: Pokemon[]
  onSwitch: (index: number) => void
}

export function SwitchMenu({ team, onSwitch }: SwitchMenuProps) {
  return (
    <div style={{ padding: 8 }}>
      {team.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', margin: 4 }}>
          <button disabled={p.isFainted()} onClick={() => onSwitch(i)}>
            {p.name}
          </button>
          <div style={{ marginLeft: 8 }}>
            <HealthBar current={p.currentHP} max={p.stats.hp} />
          </div>
          <StatusIcons status={p.status as any} />
        </div>
      ))}
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('renders team', () => {
    const mock = [{ name: 'Pika', currentHP: 30, stats: { hp: 35 } }] as any
    const { getByText } = render(<SwitchMenu team={mock} onSwitch={() => {}} />)
    import.meta.vitest.expect(getByText('Pika')).toBeTruthy()
  })
}


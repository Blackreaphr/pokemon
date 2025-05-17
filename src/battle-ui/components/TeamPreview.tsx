import React from 'react'
import { Pokemon } from '../../engine/Pokemon'

export interface TeamPreviewProps {
  team: Pokemon[]
}

export function TeamPreview({ team }: TeamPreviewProps) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {team.map((p, i) => (
        <div key={i} style={{ padding: 4, border: '1px solid #ccc' }}>
          {p.name}
        </div>
      ))}
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('preview renders', () => {
    const t = [{ name: 'A', stats: { hp: 1 } }] as any
    const { getByText } = render(<TeamPreview team={t} />)
    import.meta.vitest.expect(getByText('A')).toBeTruthy()
  })
}


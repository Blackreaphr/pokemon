import React from 'react'

export interface MoveButton {
  name: string
  pp: number
  disabled?: boolean
}

export interface MoveSelectionProps {
  moves: MoveButton[]
  onSelect: (index: number) => void
}

export function MoveSelection({ moves, onSelect }: MoveSelectionProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {moves.map((m, i) => (
        <button
          key={i}
          disabled={m.disabled}
          onClick={() => onSelect(i)}
        >
          {m.name} ({m.pp})
        </button>
      ))}
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render, fireEvent } = await import('@testing-library/react')
  import.meta.vitest.test('click calls onSelect', () => {
    const fn = import.meta.vitest.fn()
    const { getByText } = render(
      <MoveSelection moves={[{ name: 'Tackle', pp: 35 }]} onSelect={fn} />
    )
    fireEvent.click(getByText(/Tackle/))
    import.meta.vitest.expect(fn).toHaveBeenCalled()
  })
}

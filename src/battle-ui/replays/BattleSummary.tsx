import React from 'react'

export interface BattleSummaryProps {
  result: {
    damage: number
    remaining: number
  }
}

export function BattleSummary({ result }: BattleSummaryProps) {
  return (
    <div>
      <div>Damage: {result.damage}</div>
      <div>Remaining: {result.remaining}</div>
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('summary shows damage', () => {
    const { getByText } = render(<BattleSummary result={{ damage: 10, remaining: 5 }} />)
    import.meta.vitest.expect(getByText(/Damage/)).toBeTruthy()
  })
}


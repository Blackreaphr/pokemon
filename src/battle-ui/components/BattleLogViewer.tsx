import React from 'react'

export interface BattleLogViewerProps {
  log: string[]
}

export function BattleLogViewer({ log }: BattleLogViewerProps) {
  return (
    <ul style={{ maxHeight: 200, overflowY: 'auto', fontSize: 12 }}>
      {log.map((l, i) => (
        <li key={i}>{l}</li>
      ))}
    </ul>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('shows lines', () => {
    const { getByText } = render(<BattleLogViewer log={['hello']} />)
    import.meta.vitest.expect(getByText('hello')).toBeTruthy()
  })
}


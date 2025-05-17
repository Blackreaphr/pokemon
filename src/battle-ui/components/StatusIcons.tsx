import React from 'react'

const ICONS: Record<string, string> = {
  Burn: 'B',
  Poison: 'P',
  Tox: 'T',
  Para: 'Pa',
  Sleep: 'S',
  Freeze: 'F',
  Confusion: 'C'
}

export interface StatusIconsProps {
  status?: keyof typeof ICONS
}

export function StatusIcons({ status }: StatusIconsProps) {
  if (!status) return null
  return <span title={status}>{ICONS[status]}</span>
}

/* TESTS */
if (import.meta.vitest) {
  const { render, screen } = await import('@testing-library/react')
  import.meta.vitest.test('shows icon', () => {
    render(<StatusIcons status="Burn" />)
    import.meta.vitest.expect(screen.getByTitle('Burn')).toBeTruthy()
  })
}


import React, { useMemo } from 'react'

/** Props for HealthBar. */
export interface HealthBarProps {
  current: number
  max: number
}

/**
 * Displays remaining HP as a color shifting bar.
 */
export function HealthBar({ current, max }: HealthBarProps) {
  const pct = Math.max(0, Math.min(1, current / max))
  const color = useMemo(() => {
    if (pct > 0.5) return 'green'
    if (pct > 0.2) return 'gold'
    return 'red'
  }, [pct])
  return (
    <div style={{ border: '1px solid #333', width: 100 }} title={`${current}/${max}`}> 
      <div style={{ height: 8, width: `${pct * 100}%`, background: color, transition: 'width 0.3s' }} />
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('HealthBar renders', () => {
    const { container } = render(<HealthBar current={50} max={100} />)
    const div = container.querySelector('div div')
    import.meta.vitest.expect(div).not.toBeNull()
  })
}

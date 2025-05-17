import React, { useState } from 'react'
import { MotionDiv } from '../visuals/Animations'

export interface ReplayViewerProps {
  turns: string[]
}

export function ReplayViewer({ turns }: ReplayViewerProps) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex(i => Math.min(turns.length - 1, i + 1))
  const prev = () => setIndex(i => Math.max(0, i - 1))

  return (
    <div>
      <MotionDiv animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        {turns[index]}
      </MotionDiv>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('renders first turn', () => {
    const { getByText } = render(<ReplayViewer turns={['a', 'b']} />)
    import.meta.vitest.expect(getByText('a')).toBeTruthy()
  })
}


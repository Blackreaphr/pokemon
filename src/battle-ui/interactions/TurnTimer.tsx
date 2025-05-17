import React, { useEffect, useState } from 'react'

export interface TurnTimerProps {
  seconds: number
  onExpire: () => void
}

export function TurnTimer({ seconds, onExpire }: TurnTimerProps) {
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    setTime(seconds)
    const id = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          clearInterval(id)
          onExpire()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [seconds, onExpire])

  return <div>Timer: {time}</div>
}

/* TESTS */
if (import.meta.vitest) {
  const { render, waitFor } = await import('@testing-library/react')
  import.meta.vitest.test('counts down', async () => {
    let expired = false
    render(<TurnTimer seconds={1} onExpire={() => { expired = true }} />)
    await waitFor(() => import.meta.vitest.expect(expired).toBe(true))
  })
}


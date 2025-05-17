import React, { useState } from 'react'
import { BattleState } from '../../engine/BattleState'
import { HealthBar } from './HealthBar'
import { StatusIcons } from './StatusIcons'
import { MoveSelection } from './MoveSelection'
import { SwitchMenu } from './SwitchMenu'
import { BattleLogViewer } from './BattleLogViewer'

export interface BattleScreenProps {
  battleState: BattleState
}

export function BattleScreen({ battleState }: BattleScreenProps) {
  const [log, setLog] = useState<string[]>([])
  const addLog = (line: string) => setLog(l => [...l, line])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div>{battleState.active1?.name}</div>
          {battleState.active1 && (
            <>
              <HealthBar current={battleState.active1.currentHP} max={battleState.active1.stats.hp} />
              <StatusIcons status={battleState.active1.status as any} />
            </>
          )}
        </div>
        <div>
          <div>{battleState.active2?.name}</div>
          {battleState.active2 && (
            <>
              <HealthBar current={battleState.active2.currentHP} max={battleState.active2.stats.hp} />
              <StatusIcons status={battleState.active2.status as any} />
            </>
          )}
        </div>
      </div>
      <BattleLogViewer log={log} />
      <MoveSelection
        moves={[{ name: 'Tackle', pp: 35 }]}
        onSelect={() => addLog('Used move')}
      />
      <SwitchMenu team={battleState.party1} onSwitch={i => addLog(`Switch to ${battleState.party1[i].name}`)} />
    </div>
  )
}

/* TESTS */
if (import.meta.vitest) {
  const { render } = await import('@testing-library/react')
  import.meta.vitest.test('renders screen', () => {
    const state = new BattleState()
    const { getByText } = render(<BattleScreen battleState={state} />)
    import.meta.vitest.expect(getByText(/MoveSelection/)).toBeDefined()
  })
}

// demo
if (import.meta.hot) {
  import('../../engine/mocks').then(async ({ mockState }) => {
    const root = document.getElementById('root')
    if (root) {
      const { createRoot } = await import('react-dom/client')
      createRoot(root).render(<BattleScreen battleState={mockState} />)
    }
  })
}



import React from 'react'
import { createRoot } from 'react-dom/client'
import { BattleScreen } from './components/BattleScreen'
import { mockState } from '../engine/mocks'

const root = document.getElementById('root')!
createRoot(root).render(<BattleScreen battleState={mockState} />)


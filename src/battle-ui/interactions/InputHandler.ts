import { EngineAction } from '../types'

export type InputState = 'idle' | 'selecting-move' | 'switching'

export class InputHandler {
  state: InputState = 'idle'
  constructor(private dispatch: (a: EngineAction) => void) {}

  chooseMove(index: number) {
    if (this.state !== 'selecting-move') return
    this.dispatch({ type: 'move', index })
    this.state = 'idle'
  }

  chooseSwitch(index: number) {
    if (this.state !== 'switching') return
    this.dispatch({ type: 'switch', index })
    this.state = 'idle'
  }

  startMove() {
    this.state = 'selecting-move'
  }

  startSwitch() {
    this.state = 'switching'
  }
}

/* TESTS */
if (process.argv[1] && process.argv[1].includes('InputHandler.ts')) {
  const actions: EngineAction[] = []
  const h = new InputHandler(a => actions.push(a))
  h.startMove()
  h.chooseMove(1)
  console.assert(actions[0].type === 'move')
  console.log('InputHandler tests passed')
}


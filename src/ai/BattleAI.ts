/**
 * BattleAI orchestrates decision making during Pokemon battles.
 * This is a simplified implementation demonstrating how evaluators
 * could be composed together. It does not cover every battle rule.
 */

import { Pokemon } from '../engine/Pokemon'
import type { MoveData } from '../engine/Interfaces'
import { BattleEngine } from '../engine/BattleEngine'
import { BattleState } from '../engine/BattleState'
import { MOVES } from '../engine/Moves'
import { PokemonFactory } from '../engine/PokemonFactory'

import { MoveEvaluator } from './MoveEvaluator'
import { SwitchEvaluator } from './SwitchEvaluator'
import { PredictionEngine } from './PredictionEngine'
import { RiskAssessment } from './RiskAssessment'
import { GamePlan } from './GamePlan'

/** Representation of using a move during a turn. */
export interface MoveChoice {
  type: 'move'
  move: MoveData
}

/** Representation of switching to another Pokemon. */
export interface SwitchChoice {
  type: 'switch'
  target: Pokemon
}

export type TurnChoice = MoveChoice | SwitchChoice

/**
 * Main AI class combining all sub systems.
 */
export class BattleAI {
  private engine: BattleEngine
  private moveEval: MoveEvaluator
  private switchEval: SwitchEvaluator
  private predictor: PredictionEngine
  private risk: RiskAssessment
  private plan: GamePlan

  constructor(mySide: Pokemon[], enemySide: Pokemon[], format: string) {
    const state = new BattleState(mySide, enemySide)
    this.engine = new BattleEngine(state)
    this.moveEval = new MoveEvaluator()
    this.switchEval = new SwitchEvaluator()
    this.predictor = new PredictionEngine()
    this.risk = new RiskAssessment()
    this.plan = new GamePlan(format)
  }

  /** Determine the best action for the current turn. */
  decideTurn(): TurnChoice {
    const me = this.engine.state.active1
    const opp = this.engine.state.active2
    if (!me || !opp) throw new Error('Battle not initialized')

    const predictions = this.predictor.predictOpponent(this.engine.state)
    const moveScore = this.moveEval.scoreMoves(me, opp, predictions)
    const switchScore = this.switchEval.scoreSwitch(me, opp, this.engine.state)

    const riskFactor = this.risk.evaluateRisk(this.engine.state, predictions)
    this.plan.updatePlan(this.engine.state, riskFactor)

    if (switchScore.score > moveScore.score * 1.1) {
      return { type: 'switch', target: switchScore.best }
    }
    return { type: 'move', move: moveScore.best }
  }
}

/* CLI demo showing the AI making basic decisions */
if (process.argv[1] && process.argv[1].endsWith('BattleAI.ts')) {
  const rng = Math.random
  const pikachu = PokemonFactory.create(
    'Pikachu',
    { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    ['Electric']
  )
  const bulbasaur = PokemonFactory.create(
    'Bulbasaur',
    { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    ['Grass']
  )
  const ai = new BattleAI([pikachu], [bulbasaur], 'singles')
  for (let turn = 1; turn <= 3; turn++) {
    const choice = ai.decideTurn()
    console.log(`Turn ${turn}:`, choice)
  }
}


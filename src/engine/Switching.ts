/**
 * Logic for switching Pokemon in and out of battle.
 */

export class Switching {
  /** Validate if the requested switch is legal. */
  static canSwitch(party: any[], index: number): boolean {
    return index >= 0 && index < party.length && !party[index].isFainted()
  }

  /** Execute the switch. */
  static performSwitch(
    state: any,
    party: any[],
    index: number,
    isPlayer1: boolean
  ): void {
    if (!Switching.canSwitch(party, index)) return
    if (isPlayer1) {
      state.active1 = party[index]
    } else {
      state.active2 = party[index]
    }
  }
}

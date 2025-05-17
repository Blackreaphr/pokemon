export interface PredictionEvent {
  turn: number;
  predictedMove: string;
  actualMove: string;
  correct: boolean;
}

export type Listener = (event: PredictionEvent) => void;

const listeners: Listener[] = [];
let events: PredictionEvent[] = [];

/**
 * Emit a prediction result event to all listeners.
 */
export function emit(event: PredictionEvent) {
  events.push(event);
  listeners.forEach(l => l(event));
}

/**
 * Subscribe to prediction events.
 */
export function subscribe(listener: Listener) {
  listeners.push(listener);
  return () => {
    const idx = listeners.indexOf(listener);
    if (idx >= 0) listeners.splice(idx, 1);
  };
}

/** Get all prediction events recorded so far. */
export function getEvents() {
  return events.slice();
}

/** Reset all stored events. */
export function reset() {
  events = [];
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('records and returns events', () => {
    reset();
    emit({ turn: 1, predictedMove: 'tackle', actualMove: 'tackle', correct: true });
    expect(getEvents().length).toBe(1);
  });
}

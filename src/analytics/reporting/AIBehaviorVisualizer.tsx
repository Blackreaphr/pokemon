import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { subscribe, PredictionEvent } from '../core/AIStatsTracker';

export default function AIBehaviorVisualizer() {
  const [events, setEvents] = useState<PredictionEvent[]>([]);

  useEffect(() => {
    setEvents(events => [...events]);
    const unsub = subscribe(e => setEvents(evts => [...evts, e]));
    return unsub;
  }, []);

  const data = events.map(e => ({ turn: e.turn, correct: e.correct ? 1 : 0 }));

  return (
    <div>
      <h3>AI Prediction Accuracy</h3>
      <LineChart width={300} height={150} data={data}>
        <XAxis dataKey="turn" /><YAxis /><Tooltip />
        <Line type="monotone" dataKey="correct" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('renders component', () => {
    expect(<AIBehaviorVisualizer />).toBeTruthy();
  });
}

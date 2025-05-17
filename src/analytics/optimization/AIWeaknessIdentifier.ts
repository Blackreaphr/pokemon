import { getEvents } from '../core/AIStatsTracker';

interface WeaknessReport {
  description: string;
  confidence: number; // 0-100
}

export function identify(): WeaknessReport[] {
  const events = getEvents();
  const missPred = events.filter(e => !e.correct);
  const byMove: Record<string, number> = {};
  missPred.forEach(e => {
    byMove[e.actualMove] = (byMove[e.actualMove] || 0) + 1;
  });
  return Object.entries(byMove).map(([move, count]) => ({
    description: `AI often mispredicts ${move}`,
    confidence: Math.min(100, count * 10)
  }));
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('returns weakness reports', () => {
    expect(Array.isArray(identify())).toBe(true);
  });
}

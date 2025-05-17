import { getStats as getMoves } from '../core/MoveUsageStats';
import { getRankings } from '../core/TeamAnalytics';

interface Suggestion {
  message: string;
  severity: number; // 0-100
}

export function recommend(): Suggestion[] {
  const suggestions: Suggestion[] = [];
  const moves = getMoves();
  moves.forEach(m => {
    if (m.misses / m.uses > 0.5) {
      suggestions.push({
        message: `Consider replacing ${m.move} – low accuracy`,
        severity: Math.min(100, Math.round((m.misses / m.uses) * 100))
      });
    }
  });
  const rankings = getRankings();
  if (rankings.length > 0) {
    suggestions.push({
      message: `Top performer: ${rankings[0].name}`,
      severity: 20
    });
  }
  return suggestions;
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('generates suggestions', () => {
    expect(recommend()).toBeInstanceOf(Array);
  });
}

import React from 'react';
import { getHistory, MatchResult } from '../core/MatchHistory';

export default function BattleInsights({ limit = 1 }: { limit?: number }) {
  const [matches, setMatches] = React.useState<MatchResult[]>([]);

  React.useEffect(() => {
    getHistory(limit).then(setMatches);
  }, [limit]);

  return (
    <div>
      {matches.map(m => (
        <div key={m.dateTimeISO} style={{ marginBottom: '1em' }}>
          <strong>MVP:</strong> {m.MVP} <br />
          <small>{m.dateTimeISO}</small>
        </div>
      ))}
    </div>
  );
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('renders without crashing', () => {
    expect(<BattleInsights />).toBeTruthy();
  });
}

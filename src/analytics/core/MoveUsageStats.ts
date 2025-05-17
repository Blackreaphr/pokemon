interface MoveStats {
  move: string;
  uses: number;
  hits: number;
  misses: number;
}

let stats: Record<string, MoveStats> = {};

export function recordMove(move: string, hit: boolean) {
  if (!stats[move]) stats[move] = { move, uses: 0, hits: 0, misses: 0 };
  stats[move].uses++;
  if (hit) stats[move].hits++; else stats[move].misses++;
}

export function getStats(): MoveStats[] {
  return Object.values(stats).sort((a, b) => b.uses - a.uses);
}

export function reset() {
  stats = {};
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('counts hits and misses', () => {
    reset();
    recordMove('tackle', true);
    recordMove('tackle', false);
    expect(getStats()[0]).toEqual({ move: 'tackle', uses: 2, hits: 1, misses: 1 });
  });
}

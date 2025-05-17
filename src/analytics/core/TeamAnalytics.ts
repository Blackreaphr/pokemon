interface PokemonPerformance {
  name: string;
  delta: number;
}

let perf: PokemonPerformance[] = [];

export function recordPerformance(name: string, delta: number) {
  const p = perf.find(p => p.name === name);
  if (p) p.delta += delta; else perf.push({ name, delta });
}

export function getRankings() {
  return [...perf].sort((a, b) => b.delta - a.delta);
}

export function reset() {
  perf = [];
}

/* TESTS */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('ranks pokemon by delta', () => {
    reset();
    recordPerformance('pikachu', 1);
    recordPerformance('charizard', 2);
    expect(getRankings()[0].name).toBe('charizard');
  });
}

import { getHistory } from './MatchHistory';

export interface Stats {
  total: number;
  wins: number;
  losses: number;
  winRate: number;
  avgTurns: number;
}

export async function getOverallStats(): Promise<Stats> {
  const games = await getHistory(1000);
  const wins = games.filter(g => g.winner === 'player').length;
  const losses = games.length - wins;
  const avgTurns = games.reduce((s, g) => s + g.turns, 0) / Math.max(1, games.length);
  return { total: games.length, wins, losses, winRate: wins / Math.max(1, games.length), avgTurns };
}

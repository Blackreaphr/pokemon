import { getDB } from './idb';

export interface MatchResult {
  id?: number;
  winner: string;
  turns: number;
  teams: string[];
  MVP: string;
  dateTimeISO: string;
}

const store = 'matches';

export async function logBattle(result: MatchResult) {
  const db = await getDB(store);
  db.add(result);
}

export async function getHistory(limit = 20): Promise<MatchResult[]> {
  const db = await getDB(store);
  const req = db.getAll();
  return new Promise((res, rej) => {
    req.onsuccess = () => res(req.result.slice(-limit).reverse());
    req.onerror = () => rej(req.error);
  });
}

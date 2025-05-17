import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { getOverallStats } from '../core/PerformanceStats';
import { getHistory } from '../core/MatchHistory';

export default function StatsDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    getOverallStats().then(setStats);
    getHistory(20).then(setHistory);
  }, []);

  if (!stats) return <div>Loading...</div>;
  const data = history.map((h, i) => ({ name: i + 1, turns: h.turns }));

  return (
    <div>
      <h2>Wins: {stats.wins} / {stats.total}</h2>
      <LineChart width={300} height={150} data={data}>
        <XAxis dataKey="name" /><YAxis /><Tooltip />
        <Line type="monotone" dataKey="turns" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SuccessMetricsChart: React.FC = () => {
  const data = [
    { metric: 'Appels/tempête', before: 40, after: 4 },
    { metric: 'Heures/opération', before: 8, after: 4 },
    { metric: 'Stationnements vides (%)', before: 70, after: 90 },
    { metric: 'Satisfaction (%)', before: 75, after: 98 },
  ];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="before" name="Avant Flokon" fill="#ef4444" />
        <Bar dataKey="after" name="Après Flokon" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
};
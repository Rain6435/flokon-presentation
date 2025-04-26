import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const StormComparisonChart: React.FC = () => {
  const data = [
    { name: 'Temps total (h)', sansFlokon: 18, avecFlokon: 12 },
    { name: 'Coût (k$)', sansFlokon: 450, avecFlokon: 315 },
    { name: 'Passages requis', sansFlokon: 3, avecFlokon: 1 },
    { name: 'Plaintes reçues', sansFlokon: 50, avecFlokon: 10 },
  ];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sansFlokon" name="Sans Flokon" fill="#ef4444" />
        <Bar dataKey="avecFlokon" name="Avec Flokon" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
};
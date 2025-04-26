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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Bar dataKey="sansFlokon" name="Sans Flokon" fill="#ef4444" />
          <Bar dataKey="avecFlokon" name="Avec Flokon" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
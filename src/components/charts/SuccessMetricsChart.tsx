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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="metric" stroke="#666" />
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
          <Bar dataKey="before" name="Avant Flokon" fill="#ef4444" />
          <Bar dataKey="after" name="Après Flokon" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const RevenueProjectionChart: React.FC = () => {
  const data = [
    { year: '2024', private: 1.2, municipal: 0, total: 1.2 },
    { year: '2025', private: 1.5, municipal: 0.8, total: 2.3 },
    { year: '2026', private: 1.8, municipal: 2.0, total: 3.8 },
    { year: '2027', private: 2.2, municipal: 3.5, total: 5.7 },
    { year: '2028', private: 2.6, municipal: 5.2, total: 7.8 },
  ];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis tickFormatter={(value) => `${value}M$`} />
        <Tooltip formatter={(value) => `${value}M$`} />
        <Legend />
        <Bar dataKey="private" name="Secteur privé" stackId="a" fill="#10b981" />
        <Bar dataKey="municipal" name="Secteur municipal" stackId="a" fill="#f59e0b" />
      </BarChart>
    </ResponsiveContainer>
  );
};
import React from 'react';
import { ComparisonCardProps } from '../../types';


export const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, items, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-lg`}>
    <h3 className={`text-xl font-bold mb-4 text-${color}-700`}>{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);
import React from 'react';
import { TechCardProps } from '../../types';

export const TechCard: React.FC<TechCardProps> = ({ icon: Icon, title, items, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-lg`}>
    <Icon className={`w-8 h-8 text-${color}-500 mb-4`} />
    <h3 className="font-bold mb-3">{title}</h3>
    <ul className="text-sm space-y-2">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);
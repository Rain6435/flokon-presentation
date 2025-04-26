import React from 'react';
import { ChallengeCardProps } from '../../types';

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, items, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-lg`}>
    <h3 className={`text-xl font-bold mb-4 text-${color}-700`}>{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <item.icon className={`w-5 h-5 mr-2 text-${color}-500 mt-1`} />
          <span><strong>{item.title}:</strong> {item.desc}</span>
        </li>
      ))}
    </ul>
  </div>
);
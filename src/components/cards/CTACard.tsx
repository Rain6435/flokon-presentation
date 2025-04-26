import React from 'react';
import { CTACardProps } from '../../types';

export const CTACard: React.FC<CTACardProps> = ({ title, items, type, color }) => (
  <div className={`bg-${color}-50 p-6 rounded-lg`}>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {type === 'numbered' ? (
      <ol className="list-decimal list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    ) : (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    )}
  </div>
);
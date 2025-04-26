import React from 'react';
import { RevenueSectionProps } from '../../types';

export const RevenueSection: React.FC<RevenueSectionProps> = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <ul className="space-y-2 text-sm">
      {items.map((item, index) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);
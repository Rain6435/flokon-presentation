import React from 'react';
import { RevenueSectionProps } from '../../types';

export const RevenueSection: React.FC<RevenueSectionProps> = ({ title, items }) => (
  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
import React from 'react';
import { TechCardProps } from '../../types';

export const TechCard: React.FC<TechCardProps> = ({ icon: Icon, title, items, color }) => (
  <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
    <Icon className={`w-10 h-10 text-${color}-500 mb-4`} />
    <h3 className="font-bold text-xl mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <div className={`w-2 h-2 bg-${color}-500 rounded-full mr-3`}></div>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
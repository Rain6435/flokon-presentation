import React from 'react';
import { ChallengeCardProps } from '../../types';

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, items, color }) => {
  const gradients = {
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600'
  };
  
  const bgColors = {
    red: 'bg-red-50',
    orange: 'bg-orange-50'
  };
  
  const iconColors = {
    red: 'text-red-500',
    orange: 'text-orange-500'
  };
  
  return (
    <div className={`${bgColors[color]} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-${color}-100`}>
      <div className={`bg-gradient-to-r ${gradients[color]} text-white px-4 py-2 rounded-lg inline-block mb-4`}>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start group">
            <div className={`${iconColors[color]} group-hover:scale-110 transition-transform duration-200`}>
              <item.icon className="w-6 h-6 mr-3 mt-1" />
            </div>
            <div>
              <span className="font-semibold text-gray-800">{item.title}:</span>
              <span className="text-gray-600 ml-2">{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
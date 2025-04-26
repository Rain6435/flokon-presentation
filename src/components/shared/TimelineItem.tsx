import React from 'react';
import { TimelineItemProps } from '../../types';

export const TimelineItem: React.FC<TimelineItemProps> = ({ phase, title, details, color }) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };
  
  return (
    <div className="relative pl-8">
      <div className={`absolute left-0 w-8 h-8 rounded-full ${colors[color]} flex items-center justify-center text-white font-bold`}>
        {phase.charAt(6)}
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="font-bold text-lg">{phase}</div>
        <div className="text-xl mb-2">{title}</div>
        <ul className="text-gray-600">
          {details.map((detail, index) => (
            <li key={index}>• {detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
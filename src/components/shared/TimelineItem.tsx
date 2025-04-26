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
      <div className={`absolute left-0 w-8 h-8 rounded-full ${colors[color]} flex items-center justify-center text-white font-bold shadow-md`}>
        {phase.charAt(6)}
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg shadow-sm ml-4">
        <div className="font-bold text-sm text-gray-700">{phase}</div>
        <div className="text-lg font-semibold text-gray-900 mb-2">{title}</div>
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className={`w-1.5 h-1.5 ${colors[color]} rounded-full mr-2`}></div>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
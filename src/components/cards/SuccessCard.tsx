import React from 'react';
import { SuccessCardProps } from '../../types';

export const SuccessCard: React.FC<SuccessCardProps> = ({ company, achievements }) => (
  <div className="bg-green-50 p-6 rounded-lg">
    <h4 className="font-bold text-green-700 mb-3">{company}</h4>
    <ul className="space-y-2 text-sm">
      {achievements.map((achievement, index) => (
        <li key={index}>✅ {achievement}</li>
      ))}
    </ul>
  </div>
);
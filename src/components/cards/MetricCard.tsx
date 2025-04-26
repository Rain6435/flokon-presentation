import React from 'react';
import { MetricCardProps } from '../../types';

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, detail }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="text-sm text-blue-600">{title}</div>
      <div className="text-2xl font-bold text-blue-800">{value}</div>
      <div className="text-sm text-blue-600">{detail}</div>
    </div>
  );
};
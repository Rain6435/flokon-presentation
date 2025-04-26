import React from 'react';
import { MarketPieChart } from '../charts/MarketPieChart';

export const MarketOpportunitySlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Un marché municipal inexploité de 2,5 milliards $ au Québec</h2>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Taille du marché</h3>
        <ul className="space-y-3">
          <li>• Québec: 1 100 municipalités, 2,5 milliards $/an</li>
          <li>• Gatineau: 35 millions $/an, 800 km de routes</li>
          <li>• Potentiel: 50+ villes de taille moyenne</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-4">Tendances</h3>
        <ul className="space-y-3">
          <li>• 76% des villes cherchent des solutions tech</li>
          <li>• +15%/an budgets ville intelligente</li>
          <li>• Pression pour réduire les coûts de 10-20%</li>
        </ul>
      </div>
      <div>
        <MarketPieChart />
      </div>
    </div>
  </div>
);
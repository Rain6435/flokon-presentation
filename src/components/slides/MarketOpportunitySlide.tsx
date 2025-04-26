import React from 'react';
import { TrendingUp, Building2, DollarSign } from 'lucide-react';
import { MarketPieChart } from '../charts/MarketPieChart';

export const MarketOpportunitySlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Un marché municipal inexploité de 2,5 milliards $ au Québec
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center text-blue-800">
            <Building2 className="w-5 h-5 mr-2" />
            Taille du marché
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Québec: 1 100 municipalités, 2,5 milliards $/an
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Gatineau: 35 millions $/an, 800 km de routes
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Potentiel: 50+ villes de taille moyenne
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center text-purple-800">
            <TrendingUp className="w-5 h-5 mr-2" />
            Tendances
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              76% des villes cherchent des solutions tech
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              +15%/an budgets ville intelligente
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              Pression pour réduire les coûts de 10-20%
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <MarketPieChart />
      </div>
    </div>
  </div>
);
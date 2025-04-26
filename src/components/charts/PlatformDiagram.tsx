import React from 'react';
import { Building2, Cloud, Users, Truck, Map, BarChart3, Bell, Database } from 'lucide-react';

export const PlatformDiagram: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-8 w-full">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Private Sector */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl shadow-lg w-64 text-white transform hover:scale-105 transition-all duration-300">
        <h3 className="font-bold text-xl mb-6 flex items-center">
          <Building2 className="w-6 h-6 mr-2" />
          Secteur Privé
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">📝</div>
            Gestion des contrats
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">💰</div>
            Facturation clients
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">📱</div>
            Alertes privées
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">📊</div>
            Soumissions
          </li>
        </ul>
      </div>
      
      {/* Core System */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg w-64 text-white transform hover:scale-105 transition-all duration-300 z-10">
        <h3 className="font-bold text-xl mb-6 flex items-center">
          <Cloud className="w-6 h-6 mr-2" />
          Noyau Partagé
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">🌨️</div>
            Données météo
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">🗺️</div>
            Cartographie
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">📈</div>
            Analytique
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">🔄</div>
            Temps réel
          </li>
        </ul>
      </div>
      
      {/* Municipal Sector */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg w-64 text-white transform hover:scale-105 transition-all duration-300">
        <h3 className="font-bold text-xl mb-6 flex items-center">
          <Users className="w-6 h-6 mr-2" />
          Secteur Municipal
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">🗺️</div>
            Gestion des zones
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">👥</div>
            Alertes citoyennes
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">🚛</div>
            Flotte publique
          </li>
          <li className="flex items-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">📋</div>
            Requêtes service
          </li>
        </ul>
      </div>
    </div>
    
    {/* Connecting Lines */}
    <div className="relative w-full max-w-3xl hidden md:block">
      <div className="absolute left-1/4 right-1/4 top-1/2 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-500 transform -translate-y-1/2"></div>
      <div className="absolute left-1/4 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
      <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
      <div className="absolute right-1/4 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
    </div>
  </div>
);
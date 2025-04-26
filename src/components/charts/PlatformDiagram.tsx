import React from 'react';

export const PlatformDiagram: React.FC = () => (
  <div className="flex items-center justify-center space-x-8">
    <div className="bg-green-100 p-6 rounded-lg w-64">
      <h3 className="font-bold text-green-800 mb-4">Secteur Privé</h3>
      <ul className="space-y-2 text-sm">
        <li>📝 Gestion des contrats</li>
        <li>💰 Facturation clients</li>
        <li>📱 Alertes privées</li>
        <li>📊 Soumissions</li>
      </ul>
    </div>
    
    <div className="bg-blue-100 p-6 rounded-lg w-64">
      <h3 className="font-bold text-blue-800 mb-4">Noyau Partagé</h3>
      <ul className="space-y-2 text-sm">
        <li>🌨️ Données météo</li>
        <li>🗺️ Cartographie</li>
        <li>📈 Analytique</li>
        <li>🔄 Temps réel</li>
      </ul>
    </div>
    
    <div className="bg-orange-100 p-6 rounded-lg w-64">
      <h3 className="font-bold text-orange-800 mb-4">Secteur Municipal</h3>
      <ul className="space-y-2 text-sm">
        <li>🗺️ Gestion des zones</li>
        <li>👥 Alertes citoyennes</li>
        <li>🚛 Flotte publique</li>
        <li>📋 Requêtes service</li>
      </ul>
    </div>
  </div>
);
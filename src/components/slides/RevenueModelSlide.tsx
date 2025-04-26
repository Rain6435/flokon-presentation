import React from 'react';
import { RevenueSection } from '../cards/RevenueSection';
import { RevenueProjectionChart } from '../charts/RevenueProjectionChart';

export const RevenueModelSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Modèle économique diversifié et évolutif
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-8">
      <RevenueSection 
        title="Revenus actuels (privé)"
        items={[
          "Abonnement base: 199$/mois",
          "Alertes SMS: 0,05$/message",
          "Modules premium: 50-100$/mois",
          "Revenus 2024: 1,2M$ (600 clients)"
        ]}
      />
      <RevenueSection 
        title="Nouveaux revenus (municipal)"
        items={[
          "Licence: 0,50$/habitant/an",
          "Intégration: 5-20k$ setup",
          "Support premium: 500$/mois",
          "Services pro: 150$/heure"
        ]}
      />
    </div>
    <div className="w-full max-w-6xl mx-auto">
      <RevenueProjectionChart />
    </div>
  </div>
);
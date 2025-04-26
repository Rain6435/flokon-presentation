import React from 'react';
import { RevenueSection } from '../cards/RevenueSection';
import { RevenueProjectionChart } from '../charts/RevenueProjectionChart';

export const RevenueModelSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Modèle économique diversifié et évolutif</h2>
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
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
      <RevenueProjectionChart />
    </div>
  </div>
);
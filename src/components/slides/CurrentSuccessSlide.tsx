import React from 'react';
import { SuccessCard } from '../cards/SuccessCard';
import { SuccessMetricsChart } from '../charts/SuccessMetricsChart';

export const CurrentSuccessSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Notre succès prouvé dans le secteur privé</h2>
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <SuccessCard 
          company="M.G. Déneigement"
          achievements={[
            "Réduction de 90% des appels",
            "Élimination des 2e tournées",
            "Satisfaction client: 98%"
          ]}
        />
        <SuccessCard 
          company="Nico Déneigement"
          achievements={[
            "2h économisées/nuit",
            "ROI en 3 mois",
            "+20% de clients"
          ]}
        />
        <SuccessCard 
          company="Intermodale"
          achievements={[
            "90% stationnements vides",
            "Zéro accident",
            "15 000$/saison économisés"
          ]}
        />
      </div>
      <SuccessMetricsChart />
    </div>
  </div>
);
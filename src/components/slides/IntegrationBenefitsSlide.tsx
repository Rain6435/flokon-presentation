import React from 'react';
import { ComparisonCard } from '../cards/ComparisonCard';
import { StormComparisonChart } from '../charts/StormComparisonChart';

export const IntegrationBenefitsSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Création de valeur par l'intégration - Exemple de tempête</h2>
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        <ComparisonCard 
          title="Sans Flokon"
          items={[
            "Opérations désynchronisées",
            "Conflits véhicules déplacés",
            "Double travail: remblais 2-3 fois",
            "Durée totale: 18 heures",
            "Coût: 450 000$"
          ]}
          color="red"
        />
        <ComparisonCard 
          title="Avec Flokon"
          items={[
            "Coordination préalable",
            "Citoyens alertés 12h avant",
            "Un seul passage nécessaire",
            "Durée totale: 12 heures (-33%)",
            "Coût: 315 000$ (-30%)"
          ]}
          color="green"
        />
      </div>
      <StormComparisonChart />
    </div>
  </div>
);
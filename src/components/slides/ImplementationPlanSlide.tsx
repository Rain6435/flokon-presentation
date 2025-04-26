import React from 'react';
import { TimelineItem } from '../shared/TimelineItem';

export const ImplementationPlanSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Déploiement structuré en 4 phases</h2>
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
        <div className="space-y-8">
          <TimelineItem 
            phase="Phase 1 - T1 2025"
            title="Projet pilote Gatineau"
            details={["Secteur test: Hull", "10 déneigeurs privés", "Budget: 150 000$"]}
            color="blue"
          />
          <TimelineItem 
            phase="Phase 2 - T2 2025"
            title="Expansion fonctionnalités"
            details={["API municipale", "Tests Sherbrooke", "Investissement: 400 000$"]}
            color="green"
          />
          <TimelineItem 
            phase="Phase 3 - T3 2025"
            title="Lancement commercial"
            details={["Campagne 50 villes", "Équipe ventes dédiée", "Support 24/7"]}
            color="purple"
          />
          <TimelineItem 
            phase="Phase 4 - T4 2025"
            title="Mise à l'échelle"
            details={["Expansion Ontario", "Partenariats", "Module IA prédictive"]}
            color="orange"
          />
        </div>
      </div>
    </div>
  </div>
);
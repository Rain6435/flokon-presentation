import React from 'react';
import { MetricCard } from '../cards/MetricCard';

export const GatineauCaseStudySlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Projet pilote Gatineau - Résultats projetés</h2>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contexte</h3>
        <ul className="space-y-2">
          <li>• Population: 291 000 habitants</li>
          <li>• Routes: 800 km (3 niveaux priorité)</li>
          <li>• Budget: 35M$/an</li>
          <li>• Défis: Coordination avec 200+ privés</li>
        </ul>
        
        <h3 className="text-xl font-bold mt-6 mb-4">Implémentation</h3>
        <ul className="space-y-2">
          <li>• 3 zones pilotes</li>
          <li>• 30 sous-traitants municipaux</li>
          <li>• 50 entreprises privées</li>
          <li>• Investissement: 250 000$</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Résultats attendus</h3>
        <div className="space-y-4">
          <MetricCard title="Réduction des coûts" value="15%" detail="5,25M$ économisés" />
          <MetricCard title="Diminution des plaintes" value="60%" detail="de 2000 à 800/an" />
          <MetricCard title="Amélioration des délais" value="25%" detail="plus rapide" />
          <MetricCard title="ROI" value="6 mois" detail="retour sur investissement" />
        </div>
      </div>
    </div>
  </div>
);
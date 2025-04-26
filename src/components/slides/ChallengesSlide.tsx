import React from 'react';
import { AlertTriangle, Building2, Users, TrendingUp } from 'lucide-react';
import { ChallengeCard } from '../cards/ChallengeCard';

export const ChallengesSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
      Les défis actuels de la gestion de la neige - Cas réels
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      <ChallengeCard 
        title="Secteur privé"
        items={[
          { icon: AlertTriangle, title: "Inefficacité", desc: "2-3 passages par stationnement (perte de 4h/nuit)" },
          { icon: AlertTriangle, title: "Communication", desc: "50+ appels/tempête demandant 'Quand passez-vous?'" },
          { icon: AlertTriangle, title: "Sécurité", desc: "30% des véhicules restent dans les stationnements" }
        ]}
        color="red"
      />
      <ChallengeCard 
        title="Secteur municipal"
        items={[
          { icon: Building2, title: "Coordination", desc: "800 km de routes, 30+ sous-traitants" },
          { icon: Users, title: "Plaintes", desc: "200+ plaintes/tempête" },
          { icon: TrendingUp, title: "Ressources", desc: "Dépôts saturés, 45+ min d'attente" }
        ]}
        color="orange"
      />
    </div>
  </div>
);
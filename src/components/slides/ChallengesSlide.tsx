import React from 'react';
import { AlertTriangle, Building2, Users, TrendingUp } from 'lucide-react';
import { ChallengeCard } from '../cards/ChallengeCard';

export const ChallengesSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Les défis actuels de la gestion de la neige - Cas réels</h2>
    <div className="grid grid-cols-2 gap-8">
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
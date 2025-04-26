import React from 'react';
import { CTACard } from '../cards/CTACard';

export const CallToActionSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Joignez-vous à la révolution du déneigement intelligent</h2>
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <CTACard 
          title="Pour les municipalités"
          items={[
            "Démonstration personnalisée gratuite",
            "Étude de faisabilité sans engagement",
            "Accès au programme pilote subventionné",
            "Formation complète de votre équipe"
          ]}
          type="numbered"
          color="blue"
        />
        <CTACard 
          title="Pour les investisseurs"
          items={[
            "Série A: 5M$ recherchés",
            "Valorisation pré-money: 15M$",
            "Retour anticipé: 5x en 5 ans",
            "Utilisation: 60% dev, 30% ventes"
          ]}
          type="bullet"
          color="green"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <p>Jean Tremblay, CEO: jean@flokon.ca</p>
        <p>Marie Dubois, VP Ventes: marie@flokon.ca</p>
        <p className="mt-4 text-blue-600">www.flokon.ca | 1-888-FLOKON1</p>
      </div>
    </div>
  </div>
);
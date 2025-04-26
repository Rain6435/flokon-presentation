import React from 'react';

export const FeatureAdaptationSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">De la fonctionnalité privée à la solution municipale</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left">Fonctionnalité privée</th>
            <th className="px-6 py-3 text-left">Adaptation municipale</th>
            <th className="px-6 py-3 text-left">Exemple concret</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4">Gestion des contrats</td>
            <td className="px-6 py-4">Gestion des zones</td>
            <td className="px-6 py-4">15 zones prioritaires, 30 sous-traitants</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Alertes clients</td>
            <td className="px-6 py-4">Notifications citoyennes</td>
            <td className="px-6 py-4">"Déneigement rue Principale ce soir 22h-6h"</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Suivi de flotte</td>
            <td className="px-6 py-4">Coordination municipale</td>
            <td className="px-6 py-4">50 véhicules municipaux + 30 privés synchronisés</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Système de soumissions</td>
            <td className="px-6 py-4">Requêtes de service</td>
            <td className="px-6 py-4">Signalement citoyen → Priorisation → Assignation</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
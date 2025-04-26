import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FeatureAdaptationSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      De la fonctionnalité privée à la solution municipale
    </h2>
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <th className="px-6 py-4 text-left rounded-tl-lg">Fonctionnalité privée</th>
            <th className="px-6 py-4 text-left">Adaptation municipale</th>
            <th className="px-6 py-4 text-left rounded-tr-lg">Exemple concret</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {[
            {
              private: "Gestion des contrats",
              public: "Gestion des zones",
              example: "15 zones prioritaires, 30 sous-traitants"
            },
            {
              private: "Alertes clients",
              public: "Notifications citoyennes",
              example: "\"Déneigement rue Principale ce soir 22h-6h\""
            },
            {
              private: "Suivi de flotte",
              public: "Coordination municipale",
              example: "50 véhicules municipaux + 30 privés synchronisés"
            },
            {
              private: "Système de soumissions",
              public: "Requêtes de service",
              example: "Signalement citoyen → Priorisation → Assignation"
            }
          ].map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">{row.private}</td>
              <td className="px-6 py-4 flex items-center">
                {row.public}
                <ArrowRight className="w-4 h-4 ml-2 text-blue-500" />
              </td>
              <td className="px-6 py-4 text-gray-600">{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
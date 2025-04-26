import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { StormComparisonChart } from '../charts/StormComparisonChart';

export const IntegrationBenefitsSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Création de valeur par l'intégration - Exemple de tempête
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-8">
      <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4 flex items-center text-red-700">
          <AlertCircle className="w-5 h-5 mr-2" />
          Sans Flokon
        </h3>
        <ul className="space-y-3">
          {[
            "Opérations désynchronisées",
            "Conflits véhicules déplacés",
            "Double travail: remblais 2-3 fois",
            "Durée totale: 18 heures",
            "Coût: 450 000$"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4 flex items-center text-green-700">
          <CheckCircle2 className="w-5 h-5 mr-2" />
          Avec Flokon
        </h3>
        <ul className="space-y-3">
          {[
            "Coordination préalable",
            "Citoyens alertés 12h avant",
            "Un seul passage nécessaire",
            "Durée totale: 12 heures (-33%)",
            "Coût: 315 000$ (-30%)"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full max-w-6xl mx-auto">
      <StormComparisonChart />
    </div>
  </div>
);
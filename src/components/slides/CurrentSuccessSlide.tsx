import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SuccessMetricsChart } from '../charts/SuccessMetricsChart';

export const CurrentSuccessSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
      Notre succès prouvé dans le secteur privé
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-8">
      {[
        {
          company: "M.G. Déneigement",
          achievements: [
            "Réduction de 90% des appels",
            "Élimination des 2e tournées",
            "Satisfaction client: 98%"
          ]
        },
        {
          company: "Nico Déneigement",
          achievements: [
            "2h économisées/nuit",
            "ROI en 3 mois",
            "+20% de clients"
          ]
        },
        {
          company: "Intermodale",
          achievements: [
            "90% stationnements vides",
            "Zéro accident",
            "15 000$/saison économisés"
          ]
        }
      ].map((item, index) => (
        <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h4 className="font-bold text-green-700 mb-4 text-xl">{item.company}</h4>
          <ul className="space-y-3">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="w-full max-w-6xl mx-auto">
      <SuccessMetricsChart />
    </div>
  </div>
);
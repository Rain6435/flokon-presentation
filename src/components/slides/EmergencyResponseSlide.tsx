import React from 'react';
import { AlertTriangle, Truck, DollarSign, Clock } from 'lucide-react';

export const EmergencyResponseSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
      Système de réponse aux urgences hivernales
    </h2>
    
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 animate-pulse" />
          Situations critiques définies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Neige de plus de 25 cm",
            "Pluie verglaçante de plus de 10 mm",
            "Neige de plus de 20 cm accompagnée de pluie"
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Truck,
            title: "Sélection des entreprises",
            desc: "Critères stricts basés sur la capacité, l'équipement et la proximité",
            color: "blue"
          },
          {
            icon: DollarSign,
            title: "Primes d'urgence",
            desc: "Compensation additionnelle pour réponse rapide aux demandes critiques",
            color: "green"
          },
          {
            icon: Clock,
            title: "Réponse rapide",
            desc: "Mobilisation en moins de 2h des ressources privées qualifiées",
            color: "orange"
          }
        ].map((item, index) => (
          <div key={index} className={`bg-${item.color}-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
            <item.icon className={`w-10 h-10 text-${item.color}-500 mb-4`} />
            <h4 className="font-bold mb-2 text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Processus de demande d'urgence</h3>
        <div className="flex items-center justify-between">
          {[
            { num: 1, title: "Ville détecte<br/>situation critique", color: "red" },
            { num: 2, title: "Création demande<br/>sur Flokon", color: "blue" },
            { num: 3, title: "Notification aux<br/>entreprises qualifiées", color: "green" },
            { num: 4, title: "Acceptation et<br/>déploiement rapide", color: "purple" }
          ].map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 bg-${step.color}-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-lg transform hover:scale-110 transition-transform duration-200`}>
                  {step.num}
                </div>
                <p className="text-sm text-center text-gray-700" dangerouslySetInnerHTML={{ __html: step.title }} />
              </div>
              {index < 3 && (
                <div className="text-3xl text-gray-400 px-4 hidden md:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);
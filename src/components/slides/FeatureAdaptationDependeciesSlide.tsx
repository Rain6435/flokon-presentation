import React from 'react';
import { ArrowRight, Handshake, Cog, Users, Shield, Building2, Check } from 'lucide-react';

export const FeatureAdaptationDependenciesSlide: React.FC = () => {
  const adaptations = [
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
  ];

  const dependencies = [
    {
      icon: Handshake,
      title: "Partenariat pilote",
      description: "Essai avec la Ville de Gatineau pour tester l'intégration",
      color: "blue"
    },
    {
      icon: Cog,
      title: "Adaptation des fonctionnalités",
      description: "Répondre aux exigences spécifiques municipales",
      color: "green"
    },
    {
      icon: Users,
      title: "Collaboration technique",
      description: "Équipes Flokon + Ville pour une intégration fluide",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Protection des données",
      description: "Engagement sur la gouvernance des informations",
      color: "red"
    },
    {
      icon: Building2,
      title: "Indépendance des opérations",
      description: "Ne pas affecter les clients hors de Gatineau",
      color: "orange"
    }
  ];

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Adaptation et prérequis pour réussir
      </h2>
      
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Feature Adaptation */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <ArrowRight className="w-6 h-6 mr-2 text-blue-600" />
            Transformation des fonctionnalités
          </h3>
          <div className="space-y-4">
            {adaptations.map((row, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-800">
                        {row.private}
                      </div>
                      <ArrowRight className="w-5 h-5 mx-3 text-blue-500" />
                      <div className="bg-purple-100 px-3 py-1 rounded-full text-sm font-medium text-purple-800">
                        {row.public}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 pl-4">
                      {row.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Dependencies */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Check className="w-6 h-6 mr-2 text-green-600" />
            Conditions de réussite
          </h3>
          <div className="space-y-4">
            {dependencies.map((dep, index) => {
              const Icon = dep.icon;
              const gradients = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                red: "from-red-500 to-red-600",
                orange: "from-orange-500 to-orange-600"
              };

              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${gradients[dep.color]} p-1`}></div>
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg bg-${dep.color}-50 mr-3`}>
                        <Icon className={`w-5 h-5 text-${dep.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{dep.title}</h4>
                        <p className="text-sm text-gray-600">{dep.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom summary */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg">
        <div className="text-center">
          <p className="text-lg font-medium">
            Une approche méthodique combinant adaptation technique et collaboration stratégique
          </p>
        </div>
      </div>
    </div>
  );
};
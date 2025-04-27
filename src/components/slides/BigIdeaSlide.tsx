import React from 'react';
import { Lightbulb, Building2, Snowflake, Map, Users, Bell, BarChart3, Trophy } from 'lucide-react';

export const BigIdeaSlide: React.FC = () => {
  const features = [
    {
      icon: Snowflake,
      title: "Gérer ses propres opérations",
      description: "Utilisation de la technologie éprouvée de Flokon pour les opérations municipales",
      color: "blue"
    },
    {
      icon: Building2,
      title: "Coordination public-privé",
      description: "Faciliter la collaboration avec les entreprises partenaires",
      color: "green"
    },
    {
      icon: Bell,
      title: "Alertes citoyennes",
      description: "Notifications automatiques par secteur en temps réel",
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "Suivi et rapports",
      description: "Transparence et optimisation continue des opérations",
      color: "purple"
    }
  ];

  const colorVariants = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    purple: "from-purple-500 to-purple-600"
  };

  return (
    <div className="h-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <Lightbulb className="w-12 h-12 text-yellow-500 animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          THE BIG IDEA
        </h2>
        <div className="text-xl font-semibold text-gray-800 px-8">
          Étendre Flokon pour devenir une plateforme à double usage : privé + municipal
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
          <Map className="w-6 h-6 mr-2 text-blue-600" />
          Nous proposons de créer un module municipal pour Flokon
        </h3>
        <p className="text-gray-700 mb-4">
          Cette extension permettrait à Gatineau de :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-start"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${colorVariants[feature.color]} mr-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg text-white">
        <div className="flex items-center mb-4">
          <Trophy className="w-8 h-8 mr-3" />
          <h3 className="text-xl font-bold">Vision pionnière</h3>
        </div>
        <p className="text-lg">
          Gatineau deviendrait une des premières villes à bénéficier d'une gestion intelligente intégrée du déneigement, 
          tout en servant de modèle pour d'autres municipalités.
        </p>
      </div>
    </div>
  );
};
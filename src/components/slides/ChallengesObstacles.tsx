import React from 'react';
import { AlertTriangle, Settings, Shield, GitBranch, Puzzle } from 'lucide-react';

export const ChallengesObstaclesSlide: React.FC = () => {
  const challenges = [
    {
      icon: Settings,
      title: "Systèmes municipaux rigides",
      description: "Les infrastructures existantes sont souvent fragmentées et difficiles à moderniser",
      solution: "Migration progressive avec modules adaptables",
      color: "yellow"
    },
    {
      icon: GitBranch,
      title: "Coordination public-privé",
      description: "Nécessité de différencier accès, règles et responsabilités entre secteurs",
      solution: "Architecture multi-tenant avec permissions granulaires",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Sécurité et confidentialité",
      description: "Standards élevés pour la protection des données municipales et privées",
      solution: "Conformité PIPEDA, chiffrement AES-256, audits réguliers",
      color: "red"
    },
    {
      icon: Puzzle,
      title: "Intégration non perturbative",
      description: "Éviter de perturber les processus internes tout en apportant de la valeur",
      solution: "Approche modulaire avec API standardisées",
      color: "purple"
    }
  ];

  const colorVariants = {
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "text-yellow-600",
      badge: "bg-yellow-100 text-yellow-800"
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "text-orange-600",
      badge: "bg-orange-100 text-orange-800"
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-600",
      badge: "bg-red-100 text-red-800"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      badge: "bg-purple-100 text-purple-800"
    }
  };

  return (
    <div className="h-full">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Défis et obstacles à surmonter
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon;
          const variant = colorVariants[challenge.color];
          
          return (
            <div 
              key={index} 
              className={`${variant.bg} ${variant.border} border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start mb-4">
                <div className={`p-2 rounded-lg bg-white shadow-sm mr-4`}>
                  <Icon className={`w-6 h-6 ${variant.icon}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-gray-700 mb-3">{challenge.description}</p>
                  <div className={`${variant.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                    Notre solution: {challenge.solution}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-2">Approche stratégique</h4>
        <p className="text-blue-700">
          Nous transformons ces défis en opportunités grâce à une approche progressive, 
          une technologie adaptable et une compréhension profonde des besoins municipaux.
        </p>
      </div>
    </div>
  );
};
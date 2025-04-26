import React from 'react';
import { Check, Target, Rocket, LineChart, Globe } from 'lucide-react';

export const ImplementationPlanSlide: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1",
      quarter: "T1 2025",
      title: "Projet pilote Gatineau",
      details: ["Secteur test: Hull", "10 déneigeurs privés", "Budget: 150 000$"],
      color: "blue",
      icon: Target,
      angle: -90  // -90 to put Phase 1 at the top
    },
    {
      phase: "Phase 2",
      quarter: "T2 2025",
      title: "Expansion fonctionnalités",
      details: ["API municipale", "Tests Sherbrooke", "Investissement: 400 000$"],
      color: "green",
      icon: Check,
      angle: 0  // 0 to put Phase 2 on the right
    },
    {
      phase: "Phase 3",
      quarter: "T3 2025",
      title: "Lancement commercial",
      details: ["Campagne 50 villes", "Équipe ventes dédiée", "Support 24/7"],
      color: "purple",
      icon: Rocket,
      angle: 90  // 90 to put Phase 3 at the bottom
    },
    {
      phase: "Phase 4",
      quarter: "T4 2025",
      title: "Mise à l'échelle",
      details: ["Expansion Ontario", "Partenariats", "Module IA prédictive"],
      color: "orange",
      icon: Globe,
      angle: 180  // 180 to put Phase 4 on the left
    }
  ];
  
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Déploiement structuré en 4 phases
      </h2>
      
      <div className="relative w-full max-w-2xl" style={{ aspectRatio: '1' }}>
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded-full border-2 border-dashed border-gray-300"></div>
        </div>
        
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
          <div className="text-white text-center">
            <LineChart className="w-6 h-6 mx-auto mb-1" />
            <div className="text-base font-bold">2025</div>
          </div>
        </div>
        
        {/* Animated progress line */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90" 
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset="283"
            className="animate-progress"
          />
        </svg>
        
        {/* Phase cards */}
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const radius = 40; // Distance from center as percentage
          const angleRad = (phase.angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(angleRad);
          const y = 50 + radius * Math.sin(angleRad);
          
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-48"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <div className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors[phase.color]} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-2">
                    <div className={`text-xs font-bold text-${phase.color}-600`}>{phase.phase}</div>
                    <div className="text-xs text-gray-500">{phase.quarter}</div>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">{phase.title}</h3>
                <ul className="space-y-0.5">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start">
                      <div className={`w-1 h-1 bg-${phase.color}-500 rounded-full mr-2 mt-1.5`}></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      
      <style>{`
        @keyframes progress {
          0% {
            stroke-dashoffset: 283;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-progress {
          animation: progress 4s linear infinite;
        }
      `}</style>
    </div>
  );
};
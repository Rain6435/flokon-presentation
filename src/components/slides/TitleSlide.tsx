import React from 'react';
import { Snowflake, ArrowRight } from 'lucide-react';

export const TitleSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full text-center relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl"></div>
    
    <div className="relative z-10 space-y-8">
      <div className="animate-float">
        <Snowflake className="w-24 h-24 mx-auto text-blue-500" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Flokon
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto">
        Le pont entre la gestion privée et municipale de la neige
      </h2>
      
      <h3 className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Une plateforme à double usage pour des opérations hivernales complètes
      </h3>
      
      <div className="flex items-center justify-center space-x-4 text-blue-600 pt-8">
        <span className="font-medium">Innovation dans la gestion hivernale</span>
        <ArrowRight className="w-5 h-5 animate-pulse" />
      </div>
    </div>
    
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `}</style>
  </div>
);
import React from 'react';
import { MapPin, Users, TrendingUp, Target, Clock, DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react';

export const GatineauCaseStudySlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Projet pilote Gatineau - Résultats projetés
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      <div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center text-blue-800">
            <MapPin className="w-5 h-5 mr-2" />
            Contexte
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Users className="w-5 h-5 mr-3 text-blue-600" />
              <span>Population: 305 000 habitants</span>
            </li>
            <li className="flex items-center">
              <Target className="w-5 h-5 mr-3 text-blue-600" />
              <span>Routes: 800 km (3 niveaux priorité)</span>
            </li>
            <li className="flex items-center">
              <DollarSign className="w-5 h-5 mr-3 text-blue-600" />
              <span>Budget: 25M$/an</span>
            </li>
            <li className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-3 text-blue-600" />
              <span>Défis: Coordination avec 200+ privés</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Implémentation
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span>3 zones pilotes</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span>30 sous-traitants municipaux</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span>50 entreprises privées</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span>Investissement: 250 000$</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-6 text-center">Résultats attendus</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-sm font-medium mb-1">Réduction des coûts</div>
            <div className="text-3xl font-bold mb-1">15%</div>
            <div className="text-sm opacity-80">5,25M$ économisés</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white shadow-lg">
            <AlertCircle className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-sm font-medium mb-1">Diminution des plaintes</div>
            <div className="text-3xl font-bold mb-1">60%</div>
            <div className="text-sm opacity-80">de 2000 à 800/an</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
            <Clock className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-sm font-medium mb-1">Amélioration des délais</div>
            <div className="text-3xl font-bold mb-1">25%</div>
            <div className="text-sm opacity-80">plus rapide</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-xl text-white shadow-lg">
            <DollarSign className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-sm font-medium mb-1">ROI</div>
            <div className="text-3xl font-bold mb-1">6 mois</div>
            <div className="text-sm opacity-80">retour sur investissement</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
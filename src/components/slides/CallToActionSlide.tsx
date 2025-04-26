import React from 'react';
import { Building2, DollarSign, Mail, Phone, Globe, ArrowRight } from 'lucide-react';

export const CallToActionSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Joignez-vous à la révolution du déneigement intelligent
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center mb-4">
          <Building2 className="w-8 h-8 mr-3" />
          <h3 className="text-2xl font-bold">Pour les municipalités</h3>
        </div>
        <ul className="space-y-4">
          {[
            "Démonstration personnalisée gratuite",
            "Étude de faisabilité sans engagement",
            "Accès au programme pilote subventionné",
            "Formation complète de votre équipe"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="w-5 h-5 mr-3 text-blue-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center mb-4">
          <DollarSign className="w-8 h-8 mr-3" />
          <h3 className="text-2xl font-bold">Pour les investisseurs</h3>
        </div>
        <ul className="space-y-4">
          {[
            "Série A: 5M$ recherchés",
            "Valorisation pré-money: 15M$",
            "Retour anticipé: 5x en 5 ans",
            "Utilisation: 60% dev, 30% ventes"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="w-5 h-5 mr-3 text-green-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl text-white text-center shadow-lg w-full max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 mr-3 text-blue-400" />
          <div>
            <div className="font-medium">Jean Tremblay, CEO</div>
            <div className="text-blue-400">jean@flokon.ca</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 mr-3 text-green-400" />
          <div>
            <div className="font-medium">Marie Dubois, VP Ventes</div>
            <div className="text-green-400">marie@flokon.ca</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Phone className="w-6 h-6 mr-3 text-purple-400" />
          <div>
            <div className="font-medium">Service client</div>
            <div className="text-purple-400">1-888-FLOKON1</div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Globe className="w-6 h-6 mr-3 text-blue-400" />
        <a href="https://www.flokon.ca" className="text-blue-400 hover:text-blue-300 transition-colors">
          www.flokon.ca
        </a>
      </div>
    </div>
  </div>
);
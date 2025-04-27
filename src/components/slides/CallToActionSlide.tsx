import React from 'react';
import { Building2, DollarSign, Mail, Phone, Globe, ArrowRight, Users, Lightbulb } from 'lucide-react';

export const CallToActionSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl p-4 font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Joignez-vous à la modernisation du <br></br>déneigement intelligent
    </h2>
    
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg mb-8 w-2xl max-w-3xl mx-auto">
      <div className="flex items-start">
        <Users className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Vision collaborative</h3>
          <p className="text-gray-700 text-lg">
            Nous croyons que l'avenir du déneigement passe par la coordination entre public et privé, et non par leur opposition.
          </p>
          <p className="text-blue-600 font-semibold mt-2 text-lg">
            Avec Flokon, Gatineau peut devenir un modèle d'efficacité hivernale pour tout le Québec.
          </p>
        </div>
      </div>
    </div>
    
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl text-white text-center shadow-lg w-2xl max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 mr-3 text-blue-400" />
          <div>
            <div className="font-medium">Mohammed Elhasnaoui</div>
            <div className="text-blue-400">melhas134@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 mr-3 text-green-400" />
          <div>
            <div className="font-medium">Ayman Lahdili</div>
            <div className="text-green-400">aymanlahdili25@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
import React from 'react';
import { Snowflake } from 'lucide-react';

export const TitleSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Flokon : Le pont entre la gestion privée et municipale de la neige</h2>
    <h3 className="text-xl text-gray-600 mb-8">Une plateforme à double usage pour des opérations hivernales complètes</h3>
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <Snowflake className="w-24 h-24 mx-auto mb-8 text-blue-500" />
        <h1 className="text-4xl font-bold mb-4">Flokon</h1>
        <p className="text-xl text-gray-600">Innovation dans la gestion hivernale</p>
      </div>
    </div>
  </div>
);
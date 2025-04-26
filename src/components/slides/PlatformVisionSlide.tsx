import React from 'react';
import { PlatformDiagram } from '../charts/PlatformDiagram';

export const PlatformVisionSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Une plateforme, deux marchés, une solution intégrée
    </h2>
    <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
      <PlatformDiagram />
    </div>
  </div>
);
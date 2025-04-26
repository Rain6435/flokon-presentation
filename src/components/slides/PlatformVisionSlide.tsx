import React from 'react';
import { PlatformDiagram } from '../charts/PlatformDiagram';

export const PlatformVisionSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Une plateforme, deux marchés, une solution intégrée</h2>
    <div className="mt-8">
      <PlatformDiagram />
    </div>
  </div>
);
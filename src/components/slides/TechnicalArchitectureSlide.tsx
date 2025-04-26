import React from 'react';
import { Cloud, Lock, Network } from 'lucide-react';
import { TechCard } from '../cards/TechCard';

export const TechnicalArchitectureSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Infrastructure robuste et évolutive
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      <TechCard 
        icon={Cloud}
        title="Architecture cloud"
        items={[
          "AWS auto-scaling",
          "99,99% uptime",
          "PostgreSQL répliqué",
          "CDN CloudFront"
        ]}
        color="blue"
      />
      <TechCard 
        icon={Lock}
        title="Sécurité"
        items={[
          "Chiffrement AES-256",
          "OAuth 2.0, 2FA",
          "Conformité PIPEDA",
          "Audit complet"
        ]}
        color="green"
      />
      <TechCard 
        icon={Network}
        title="Intégrations"
        items={[
          "API REST OpenAPI 3.0",
          "Webhooks temps réel",
          "Compatible Maximo",
          "Standards GeoJSON"
        ]}
        color="purple"
      />
    </div>
  </div>
);
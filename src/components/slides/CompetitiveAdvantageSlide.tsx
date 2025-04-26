import React from 'react';

export const CompetitiveAdvantageSlide: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6">Position unique sur le marché</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left">Critère</th>
            <th className="px-6 py-3 text-left">Flokon</th>
            <th className="px-6 py-3 text-left">Concurrent A</th>
            <th className="px-6 py-3 text-left">Concurrent B</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4">Secteur privé</td>
            <td className="px-6 py-4">✅ Leader</td>
            <td className="px-6 py-4">✅ Présent</td>
            <td className="px-6 py-4">❌ Absent</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Secteur municipal</td>
            <td className="px-6 py-4">✅ En développement</td>
            <td className="px-6 py-4">❌ Absent</td>
            <td className="px-6 py-4">✅ Limité</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Intégration privé-public</td>
            <td className="px-6 py-4">✅ Unique</td>
            <td className="px-6 py-4">❌ Non</td>
            <td className="px-6 py-4">❌ Non</td>
          </tr>
          <tr>
            <td className="px-6 py-4">Base installée</td>
            <td className="px-6 py-4">600+ clients</td>
            <td className="px-6 py-4">200 clients</td>
            <td className="px-6 py-4">5 villes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
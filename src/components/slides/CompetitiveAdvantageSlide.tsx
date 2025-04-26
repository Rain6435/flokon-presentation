import React from 'react';

export const CompetitiveAdvantageSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Position unique sur le marché
    </h2>
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <th className="px-6 py-3 text-left rounded-tl-lg">Critère</th>
            <th className="px-6 py-3 text-left">Flokon</th>
            <th className="px-6 py-3 text-left">Concurrent A</th>
            <th className="px-6 py-3 text-left rounded-tr-lg">Concurrent B</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4">Secteur privé</td>
            <td className="px-6 py-4 text-green-600">✅ Leader</td>
            <td className="px-6 py-4 text-green-600">✅ Présent</td>
            <td className="px-6 py-4 text-red-600">❌ Absent</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4">Secteur municipal</td>
            <td className="px-6 py-4 text-green-600">✅ En développement</td>
            <td className="px-6 py-4 text-red-600">❌ Absent</td>
            <td className="px-6 py-4 text-green-600">✅ Limité</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4">Intégration privé-public</td>
            <td className="px-6 py-4 text-green-600">✅ Unique</td>
            <td className="px-6 py-4 text-red-600">❌ Non</td>
            <td className="px-6 py-4 text-red-600">❌ Non</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
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
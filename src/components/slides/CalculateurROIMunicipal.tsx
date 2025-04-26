import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calculator, Building2, TrendingUp, Clock } from 'lucide-react';

const CalculateurROIMunicipal = () => {
  const [population, setPopulation] = useState(100000);
  const [kmRoutes, setKmRoutes] = useState(400);
  const [budgetAnnuel, setBudgetAnnuel] = useState(10000000);
  
  const calculateROI = () => {
    const coutLicence = population * 0.5;
    const coutSetup = 15000;
    const coutTotal = coutLicence + coutSetup;
    const economiesEstimees = budgetAnnuel * 0.15; // 15% d'économies
    
    const data = [
      { mois: 'Mois 1', cout: coutTotal, economies: 0, cumul: -coutTotal },
      { mois: 'Mois 2', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + economiesEstimees/12 },
      { mois: 'Mois 3', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*2 },
      { mois: 'Mois 4', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*3 },
      { mois: 'Mois 5', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*4 },
      { mois: 'Mois 6', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*5 },
      { mois: 'Mois 7', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*6 },
      { mois: 'Mois 8', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*7 },
      { mois: 'Mois 9', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*8 },
      { mois: 'Mois 10', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*9 },
      { mois: 'Mois 11', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*10 },
      { mois: 'Mois 12', cout: 0, economies: economiesEstimees/12, cumul: -coutTotal + (economiesEstimees/12)*11 },
    ];
    
    return {
      data,
      coutTotal,
      economiesAnnuelles: economiesEstimees,
      roi: ((economiesEstimees - coutTotal) / coutTotal * 100).toFixed(1),
      breakEven: Math.ceil(coutTotal / (economiesEstimees/12))
    };
  };
  
  const results = calculateROI();
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center">
        <Calculator className="w-8 h-8 mr-3 text-blue-600" />
        Calculateur de ROI - Flokon Municipal
      </h2>
      
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
            <label className="block text-sm font-semibold text-blue-800 mb-2">Population</label>
            <input 
              type="number" 
              value={population} 
              onChange={(e) => setPopulation(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md">
            <label className="block text-sm font-semibold text-green-800 mb-2">Km de routes</label>
            <input 
              type="number" 
              value={kmRoutes} 
              onChange={(e) => setKmRoutes(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
            />
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md">
            <label className="block text-sm font-semibold text-purple-800 mb-2">Budget déneigement annuel ($)</label>
            <input 
              type="number" 
              value={budgetAnnuel} 
              onChange={(e) => setBudgetAnnuel(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
            <Building2 className="w-8 h-8 mb-2 opacity-80" />
            <h3 className="font-semibold mb-1">Coût total</h3>
            <p className="text-3xl font-bold">{results.coutTotal.toLocaleString()}$</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <h3 className="font-semibold mb-1">Économies annuelles</h3>
            <p className="text-3xl font-bold">{results.economiesAnnuelles.toLocaleString()}$</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
            <Calculator className="w-8 h-8 mb-2 opacity-80" />
            <h3 className="font-semibold mb-1">ROI</h3>
            <p className="text-3xl font-bold">{results.roi}%</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
            <Clock className="w-8 h-8 mb-2 opacity-80" />
            <h3 className="font-semibold mb-1">Retour sur investissement</h3>
            <p className="text-3xl font-bold">{results.breakEven} mois</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="mois" stroke="#666" />
              <YAxis tickFormatter={(value) => `${(value/1000).toFixed(0)}k$`} stroke="#666" />
              <Tooltip 
                formatter={(value) => `${value.toLocaleString()}$`}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cumul" 
                name="ROI cumulatif" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="economies" 
                name="Économies mensuelles" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CalculateurROIMunicipal;
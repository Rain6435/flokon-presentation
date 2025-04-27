import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Calculator, Building2, TrendingUp, Clock, Snowflake } from 'lucide-react';

const CalculateurROIMunicipal = () => {
  const [population, setPopulation] = useState(100000);
  const [kmRoutes, setKmRoutes] = useState(400);
  const [budgetAnnuel, setBudgetAnnuel] = useState(10000000);
  const [winterMonths, setWinterMonths] = useState(5);
  
  const calculateROI = () => {
    const coutLicenceAnnuel = population * 0.5 * (winterMonths / 12);
    const coutSetup = 15000;
    const coutPremierAnnee = coutLicenceAnnuel + coutSetup;
    const economiesEstimees = budgetAnnuel * 0.15;
    
    const monthlyEconomies = economiesEstimees / winterMonths;
    const monthlyCost = coutLicenceAnnuel / winterMonths;
    const setupCostPerMonth = coutSetup / 12;
    
    const monthlyData = [];
    
    for (let year = 1; year <= 5; year++) {
      const months = [
        { month: 'Jan', economies: monthlyEconomies, cout: monthlyCost + (year === 1 ? setupCostPerMonth : 0), active: true },
        { month: 'Fév', economies: monthlyEconomies, cout: monthlyCost + (year === 1 ? setupCostPerMonth : 0), active: true },
        { month: 'Mar', economies: monthlyEconomies, cout: monthlyCost + (year === 1 ? setupCostPerMonth : 0), active: true },
        { month: 'Avr', economies: winterMonths >= 5 ? monthlyEconomies / 2 : 0, cout: winterMonths >= 5 ? monthlyCost / 2 + (year === 1 ? setupCostPerMonth : 0) : 0, active: winterMonths >= 5 },
        { month: 'Mai', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Juin', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Juil', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Août', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Sep', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Oct', economies: 0, cout: year === 1 ? setupCostPerMonth : 0, active: false },
        { month: 'Nov', economies: winterMonths >= 4 ? monthlyEconomies / 2 : 0, cout: winterMonths >= 4 ? monthlyCost / 2 + (year === 1 ? setupCostPerMonth : 0) : 0, active: winterMonths >= 4 },
        { month: 'Déc', economies: monthlyEconomies, cout: monthlyCost + (year === 1 ? setupCostPerMonth : 0), active: true },
      ];
      
      months.forEach(m => {
        monthlyData.push({
          ...m,
          month: `${m.month} ${year}`,
          year: year
        });
      });
    }
    
    let cumul = 0;
    monthlyData.forEach(m => {
      cumul += m.economies - m.cout;
      m.cumul = cumul;
    });
    
    return {
      monthlyData,
      coutPremierAnnee,
      coutLicenceAnnuel,
      economiesAnnuelles: economiesEstimees,
      roi: ((economiesEstimees - coutPremierAnnee) / coutPremierAnnee * 100).toFixed(1),
      breakEven: economiesEstimees > coutPremierAnnee ? "< 1" : Math.ceil(coutPremierAnnee / economiesEstimees)
    };
  };
  
  const results = calculateROI();
  
  return (
    <div className="h-full overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
        <Snowflake className="w-8 h-8 mr-3 text-blue-600" />
        Calculateur de ROI saisonnier - Flokon Municipal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-md">
          <label className="block text-sm font-semibold text-indigo-800 mb-2">Mois d'hiver par année</label>
          <select 
            value={winterMonths} 
            onChange={(e) => setWinterMonths(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          >
            <option value={4}>4 mois</option>
            <option value={5}>5 mois</option>
            <option value={6}>6 mois</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
          <Building2 className="w-8 h-8 mb-2 opacity-80" />
          <h3 className="font-semibold mb-1">Coût année 1</h3>
          <p className="text-3xl font-bold">{results.coutPremierAnnee.toLocaleString()}$</p>
          <p className="text-sm opacity-80">Setup + {winterMonths} mois licence</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
          <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
          <h3 className="font-semibold mb-1">Économies saisonnières</h3>
          <p className="text-3xl font-bold">{results.economiesAnnuelles.toLocaleString()}$</p>
          <p className="text-sm opacity-80">15% sur {winterMonths} mois</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
          <Calculator className="w-8 h-8 mb-2 opacity-80" />
          <h3 className="font-semibold mb-1">ROI année 1</h3>
          <p className="text-3xl font-bold">{results.roi}%</p>
          <p className="text-sm opacity-80">Retour première saison</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
          <Clock className="w-8 h-8 mb-2 opacity-80" />
          <h3 className="font-semibold mb-1">Retour sur investissement</h3>
          <p className="text-3xl font-bold">{results.breakEven} an{results.breakEven !== "< 1" && results.breakEven > 1 ? 's' : ''}</p>
          <p className="text-sm opacity-80">Période de récupération</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Projection sur 5 ans - Activité mensuelle</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={results.monthlyData}>
            <defs>
              <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorCosts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="month" 
              stroke="#666" 
              interval={11}
              fontSize={12}
            />
            <YAxis 
              tickFormatter={(value) => `${(value/1000).toFixed(0)}k$`} 
              stroke="#666"
              domain={[
                'auto',
                'dataMax + 100000'
              ]}
            />
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
            <Area 
              type="monotone" 
              dataKey="economies" 
              name="Économies mensuelles" 
              stroke="#10b981" 
              fillOpacity={1}
              fill="url(#colorSavings)"
            />
            <Area 
              type="monotone" 
              dataKey="cout" 
              name="Coût mensuel" 
              stroke="#ef4444" 
              fillOpacity={1}
              fill="url(#colorCosts)"
            />
            <Line 
              type="monotone" 
              dataKey="cumul" 
              name="ROI cumulatif" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-3 text-blue-800">Notes sur le calcul</h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <Snowflake className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
            <span>Les mois d'hiver (décembre à mars) montrent une activité maximale</span>
          </li>
          <li className="flex items-start">
            <Calculator className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
            <span>Le coût de setup est réparti sur tous les mois de la première année</span>
          </li>
          <li className="flex items-start">
            <TrendingUp className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
            <span>La ligne violette montre le ROI cumulatif augmentant progressivement</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CalculateurROIMunicipal;
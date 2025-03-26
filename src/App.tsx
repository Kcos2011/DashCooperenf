import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingDown, TrendingUp, Clock, Receipt } from 'lucide-react';

const clientRevenueData = [
  { name: 'INST SINAI', value: 7715841.00 },
  { name: 'HOSPITAL BOM JESUS', value: 1217023.00 },
  { name: 'UNIMED', value: 694123.83 },
  { name: 'HOSPITAL SÃO LUCAS', value: 44833.40 },
  { name: 'VIVENTI HOME CARE', value: 176724.63 },
  { name: 'HOSPITAL CRISTO REI', value: 870.00 }
];

const expenseData = [
  { name: 'IMPOSTOS E TAXAS', value: 114224.97 },
  { name: 'REPASSES AOS COOPERADOS PF', value: 7615625.27 },
  { name: 'REPASSES ATOS NÃO COOPERADOS PJ', value: 911367.02 },
  { name: 'BRINDES A COOPERADOS', value: 34741.67 },
  { name: 'PLUS NO REPASSE DE PLANTÕES', value: 16043.00 },
  { name: 'OUTRAS DESPESAS', value: 1091038.97 },
  { name: 'CURSOS E PALESTRA', value: 39886.24 }
];

const financialResultsData = [
  { name: 'Receita Bruta Total', value: 9849415.86 },
  { name: 'Despesa Total', value: 9822927.14 },
  { name: 'Resultado Operacional do Exercício', value: 26488.72 },
  { name: 'FATES (5% do resultado)', value: 1324.44 },
  { name: 'Fundo de Reserva (10% do resultado)', value: 2648.87 },
  { name: 'Perdas no Período', value: 91970.16 },
  { name: 'Sobras no Período', value: 118458.88 }
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 p-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6" />
            <h1 className="text-xl font-bold">COOPERENF - INFORMAÇÕES PARA PRESTAÇÃO DE CONTAS</h1>
          </div>
          <p className="mt-1">Exercício 2024</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-green-500 hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Receita Total</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(9849415.86)}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-red-500 hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Despesa Total</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(9822927.14)}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Resultado Operacional</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(26488.72)}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-purple-500 hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Sobras no Período</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(118458.88)}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-orange-500 hover:bg-white/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Perdas no Período</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(91970.16)}</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
                <TrendingDown className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Receitas por Cliente</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clientRevenueData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `R$ ${value / 1000000}mi`} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Bar dataKey="value" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Despesas por Categoria</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `R$ ${value / 1000000}mi`} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Bar dataKey="value" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Financial Results */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Resultados Financeiros</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialResultsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => `R$ ${value / 1000000}mi`} />
                <YAxis dataKey="name" type="category" width={250} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2024 COOPERENF. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
import { motion } from 'framer-motion';
import {
  Building2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { FinancialChart } from './components/FinancialChart';
import { HorizontalBarChart } from './components/HorizontalBarChart';
import { SummaryCard } from './components/SummaryCard';
import { revenueData, expenseData, resultData } from './data';

function App() {
  const totalRevenue = 9849415.86; // Valor exato da receita total
  const totalExpenses = 9822927.14; // Valor exato da despesa total
  const operationalResult = 26488.72; // Valor exato do resultado operacional
  const sobrasNoPeriodo = 118458.88; // Valor exato das sobras no período

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Building2 size={32} />
            <h1 className="text-2xl md:text-3xl font-bold">
              COOPERENF - INFORMAÇÕES PARA PRESTAÇÃO DE CONTAS
            </h1>
          </div>
          <p className="mt-2 text-blue-100">Exercício 2024</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard
            title="Receita Total"
            value={totalRevenue}
            icon={DollarSign}
            bgColor="bg-green-50"
            iconColor="bg-green-400"
          />
          <SummaryCard
            title="Despesa Total"
            value={totalExpenses}
            icon={TrendingDown}
            bgColor="bg-red-50"
            iconColor="bg-red-400"
          />
          <SummaryCard
            title="Resultado Operacional"
            value={operationalResult}
            icon={TrendingUp}
            bgColor="bg-blue-50"
            iconColor="bg-blue-400"
          />
          <SummaryCard
            title="Sobras no Período"
            value={sobrasNoPeriodo}
            icon={TrendingUp}
            bgColor="bg-purple-50"
            iconColor="bg-purple-400"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DashboardCard
              title={
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-green-600" />
                  <span>Receitas por Cliente</span>
                </div>
              }
            >
              <FinancialChart data={revenueData} color="rgba(34, 197, 94, 0.7)" />
            </DashboardCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DashboardCard
              title={
                <div className="flex items-center space-x-2">
                  <TrendingDown className="text-red-600" />
                  <span>Despesas por Categoria</span>
                </div>
              }
            >
              <FinancialChart data={expenseData} color="rgba(239, 68, 68, 0.7)" />
            </DashboardCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <DashboardCard
            title={
              <div className="flex items-center space-x-2">
                <PieChart className="text-blue-600" />
                <span>Resultados Financeiros</span>
              </div>
            }
          >
            <HorizontalBarChart data={resultData} />
          </DashboardCard>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 COOPERENF. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FinancialData } from '../types';

interface FinancialChartProps {
  data: FinancialData[];
  color: string;
}

export function FinancialChart({ data, color }: FinancialChartProps) {
  return (
    <div className="h-[500px] w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height="100%" minWidth={600}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 120 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={120}
            tick={{ fontSize: 12 }}
            tickMargin={40}
          />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                notation: 'compact',
                maximumFractionDigits: 1,
              }).format(value)
            }
          />
          <Tooltip
            formatter={(value: number) =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value)
            }
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Bar
            dataKey="value"
            fill={color}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ResultData } from '../types';

interface HorizontalBarChartProps {
  data: ResultData[];
}

export function HorizontalBarChart({ data }: HorizontalBarChartProps) {
  return (
    <div className="h-[600px] w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height="100%" minWidth={500}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 200, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
          <XAxis
            type="number"
            tickFormatter={(value) =>
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                notation: 'compact',
                maximumFractionDigits: 1,
              }).format(value)
            }
          />
          <YAxis
            type="category"
            dataKey="label"
            width={190}
            tick={{ fontSize: 12 }}
            tickMargin={5}
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
            fill="rgba(59, 130, 246, 0.7)"
            radius={[0, 4, 4, 0]}
            barSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
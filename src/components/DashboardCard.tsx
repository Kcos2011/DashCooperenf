import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: ReactNode;
  children: ReactNode;
}

export function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/40 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
      {children}
    </motion.div>
  );
}
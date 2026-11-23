import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, BarChart3, MonitorSmartphone, Activity, Lock, PieChart, Lightbulb, BrainCircuit, ShieldAlert, CandlestickChart } from 'lucide-react';
import { scaleIn } from '../utils/animations';

const iconMap: Record<string, React.FC<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Zap, ShieldCheck, BarChart3, MonitorSmartphone, Activity, Lock,
  PieChart, Lightbulb, BrainCircuit, ShieldAlert, CandlestickChart,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color, index = 0 }) => {
  const Icon = iconMap[icon] || Zap;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card p-6 lg:p-7 group cursor-default transition-all duration-300"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}25, ${color}10)`,
          border: `1px solid ${color}30`,
        }}
      >
        <Icon size={26} color={color} strokeWidth={1.8} />
      </div>
      <h3 className="font-space font-bold text-lg text-white mb-3 group-hover:text-[#087BFF] transition-colors">
        {title}
      </h3>
      <p className="text-[#AAB6CC] text-sm leading-relaxed">
        {description}
      </p>
      <div
        className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.div>
  );
};

export default FeatureCard;

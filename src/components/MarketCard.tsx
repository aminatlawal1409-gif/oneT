import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Layers, BarChart2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { scaleIn } from '../utils/animations';

const iconMap: Record<string, React.FC<{ size?: number; color?: string; strokeWidth?: number }>> = {
  DollarSign, TrendingUp, Layers, BarChart2,
  Bitcoin: DollarSign,
};

interface MarketCardProps {
  name: string;
  icon: string;
  description: string;
  assets: string[];
  color: string;
  change: string;
  positive: boolean;
  index?: number;
}

const MarketCard: React.FC<MarketCardProps> = ({
  name, icon, description, assets, color, change, positive, index = 0,
}) => {
  const Icon = iconMap[icon] || TrendingUp;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-card p-6 group cursor-default transition-all duration-300 relative overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)` }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)`, border: `1px solid ${color}40` }}
          >
            <Icon size={22} color={color} strokeWidth={1.8} />
          </div>
          <span
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg ${
              positive ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'
            }`}
          >
            {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {change}
          </span>
        </div>

        <h3 className="font-space font-bold text-lg text-white mb-2">{name}</h3>
        <p className="text-[#AAB6CC] text-xs leading-relaxed mb-4">{description}</p>

        {/* Asset tags */}
        <div className="flex flex-wrap gap-1.5">
          {assets.slice(0, 4).map((asset) => (
            <span
              key={asset}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-[#AAB6CC] border"
              style={{ borderColor: `${color}25`, background: `${color}08` }}
            >
              {asset}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MarketCard;

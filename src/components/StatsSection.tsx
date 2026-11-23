import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { company } from '../data/company';

// NOTE: Trader count, country count, and rating are PLACEHOLDER values.
// Update with verified figures once available. Only founding year is confirmed.
const stats = [
  { value: 'Est. 2020', label: 'Year Founded', note: `Founded by ${company.founder}`, color: '#087BFF' },
  { value: '5+', label: 'Asset Classes', note: 'Forex, Crypto, Stocks, Commodities, Indices', color: '#F8C744' },
  { value: '24/7', label: 'Platform Access', note: 'Trade anytime, anywhere', color: '#00C6B8' },
  { value: '100%', label: 'Customer Focus', note: company.tagline, color: '#00C9F2' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" aria-label="One Trade company highlights">
      <div className="absolute inset-0 bg-gradient-to-r from-[#087BFF]/8 via-transparent to-[#F8C744]/8" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-6 lg:p-8 text-center group-hover:border-[#087BFF]/50 transition-all duration-300 h-full flex flex-col items-center justify-center gap-2">
                <div
                  className="font-space font-bold text-2xl lg:text-3xl xl:text-4xl mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm lg:text-base">{stat.label}</div>
                <div className="text-[#AAB6CC]/60 text-xs text-center leading-relaxed">{stat.note}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

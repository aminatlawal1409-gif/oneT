import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import logoImg from '../assets/onetrade logo.jpeg';

const PhoneMockup: React.FC = () => {
  // Simulated candlestick SVG path
  const chartPath = "M 20 120 L 40 90 L 60 110 L 80 70 L 100 85 L 120 55 L 140 65 L 160 40 L 180 50 L 200 30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-[300px] mx-auto"
      aria-label="Trading platform phone mockup illustration"
    >
      {/* Glow behind phone */}
      <div className="absolute inset-0 rounded-[40px] opacity-40"
        style={{ background: 'radial-gradient(ellipse, #087BFF 0%, transparent 70%)', filter: 'blur(40px)', transform: 'scale(1.3)' }} />

      {/* Phone frame */}
      <div
        className="relative rounded-[36px] p-[3px] shadow-[0_0_60px_rgba(8,123,255,0.3)]"
        style={{ background: 'linear-gradient(135deg, #087BFF60, #00C9F240, #F8C74420)' }}
      >
        <div className="rounded-[34px] bg-[#06132B] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2 bg-[#06132B]">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="w-20 h-5 bg-[#030817] rounded-full" />
            <span className="text-white text-xs">●●●</span>
          </div>

          {/* App header */}
          <div className="px-4 py-3 bg-[#06132B] border-b border-[#087BFF]/15 flex items-center justify-between">
            <img src={logoImg} alt="One Trade" className="h-6 w-auto object-contain" />
            <div className="text-[#AAB6CC] text-xs">Portfolio</div>
          </div>

          {/* Balance */}
          <div className="px-4 py-4 bg-[#06132B]">
            <div className="text-[#AAB6CC] text-xs mb-1">Total Balance</div>
            <div className="text-white text-2xl font-space font-bold">$24,850.00</div>
            <div className="flex items-center gap-1 mt-1">
              <ArrowUpRight size={12} className="text-green-400" />
              <span className="text-green-400 text-xs font-semibold">+$1,248.30 (5.28%) Today</span>
            </div>
          </div>

          {/* Chart area */}
          <div className="mx-4 mb-4 rounded-xl bg-[#030817]/80 border border-[#087BFF]/20 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#AAB6CC] text-xs">BTC/USD</span>
              <span className="text-green-400 text-xs font-semibold">+2.4%</span>
            </div>
            <svg viewBox="0 0 220 140" className="w-full h-20" aria-hidden="true">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#087BFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#087BFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Fill area */}
              <path
                d={`${chartPath} L 200 140 L 20 140 Z`}
                fill="url(#chartGrad)"
              />
              {/* Line */}
              <path
                d={chartPath}
                fill="none"
                stroke="#087BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Candlesticks */}
              {[30, 60, 90, 120, 150, 180].map((x, i) => {
                const y = [95, 75, 65, 60, 45, 35][i];
                const h = [20, 25, 30, 20, 25, 20][i];
                const isUp = i % 2 === 0;
                return (
                  <g key={x}>
                    <line x1={x} y1={y - 8} x2={x} y2={y + h + 8} stroke={isUp ? '#22c55e' : '#ef4444'} strokeWidth="1" />
                    <rect x={x - 5} y={y} width="10" height={h} fill={isUp ? '#22c55e' : '#ef4444'} rx="1" />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Asset list */}
          <div className="px-4 pb-4 space-y-2">
            {[
              { name: 'EUR/USD', price: '1.0842', change: '+0.42%', up: true },
              { name: 'Gold', price: '2,318', change: '-0.18%', up: false },
              { name: 'S&P 500', price: '5,248', change: '+0.76%', up: true },
            ].map((asset) => (
              <div key={asset.name} className="flex items-center justify-between py-1.5 border-b border-[#087BFF]/10">
                <span className="text-white text-xs font-medium">{asset.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#AAB6CC] text-xs">{asset.price}</span>
                  <span className={`text-xs font-semibold flex items-center gap-0.5 ${asset.up ? 'text-green-400' : 'text-red-400'}`}>
                    {asset.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                    {asset.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Buy/Sell buttons */}
          <div className="px-4 pb-6 grid grid-cols-2 gap-3">
            <button className="py-3 rounded-xl text-white text-sm font-bold bg-green-500/90 hover:bg-green-500 transition-colors">
              Buy
            </button>
            <button className="py-3 rounded-xl text-white text-sm font-bold bg-red-500/90 hover:bg-red-500 transition-colors">
              Sell
            </button>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3 shadow-[0_0_20px_rgba(8,123,255,0.3)]"
      >
        <div className="flex -space-x-2">
          {['JO', 'AD', 'CW'].map((initials) => (
            <div key={initials} className="w-7 h-7 rounded-full border-2 border-[#06132B] flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #087BFF, #00C9F2)' }}>
              {initials[0]}
            </div>
          ))}
        </div>
        <div>
          <div className="text-white text-sm font-bold">50K+</div>
          <div className="text-[#AAB6CC] text-xs">Active Traders*</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneMockup;

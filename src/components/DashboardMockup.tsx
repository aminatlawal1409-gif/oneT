import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import logoImg from '../assets/onetrade logo.jpeg';

const DashboardMockup: React.FC = () => {
  const mainChartPath = "M 0 180 L 40 160 L 80 170 L 120 130 L 160 140 L 200 100 L 240 115 L 280 80 L 320 95 L 360 60 L 400 70 L 440 40 L 480 55 L 520 30 L 560 20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full"
      aria-label="Trading dashboard illustration"
    >
      {/* Monitor glow */}
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #087BFF, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Monitor frame */}
      <div className="relative rounded-2xl border border-[#087BFF]/30 bg-[#06132B]/90 overflow-hidden shadow-[0_0_60px_rgba(8,123,255,0.2)]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#030817]/80 border-b border-[#087BFF]/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <img src={logoImg} alt="One Trade Trading Dashboard" className="h-5 w-auto object-contain opacity-80" />
          <div className="text-[#AAB6CC]/50 text-xs">Demo View</div>
        </div>

        <div className="grid grid-cols-12 gap-0 h-[380px] lg:h-[420px]">
          {/* Sidebar */}
          <div className="col-span-2 bg-[#030817]/60 border-r border-[#087BFF]/15 p-3 flex flex-col gap-3">
            {['Portfolio', 'Markets', 'Trade', 'Analytics', 'Alerts'].map((item, i) => (
              <div key={item}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-all cursor-default ${
                  i === 0 ? 'bg-[#087BFF]/20 text-[#087BFF]' : 'text-[#AAB6CC]/60 hover:text-[#AAB6CC]'
                }`}>
                {item}
              </div>
            ))}
          </div>

          {/* Main chart */}
          <div className="col-span-7 p-4 flex flex-col gap-3">
            {/* Top stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Portfolio Value', value: '$24,850', change: '+5.28%', up: true },
                { label: 'Today\'s P&L', value: '+$1,248', change: '+5.28%', up: true },
                { label: 'Open Positions', value: '7', change: 'Active', up: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#030817]/60 rounded-xl p-3 border border-[#087BFF]/15">
                  <div className="text-[#AAB6CC] text-[9px] mb-1">{stat.label}</div>
                  <div className="text-white text-sm font-space font-bold">{stat.value}</div>
                  <div className={`text-[9px] flex items-center gap-0.5 mt-1 ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.up ? <ArrowUpRight size={8} /> : <ArrowDownRight size={8} />}
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="flex-1 bg-[#030817]/60 rounded-xl border border-[#087BFF]/15 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white text-xs font-bold">BTC / USD</span>
                  <span className="text-green-400 text-xs flex items-center gap-0.5 font-semibold">
                    <ArrowUpRight size={10} />+2.4%
                  </span>
                </div>
                <div className="flex gap-1">
                  {['1H','4H','1D','1W'].map((t, i) => (
                    <span key={t} className={`text-[9px] px-2 py-0.5 rounded cursor-default ${i === 2 ? 'bg-[#087BFF]/30 text-[#087BFF]' : 'text-[#AAB6CC]/60'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 560 200" className="w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="dashChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#087BFF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#087BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[50, 100, 150].map((y) => (
                  <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#087BFF" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4,4" />
                ))}
                {/* Fill */}
                <path d={`${mainChartPath} L 560 200 L 0 200 Z`} fill="url(#dashChartGrad)" />
                {/* Line */}
                <path d={mainChartPath} fill="none" stroke="#087BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Candlesticks */}
                {[40, 100, 160, 220, 280, 340, 400, 460, 520].map((x, i) => {
                  const heights = [20, 30, 25, 35, 20, 30, 25, 35, 20];
                  const tops = [150, 125, 135, 100, 115, 85, 90, 65, 50];
                  const isUp = i % 3 !== 1;
                  return (
                    <g key={x}>
                      <line x1={x} y1={tops[i] - 10} x2={x} y2={tops[i] + heights[i] + 10} stroke={isUp ? '#22c55e' : '#ef4444'} strokeWidth="1" />
                      <rect x={x - 6} y={tops[i]} width="12" height={heights[i]} fill={isUp ? '#22c55e' : '#ef4444'} rx="1.5" />
                    </g>
                  );
                })}
                {/* Highlight dot */}
                <circle cx="560" cy="20" r="5" fill="#087BFF" />
                <circle cx="560" cy="20" r="10" fill="#087BFF" fillOpacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Right panel — watchlist */}
          <div className="col-span-3 border-l border-[#087BFF]/15 p-3 flex flex-col gap-2">
            <div className="text-[#AAB6CC] text-[10px] font-semibold uppercase tracking-wider mb-1">Watchlist</div>
            {[
              { pair: 'EUR/USD', price: '1.0842', change: '+0.42%', up: true },
              { pair: 'GBP/USD', price: '1.2653', change: '-0.18%', up: false },
              { pair: 'Gold', price: '2,318', change: '+0.65%', up: true },
              { pair: 'Bitcoin', price: '67,842', change: '+2.18%', up: true },
              { pair: 'S&P 500', price: '5,248', change: '+0.76%', up: true },
              { pair: 'Oil (WTI)', price: '82.45', change: '-0.32%', up: false },
              { pair: 'Ethereum', price: '3,421', change: '+1.95%', up: true },
            ].map((item) => (
              <div key={item.pair} className="flex items-center justify-between py-1.5 border-b border-[#087BFF]/10 cursor-default hover:bg-[#087BFF]/5 px-1 rounded">
                <div>
                  <div className="text-white text-[10px] font-medium">{item.pair}</div>
                  <div className="text-[#AAB6CC] text-[9px]">{item.price}</div>
                </div>
                <span className={`text-[9px] font-semibold flex items-center gap-0.5 ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                  {item.up ? <ArrowUpRight size={8} /> : <ArrowDownRight size={8} />}
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardMockup;

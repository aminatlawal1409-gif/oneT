import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { tickerData } from '../data/markets';

// NOTE: Ticker data is DEMO DATA only. Connect a live market data API for production.
const MarketTicker: React.FC = () => {
  const doubled = [...tickerData, ...tickerData];

  return (
    <div className="bg-[#06132B]/80 border-y border-[#087BFF]/15 py-3 overflow-hidden" aria-label="Market ticker — demo data">
      <div className="ticker-wrap">
        <div className="ticker-content flex gap-10 whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm flex-shrink-0">
              <span className="text-[#AAB6CC] font-medium">{item.symbol}</span>
              <span className="text-white font-bold">{item.price}</span>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                {item.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {item.change}
              </span>
              <span className="text-[#087BFF]/40">|</span>
            </span>
          ))}
        </div>
      </div>
      <div className="text-center text-[#AAB6CC]/30 text-xs mt-1">
        Demo data only — not live market prices
      </div>
    </div>
  );
};

export default MarketTicker;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import MarketCard from '../components/MarketCard';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { markets, tickerData } from '../data/markets';
import { company } from '../data/company';
import { staggerContainer, fadeInUp } from '../utils/animations';

const Markets: React.FC = () => {
  const navigate = useNavigate();
  const [activeMarket, setActiveMarket] = useState('forex');

  const selectedMarket = markets.find((m) => m.id === activeMarket) || markets[0];

  return (
    <>
      <title>Markets | One Trade — Explore Global Financial Markets</title>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-labelledby="markets-hero-heading">
        <AnimatedBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Global Markets</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              id="markets-hero-heading"
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Explore{' '}
              <span className="gradient-text-blue">Global Financial</span>
              <br />Markets
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-2xl leading-relaxed">
              Discover a variety of financial instruments and explore the markets available through {company.name}. {company.name} provides access to multiple asset classes as part of its trading and investment focus.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Demo data notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-[#F8C744]/20 bg-[#F8C744]/5">
          <Info size={16} className="text-[#F8C744] mt-0.5 flex-shrink-0" />
          <p className="text-[#AAB6CC] text-sm">
            <span className="text-[#F8C744] font-semibold">Demo Data Notice:</span> All market values, prices, and percentage changes displayed on this page are illustrative demo data only and do not represent live market prices. This data layer is configured for easy API integration.
          </p>
        </div>
      </div>

      {/* Demo market table */}
      <section className="py-16 relative overflow-hidden" aria-label="Market overview">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Market Overview"
            title="Live Market Data"
            highlight=" (Demo)"
            description="Connect a real-time data API to display live prices here. The data structure below is ready for integration."
          />

          <div className="mt-10 glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="table" aria-label="Demo market data table">
                <thead>
                  <tr className="border-b border-[#087BFF]/15">
                    <th className="text-left px-5 py-4 text-[#AAB6CC] font-semibold text-xs uppercase tracking-wider">Symbol</th>
                    <th className="text-right px-5 py-4 text-[#AAB6CC] font-semibold text-xs uppercase tracking-wider">Price</th>
                    <th className="text-right px-5 py-4 text-[#AAB6CC] font-semibold text-xs uppercase tracking-wider">Change</th>
                    <th className="text-right px-5 py-4 text-[#AAB6CC] font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Type</th>
                    <th className="text-right px-5 py-4 text-[#AAB6CC] font-semibold text-xs uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickerData.map((item, i) => (
                    <motion.tr
                      key={item.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-[#087BFF]/8 hover:bg-[#087BFF]/5 transition-colors"
                    >
                      <td className="px-5 py-4 text-white font-semibold">{item.symbol}</td>
                      <td className="px-5 py-4 text-right text-white font-medium">{item.price}</td>
                      <td className="px-5 py-4 text-right">
                        <span className={`flex items-center justify-end gap-1 font-semibold ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {item.positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                          {item.change}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right text-[#AAB6CC] hidden md:table-cell">
                        {['Forex','Crypto','Commodity','Index','Forex','Crypto','Commodity','Index'][i]}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => navigate('/contact')}
                          className="text-xs px-4 py-1.5 rounded-lg border border-[#087BFF]/30 text-[#087BFF] hover:bg-[#087BFF]/10 transition-all"
                        >
                          Trade
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Market categories */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#06132B]/30" aria-label="Market categories">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Asset Classes"
            title="Choose Your "
            highlight="Market"
            description="Each asset class offers unique characteristics, risk profiles, and trading opportunities."
          />

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-10">
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveMarket(market.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeMarket === market.id
                    ? 'text-white shadow-glow-blue'
                    : 'text-[#AAB6CC] hover:text-white glass-card border-[#087BFF]/15'
                }`}
                style={activeMarket === market.id ? {
                  background: `linear-gradient(135deg, ${market.color}, ${market.color}99)`,
                  boxShadow: `0 0 20px ${market.color}40`,
                } : {}}
              >
                {market.name}
              </button>
            ))}
          </div>

          {/* Selected market detail */}
          <motion.div
            key={selectedMarket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-space font-bold text-2xl text-white mb-3">{selectedMarket.name}</h3>
                <p className="text-[#AAB6CC] leading-relaxed mb-6">{selectedMarket.description}</p>
                <div>
                  <div className="text-xs text-[#AAB6CC]/60 uppercase tracking-wider mb-3">Available Instruments</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedMarket.assets.map((asset) => (
                      <span key={asset} className="px-3 py-1.5 rounded-lg text-sm font-medium text-[#AAB6CC] border border-[#087BFF]/20 bg-[#087BFF]/5">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-[#030817]/60 rounded-xl p-5 border border-[#087BFF]/15">
                  <div className="text-[#AAB6CC] text-sm mb-2">Market Change (Demo)</div>
                  <div className={`text-2xl font-space font-bold flex items-center gap-2 ${selectedMarket.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {selectedMarket.positive ? <ArrowUpRight size={22} /> : <ArrowDownRight size={22} />}
                    {selectedMarket.change}
                  </div>
                  <div className="text-xs text-[#AAB6CC]/40 mt-2">Illustrative demo value only</div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-primary w-full justify-center py-4"
                  style={{ background: `linear-gradient(135deg, ${selectedMarket.color}, ${selectedMarket.color}cc)` }}
                >
                  Start Trading {selectedMarket.name} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* All market cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10"
          >
            {markets.map((market, i) => (
              <MarketCard key={market.id} {...market} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Markets;

import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Play, ShieldCheck, Zap, Clock, ChevronRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureCard from '../components/FeatureCard';
import MarketCard from '../components/MarketCard';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import PhoneMockup from '../components/PhoneMockup';
import DashboardMockup from '../components/DashboardMockup';
import MarketTicker from '../components/MarketTicker';
import SectionHeading from '../components/SectionHeading';
import { platformFeatures } from '../data/features';
import { markets } from '../data/markets';
import { company } from '../data/company';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import logoImg from '../assets/onetrade logo.jpeg';
import heroBg from '../assets/ARjO3Ui3EHK0Swq8BwEu6ZVbXD5sF2VU2gSVisePkNl4TQCJ3R5bZC3AQunE3fy1yQylZbiVdZmj_zvyfKDMRk_b-6doG5TUVz8xbsvk709ZSDzspqkKq-khNWfQhUIQWQf9LmY4Ku5za_JL_7Mv94Sndmjboy84uY1AVMy6eIc0VyMiGntpydYTO2QbDYI5.jpg';
import dashBg from '../assets/uKM1Rx_OtKOOZvcoidwmfGM2boOkd279s3kCnXnNr4VH4hpMwe3AJUf51kvtYC7FdMGVEy2t7wauTGqAwAoYnhCz8LUGN3gapjXazeoREvjS_QQ1EdRRBblxbREOC8-3TkLU0qDEr6Eo92T02m_0k1chLZBKw2jVdQwgb-Cc_lpjKIjXH6eo9qysdPVVDov5.jpg';
import finBg from '../assets/VBoRLHGn9Kf2dHNJuC55QWyFHa7gZoJ5UJFbpnZvf0Ol9-bIquJjoVJohQk--IrO8cZjABJ3Li8-fZIKIZoejpZayK1Swf4m_PYPcCedfuTqaTtDlebop5ywsozw8FF23ZnS4hnszvcL2jkUH2RqRBk8REAtm67vWnKeRZHLl9NGn0TlLcl4RfsaemVhuD_t.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO */}
      <title>One Trade | Trade Smarter. Invest Bigger. Grow Faster.</title>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden" aria-labelledby="hero-heading">
        <AnimatedBackground variant="hero" />

        {/* Hero background image — large trading dashboard visual, deeply blended */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src={heroBg}
            alt=""
            className="absolute right-0 top-0 w-3/4 h-full object-cover object-left opacity-10 mix-blend-luminosity"
          />
          <div className="absolute top-0 right-0 w-1/2 h-full"
            style={{ background: 'radial-gradient(ellipse at 80% 30%, rgba(8,123,255,0.20) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2"
            style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(248,199,68,0.08) 0%, transparent 60%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030817] via-[#030817]/80 to-[#030817]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-7"
            >
              {/* Official logo */}
              <motion.div variants={fadeInUp}>
                <img
                  src={logoImg}
                  alt="One Trade — Trade. Invest. Grow."
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                id="hero-heading"
                className="font-space font-bold text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.08] text-white"
              >
                Trade{' '}
                <span className="gradient-text-blue">Smarter.</span>
                <br />
                Invest{' '}
                <span className="gradient-text-gold">Bigger.</span>
                <br />
                Grow{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #00C6B8, #00C9F2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Faster.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-[#AAB6CC] text-lg leading-relaxed max-w-lg"
              >
                Experience a next-generation trading platform with real-time markets, advanced tools, and unmatched security — all in one place.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-primary text-base px-8 py-4"
                >
                  Start Trading <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => navigate('/features')}
                  className="btn-secondary text-base px-8 py-4 flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Play size={10} className="text-white ml-0.5" fill="white" />
                  </div>
                  Explore Features
                </button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-2">
                {[
                  { icon: ShieldCheck, label: 'Secure & Trusted', color: '#00C6B8' },
                  { icon: Zap, label: 'Real-Time Data', color: '#087BFF' },
                  { icon: Clock, label: '24/7 Support', color: '#F8C744' },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-[#AAB6CC]">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                      <Icon size={14} style={{ color }} />
                    </div>
                    {label}
                  </div>
                ))}
              </motion.div>

              {/* Tagline */}
              <motion.div variants={fadeInUp}>
                <span className="text-[#F8C744]/70 text-xs font-semibold tracking-[0.3em] uppercase">
                  {company.tagline}
                </span>
              </motion.div>
            </motion.div>

            {/* Right — phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Market ticker */}
      <MarketTicker />

      {/* ===== FEATURES ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="features-heading">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Platform Features"
            title="Everything You Need to "
            highlight="Trade Smarter"
            description="A comprehensive trading environment with the tools, data, and security to support informed decisions at every level."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14"
          >
            {platformFeatures.map((feature, i) => (
              <FeatureCard key={feature.id} {...feature} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GLOBAL MARKETS ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-[#06132B]/30" aria-labelledby="markets-heading">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Global Markets"
            title="Trade a Wide Range of "
            highlight="Assets"
            description="Explore different financial markets and discover opportunities across multiple asset classes — all accessible through one platform."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-14"
          >
            {markets.map((market, i) => (
              <MarketCard key={market.id} {...market} index={i} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/markets" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base">
              Explore All Markets <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DASHBOARD SHOWCASE ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="platform-heading">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-5"
            >
              <span className="section-label w-fit">Trading Platform</span>
              <h2 id="platform-heading" className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                A Powerful Platform at Your{' '}
                <span className="gradient-text-blue">Fingertips</span>
              </h2>
              <p className="text-[#AAB6CC] text-base leading-relaxed">
                Analyse, execute, and monitor your trading activities using powerful tools designed to support informed decisions across all markets.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Advanced Charting', desc: 'Professional chart tools with 50+ indicators' },
                  { label: 'Smart Tools', desc: 'Analytical tools to identify market opportunities' },
                  { label: 'Risk Management', desc: 'Built-in tools to help manage and protect capital' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#087BFF]/20 border border-[#087BFF]/40 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#087BFF]" />
                    </div>
                    <div>
                      <span className="text-white text-sm font-semibold">{item.label} — </span>
                      <span className="text-[#AAB6CC] text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="btn-primary px-8 py-4 text-base"
                >
                  Start Trading Now <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#AAB6CC] text-sm text-center"
            >
              <span className="text-xs text-[#AAB6CC]/50">Platform interface — illustrative preview</span>
            </motion.div>
          </div>

          {/* Full-width dashboard */}
          <DashboardMockup />

          {/* Reference dashboard image alongside mockup */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="glass-card overflow-hidden rounded-2xl">
              <img
                src={dashBg}
                alt="One Trade trading platform interface preview"
                className="w-full h-56 object-cover object-top opacity-70"
              />
              <div className="p-4 border-t border-[#087BFF]/15">
                <div className="text-white text-sm font-semibold mb-1">Trading Dashboard</div>
                <div className="text-[#AAB6CC] text-xs">Real-time portfolio management and market analysis</div>
              </div>
            </div>
            <div className="glass-card overflow-hidden rounded-2xl">
              <img
                src={finBg}
                alt="One Trade financial analytics interface"
                className="w-full h-56 object-cover object-top opacity-70"
              />
              <div className="p-4 border-t border-[#087BFF]/15">
                <div className="text-white text-sm font-semibold mb-1">Financial Analytics</div>
                <div className="text-[#AAB6CC] text-xs">Advanced charting tools and performance tracking</div>
              </div>
            </div>
          </div>

          <p className="text-center text-[#AAB6CC]/40 text-xs mt-4">
            Illustrative dashboard previews. Actual platform interface may differ.
          </p>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <StatsSection />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA ===== */}
      <CTASection />
    </>
  );
};

export default Home;

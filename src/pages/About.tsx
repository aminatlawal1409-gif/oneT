import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Zap, Users, TrendingUp, Globe, ArrowRight, Star, Award, Heart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { company } from '../data/company';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '../utils/animations';
import logoImg from '../assets/onetrade logo.jpeg';

// Reference images used as background/accent visuals
import bgChart1 from '../assets/XTjV7BiSqziu0nP7ZJxSCDkRFMwr4o-dduyQcWwvjfkVk3T3J2ie3h5lsU7p_5bbH60IYp5TktjhpO0pB7ipf_OmV42ynMuKg3elhs_TXdWIYBuYxxnoKwkaJmWDz2Ghv4AIyIiTt7yrI5UKvrqBy58U9Bs6HzBxJeM3Dft_woyGHrhATj3JK6A4AIxux6VX.jpg';
import bgGlobe from '../assets/X66huToexRr9GqAeGecLuwNRMzziqq6wv-iFJTHLqykmrrTGm59W2A7TMR698-0PI_kGj_EdjfiLL4MvhIBwvRC1qO8qA3ErovUo1lsoNzQV8QGIhqz6Kuan2pwrPl5EwqByDbSdU0Gn9VsCdyhxERCTaflTG4Mf9jgSlxfm5wVe6VhWg1AzoUzEMDS4ADRN.jpg';

const valueIconMap: Record<string, React.FC<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Integrity: Shield,
  Innovation: Zap,
  'Customer Commitment': Heart,
  Professionalism: Award,
  Growth: TrendingUp,
  Trust: Star,
};

const valueColorMap: Record<string, string> = {
  Integrity: '#087BFF',
  Innovation: '#F8C744',
  'Customer Commitment': '#00C6B8',
  Professionalism: '#00C9F2',
  Growth: '#087BFF',
  Trust: '#F8C744',
};

const whyChoose = [
  { icon: Globe, title: 'Global Market Access', description: 'Trade across Forex, Crypto, Stocks, Commodities, and Indices from one unified platform.' },
  { icon: Shield, title: 'Security First', description: 'Industry-standard security measures protect your account and information at every level.' },
  { icon: Zap, title: 'Real-Time Market Info', description: 'Access live price feeds and market data to support timely, informed trading decisions.' },
  { icon: Users, title: 'Dedicated Support', description: '24/7 customer support team ready to assist traders at every stage of their journey.' },
  { icon: TrendingUp, title: 'Professional Tools', description: 'Charting, analytics, and risk management tools designed for traders of all experience levels.' },
  { icon: Target, title: 'Transparent Platform', description: 'Clear information and honest communication — trading on your own terms, without surprises.' },
];

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>About Us | One Trade — Empowering a Smarter Trading Experience</title>

      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-20 overflow-hidden min-h-[55vh] flex items-center" aria-labelledby="about-hero-heading">
        <AnimatedBackground variant="hero" />

        {/* Background reference image — globe/network, blended */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none" aria-hidden="true">
          <img
            src={bgGlobe}
            alt=""
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030817] via-[#030817]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="section-label">About One Trade</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              id="about-hero-heading"
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Empowering a Smarter{' '}
              <span className="gradient-text-blue">Trading Experience</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-2xl leading-relaxed">
              {company.corporateStatement}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              <img src={logoImg} alt="One Trade logo" className="h-8 w-auto object-contain" />
              <span className="text-[#F8C744]/80 text-sm font-semibold tracking-widest uppercase">{company.tagline}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden" aria-label="Who we are">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-6"
            >
              <span className="section-label w-fit">Who We Are</span>
              <h2 className="font-space font-bold text-3xl lg:text-4xl text-white leading-tight">
                Built on a Vision of{' '}
                <span className="gradient-text-blue">Accessible Trading</span>
              </h2>
              <p className="text-[#AAB6CC] leading-relaxed">{company.background}</p>
              <p className="text-[#AAB6CC] leading-relaxed">
                Operating under the brand philosophy <strong className="text-[#F8C744]">"{company.tagline}"</strong>, One Trade aims to promote smarter financial decisions through accessible market information, innovative trading solutions, modern technology, and customer-focused services.
              </p>

              {/* Key details */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: 'Founded', value: company.yearEstablished.toString() },
                  { label: 'Founder', value: company.founder },
                  { label: 'Markets', value: '5+ Asset Classes' },
                  { label: 'Focus', value: 'Trading & Investment' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-[#AAB6CC]/60 text-xs uppercase tracking-wider">{item.label}</span>
                    <span className="text-white text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual — stats card over chart background */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="glass-card p-0 relative overflow-hidden rounded-2xl">
                {/* Chart background image */}
                <img
                  src={bgChart1}
                  alt="Trading platform visual"
                  className="w-full h-56 object-cover object-top opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06132B]/60 to-[#06132B]" />

                {/* Stats over image */}
                <div className="relative px-6 pb-6 -mt-4 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Year Established', value: company.yearEstablished.toString(), color: '#087BFF' },
                    { label: 'Markets Covered', value: '5+', color: '#F8C744' },
                    { label: 'Business Focus', value: 'FinTech', color: '#00C6B8' },
                    { label: 'Availability', value: 'Growing', color: '#00C9F2' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#030817]/70 rounded-xl p-4 border border-[#087BFF]/15 text-center">
                      <div className="font-space font-bold text-xl mb-1" style={{ color: item.color }}>{item.value}</div>
                      <div className="text-[#AAB6CC] text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Logo watermark */}
                <div className="px-6 pb-5 flex items-center gap-3 border-t border-[#087BFF]/10 mt-2 pt-4">
                  <img src={logoImg} alt="One Trade" className="h-7 w-auto object-contain opacity-80" />
                  <span className="text-[#AAB6CC]/60 text-xs">Founded by {company.founder} · {company.yearEstablished}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#06132B]/30" aria-label="Mission and vision">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Purpose & Direction"
            title="Mission & "
            highlight="Vision"
            description={`Everything One Trade does is guided by a clear mission and a bold vision for the future of trading.`}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden group hover:border-[#087BFF]/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-full"
                style={{ background: 'radial-gradient(circle, #087BFF, transparent)', transform: 'translate(30%, -30%)' }} />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#087BFF]/20 border border-[#087BFF]/30">
                <Target size={22} className="text-[#087BFF]" strokeWidth={1.8} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2 text-[#087BFF]">Our Mission</div>
              <h3 className="font-space font-bold text-xl text-white mb-4">
                Accessible, Innovative & Customer-Focused Trading Solutions
              </h3>
              <p className="text-[#AAB6CC] leading-relaxed mb-5">{company.mission}</p>
              <ul className="space-y-2.5">
                {company.missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[#AAB6CC]">
                    <CheckCircle size={14} className="text-[#087BFF] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-[#F8C744]/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-full"
                style={{ background: 'radial-gradient(circle, #F8C744, transparent)', transform: 'translate(30%, -30%)' }} />
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#F8C744]/15 border border-[#F8C744]/25">
                <Eye size={22} className="text-[#F8C744]" strokeWidth={1.8} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2 text-[#F8C744]">Our Vision</div>
              <h3 className="font-space font-bold text-xl text-white mb-4">
                A Leading, Trusted Financial Trading & Investment Brand
              </h3>
              <p className="text-[#AAB6CC] leading-relaxed">{company.vision}</p>

              {/* Tagline highlight */}
              <div className="mt-8 p-4 rounded-xl bg-[#F8C744]/8 border border-[#F8C744]/20 text-center">
                <img src={logoImg} alt="One Trade" className="h-8 w-auto mx-auto object-contain mb-3 opacity-90" />
                <p className="text-[#F8C744] font-space font-bold text-sm tracking-widest">{company.tagline}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden" aria-label="Core values">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Core Values"
            title="The Principles That Guide "
            highlight="One Trade"
            description="Our six core values are not aspirational slogans. They are the principles that shape every product decision, customer interaction, and business practice."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
          >
            {company.coreValues.map((val, i) => {
              const Icon = valueIconMap[val.title] || Shield;
              const color = valueColorMap[val.title] || '#087BFF';
              return (
                <motion.div
                  key={val.title}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-6 group hover:border-[#087BFF]/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                      <Icon size={22} color={color} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-space font-bold text-lg text-white">{val.title}</h3>
                  </div>
                  <p className="text-[#AAB6CC] text-sm leading-relaxed">{val.description}</p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== FOUNDER & COMPANY FACTS ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#06132B]/30" aria-label="Founder and company details">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Globe/network image side */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="glass-card p-0 overflow-hidden rounded-2xl relative">
                <img
                  src={bgGlobe}
                  alt="Global financial network illustration"
                  className="w-full h-72 lg:h-80 object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-[#030817]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <img src={logoImg} alt="One Trade" className="h-9 w-auto object-contain mb-3" />
                  <p className="text-[#AAB6CC] text-sm leading-relaxed">
                    Empowering traders with the tools, information, and technology to participate confidently in global financial markets.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Company facts */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-6"
            >
              <span className="section-label w-fit">Company Profile</span>
              <h2 className="font-space font-bold text-3xl lg:text-4xl text-white leading-tight">
                The People &amp; Story Behind{' '}
                <span className="gradient-text-gold">One Trade</span>
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  { label: 'Company Name', value: company.name },
                  { label: 'Founder', value: company.founder },
                  { label: 'Year Established', value: company.yearEstablished.toString() },
                  { label: 'Industry', value: 'Financial Technology, Trading & Investment' },
                  { label: 'Business Address', value: company.address.full },
                  { label: 'Brand Tagline', value: company.tagline },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 py-3 border-b border-[#087BFF]/10">
                    <span className="text-[#AAB6CC]/60 text-xs uppercase tracking-wider w-36 flex-shrink-0 pt-0.5">{item.label}</span>
                    <span className={`text-sm font-medium flex-1 ${item.label === 'Brand Tagline' ? 'text-[#F8C744]' : 'text-white'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ONE TRADE ===== */}
      <section className="py-16 lg:py-20 relative overflow-hidden" aria-label="Why choose One Trade">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="Why One Trade"
            title="The One Trade "
            highlight="Advantage"
            description="We build our platform around the needs of real traders — prioritising performance, security, and usability above all else."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 glass-card p-6 hover:border-[#087BFF]/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#087BFF]/15 border border-[#087BFF]/25">
                    <Icon size={18} className="text-[#087BFF]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-space font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-[#AAB6CC] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button onClick={() => navigate('/contact')} className="btn-primary px-10 py-4 text-base">
              Get in Touch <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;

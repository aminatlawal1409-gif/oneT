import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, CandlestickChart, BrainCircuit, PieChart, ShieldAlert, MonitorSmartphone, Lock, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { platformFeatures, detailedFeatures } from '../data/features';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const iconComponents: Record<string, React.FC<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Activity, CandlestickChart, BrainCircuit, PieChart, ShieldAlert,
  MonitorSmartphone, Lock, Lightbulb,
};

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <title>Features | One Trade — Everything You Need to Trade Smarter</title>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-labelledby="features-hero-heading">
        <AnimatedBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeInUp}>
              <span className="section-label">Platform Features</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              id="features-hero-heading"
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Everything You Need to{' '}
              <span className="gradient-text-blue">Trade Smarter</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-2xl leading-relaxed">
              A complete, integrated trading environment with professional tools, real-time data, and institutional-grade security — designed for every level of trader.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="btn-primary px-8 py-4 text-base">
                Get Started <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview cards */}
      <section className="py-16 relative overflow-hidden" aria-label="Feature overview">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {platformFeatures.map((feature, i) => (
              <FeatureCard key={feature.id} {...feature} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed features — alternating layout */}
      <section className="py-16 lg:py-20 relative overflow-hidden" aria-label="Detailed feature list">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            label="In Depth"
            title="Built for Serious "
            highlight="Traders"
            description="Every feature is designed with one goal: to give you the edge you need to trade with confidence and clarity."
          />

          <div className="mt-16 flex flex-col gap-20">
            {detailedFeatures.map((feature) => {
              const Icon = iconComponents[feature.icon] || Activity;
              const isLeft = feature.side === 'left';

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Text side */}
                  <motion.div
                    variants={isLeft ? fadeInLeft : fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex flex-col gap-5 ${isLeft ? 'lg:order-2' : ''}`}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}>
                      <Icon size={26} color={feature.color} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-space font-bold text-2xl lg:text-3xl text-white">{feature.title}</h3>
                    <p className="text-[#AAB6CC] leading-relaxed">{feature.description}</p>
                    <ul className="flex flex-col gap-2.5">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm text-[#AAB6CC]">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: feature.color }} />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Visual side */}
                  <motion.div
                    variants={isLeft ? fadeInRight : fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`${isLeft ? 'lg:order-1' : ''}`}
                  >
                    <div className="glass-card p-8 relative overflow-hidden" style={{ minHeight: '240px' }}>
                      {/* Decorative graphic */}
                      <div className="absolute inset-0 opacity-20"
                        style={{ background: `radial-gradient(ellipse at 50% 50%, ${feature.color}, transparent 70%)` }} />
                      <div className="absolute inset-0 grid-bg opacity-30" />

                      <div className="relative flex flex-col items-center justify-center h-full gap-5 py-8">
                        <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`, border: `2px solid ${feature.color}30` }}>
                          <Icon size={36} color={feature.color} strokeWidth={1.5} />
                        </div>
                        <div className="text-center">
                          <div className="font-space font-bold text-xl text-white mb-2">{feature.title}</div>
                          <div className="text-[#AAB6CC] text-sm max-w-xs">{feature.description.slice(0, 80)}...</div>
                        </div>
                        {/* Stat chips */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {feature.points.slice(0, 2).map((pt) => (
                            <span key={pt} className="text-xs px-3 py-1 rounded-full text-[#AAB6CC]"
                              style={{ background: `${feature.color}10`, border: `1px solid ${feature.color}25` }}>
                              {pt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { company } from '../data/company';
import logoImg from '../assets/onetrade logo.jpeg';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-labelledby="cta-heading">
      <AnimatedBackground variant="cta" />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(8,123,255,0.12) 0%, rgba(3,8,23,0) 50%, rgba(248,199,68,0.08) 100%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeInUp}>
            <img src={logoImg} alt="One Trade" className="h-10 w-auto object-contain mx-auto mb-2 opacity-90" />
            <span className="section-label">Get Started Today</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="cta-heading"
            className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight"
          >
            Ready to Start Your
            <br />
            <span className="gradient-text">Trading Journey?</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-xl leading-relaxed">
            Take the next step and explore the possibilities with {company.name}. Access global markets with the tools and confidence to grow.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-2">
            {['Accessible Platform', 'Innovative Tools', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#AAB6CC]">
                <CheckCircle size={15} className="text-[#087BFF]" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary text-base px-8 py-4"
              aria-label="Get Started with One Trade"
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/features')}
              className="btn-secondary text-base px-8 py-4"
              aria-label="Learn more about One Trade features"
            >
              Explore Features
            </button>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-[#F8C744]/60 text-xs font-semibold tracking-[0.3em] uppercase mt-2">
            {company.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import CTASection from '../components/CTASection';
import { faqItems, faqCategories } from '../data/faq';
import { staggerContainer, fadeInUp } from '../utils/animations';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch = !searchQuery
        || item.question.toLowerCase().includes(searchQuery.toLowerCase())
        || item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <title>FAQ | One Trade — Frequently Asked Questions</title>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-labelledby="faq-hero-heading">
        <AnimatedBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.div variants={fadeInUp}><span className="section-label">Support</span></motion.div>
            <motion.h1
              variants={fadeInUp}
              id="faq-hero-heading"
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Frequently Asked{' '}
              <span className="gradient-text-blue">Questions</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-xl leading-relaxed">
              Find answers to common questions about One Trade, our platform, markets, and more.
            </motion.p>

            {/* Search */}
            <motion.div variants={fadeInUp} className="w-full max-w-xl relative mt-2">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAB6CC]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search FAQ"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#06132B]/80 border border-[#087BFF]/25 text-white placeholder-[#AAB6CC]/60 text-sm focus:outline-none focus:border-[#087BFF] transition-all"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-10 pb-24 relative overflow-hidden" aria-label="FAQ list">
        <AnimatedBackground variant="section" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10" role="tablist" aria-label="FAQ categories">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#087BFF] text-white shadow-[0_0_20px_rgba(8,123,255,0.4)]'
                    : 'text-[#AAB6CC] hover:text-white glass-card border-[#087BFF]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <MessageCircle size={40} className="text-[#087BFF]/40 mx-auto mb-4" />
              <p className="text-[#AAB6CC]">No questions found matching your search.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 text-[#087BFF] text-sm hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
              role="list"
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  role="listitem"
                >
                  <div className={`glass-card overflow-hidden transition-all duration-300 ${
                    openId === item.id ? 'border-[#087BFF]/50 shadow-[0_0_20px_rgba(8,123,255,0.1)]' : ''
                  }`}>
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={openId === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-xs px-2.5 py-1 rounded-lg font-medium mt-0.5 flex-shrink-0 bg-[#087BFF]/10 text-[#087BFF] border border-[#087BFF]/20">
                          {item.category}
                        </span>
                        <span className={`font-space font-semibold text-sm sm:text-base transition-colors ${
                          openId === item.id ? 'text-[#087BFF]' : 'text-white group-hover:text-[#087BFF]'
                        }`}>
                          {item.question}
                        </span>
                      </div>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        openId === item.id ? 'bg-[#087BFF] text-white' : 'bg-white/5 text-[#AAB6CC]'
                      }`}>
                        {openId === item.id ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openId === item.id && (
                        <motion.div
                          id={`faq-answer-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          role="region"
                          aria-label={item.question}
                        >
                          <div className="px-6 pb-5 pl-[72px]">
                            <div className="h-px bg-[#087BFF]/15 mb-4" />
                            <p className="text-[#AAB6CC] text-sm leading-relaxed">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Still have questions */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 glass-card p-8 text-center"
          >
            <MessageCircle size={36} className="text-[#087BFF] mx-auto mb-4" />
            <h3 className="font-space font-bold text-xl text-white mb-3">Still Have Questions?</h3>
            <p className="text-[#AAB6CC] mb-6 max-w-md mx-auto">
              Our support team is available 24/7 to help with any questions not covered here.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary px-8 py-3">
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQ;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeading from './SectionHeading';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" aria-label="Testimonials">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-5"
        style={{ background: 'radial-gradient(ellipse, #087BFF, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Traders "
          highlight="Worldwide"
          description="Sample testimonials shown for demonstration. Genuine customer reviews will be added before launch."
        />

        <div className="mt-12 relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="glass-card p-8 lg:p-12 text-center relative">
                <Quote size={36} className="text-[#087BFF]/30 mx-auto mb-6" />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#F8C744] fill-[#F8C744]" />
                  ))}
                </div>

                <blockquote className="text-white text-lg lg:text-xl leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                  "{t.content}"
                </blockquote>

                {/* Avatar */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-space font-bold text-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #087BFF, #00C9F2)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-space font-bold text-white">{t.name}</div>
                    <div className="text-[#AAB6CC] text-sm">{t.role}</div>
                  </div>
                </div>

                <p className="text-[#AAB6CC]/40 text-xs mt-4">[Sample testimonial — for demonstration only]</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#087BFF]/30 flex items-center justify-center text-[#AAB6CC] hover:text-white hover:border-[#087BFF] hover:bg-[#087BFF]/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-[#087BFF]' : 'w-2 h-2 bg-[#AAB6CC]/30 hover:bg-[#AAB6CC]/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#087BFF]/30 flex items-center justify-center text-[#AAB6CC] hover:text-white hover:border-[#087BFF] hover:bg-[#087BFF]/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

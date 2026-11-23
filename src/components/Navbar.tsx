import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import logoImg from '../assets/onetrade logo.jpeg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Markets', path: '/markets' },
  { label: 'Features', path: '/features' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const navigate = useNavigate();
  const isScrolled = scrollY > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030817]/96 backdrop-blur-xl border-b border-[#087BFF]/20 shadow-[0_4px_30px_rgba(8,123,255,0.12)]'
          : 'bg-[#030817]/60 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — official One Trade image */}
          <Link to="/" className="flex items-center flex-shrink-0 group" aria-label="One Trade — Trade. Invest. Grow.">
            <img
              src={logoImg}
              alt="One Trade — Trade. Invest. Grow."
              className="h-10 lg:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#F8C744] bg-[#F8C744]/10'
                      : 'text-[#AAB6CC] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary text-sm"
              aria-label="Get Started with One Trade"
            >
              Get Started <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#AAB6CC] hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-5 pt-2 space-y-1 border-t border-[#087BFF]/15 mt-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'text-[#F8C744] bg-[#F8C744]/10'
                            : 'text-[#AAB6CC] hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="pt-3 px-4">
                  <button
                    onClick={() => { navigate('/contact'); setMobileOpen(false); }}
                    className="w-full btn-primary justify-center text-sm"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { company } from '../data/company';
import logoImg from '../assets/onetrade logo.jpeg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030817] border-t border-[#087BFF]/15" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5" aria-label="One Trade home">
              <img
                src={logoImg}
                alt="One Trade — Trade. Invest. Grow."
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-[#AAB6CC] text-sm leading-relaxed mb-3">
              {company.corporateStatement}
            </p>
            <p className="text-[#F8C744]/80 text-xs font-semibold tracking-widest uppercase mb-6">
              {company.tagline}
            </p>

            {/* Social media — placeholders until official accounts are provided */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${company.name} on ${label} (link placeholder)`}
                  title={`${label} — link to be updated`}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#087BFF]/20 text-[#AAB6CC] hover:text-white hover:border-[#087BFF]/50 hover:bg-[#087BFF]/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Markets', path: '/markets' },
                { label: 'Features', path: '/features' },
                { label: 'About Us', path: '/about' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#AAB6CC] hover:text-white text-sm transition-colors duration-200 hover:pl-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="font-space font-semibold text-white mb-5 text-sm uppercase tracking-wider">Markets</h3>
            <ul className="space-y-3">
              {['Forex', 'Cryptocurrency', 'Stocks', 'Commodities', 'Indices'].map((market) => (
                <li key={market}>
                  <Link
                    to="/markets"
                    className="text-[#AAB6CC] hover:text-white text-sm transition-colors duration-200 hover:pl-1"
                  >
                    {market}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-space font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              {/* Phone numbers — official, clickable */}
              {company.phones.map((phone) => (
                <li key={phone.tel} className="flex items-start gap-3">
                  <Phone size={15} className="text-[#087BFF] mt-0.5 flex-shrink-0" />
                  <a
                    href={phone.tel}
                    className="text-[#AAB6CC] hover:text-white text-sm transition-colors"
                    aria-label={`Call One Trade on ${phone.display}`}
                  >
                    {phone.display}
                  </a>
                </li>
              ))}

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#087BFF] mt-1 flex-shrink-0" />
                <address className="not-italic text-[#AAB6CC] text-sm leading-relaxed">
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.city}
                </address>
              </li>

              {/* Founder */}
              <li className="pt-1 border-t border-[#087BFF]/10">
                <span className="text-[#AAB6CC]/50 text-xs">Founded by </span>
                <span className="text-[#AAB6CC] text-xs font-semibold">{company.founder}</span>
                <span className="text-[#AAB6CC]/50 text-xs"> · Est. {company.yearEstablished}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#087BFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#AAB6CC]/60 text-xs text-center sm:text-left">
            © {currentYear} {company.name}. All rights reserved. · <span className="text-[#F8C744]/60">{company.tagline}</span>
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-[#AAB6CC]/60 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-[#AAB6CC]/60 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-[#AAB6CC]/60 hover:text-white text-xs transition-colors">
              Risk Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

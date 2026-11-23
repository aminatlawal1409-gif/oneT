import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle, AlertCircle, Twitter, Facebook, Instagram, Linkedin, Info, User } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import { company } from '../data/company';
import type { ContactForm } from '../types';
import logoImg from '../assets/onetrade logo.jpeg';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: ContactForm = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): boolean => {
    const e: Partial<ContactForm> = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters.';

    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';

    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // FRONTEND DEMO — no backend connected.
    // Replace this timeout with a real API call when a backend/email service is integrated.
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm(initialForm);
  };

  const handleReset = () => { setStatus('idle'); setForm(initialForm); setErrors({}); };

  const inputClass = (field: keyof ContactForm) =>
    `w-full px-4 py-3.5 rounded-xl bg-[#06132B]/80 border text-white text-sm placeholder-[#AAB6CC]/50 focus:outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-[#087BFF]/20 focus:border-[#087BFF]'
    }`;

  return (
    <>
      <title>Contact | One Trade — Get in Touch</title>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" aria-labelledby="contact-hero-heading">
        <AnimatedBackground variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-5">
            <motion.div variants={fadeInUp}><span className="section-label">Support</span></motion.div>
            <motion.h1
              variants={fadeInUp}
              id="contact-hero-heading"
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white"
            >
              Let's <span className="gradient-text-blue">Talk</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#AAB6CC] text-lg max-w-xl leading-relaxed">
              Have a question or need assistance? Our team is here to help. Reach out and we'll get back to you promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Demo notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-start gap-3 p-4 rounded-xl border border-[#087BFF]/20 bg-[#087BFF]/5">
          <Info size={16} className="text-[#087BFF] mt-0.5 flex-shrink-0" />
          <p className="text-[#AAB6CC] text-sm">
            <span className="text-[#087BFF] font-semibold">Contact Form:</span> The form below is a frontend demonstration. No messages are sent to a backend. Integrate an email service or backend API to enable live message delivery. Phone and address information is official and accurate.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <section className="py-10 pb-24 relative overflow-hidden" aria-label="Contact form and information">
        <AnimatedBackground variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Info panel */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Logo */}
              <img src={logoImg} alt="One Trade" className="h-10 w-auto object-contain" />

              <div>
                <h2 className="font-space font-bold text-2xl text-white mb-3">Contact Information</h2>
                <p className="text-[#AAB6CC] text-sm leading-relaxed">
                  Reach out to us directly by phone or visit our office. Our team is committed to providing timely support.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Official phone numbers — clickable */}
                {company.phones.map((phone, i) => (
                  <div key={phone.tel} className="glass-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#087BFF]/20 border border-[#087BFF]/30">
                      <Phone size={18} className="text-[#087BFF]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs text-[#AAB6CC]/60 uppercase tracking-wider mb-1">
                        Phone {i + 1}
                      </div>
                      <a
                        href={phone.tel}
                        className="text-white text-sm font-semibold hover:text-[#087BFF] transition-colors"
                        aria-label={`Call One Trade on ${phone.display}`}
                      >
                        {phone.display}
                      </a>
                      <div className="text-[#AAB6CC]/50 text-xs mt-0.5">Tap to call</div>
                    </div>
                  </div>
                ))}

                {/* Official address */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F8C744]/15 border border-[#F8C744]/25">
                    <MapPin size={18} className="text-[#F8C744]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xs text-[#AAB6CC]/60 uppercase tracking-wider mb-1">Office Address</div>
                    <address className="not-italic text-white text-sm font-medium leading-relaxed">
                      {company.address.line1}<br />
                      {company.address.line2}<br />
                      {company.address.city}
                    </address>
                  </div>
                </div>

                {/* Founder info */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#00C6B8]/15 border border-[#00C6B8]/25">
                    <User size={18} className="text-[#00C6B8]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xs text-[#AAB6CC]/60 uppercase tracking-wider mb-1">Founder</div>
                    <div className="text-white text-sm font-semibold">{company.founder}</div>
                    <div className="text-[#AAB6CC]/50 text-xs mt-0.5">Est. {company.yearEstablished}</div>
                  </div>
                </div>
              </div>

              {/* Social media — placeholder until official accounts supplied */}
              <div>
                <div className="text-xs text-[#AAB6CC]/60 uppercase tracking-wider mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${company.name} on ${label} (link to be updated)`}
                      title={`${label} — official link to be added`}
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#087BFF]/20 text-[#AAB6CC] hover:text-white hover:border-[#087BFF]/50 hover:bg-[#087BFF]/10 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <p className="text-[#AAB6CC]/40 text-xs mt-2">Social media links to be added</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 flex flex-col items-center gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <img src={logoImg} alt="One Trade" className="h-8 w-auto object-contain opacity-80" />
                    <div>
                      <h3 className="font-space font-bold text-xl text-white mb-2">Message Received!</h3>
                      <p className="text-[#AAB6CC] text-sm max-w-sm">
                        Thank you for reaching out to {company.name}. This is a frontend demonstration — in a live environment, our team would respond promptly.
                      </p>
                    </div>
                    <p className="text-[#AAB6CC]/40 text-xs">
                      For immediate assistance, please call us directly on {company.phones[0].display}.
                    </p>
                    <button onClick={handleReset} className="btn-primary px-8 py-3">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#087BFF]/15">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#087BFF]/20 border border-[#087BFF]/30">
                        <Send size={14} className="text-[#087BFF]" />
                      </div>
                      <div>
                        <h2 className="font-space font-bold text-lg text-white">Send Us a Message</h2>
                        <p className="text-[#AAB6CC]/60 text-xs">We'll get back to you as soon as possible</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm text-[#AAB6CC] mb-2 font-medium">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          autoComplete="name"
                          className={inputClass('name')}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm text-[#AAB6CC] mb-2 font-medium">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          autoComplete="email"
                          className={inputClass('email')}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-5">
                      <label htmlFor="subject" className="block text-sm text-[#AAB6CC] mb-2 font-medium">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject" name="subject"
                        value={form.subject} onChange={handleChange}
                        className={`${inputClass('subject')} cursor-pointer`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      >
                        <option value="" className="bg-[#06132B]">Select a subject</option>
                        <option value="General Enquiry" className="bg-[#06132B]">General Enquiry</option>
                        <option value="Account Support" className="bg-[#06132B]">Account Support</option>
                        <option value="Technical Issue" className="bg-[#06132B]">Technical Issue</option>
                        <option value="Trading Question" className="bg-[#06132B]">Trading Question</option>
                        <option value="Partnership" className="bg-[#06132B]">Partnership</option>
                        <option value="Other" className="bg-[#06132B]">Other</option>
                      </select>
                      {errors.subject && (
                        <p id="subject-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                          <AlertCircle size={12} /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-7">
                      <label htmlFor="message" className="block text-sm text-[#AAB6CC] mb-2 font-medium">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Write your message here..."
                        className={`${inputClass('message')} resize-none`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1" role="alert">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3" role="alert">
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} /> Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-[#AAB6CC]/40 text-xs mt-4">
                      Or call us directly:{' '}
                      {company.phones.map((p, i) => (
                        <span key={p.tel}>
                          <a href={p.tel} className="text-[#087BFF] hover:underline">{p.display}</a>
                          {i < company.phones.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

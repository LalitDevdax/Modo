'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Mail, MapPin, Clock, ArrowUpRight, Copy, Check, Send, Sparkles, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@joinmodo.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`AI Adoption & ROI Inquiry from ${formData.fullName || 'Enterprise Lead'}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger mailto directly to info@joinmodo.com
      window.location.href = `mailto:info@joinmodo.com?subject=${subject}&body=${body}`;
    }, 900);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', company: '', message: '' });
    }, 6000);
  };

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 select-none overflow-x-hidden font-sans relative flex flex-col justify-between">

      {/* 3D ABSTRACT FLUID WAVE HERO BACKGROUND (100% FULL WIDTH LEFT TO RIGHT) */}
      <div
        className="absolute top-0 inset-x-0 w-full h-screen min-h-[750px] pointer-events-none z-0 overflow-hidden mix-blend-multiply"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 100px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 100px), transparent 100%)'
        }}
      >
        <img
          src="/contact-abstract-bg.jpg"
          alt="Contact Abstract Background"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-85"
        />
      </div>

      {/* PAGE CONTENT CONTAINER (FITS WITHIN 1 VIEWPORT HEIGHT ON DESKTOP) */}
      <div className="relative z-10 pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* TWO-COLUMN LAYOUT: UNBOXED TYPOGRAPHY LEFT & CARD RIGHT (TOP ALIGNED AT 1 SCREEN VIEW) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: UNBOXED CONTACT US & DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8"
          >
            {/* MAIN TITLE */}
            <div>

              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 leading-[1.05]">
                Contact Us
              </h1>
            </div>

            {/* DROP US A LINE */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-medium tracking-tight text-slate-950">
                  Drop us a line
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:info@joinmodo.com"
                  className="text-base sm:text-lg text-slate-950 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-pink-500 hover:text-pink-600 transition-all"
                >
                  info@joinmodo.com
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:outline-none cursor-pointer"
                  title="Copy Email"
                >
                  {isCopied ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium px-1">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* VISIT US */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-medium tracking-tight text-slate-950">
                  Visit us
                </h3>
              </div>

              <p className="text-base text-slate-900 font-sans font-normal leading-relaxed">
                1800 Owens St<br />
                San Francisco, CA 94158
              </p>

              <a
                href="https://maps.google.com/?q=1800+Owens+St,+San+Francisco,+CA+94158"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-medium transition-colors border border-slate-200/80"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>



          </motion.div>

          {/* RIGHT COLUMN: COOL INTERACTIVE CONTACT FORM CARD (TOP ALIGNED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-8 md:p-10 rounded-[36px] shadow-xs"
          >
            <div className="mb-6">
              <h2 className="font-sans text-xl sm:text-2xl font-medium tracking-tight text-slate-950 leading-snug">
                Let&apos;s Talk About AI Adoption and ROI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below and we&apos;ll schedule a personalized walkthrough for your organization.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              {/* Full Name */}
              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                  Full Name <span className="text-pink-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full py-2 px-1 border-b-2 border-slate-200 focus:border-slate-950 bg-transparent text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                  Email Address <span className="text-pink-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full py-2 px-1 border-b-2 border-slate-200 focus:border-slate-950 bg-transparent text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                  Company <span className="text-pink-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company or Organization Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full py-2 px-1 border-b-2 border-slate-200 focus:border-slate-950 bg-transparent text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>

              {/* How can we help you? */}
              <div className="flex flex-col space-y-1.5 group">
                <label className="text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                  How can we help you? <span className="text-pink-600">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Tell us about your team size, current AI tool stack, or enablement goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full py-2 px-1 border-b-2 border-slate-200 focus:border-slate-950 bg-transparent text-sm text-slate-950 placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* SUBMIT BUTTON WITH ANIMATED STATES */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center justify-center gap-2 text-center"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Message Sent to info@joinmodo.com! We will reach out shortly.</span>
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.button
                      key="submitting"
                      type="button"
                      disabled
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-800 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 cursor-wait opacity-90"
                    >
                      <Loader2 className="w-4 h-4 animate-spin text-pink-400" />
                      <span>Sending Message...</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      key="button"
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-slate-950 hover:bg-pink-600 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>

        </div>

      </div>

      <Footer />
    </main>
  );
}

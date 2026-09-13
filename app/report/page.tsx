'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Download, Check, Loader2 } from 'lucide-react';

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const isFormValid = Boolean(formData.name.trim() && formData.email.trim());

  const handleDownload = () => {
    // Generate/trigger demo PDF report download
    alert('Thank you! Downloading the Modo 2026 Enterprise AI Adoption Report (PDF)...');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      handleDownload();
    }, 600);
  };

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 select-none overflow-x-hidden font-sans relative flex flex-col justify-between">

      {/* 3D ABSTRACT FLUID WAVE HERO BACKGROUND (100% FULL WIDTH SEAMLESS FADE) */}


      {/* PAGE CONTENT CONTAINER (FITS WITHIN 1 VIEWPORT HEIGHT ON DESKTOP) */}
      <div className="relative z-10 pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center text-center">

        {/* HERO TITLE & SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-12 max-w-3xl mx-auto"
        >
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-slate-950 leading-[1.08] mb-6">
            Download Our Latest AI Report
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-950 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
            We interviewed 40+ CAIOs, CTOs, CIOs, and enterprise AI leaders to discover what drives real, lasting AI success and what today&apos;s top organizations are doing differently. Answer a few quick questions below to unlock the full findings and learn from the pioneers leading the way.
          </p>
        </motion.div>

        {/* HORIZONTAL INLINE DOWNLOAD FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-3xl mx-auto w-full bg-white/90 backdrop-blur-xl border border-slate-200/90 p-3 sm:p-4 rounded-3xl sm:rounded-full shadow-lg text-left flex flex-col md:flex-row items-center gap-3 sm:gap-4"
        >
          {/* Name Input */}
          <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200/80 focus-within:border-slate-950 transition-colors">
            <label className="block text-[11px] font-semibold text-slate-950 uppercase tracking-wider mb-0.5">
              Name <span className="text-pink-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Business Email Input */}
          <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200/80 focus-within:border-slate-950 transition-colors">
            <label className="block text-[11px] font-semibold text-slate-950 uppercase tracking-wider mb-0.5">
              Business Email <span className="text-pink-600">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent text-sm sm:text-base text-slate-950 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Direct Download Button */}
          <div className="w-full md:w-auto p-1 shrink-0">
            {isSubmitting ? (
              <button
                type="button"
                disabled
                className="w-full md:w-auto px-8 py-3.5 rounded-full bg-slate-800 text-white font-medium text-sm flex items-center justify-center gap-2 cursor-wait opacity-90"
              >
                <Loader2 className="w-4 h-4 animate-spin text-pink-400" />
                <span>Downloading...</span>
              </button>
            ) : isSubmitted ? (
              <motion.button
                type="button"
                onClick={handleDownload}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-3.5 rounded-full bg-emerald-600 text-white font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Downloaded</span>
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={!isFormValid}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className={`w-full md:w-auto px-9 py-3.5 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group ${
                  isFormValid
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-70 border border-slate-300/40'
                }`}
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download</span>
              </motion.button>
            )}
          </div>
        </motion.form>

      </div>

      <Footer />
    </main>
  );
}


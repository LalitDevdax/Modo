'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-10 overflow-hidden select-none">

      {/* Background Image Layer (mainbg.png) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/mainbg.png"
          alt="Hero Background"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      {/* MAIN CENTER HERO CONTENT (Dead Center in Viewport) */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center relative z-10 py-12">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium text-slate-950 tracking-tight leading-[1.12] max-w-2xl"
        >
          <span>Turn AI Spend Into Real Adoption and Prove ROI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-sans max-w-xl font-normal leading-relaxed"
        >
          Modo helps employees use the right AI tools at the right time and gives leadership clear data on AI adoption and productivity impact
        </motion.p>

        {/* Sleek Theme-Matched Action Button ('Chat With Us' - Smooth Brand Pink Accent, No Scale Up) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="https://calendar.app.google/5jUh7K25vgrhsv48A"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-slate-950 hover:bg-pink-600 shadow-sm hover:shadow-md hover:shadow-pink-500/20 transition-all duration-300 font-sans cursor-pointer active:scale-95 border border-slate-900 hover:border-pink-500"
          >
            <span>Chat With Us</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
        </motion.div>

      </div>

    </section>
  );
}

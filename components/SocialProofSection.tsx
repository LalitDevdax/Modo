'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Real Official Vector Logos (100% Font-Consistent with Navbar, Pure Hardware-Accelerated Marquee)
const clientCompanies = [
  {
    name: 'Meta',
    svg: (
      <div className="flex items-center gap-2">
        <svg className="h-6 sm:h-7 w-auto text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.421 1.76c-1.896 0-3.649.988-4.421 2.373-.772-1.385-2.525-2.373-4.421-2.373C4.165 1.76 1.4 4.542 1.4 7.979c0 4.795 5.53 9.42 10.155 13.791.265.25.625.39.995.39.37 0 .73-.14.995-.39C18.17 17.399 23.7 12.774 23.7 7.979c0-3.437-2.765-6.219-6.279-6.219zm-4.421 17.653C8.04 15.655 3.4 11.66 3.4 7.979c0-2.327 1.865-4.219 4.179-4.219 1.57 0 2.99.88 3.666 2.274a.999.999 0 001.76 0c.676-1.394 2.096-2.274 3.666-2.274 2.314 0 4.179 1.892 4.179 4.219 0 3.681-4.64 7.676-8.6 11.434z" />
        </svg>
        <span className="font-sans font-medium text-lg sm:text-xl text-slate-900 tracking-tight">Meta</span>
      </div>
    ),
  },
  {
    name: 'KPMG',
    svg: (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <span className="w-2.5 h-6 bg-[#00338D] rounded-xs" />
          <span className="w-2.5 h-6 bg-[#00338D] rounded-xs" />
          <span className="w-2.5 h-6 bg-[#00338D] rounded-xs" />
          <span className="w-2.5 h-6 bg-[#00338D] rounded-xs" />
        </div>
        <span className="font-sans font-medium text-lg sm:text-xl text-slate-900 tracking-wider">KPMG</span>
      </div>
    ),
  },
  {
    name: 'Blackstone',
    svg: (
      <div className="font-sans font-medium tracking-widest text-base sm:text-lg uppercase text-slate-950 border-b border-slate-950 pb-0.5">
        BLACKSTONE
      </div>
    ),
  },
  {
    name: 'Crunchbase',
    svg: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0288D1] text-white flex items-center justify-center font-sans font-medium text-xs shadow-2xs">
          cb
        </div>
        <span className="font-sans font-medium text-base sm:text-lg text-slate-900 tracking-tight">crunchbase</span>
      </div>
    ),
  },
  {
    name: 'CleanChoice Energy',
    svg: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xs font-medium">
          🌱
        </div>
        <span className="font-sans font-medium text-base sm:text-lg text-slate-900 tracking-tight">CleanChoice <span className="text-emerald-600">Energy</span></span>
      </div>
    ),
  },
  {
    name: 'Pear VC',
    svg: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-medium">
          🍐
        </div>
        <span className="font-sans font-medium text-base sm:text-lg text-slate-900 tracking-tight">Pear<span className="text-pink-600 font-medium">VC</span></span>
      </div>
    ),
  },
];

export default function SocialProofSection() {
  return (
    <section id="adoption" className="relative w-full py-16 sm:py-24 bg-white text-slate-900 overflow-hidden select-none border-t border-slate-100">

      {/* 1. SECTION HEADER (Clean Title - Badge Removed per Request) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center flex flex-col items-center">

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 max-w-3xl leading-[1.14]"
        >
          Helped hundreds of professionals adopt AI from
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-slate-500 font-sans max-w-2xl font-normal leading-relaxed"
        >
          Leading companies trust Modo to empower employees with AI tools, boost adoption velocity, and deliver clear productivity ROI.
        </motion.p>
      </div>


      {/* 2. INFINITE HARDWARE-ACCELERATED LOGO MARQUEE (No Hover Effects, Pure Smooth Gliding) */}
      <div className="mt-14 sm:mt-18 w-full overflow-hidden relative pointer-events-none">

        {/* Left & Right Edge Gradients for Smooth Seamless Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Continuous Uninterrupted Marquee Row */}
        <div className="flex animate-marquee space-x-6 sm:space-x-10 py-4">
          {[...clientCompanies, ...clientCompanies, ...clientCompanies, ...clientCompanies].map((company, index) => (
            <div
              key={`marquee-${company.name}-${index}`}
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-50/60 border border-slate-200/60 shrink-0 min-w-[200px] sm:min-w-[240px] h-[72px] sm:h-[80px]"
            >
              {company.svg}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

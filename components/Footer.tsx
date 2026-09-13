'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-900 select-none px-4 sm:px-6 md:px-10 pt-10 pb-16 relative overflow-hidden">

      {/* 1. LARGE CLOSING CTA BANNER CARD WITH ABSTRACT 3D RIBBON OVERLAY */}
      <div className="max-w-6xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[36px] sm:rounded-[44px] bg-slate-950 text-white p-10 sm:p-16 md:p-20 relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col items-center text-center justify-between gap-8 group"
        >
          {/* Background Abstract 3D Iridescent Ribbon Layer */}
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden">
            <img
              src="/iridescent-ribbon.jpg"
              alt="3D Iridescent Ribbon Abstract"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center scale-110 mix-blend-screen"
            />
          </div>

          {/* Ambient Glowing Light Blurs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-500/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl">

            {/* Sparkle Badge */}
            <div className="mb-4 inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-medium text-pink-300 shadow-2xs text-center max-w-full">
              <span className="leading-tight">TRANSFORM YOUR WORKFORCE WITH AI</span>
            </div>

            {/* Headline */}
            <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              Ready to scale AI adoption across your enterprise?
            </h2>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 font-sans font-normal leading-relaxed max-w-xl">
              Join forward-thinking enterprise teams using Modo to turn idle AI subscriptions into daily productivity habits.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://calendar.app.google/5jUh7K25vgrhsv48A"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-white text-slate-950 font-medium text-xs sm:text-sm hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md flex items-center gap-2.5 group/btn cursor-pointer"
              >
                <span>Schedule a Live Demo</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>


      {/* 2. FOOTER INFO GRID (Logo + Tagline | Contact us | Visit Us) */}
      <div className="max-w-6xl mx-auto py-12 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">

        {/* Left Column: Brand Logo & Tagline */}
        <div className="md:col-span-6 flex flex-col justify-start items-start">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/modo-logo-clean.png"
              alt="Modo Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="mt-2 text-slate-900 font-sans text-lg sm:text-xl font-medium leading-snug max-w-md">
            Turning AI spend into real workflow adoption and measurable ROI.
          </p>
        </div>

        {/* Middle Column: Contact us */}
        <div className="md:col-span-3 flex flex-col justify-start">
          <h4 className="font-sans font-medium text-slate-950 text-base sm:text-lg tracking-tight mb-3">
            Contact us :
          </h4>
          <a
            href="mailto:info@joinmodo.com"
            className="text-slate-900 hover:text-pink-600 transition-colors font-sans text-sm sm:text-base font-medium"
          >
            info@joinmodo.com
          </a>
        </div>

        {/* Right Column: Visit Us */}
        <div className="md:col-span-3 flex flex-col justify-start">
          <h4 className="font-sans font-medium text-slate-950 text-base sm:text-lg tracking-tight mb-3">
            Visit Us :
          </h4>
          <p className="text-slate-900 font-sans text-sm sm:text-base font-medium leading-relaxed">
            1800 Owens St<br />
            San Francisco, CA 94158
          </p>
        </div>

      </div>


      {/* 3. FOOTER LINKS & COPYRIGHT BAR */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans font-normal relative z-10">
        <div>
          © {new Date().getFullYear()} Modo Technologies Inc. All rights reserved.
        </div>


      </div>

    </footer>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Bar chart metrics matching screenshot + cute tool adoption analytics
  const barData = [
    { label: '00', heightPct: 45, value: '1,120', tool: 'ChatGPT' },
    { label: '04', heightPct: 35, value: '890', tool: 'Claude 3.5' },
    { label: '08', heightPct: 75, value: '2,450', tool: 'Copilot' },
    { label: '12', heightPct: 55, value: '1,680', tool: 'Midjourney' },
    { label: '14', heightPct: 68, value: '2,100', tool: 'Perplexity' },
    { label: '16', heightPct: 88, value: '2,840', tool: 'Modo AI' },
    { label: '18', heightPct: 32, value: '740', tool: 'Gemini' },
  ];

  const bulletPoints = [
    "Employees don't know which tools to reach for.",
    "Managers can't tell what's working.",
    "And when the board asks about ROI, there's no good answer.",
  ];

  return (
    <section id="impact" className="w-full py-12 sm:py-18 bg-white text-slate-900 select-none px-4 sm:px-6 md:px-10">
      
      {/* MAIN CONTAINER CARD WITH FULL BLEED 3D ABSTRACT RIBBON BACKGROUND */}
      <div className="max-w-6xl mx-auto rounded-[36px] sm:rounded-[44px] bg-[#F4F4F6] border border-slate-200/70 p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
        
        {/* FULL BLEED 3D ABSTRACT RIBBON BACKGROUND ACROSS ENTIRE CARD */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
          <img
            src="/iridescent-ribbon.jpg"
            alt="3D Iridescent Abstract Ribbon Background"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        {/* Soft Contrast Gradient Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#F4F4F6] via-[#F4F4F6]/90 to-[#F4F4F6]/40" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: ONE-LINE HEADLINE, CLEAN TYPOGRAPHY & BULLETS */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div>
              {/* Top Headline: "Your teams spent on AI tools." */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-medium tracking-tight text-slate-900 leading-[1.2]"
              >
                <span className="block text-slate-900 font-medium">Your teams spent on AI tools.</span>
                <span className="block text-slate-950 mt-1">Modo makes sure they deliver.</span>
              </motion.h2>

              {/* Sub-headline Text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-sans font-normal leading-relaxed max-w-xl"
              >
                Companies don&apos;t have an AI buying problem. They have an AI adoption and visibility problem.
              </motion.p>
            </div>

            {/* CLEAN BULLET POINTS (NO BACKGROUND BOXES - SIMPLE PURE CHECKMARKS) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-6 flex flex-col gap-3"
            >
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-300/80 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* MODO SUMMARY PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mt-5 text-xs sm:text-sm font-medium text-slate-900 font-sans leading-relaxed max-w-xl"
            >
              Modo closes all three gaps from a single platform that sits across your entire AI stack.
            </motion.p>

            {/* REAL CTA BUTTON LINKING TO GOOGLE CALENDAR APP */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className="mt-6"
            >
              <a
                href="https://calendar.app.google/5jUh7K25vgrhsv48A"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xs inline-flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Get started today</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>

          </div>


          {/* RIGHT COLUMN: ULTRA-COOL & SLEEK RAINBOW-BORDERED TRAFFIC ANALYTICS CARD */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="w-full max-w-sm sm:max-w-md relative group"
            >
              {/* Animated Rainbow Outer Glow Border */}
              <div className="absolute -inset-[2.5px] rounded-[30px] bg-gradient-to-tr from-[#FF94B9] via-[#C084FC] to-[#38BDF8] opacity-90 blur-[1px] group-hover:opacity-100 group-hover:blur-[2px] transition-all duration-500" />

              {/* White Glassmorphic Card Container */}
              <div className="relative rounded-[27px] bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-xl shadow-purple-500/10 border border-white/90 flex flex-col justify-between overflow-hidden">
                
                {/* Background Wave Linework Pattern */}
                <svg
                  className="absolute bottom-0 right-0 w-60 h-40 opacity-20 pointer-events-none z-0"
                  viewBox="0 0 200 150"
                  fill="none"
                >
                  <path
                    d="M0 100 C 50 140, 100 60, 150 120 C 180 150, 200 100, 250 130"
                    stroke="url(#cuteLineGrad)"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id="cuteLineGrad" x1="0" y1="0" x2="200" y2="150">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* CARD HEADER */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-slate-800 font-sans tracking-tight">
                      Daily Traffic
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  
                  {/* Percentage Pill */}
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    <span>+2.45%</span>
                  </div>
                </div>

                {/* METRIC NUMBER */}
                <div className="mt-2.5 flex items-baseline gap-2 z-10">
                  <span className="font-sans text-3xl sm:text-4xl font-medium text-slate-950 tracking-tight">
                    2.579
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-slate-400">
                    Visitors
                  </span>
                </div>

                {/* CUTE ANIMATED BAR CHART */}
                <div className="mt-6 pt-2 flex items-end justify-between gap-2 h-36 sm:h-40 z-10 relative">
                  {barData.map((bar, idx) => {
                    const isHovered = hoveredBar === idx;
                    return (
                      <div
                        key={bar.label}
                        onMouseEnter={() => setHoveredBar(idx)}
                        onMouseLeave={() => setHoveredBar(null)}
                        className="flex-1 flex flex-col items-center h-full justify-end group/bar cursor-pointer relative"
                      >
                        {/* Hover Tooltip */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-9 bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-md whitespace-nowrap z-30"
                          >
                            {bar.value} ({bar.tool})
                          </motion.div>
                        )}

                        {/* Animated Bar Column with Rounded Pill Shapes */}
                        <div className="w-full bg-slate-100 rounded-full overflow-hidden flex items-end h-28">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.heightPct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
                            className={`w-full rounded-full transition-all duration-300 ${
                              isHovered
                                ? 'bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 shadow-md shadow-purple-500/30'
                                : 'bg-gradient-to-t from-[#B0C4FF] via-[#BAC6FF] to-[#D4E0FF] group-hover/bar:bg-gradient-to-t group-hover/bar:from-indigo-400 group-hover/bar:to-blue-400'
                            }`}
                          />
                        </div>

                        {/* X-Axis Label */}
                        <span className="mt-2 text-[11px] font-medium text-slate-400 group-hover/bar:text-slate-900 transition-colors">
                          {bar.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* TOP TOOL CHIPS AT BOTTOM */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1.5 text-[11px] text-slate-500 z-10">
                  <span className="font-normal text-slate-400 text-[10px] sm:text-[11px]">Top AI Adoption:</span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium text-[10px]">ChatGPT 94%</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium text-[10px]">Claude 88%</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}

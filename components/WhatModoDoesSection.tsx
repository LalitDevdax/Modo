'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Cubic Bezier point calculator for exact SVG line tip lock
const getCubicBezierPoint = (p0: number, p1: number, p2: number, p3: number, t: number) => {
  const oneMinusT = 1 - t;
  return (
    Math.pow(oneMinusT, 3) * p0 +
    3 * Math.pow(oneMinusT, 2) * t * p1 +
    3 * (1 - t) * Math.pow(t, 2) * p2 +
    Math.pow(t, 3) * p3
  );
};

export default function WhatModoDoesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animation for sequential laser wire drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Line 1 (Card 1 Right Center -> Card 2 Top Center) draws FIRST
  const pathLength1 = useTransform(scrollYProgress, [0.05, 0.32], [0, 1]);

  // Line 2 (Card 2 Left Center -> Card 3 Top Center) draws SECOND after Line 1 completes
  const pathLength2 = useTransform(scrollYProgress, [0.36, 0.65], [0, 1]);

  // Star 1 exact (X, Y) attached directly to the leading tip of Line 1 (Start Y: 135)
  const star1X = useTransform(pathLength1, (t) => getCubicBezierPoint(576, 780, 900, 900, t) - 20);
  const star1Y = useTransform(pathLength1, (t) => getCubicBezierPoint(135, 135, 320, 500, t) - 20);
  const star1Opacity = useTransform(pathLength1, [0, 0.05, 0.98, 1], [0, 1, 1, 1]);

  // Star 2 exact (X, Y) attached directly to the leading tip of Line 2
  const star2X = useTransform(pathLength2, (t) => getCubicBezierPoint(624, 440, 288, 288, t) - 20);
  const star2Y = useTransform(pathLength2, (t) => getCubicBezierPoint(710, 710, 820, 975, t) - 20);
  const star2Opacity = useTransform(pathLength2, [0, 0.05, 0.98, 1], [0, 1, 1, 1]);

  // Card Border Color Opacities: GREY BY DEFAULT -> COLORFUL AS LINE DRAWS & TOUCHES CARD!
  // Card 2 border transitions from GREY to COLORFUL as Line 1 draws toward and touches Card 2
  const card2BorderOpacity = useTransform(pathLength1, [0.35, 0.92], [0, 1]);
  
  // Card 3 border transitions from GREY to COLORFUL as Line 2 draws toward and touches Card 3
  const card3BorderOpacity = useTransform(pathLength2, [0.35, 0.92], [0, 1]);

  return (
    <section
      id="what-modo-does"
      ref={containerRef}
      className="w-full py-20 sm:py-32 bg-white text-slate-900 select-none px-4 sm:px-6 md:px-10 relative overflow-hidden"
    >
      
      {/* 1. TOP HEADER */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 leading-[1.12]"
        >
          What Modo Does
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans max-w-2xl font-normal leading-relaxed text-center"
        >
          Our platform helps employees adopt AI real-time during their flow of work while giving leadership AI ROI visibility.
        </motion.p>
      </div>


      {/* 2. UNIQUE STAGGERED STEP CARDS WITH SEQUENTIAL CONNECTED LASER WIRE */}
      <div className="max-w-6xl mx-auto relative min-h-[1100px] flex flex-col gap-16 sm:gap-24 z-10">
        
        {/* SVG CONNECTING WIRE LINE DRAWING ON SCROLL */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 1200 1200"
          fill="none"
        >
          <defs>
            <linearGradient id="laserRainbow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>

          {/* Track Line 1: SHIFTED WAY UP to Center Right of Card 1 (Y: 135) -> Top Center of Card 2 (900, 500) */}
          <path
            d="M 576 135 C 780 135, 900 320, 900 500"
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Track Line 2: Center Left of Card 2 (624, 710) -> Top Center of Card 3 (288, 975) */}
          <path
            d="M 624 710 C 440 710, 288 820, 288 975"
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Glowing Animated Laser Wire 1 (Shifted UP to Y: 135 Center) */}
          <motion.path
            d="M 576 135 C 780 135, 900 320, 900 500"
            stroke="url(#laserRainbow)"
            strokeWidth="3.5"
            fill="none"
            style={{ pathLength: pathLength1 }}
          />

          {/* Glowing Animated Laser Wire 2 (Draws Second to Card 3) */}
          <motion.path
            d="M 624 710 C 440 710, 288 820, 288 975"
            stroke="url(#laserRainbow)"
            strokeWidth="3.5"
            fill="none"
            style={{ pathLength: pathLength2 }}
          />

          {/* STARLOGO.PNG ATTACHED DIRECTLY TO THE LEADING FRONT TIP OF LINE 1 */}
          <motion.image
            href="/starlogo.png"
            x={star1X}
            y={star1Y}
            width="40"
            height="40"
            style={{ opacity: star1Opacity }}
            className="drop-shadow-[0_0_12px_rgba(236,72,153,0.9)] pointer-events-none"
          />

          {/* STARLOGO.PNG ATTACHED DIRECTLY TO THE LEADING FRONT TIP OF LINE 2 */}
          <motion.image
            href="/starlogo.png"
            x={star2X}
            y={star2Y}
            width="40"
            height="40"
            style={{ opacity: star2Opacity }}
            className="drop-shadow-[0_0_12px_rgba(236,72,153,0.9)] pointer-events-none"
          />
        </svg>


        {/* CARD 1 (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg lg:max-w-xl self-start relative z-10"
        >
          {/* Step Badge Node (WITH SPARKLING GEMINI SVG STAR ICON) */}
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
            <svg className="w-3.5 h-3.5 text-cyan-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12 0 C 12 6.6 6.6 12 0 12 C 6.6 12 12 17.4 12 24 C 12 17.4 17.4 12 24 12 C 17.4 12 12 6.6 12 0 Z" />
            </svg>
            <span>01 / REAL-TIME RECOGNITION</span>
          </div>

          {/* COLORFUL RAINBOW GRADIENT CARD BORDER */}
          <div className="p-[2.5px] rounded-[30px] bg-gradient-to-tr from-[#38BDF8] via-[#EC4899] to-[#F97316] shadow-xl shadow-pink-500/15 group">
            {/* White/Off-white Card Surface */}
            <div className="bg-[#FAFAFC] rounded-[28px] p-8 sm:p-10 md:p-12 border border-slate-100 flex flex-col justify-between h-full relative overflow-hidden">
              
              <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-tight">
                The right AI tool, surfaced at the right moment
              </h3>

              <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
                When your employee starts doing a task in their daily softwares, Modo recognizes the task from their actions and recommends the best fitting AI tool your company bought in real time. One click to open the AI tool and get guided on its usage for their specific workflow.
              </p>

              {/* CLEAN FLOW STEP VISUALIZER */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium">1. Action Detected</span>
                <span className="text-slate-300">➔</span>
                <span className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200/60 font-medium">2. AI Tool Matched</span>
                <span className="text-slate-300">➔</span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium">3. 1-Click Launch</span>
              </div>

            </div>
          </div>
        </motion.div>


        {/* CARD 2 (Middle Right - Offset) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-lg lg:max-w-xl self-end lg:ml-auto relative z-10 flex flex-col"
        >
          {/* Step Badge Node */}
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs self-end ml-auto">
            <svg className="w-3.5 h-3.5 text-pink-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12 0 C 12 6.6 6.6 12 0 12 C 6.6 12 12 17.4 12 24 C 12 17.4 17.4 12 24 12 C 17.4 12 12 6.6 12 0 Z" />
            </svg>
            <span>02 / PROMPT ENRICHMENT</span>
          </div>

          {/* DYNAMIC BORDER: GREY BY DEFAULT -> COLORFUL EXACTLY WHEN LINE 1 TOUCHES CARD 2 */}
          <div className="relative p-[2.5px] rounded-[30px] transition-all duration-500 overflow-hidden group">
            {/* Grey Border Layer (Default when unconnected) */}
            <div className="absolute inset-0 rounded-[30px] bg-slate-200 border border-slate-300/80" />

            {/* Rainbow Gradient Border Layer (Active ONLY when Line 1 touches!) */}
            <motion.div
              style={{ opacity: card2BorderOpacity }}
              className="absolute inset-0 rounded-[30px] bg-gradient-to-tr from-[#38BDF8] via-[#EC4899] to-[#F97316] shadow-xl shadow-pink-500/15"
            />

            {/* White/Off-white Card Surface */}
            <div className="relative bg-[#FAFAFC] rounded-[28px] p-8 sm:p-10 md:p-12 border border-slate-100 flex flex-col justify-between h-full overflow-hidden">
              
              <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-tight">
                Every AI interaction, tuned to the work at hand
              </h3>

              <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
                Modo enriches prompts to AI tools with context about the employee&apos;s role, their current task, and techniques that top performers on their team are already using. The result is most optimal AI output from their first interaction.
              </p>

              {/* CLEAN FLOW STEP VISUALIZER */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium">Employee Role</span>
                <span className="text-slate-300">+</span>
                <span className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 font-medium">Top Performer Context</span>
                <span className="text-slate-300">➔</span>
                <span className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium">Optimal Output</span>
              </div>

            </div>
          </div>
        </motion.div>


        {/* CARD 3 (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-lg lg:max-w-xl self-start relative z-10 flex flex-col"
        >
          {/* Step Badge Node */}
          <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs self-start">
            <svg className="w-3.5 h-3.5 text-orange-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12 0 C 12 6.6 6.6 12 0 12 C 6.6 12 12 17.4 12 24 C 12 17.4 17.4 12 24 12 C 17.4 12 12 6.6 12 0 Z" />
            </svg>
            <span>03 / ROI & LEADERSHIP ANALYTICS</span>
          </div>

          {/* DYNAMIC BORDER: GREY BY DEFAULT -> COLORFUL EXACTLY WHEN LINE 2 TOUCHES CARD 3 */}
          <div className="relative p-[2.5px] rounded-[30px] transition-all duration-500 overflow-hidden group">
            {/* Grey Border Layer (Default when unconnected) */}
            <div className="absolute inset-0 rounded-[30px] bg-slate-200 border border-slate-300/80" />

            {/* Rainbow Gradient Border Layer (Active ONLY when Line 2 touches!) */}
            <motion.div
              style={{ opacity: card3BorderOpacity }}
              className="absolute inset-0 rounded-[30px] bg-gradient-to-tr from-[#38BDF8] via-[#EC4899] to-[#F97316] shadow-xl shadow-pink-500/15"
            />

            {/* White/Off-white Card Surface */}
            <div className="relative bg-[#FAFAFC] rounded-[28px] p-8 sm:p-10 md:p-12 border border-slate-100 flex flex-col justify-between h-full overflow-hidden">
              
              <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-tight">
                Answer &quot;What&apos;s the ROI?&quot; with real data
              </h3>

              <p className="mt-6 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
                Hours saved per employee. Productivity before and after AI workflows. Which AI tools are driving results and which ones aren&apos;t. Where untapped opportunity for adoption still exists. Modo builds the dashboard so you can decide what to scale, what to cut, and where to invest next.
              </p>

              {/* CLEAN FLOW STEP VISUALIZER */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium">Usage Telemetry</span>
                <span className="text-slate-300">➔</span>
                <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 font-medium">Hours Saved (14.2h/wk)</span>
                <span className="text-slate-300">➔</span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium">Board-Ready ROI</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Sparkles, BarChart3, EyeOff, Check, ArrowRight, Zap, Lock } from 'lucide-react';

export default function HowModoWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNumber: '01',
      badge: '01 / PRIVACY-FIRST OBSERVATION',
      title: 'Capture',
      description:
        'A browser extension and desktop app observe workflow patterns across daily tools. No keystrokes. No screen recording.',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
      accentGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      badgeStyle: 'bg-cyan-50 text-cyan-700 border-cyan-200/70',
      visualWidget: (
        <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-slate-800">Background Observer</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-medium text-[11px]">
              Active & Safe
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-medium text-[11px]">
                App
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-900">Chrome & Desktop Tools</span>
                <span className="text-[11px] text-slate-500">Workflow pattern detection</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <Lock className="w-3 h-3" />
              <span>Zero Keystrokes</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      stepNumber: '02',
      badge: '02 / INTENT ENGINE',
      title: 'Analyze',
      description:
        'Modo understands what employees are trying to accomplish and matches it against your AI tool stack in real time.',
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      accentGradient: 'from-purple-500 via-pink-500 to-rose-500',
      badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200/70',
      visualWidget: (
        <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-800">Live Intent Matching</span>
            <span className="text-[11px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/60">
              99.4% Precision
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium text-[11px] truncate max-w-[120px] sm:max-w-none">
              Detected: &quot;Writing SQL Query&quot;
            </span>
            <span className="text-slate-400 font-medium">➔</span>
            <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60 font-medium text-[11px] flex items-center gap-1">
              <Zap className="w-3 h-3 text-purple-500" />
              Claude 3.5 Sonnet
            </span>
          </div>
        </div>
      ),
    },
    {
      stepNumber: '03',
      badge: '03 / REAL-TIME ASSIST',
      title: 'Recommend',
      description:
        'Employees get real-time suggestions: which tool to use, how to prompt it, and what&apos;s working for peers in similar roles.',
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      accentGradient: 'from-pink-500 via-rose-500 to-orange-500',
      badgeStyle: 'bg-pink-50 text-pink-700 border-pink-200/70',
      visualWidget: (
        <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-800">In-Flow Prompt Overlay</span>
            <span className="text-[11px] text-slate-500">1-Click Launch</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50/80 to-purple-50/80 border border-pink-200/60 shadow-2xs flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
              <span className="font-medium text-slate-900 truncate max-w-[140px] sm:max-w-none">
                Use Peer Prompt: &quot;Optimize SQL for Postgres&quot;
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-medium text-[11px] hover:bg-pink-600 transition-colors shrink-0">
              Apply
            </span>
          </div>
        </div>
      ),
    },
    {
      stepNumber: '04',
      badge: '04 / BOARD-READY DASHBOARD',
      title: 'Measure',
      description:
        'Leadership sees adoption, utilization, and productivity impact by tool and at the aggregated team level, preserving individual employee privacy.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      accentGradient: 'from-orange-500 via-amber-500 to-emerald-500',
      badgeStyle: 'bg-orange-50 text-orange-700 border-orange-200/70',
      visualWidget: (
        <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-800">Aggregated Enterprise ROI</span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
              <EyeOff className="w-3 h-3 text-slate-400" />
              <span>Anonymized</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-[11px] text-slate-400 block font-normal">Monthly Hours Saved</span>
              <span className="font-sans text-base font-medium text-slate-950">1,420 hrs/mo</span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-normal">Team Adoption Rate</span>
              <span className="font-sans text-base font-medium text-emerald-600">+88.4%</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-modo-works" className="w-full py-20 sm:py-32 bg-white text-slate-900 select-none px-4 sm:px-6 md:px-10 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 sm:mb-24 relative z-10">
        
        {/* Sparkling Gemini Node Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-800 shadow-2xs"
        >
          <span>HOW MODO WORKS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 leading-[1.12]"
        >
          How Modo Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans max-w-2xl font-normal leading-relaxed text-center"
        >
          From background observation to in-flow prompt enrichment and executive ROI dashboards — completely privacy-first.
        </motion.p>
      </div>


      {/* 2X2 GRID LAYOUT */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 relative z-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                className="group relative"
              >
                {/* Dynamic Glowing Rainbow Border Layer on Hover */}
                <div
                  className={`absolute -inset-[2px] rounded-[34px] bg-gradient-to-tr ${step.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
                />

                {/* Card Surface Container */}
                <div className="relative h-full bg-[#FAFAFC] rounded-[32px] p-8 sm:p-10 border border-slate-200/80 shadow-xs transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  
                  <div>
                    {/* Card Top Row: Badge & Step Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[11px] font-medium px-3 py-1 rounded-full border ${step.badgeStyle}`}>
                        {step.badge}
                      </span>

                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-tight">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Visual Widget */}
                  {step.visualWidget}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

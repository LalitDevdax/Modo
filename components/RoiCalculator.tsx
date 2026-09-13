'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(35);

  // ROI math
  // Avg hours saved per team member per week = 4.2 hrs
  // Avg hourly engineer/knowledge worker cost = $65/hr
  const hoursSavedPerWeekPerPerson = 4.2;
  const hourlyRate = 65;
  const weeksPerYear = 48;

  const totalHoursSavedWeekly = Math.round(teamSize * hoursSavedPerWeekPerPerson);
  const annualDollarSavings = Math.round(totalHoursSavedWeekly * hourlyRate * weeksPerYear);
  const paybackTimeDays = Math.max(3, Math.round(240 / teamSize));

  return (
    <section id="roi" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-xs font-bold text-rose-300 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-white">
            Calculate your team’s Modo ROI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            See how much time and money your organization reclaims by unifying Claude, Copilot, ChatGPT & Notion AI.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="max-w-4xl mx-auto glass-panel-dark rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Slider Controls */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Team Size (Knowledge Workers & Engineers)
                  </label>
                  <span className="text-2xl font-extrabold text-rose-400">
                    {teamSize} <span className="text-sm text-slate-400 font-normal">people</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />

                <div className="flex items-center justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>5 members</span>
                  <span>100 members</span>
                  <span>300+ members</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
                💡 <strong className="text-slate-200">Methodology:</strong> Based on 2026 enterprise benchmarks of 4.2 hours saved per user/week using unified multi-model routing at an average $65/hr fully-burdened rate.
              </div>
            </div>

            {/* Calculated Output Stats */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-950/40 to-slate-800/80 border border-rose-500/30 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-rose-300">Weekly Time Reclaimed</span>
                  <Clock className="w-5 h-5 text-rose-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {totalHoursSavedWeekly.toLocaleString()}{' '}
                  <span className="text-xs font-semibold text-slate-400">hrs/wk</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-2">
                  Equivalent to +{Math.round(totalHoursSavedWeekly / 40)} full-time engineers
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-800/80 border border-emerald-500/30 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-emerald-300">Annual Cost Reduction</span>
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  ${(annualDollarSavings / 1000).toFixed(0)}k{' '}
                  <span className="text-xs font-semibold text-slate-400">/yr</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-2">
                  Payback period: ~{paybackTimeDays} business days
                </span>
              </div>

            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Includes zero-commitment 14-day free pilot for your entire team.</span>
            </div>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-rose-50 transition-colors shadow-lg"
            >
              <span>Get Custom Enterprise Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

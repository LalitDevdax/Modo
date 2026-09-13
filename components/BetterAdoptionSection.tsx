'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Layers, Star, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BetterAdoptionSection() {
  const metrics = [
    {
      stat: '30%',
      subtitle: 'Average Productivity Boost with AI',
      description: 'Measured across engineering, product, and ops teams using in-flow guidance.',
      badge: 'Time Saved',
      icon: <TrendingUp className="w-5 h-5 text-pink-500" />,
      badgeStyle: 'bg-pink-50 text-pink-700 border-pink-200/60',
      glowGradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
    },
    {
      stat: '200+',
      subtitle: 'Professionals Supported in AI Adoption',
      description: 'Active employees guided daily by real-time context-aware tool routing.',
      badge: 'Enterprise',
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      glowGradient: 'from-indigo-500/20 via-sky-500/10 to-transparent',
    },
    {
      stat: '10+',
      subtitle: 'Workflow and Role-specific AI Use Case Tracks',
      description: 'Tailored prompt enrichments for engineering, marketing, design & legal.',
      badge: 'Multi-Role',
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      glowGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      stat: '95%',
      subtitle: 'User Satisfaction Score',
      description: 'Employees report higher confidence and zero prompt frustration with Modo.',
      badge: 'Top Rated',
      icon: <Star className="w-5 h-5 text-blue-500" />,
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200/60',
      glowGradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    },
  ];

  return (
    <section id="better-adoption" className="w-full py-20 sm:py-28 bg-white text-slate-900 select-none px-4 sm:px-6 md:px-10 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-3 inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-800 shadow-2xs"
        >
          <span>PROVEN ENTERPRISE RESULTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950 leading-[1.12]"
        >
          What Better AI Adoption Looks Like
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-sans max-w-2xl font-normal leading-relaxed text-center"
        >
          Real metrics delivered across teams, workflows, and enterprise AI tools in one unified view.
        </motion.p>
      </div>


      {/* UNIFIED ONE VIEW BENTO GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 relative z-10">
        
        {/* LEFT FEATURE CARD: Tall 3D Iridescent Ribbon Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 rounded-[32px] bg-[#FAFAFC] border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xs group"
        >
          {/* Background Iridescent Mesh Overlay */}
          <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none">
            <img
              src="/iridescent-ribbon.jpg"
              alt="3D Iridescent Mesh"
              className="w-full h-full object-cover object-center scale-110"
            />
          </div>

          <div className="relative z-10">
            <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-medium inline-block mb-6 shadow-2xs">
              Modo Advantage
            </span>

            <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 leading-snug">
              Turn idle AI tools into daily habits
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans font-normal leading-relaxed">
              Modo sits unobtrusively in your team&apos;s workflow, delivering contextual prompt intelligence right when it matters most.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero workflow interruption</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>On-device PII redaction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Real-time ROI dashboard</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Pill */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 relative z-10">
            <a
              href="https://calendar.app.google/5jUh7K25vgrhsv48A"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full bg-white border border-slate-200 text-slate-900 font-medium text-xs sm:text-sm flex items-center justify-between hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-2xs group/btn cursor-pointer"
            >
              <span>Schedule Enterprise Demo</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>


        {/* RIGHT 4 FULL-SURFACE SQUIRCLE METRIC CARDS (Full Surface Card Layout matching Left Card) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.stat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
              className="rounded-[32px] bg-[#FAFAFC] border border-slate-200/80 p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-xs hover:border-slate-300 transition-all duration-300 group"
            >
              {/* Integrated Ambient Abstract Glow Overlay across Top-Right Corner */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${m.glowGradient} rounded-bl-full pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* CARD TOP ROW: Badge Tag & Icon Squircle */}
              <div className="flex items-center justify-between relative z-10">
                <span className={`text-[11px] font-medium px-3 py-1 rounded-full border ${m.badgeStyle}`}>
                  {m.badge}
                </span>

                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center transition-all duration-300">
                  {m.icon}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="mt-8 relative z-10 flex flex-col justify-end flex-1">
                {/* BIG STAT NUMBER */}
                <div className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950">
                  {m.stat}
                </div>

                {/* SUBTITLE */}
                <h4 className="mt-3 text-base sm:text-lg font-medium text-slate-900 font-sans leading-snug">
                  {m.subtitle}
                </h4>

                {/* Micro Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-500 font-sans font-normal leading-relaxed">
                  {m.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

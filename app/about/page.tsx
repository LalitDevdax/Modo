'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { Award, Trophy, Linkedin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const awards = [
    {
      title: 'Stanford University Learning Design Award',
      year: '2025 Winner',
      description: 'Recognized for pioneering AI workflow adoption research and educational technology design.',
      icon: <Award className="w-6 h-6 text-amber-500" />,
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    },
    {
      title: 'HumanX x Mayfield Startup Pitch Competition',
      year: '2026 Winner',
      description: 'Awarded top enterprise AI innovation for turning software spend into measurable ROI.',
      icon: <Trophy className="w-6 h-6 text-pink-500" />,
      badgeBg: 'bg-pink-50 text-pink-700 border-pink-200/80',
    },
  ];

  const founders = [
    {
      name: 'Johnny Chang',
      role: 'Co-Founder',
      photo: 'https://cdn.prod.website-files.com/68943f2c722ed6e15332d72e/69aa91291a3846bf1522248b_1772584193695.jpeg',
      linkedin: 'https://www.linkedin.com/in/johnny-chang-519b11173/',
      highlights: ['Stanford CS (AI)', 'Andrew Ng AI Lead', 'AI x Education Founder'],
      bio: "Johnny previously taught Stanford University’s flagship graduate AI courses led by Stanford pioneers like Prof. Andrew Ng (founder of Coursera, Google Brain) and Prof. Chris Manning. He led cutting-edge research at Stanford on AI agents focused on reasoning over large-scale business data. Johnny also founded AI x Education with over 9,000 educators and has led AI adoption programs for over 5,000 professionals across enterprise sectors.",
    },
    {
      name: 'Angelina You',
      role: 'Co-Founder',
      photo: 'https://cdn.prod.website-files.com/68943f2c722ed6e15332d72e/6894e7d424c55e39772f558d_1702540480926.jpeg',
      linkedin: 'https://www.linkedin.com/in/angelina-huilanyou/',
      highlights: ['Stanford MS&E', 'Ex-Meta ML Scientist', 'Accel Fellow'],
      bio: "Former Data Scientist at Meta building large-scale ML models for core product teams, with prior product analytics experience at EverQuote (post-IPO) and CircleCI (unicorn startup). Angelina is an Accel Fellow, founder of Stanford Founders' AI community, and a keynote speaker at national AI forums, helping non-technical workforces master AI workflow automation.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-slate-900 select-none overflow-x-hidden font-sans relative">
      {/* 3D ABSTRACT FLUID WAVE HERO BACKGROUND (FULL 100vh PAGE VIEWPORT) */}
      <div 
        className="absolute top-0 inset-x-0 w-full h-screen min-h-[850px] pointer-events-none z-0 overflow-hidden mix-blend-multiply"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 70px, black calc(100% - 120px), transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 70px, black calc(100% - 120px), transparent 100%)'
        }}
      >
        <img
          src="/about-abstract-bg.jpg"
          alt="3D Iridescent Wave"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      {/* PAGE CONTENT FLOATING DIRECTLY ON PURE WHITE PAGE */}
      <div className="relative z-10">

        {/* 1. HERO SECTION WITH UNBOXED PURE TYPOGRAPHY STORY */}
        <section className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 md:px-10 relative">
          <div className="max-w-5xl mx-auto flex flex-col items-start text-left relative z-10 w-full">
            
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-sans text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-slate-950 leading-[1.08] max-w-3xl"
            >
              About Modo
            </motion.h1>

            {/* STANFORD & FORTUNE 500 STORY (UNBOXED PURE TYPOGRAPHY - NO WHITE BOX BACKGROUND) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8 max-w-4xl"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-medium inline-block mb-6 shadow-2xs">
                Our Origin & Mission
              </span>

              <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-6">
                Training alone doesn&apos;t change how people work.
              </h2>

              <div className="flex flex-col gap-6 text-base sm:text-xl text-slate-950 font-sans font-normal leading-relaxed">
                <p>
                  Our team spent years teaching AI to some of the most capable professionals in the world, at Stanford, at Fortune 500 companies, across executive workshops and courses. The pattern was always the same: organizations would invest heavily in AI tools, run training programs, and then watch adoption stall within weeks.
                </p>
                <p>
                  Modo exists because training alone doesn&apos;t change behavior. What changes behavior is meeting employees inside their actual workflows, showing them which AI tool to use right now, making that tool work better for their specific task, and giving leadership real data on what&apos;s driving results. That&apos;s what we build.
                </p>
              </div>
            </motion.div>

          </div>
        </section>


        {/* 2. AWARDS & RECOGNITION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase block mb-2">
                RECOGNIZED INDUSTRY LEADERSHIP
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-950">
                Awards & Recognition
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 sm:p-10 rounded-[32px] bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center justify-center">
                        {award.icon}
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border ${award.badgeBg}`}>
                        {award.year}
                      </span>
                    </div>

                    <h3 className="font-sans text-2xl font-medium tracking-tight text-slate-950 mb-3 leading-snug">
                      {award.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-900 font-sans font-normal leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* 3. OUR CO-FOUNDERS TEAM */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase block mb-2">
                CO-FOUNDERS & LEADERSHIP
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-950">
                Our AI Expert Team
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-900 font-sans font-normal">
                Built by Stanford AI researchers and Meta data scientists focused on enterprise workflow automation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {founders.map((founder) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[36px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Photo & Profile Row */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs shrink-0">
                        <img
                          src={founder.photo}
                          alt={founder.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div>
                        <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-tight text-slate-950">
                          {founder.name}
                        </h3>
                        <div className="flex items-center gap-2.5 mt-1">
                          <span className="text-sm font-semibold text-pink-600">
                            {founder.role}
                          </span>
                          <span className="text-slate-300">•</span>
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 text-xs font-medium transition-colors"
                          >
                            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Highlights Pills (Responsive Wrap) */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {founder.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-[11px] sm:text-xs font-medium text-slate-950">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Full Bio Paragraph */}
                    <p className="text-sm text-slate-900 font-sans font-normal leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

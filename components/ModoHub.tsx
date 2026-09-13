'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface ToolNode {
  id: string;
  name: string;
  roiText: string;
  side: 'left' | 'right';
  posClass: string;
  icon: React.ReactNode;
}

export default function ModoHub() {
  const [activeNode, setActiveNode] = useState<string | null>('claude');

  const tools: ToolNode[] = [
    // LEFT SIDE CARDS
    {
      id: 'claude',
      name: 'Claude 3.5 Sonnet',
      roiText: '⚡ Saved 4.8 hrs/wk',
      side: 'left',
      posClass: 'top-[12%] left-[10%] sm:left-[14%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'copilot',
      name: 'GitHub Copilot',
      roiText: '🚀 +42% Dev Speed',
      side: 'left',
      posClass: 'top-[44%] left-[26%] sm:left-[30%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900 shadow-xs">
          <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'google',
      name: 'Google Workspace',
      roiText: '📁 Instant Doc Sync',
      side: 'left',
      posClass: 'top-[74%] left-[10%] sm:left-[14%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 flex items-center justify-center text-rose-400 shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
          </svg>
        </div>
      ),
    },

    // RIGHT SIDE CARDS
    {
      id: 'notion',
      name: 'Notion AI',
      roiText: '✨ 91% Team Adoption',
      side: 'right',
      posClass: 'top-[12%] right-[10%] sm:right-[14%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.414-.746c.326 0 .093-.326-.047-.42L15.932 1.64c-.467-.373-1.027-.606-2.146-.514L2.873 2.06c-.42.046-.56.28-.326.513l1.912 1.635zm.84 4.571v12.457c0 .7.373 1.073 1.12 1.026l14.122-.84c.747-.046.933-.513.933-1.12V7.753c0-.653-.326-.98-1.026-.933l-14.12.84c-.7.046-1.028.466-1.028 1.12zm12.306 1.353c.14 0 .28.093.28.326v7.882c0 .326-.186.42-.42.42-.233 0-.373-.093-.56-.233l-4.757-6.249v5.922c0 .326-.233.466-.466.466-.326 0-.467-.14-.467-.42V9.927c0-.28.187-.42.42-.42.234 0 .374.093.56.233l4.71 6.156V9.927c0-.326.234-.466.7-.466z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT Enterprise',
      roiText: '🛡️ Zero Data Retention',
      side: 'right',
      posClass: 'top-[44%] right-[26%] sm:right-[30%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-rose-500 flex items-center justify-center text-white shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.28 10.965a6.002 6.002 0 0 0-.462-5.187 6.037 6.037 0 0 0-4.385-2.84 5.99 5.99 0 0 0-5.163 1.637A6.036 6.036 0 0 0 7.19 3.42 5.99 5.99 0 0 0 2.89 6.772a6.036 6.036 0 0 0-.742 5.155 6.002 6.002 0 0 0 .463 5.188 6.037 6.037 0 0 0 4.384 2.839 5.99 5.99 0 0 0 5.164-1.637 6.036 6.036 0 0 0 5.08 1.155 5.99 5.99 0 0 0 4.302-3.352 6.036 6.036 0 0 0 .741-5.155zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      roiText: '🔍 Real-time Search',
      side: 'right',
      posClass: 'top-[74%] right-[10%] sm:right-[14%]',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-900 flex items-center justify-center text-emerald-400 shadow-xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      ),
    },
  ];

  // 11 Lines meeting parallel at center ribbon
  const lineConfigs = [
    { startY: 30, endY: 30, centerY: 170 },
    { startY: 60, endY: 60, centerY: 174 },
    { startY: 90, endY: 90, centerY: 178 },
    { startY: 120, endY: 120, centerY: 182 },
    { startY: 150, endY: 150, centerY: 186 },
    { startY: 180, endY: 180, centerY: 190 }, // Center axis
    { startY: 210, endY: 210, centerY: 194 },
    { startY: 240, endY: 240, centerY: 198 },
    { startY: 270, endY: 270, centerY: 202 },
    { startY: 300, endY: 300, centerY: 206 },
    { startY: 330, endY: 330, centerY: 210 },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[260px] sm:h-[300px] lg:h-[340px] select-none my-auto">
      
      {/* STATIC CRISP SVG LINES */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 360"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="coralRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A7A" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#FF5D5D" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F04848" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#FF5D5D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF7A7A" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* STATIC PARALLEL-CENTER RIBBON LINES */}
        <g>
          {lineConfigs.map((cfg, idx) => (
            <path
              key={idx}
              d={`M 0 ${cfg.startY} C 260 ${cfg.startY}, 340 ${cfg.centerY}, 420 ${cfg.centerY} L 580 ${cfg.centerY} C 660 ${cfg.centerY}, 740 ${cfg.endY}, 1000 ${cfg.endY}`}
              stroke="url(#coralRibbon)"
              strokeWidth={idx === 5 ? '2.5' : '1.5'}
            />
          ))}
        </g>
      </svg>

      {/* CLEAN CENTER EMBLEM BOX (No text pill overlay blocking emblem!) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-orange-500 via-coral-500 to-rose-500 p-0.5 shadow-[0_0_35px_rgba(255,87,51,0.4)] flex items-center justify-center cursor-pointer border border-white/40"
        >
          <div className="w-full h-full bg-gradient-to-tr from-coral-500 to-rose-500 rounded-[14px] flex items-center justify-center border border-white/40 shadow-inner">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* 6 FLOATING SQUIRCLE TOOL CARDS */}
      {tools.map((tool) => {
        const isActive = activeNode === tool.id;
        return (
          <div
            key={tool.id}
            onMouseEnter={() => setActiveNode(tool.id)}
            onClick={() => setActiveNode(tool.id)}
            className={`absolute z-20 cursor-pointer p-2 card-squircle ${tool.posClass} ${
              isActive ? 'scale-110 border-2 border-rose-500 shadow-md' : ''
            }`}
          >
            {tool.icon}
          </div>
        );
      })}

    </div>
  );
}

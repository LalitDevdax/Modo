'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Search, CheckCircle, ExternalLink } from 'lucide-react';

export default function IntegrationGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI Models', 'Workspace Apps', 'DevTools & Infra', 'Security & SSO'];

  const integrations = [
    { name: 'Claude 3.5 Sonnet', category: 'AI Models', badge: 'Active', desc: 'Anthropic deep reasoning & code' },
    { name: 'ChatGPT Enterprise', category: 'AI Models', badge: 'Active', desc: 'OpenAI GPT-4o with custom GPTs' },
    { name: 'GitHub Copilot', category: 'DevTools & Infra', badge: 'Active', desc: 'Real-time IDE code completion' },
    { name: 'Notion AI', category: 'Workspace Apps', badge: 'Active', desc: 'Workspace wiki & doc intelligence' },
    { name: 'Perplexity Pro', category: 'AI Models', badge: 'Active', desc: 'Real-time web research engine' },
    { name: 'Google Gemini Pro', category: 'AI Models', badge: 'Active', desc: '1M+ token context window' },
    { name: 'Slack AI Gateway', category: 'Workspace Apps', badge: 'Active', desc: 'Channel summaries & instant Q&A' },
    { name: 'Jira & Confluence', category: 'Workspace Apps', badge: 'Active', desc: 'Automated sprint & spec drafting' },
    { name: 'Linear AI', category: 'DevTools & Infra', badge: 'Active', desc: 'Issue auto-labeling & PR triage' },
    { name: 'Snowflake Cortex', category: 'DevTools & Infra', badge: 'Active', desc: 'SQL data warehouse querying' },
    { name: 'Okta SAML 2.0', category: 'Security & SSO', badge: 'Active', desc: 'Zero-trust enterprise identity' },
    { name: 'Datadog LLM Guard', category: 'Security & SSO', badge: 'Active', desc: 'Token latency & observability' },
  ];

  const filtered =
    activeCategory === 'All'
      ? integrations
      : integrations.filter((item) => item.category === activeCategory);

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200/60 text-xs font-bold text-rose-600 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Universal Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Connects to your entire enterprise stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Plug and play with 20+ top-tier AI models, developer platforms, and enterprise identity providers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-xs hover:shadow-soft-md hover:border-rose-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    <span>{item.badge}</span>
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-rose-600 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

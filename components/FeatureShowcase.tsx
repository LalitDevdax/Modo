'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Sliders, Layers, Sparkles, Cpu, Lock, CheckCircle } from 'lucide-react';

export default function FeatureShowcase() {
  const features = [
    {
      icon: <Key className="w-6 h-6 text-rose-500" />,
      title: 'Unified Enterprise SSO',
      subtitle: 'One Identity for 20+ Models',
      description:
        'Eliminate seat management chaos. Provision Claude, ChatGPT Enterprise, and Copilot access with SAML 2.0 / Okta in seconds.',
      badge: 'Zero Setup',
      badgeColor: 'bg-rose-50 text-rose-600 border-rose-200/60',
    },
    {
      icon: <Sliders className="w-6 h-6 text-amber-500" />,
      title: 'Real-Time Token & Spend Caps',
      subtitle: 'Prevent API Bill Shock',
      description:
        'Set per-team, per-project, or per-employee monthly AI spend caps with automatic fallback routing to open weights.',
      badge: 'Cost Control',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      title: 'Universal Prompt Canvas',
      subtitle: 'Cross-Model Intelligence',
      description:
        'Start coding in Claude 3.5 Sonnet, ask GPT-4o for validation, and generate documentation with Notion AI in a single thread.',
      badge: 'Multi-Modal',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-500" />,
      title: 'Enterprise Privacy Shield',
      subtitle: 'Automatic PII Redaction',
      description:
        'Real-time proxy firewall sanitizes API keys, customer PII, and sensitive code before hitting LLM endpoints.',
      badge: 'SOC2 & HIPAA',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-bold text-rose-600 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Modo Enterprise?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Built for security-conscious teams who demand speed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Modo unifies disparate AI models into one coherent, enterprise-controlled workspace.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-soft-xs hover:shadow-soft-md hover:border-slate-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft-sm border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <span className="text-xs font-semibold text-slate-400 block mb-3">
                  {feature.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-rose-600 transition-colors">
                <CheckCircle className="w-4 h-4 text-rose-500" />
                <span>Included in All Plans</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

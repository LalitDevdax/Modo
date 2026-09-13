'use client';

import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'Modo saved our engineering team over $140,000 in redundant AI seats within the first 60 days while doubling our developer velocity.',
      author: 'Sarah Lin',
      role: 'VP of Engineering',
      company: 'Vercel Ecosystem Partner',
      avatar: 'SL',
    },
    {
      quote:
        'Having Claude 3.5 Sonnet and Copilot Enterprise running in the same governance wrapper finally gives our InfoSec team complete peace of mind.',
      author: 'Marcus Vance',
      role: 'Chief Information Security Officer',
      company: 'Fintech Enterprise',
      avatar: 'MV',
    },
    {
      quote:
        'The dynamic hub graphic isn’t just marketing—Modo actually routes queries to the optimal model based on latency, cost, and task complexity.',
      author: 'Elena Rostova',
      role: 'Head of AI Operations',
      company: 'Linear Scale Labs',
      avatar: 'ER',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
            Trusted by 10,000+ AI-First Enterprise Leaders
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Here is what engineering leaders and CISOs say about Modo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-soft-xs hover:shadow-soft-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {review.role} · <span className="text-slate-700">{review.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

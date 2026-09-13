'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import ImpactSection from '@/components/ImpactSection';
import HowModoWorksSection from '@/components/HowModoWorksSection';
import WhatModoDoesSection from '@/components/WhatModoDoesSection';
import BetterAdoptionSection from '@/components/BetterAdoptionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-white">
      <HeroSection />
      <SocialProofSection />
      <ImpactSection />
      <HowModoWorksSection />
      <WhatModoDoesSection />
      <BetterAdoptionSection />
      <Footer />
    </main>
  );
}

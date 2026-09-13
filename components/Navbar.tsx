'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const curtainLayers = [
  'bg-[#FFE4E6]', // Layer 0 (Rose)
  'bg-[#E0E7FF]', // Layer 1 (Indigo)
  'bg-[#BAE6FD]', // Layer 2 (Sky)
  'bg-[#FFFFFF]', // Layer 3 (Base White)
];

const primaryLinks = [
  { num: '01', title: 'Home', href: '/' },
  { num: '02', title: 'About', href: '/about' },
  { num: '03', title: 'Contact', href: '/contact' },
  { num: '04', title: 'Report', href: '/report' },
];

const specialties = [
  'AI & Artificial Intelligence',
  'AI Training & Upskilling',
  'AI Adoption',
  'Change Management',
];

// Custom iOS Easing Curve for smooth transitions
const iosEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Curtain Motion Variants
const curtainVariant = {
  initial: {
    scaleY: 0,
  },
  animate: (index: number) => ({
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.07,
      ease: iosEase,
    },
  }),
  exit: (index: number) => ({
    scaleY: 0,
    transition: {
      duration: 0.5,
      delay: (curtainLayers.length - 1 - index) * 0.07,
      ease: iosEase,
    },
  }),
};

// Reusable Slide-Up from Down Motion Component for text parts
const SlideUpItem = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{
        duration: 0.45,
        delay,
        ease: iosEase,
      }}
    >
      {children}
    </motion.div>
  </div>
);

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const [isNavBtnHovered, setIsNavBtnHovered] = useState(false);

  useEffect(() => {
    // Eagerly prefetch routes into memory for 0.001s instant transitions
    router.prefetch('/about');
    router.prefetch('/contact');
    router.prefetch('/report');
    router.prefetch('/');

    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@joinmodo.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleOpen = () => {
    setIsOpen(true);
    // Prefetch target routes again on menu open
    router.prefetch('/about');
    router.prefetch('/contact');
    router.prefetch('/report');
    router.prefetch('/');
    // Delay text reveal until color curtains drop down
    setTimeout(() => {
      setIsContentVisible(true);
    }, 450);
  };

  const handleClose = () => {
    // 1. Text INSTANTLY vanishes from DOM/Screen!
    setIsContentVisible(false);
    // 2. Curtains retract UP after text is gone
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      handleClose();
      return;
    }

    if (href.startsWith('/')) {
      e.preventDefault();

      if (pathname === href) {
        handleClose();
        return;
      }

      // 1. Instant 0.001s route push under curtains
      router.push(href);

      // 2. Menu text vanishes instantly
      setIsContentVisible(false);

      // 3. Retract curtains UP to reveal preloaded page
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  return (
    <>
      {/* 1. TOP FIXED NAV (Glassmorphism on Scroll / Open | Cute Pill Button Right) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 pointer-events-auto transition-all duration-300 ${
          isOpen
            ? 'bg-transparent py-4 sm:py-5 px-4 sm:px-8 md:px-10'
            : isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-2xs py-3 px-4 sm:px-8 md:px-10'
            : 'bg-transparent py-4 sm:py-5 px-4 sm:px-8 md:px-10'
        } flex items-center justify-between`}
      >
        {/* LEFT: Sleek Line-Glide Mirror Flip Toggler (Smooth State-Driven Framer Motion Hover) */}
        <motion.button
          onClick={toggleMenu}
          onMouseEnter={() => setIsNavBtnHovered(true)}
          onMouseLeave={() => setIsNavBtnHovered(false)}
          whileTap={{ scale: 0.95 }}
          className="relative z-50 p-2 bg-transparent flex items-center justify-center focus:outline-none cursor-pointer group"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ scaleX: isOpen ? -1 : 1 }}
            transition={{ duration: 0.4, ease: iosEase }}
            className="relative w-7 h-4 flex flex-col justify-between items-start"
          >
            {/* Top Line (28px - Glides 4px right on hover) */}
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 7, width: '28px', x: 0, backgroundColor: '#000000' }
                  : isNavBtnHovered
                  ? { rotate: 0, y: 0, width: '28px', x: 4, backgroundColor: '#000000' }
                  : { rotate: 0, y: 0, width: '28px', x: 0, backgroundColor: '#000000' }
              }
              transition={{ duration: 0.35, ease: iosEase }}
              className="h-[2px] bg-black rounded-full origin-center block shrink-0"
            />
            {/* Bottom Line (18px -> Extends to 28px on hover) */}
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -7, width: '28px', x: 0, backgroundColor: '#000000' }
                  : isNavBtnHovered
                  ? { rotate: 0, y: 0, width: '28px', x: 0, backgroundColor: '#000000' }
                  : { rotate: 0, y: 0, width: '18px', x: 0, backgroundColor: '#000000' }
              }
              transition={{ duration: 0.35, ease: iosEase }}
              className="h-[2px] bg-black rounded-full origin-center block"
            />
          </motion.div>
        </motion.button>

        {/* CENTER: Official Modo Logo */}
        <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center group z-50 absolute left-1/2 -translate-x-1/2">
          <img
            src="/modo-logo-clean.png"
            alt="Modo Logo"
            className="h-5 sm:h-6 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* RIGHT: Compact, Cute & Clean 'Get started ↗' Button */}
        <a
          href="https://calendar.app.google/5jUh7K25vgrhsv48A"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-950 hover:bg-pink-600 text-white text-xs font-medium tracking-tight transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 group font-sans cursor-pointer"
        >
          <span>Get started</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </header>

      {/* 2. MULTI-LAYER CURTAIN DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 overflow-hidden pointer-events-auto">
            
            {/* 4 Staggered Color Curtains */}
            {curtainLayers.map((bgClass, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={curtainVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ originY: 0 }}
                className={`absolute inset-0 w-full h-full ${bgClass}`}
              />
            ))}

            {/* Content Container */}
            <AnimatePresence>
              {isContentVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="relative z-50 max-w-7xl mx-auto h-full px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-4 flex flex-col justify-between overflow-y-auto no-scrollbar font-sans select-none"
                >
                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-7 sm:gap-y-6 w-full my-auto items-start font-sans">

                    {/* SECTION 1: Navigation */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                      <div>
                        <SlideUpItem delay={0.02} className="mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase font-sans">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]" />
                            <span>Navigation</span>
                          </div>
                        </SlideUpItem>

                        <div className="flex flex-col space-y-2.5 sm:space-y-3">
                          {primaryLinks.map((link, idx) => (
                            <SlideUpItem key={link.title} delay={0.05 + idx * 0.04}>
                              <a
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="inline-flex items-center gap-3 sm:gap-4 text-3xl sm:text-5xl font-light tracking-tight text-slate-900 hover:text-pink-600 transition-colors cursor-pointer group font-sans py-0.5"
                              >
                                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-900 group-hover:bg-pink-500 rounded-[2px] transition-colors shrink-0" />
                                <span className="font-sans font-light">{link.title}</span>
                              </a>
                            </SlideUpItem>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* MOBILE ONLY DIVIDER BETWEEN NAVIGATION & PLATFORM OVERVIEW */}
                    <div className="block md:hidden col-span-1 border-t border-slate-200/60 my-2" />

                    {/* SECTION 2: Platform Overview */}
                    <div className="md:col-span-7 flex flex-col justify-between font-sans pt-1 md:pt-0">
                      <div>
                        <SlideUpItem delay={0.08} className="mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase font-sans">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]" />
                            <span>Platform Overview</span>
                          </div>
                        </SlideUpItem>

                        <SlideUpItem delay={0.12} className="mb-3">
                          <img
                            src="/modo-logo-clean.png"
                            alt="Modo Logo"
                            className="h-5 sm:h-6 w-auto object-contain my-1"
                          />
                        </SlideUpItem>

                        <SlideUpItem delay={0.16}>
                          <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed font-normal max-w-xl">
                            Modo helps enterprises turn AI investments into real adoption and measurable ROI. We embed directly into everyday work to support effective, safe AI usage across teams, and provide leaders with clear visibility into usage patterns, workflow impact, and where more enablement is needed.
                          </p>
                        </SlideUpItem>
                      </div>
                    </div>

                    {/* DESKTOP CENTER SPLIT BORDER DIVIDERS */}
                    <div className="hidden md:block md:col-span-5">
                      <div className="border-t border-slate-200/60 my-3" />
                    </div>

                    <div className="hidden md:block md:col-span-7">
                      <div className="border-t border-slate-200/60 my-3" />
                    </div>

                    {/* MOBILE DIVIDER BETWEEN PLATFORM OVERVIEW & BACKED BY */}
                    <div className="block md:hidden col-span-1 border-t border-slate-200/60 my-2" />

                    {/* SECTION 3: Backed By */}
                    <div className="md:col-span-5 flex flex-col space-y-3">
                      <div>
                        <SlideUpItem delay={0.20} className="mb-3">
                          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase font-sans">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]" />
                            <span>Backed By</span>
                          </div>
                        </SlideUpItem>
                        <SlideUpItem delay={0.24}>
                          <div className="flex flex-wrap gap-2.5 font-sans">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
                              <span className="w-1.5 h-1.5 bg-slate-900 rounded-[1px]" />
                              Pear VC & Peterson Ventures
                            </span>
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-pink-50/80 border border-pink-200/80 text-xs font-medium text-pink-700 shadow-2xs">
                              <span className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]" />
                              StartX F25
                            </span>
                          </div>
                        </SlideUpItem>
                      </div>
                    </div>

                    {/* MOBILE DIVIDER BEFORE INFO GRID */}
                    <div className="block md:hidden col-span-1 border-t border-slate-200/60 my-2" />

                    {/* SECTION 4: Info Grid, Specialties & Direct Contact */}
                    <div className="md:col-span-7 flex flex-col space-y-4 sm:space-y-5 font-sans">
                      
                      {/* Info Grid (HQ, Industry, Website) */}
                      <div className="text-xs font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
                          <SlideUpItem delay={0.22}>
                            <div>
                              <span className="text-slate-400 font-medium block uppercase tracking-wider text-[10px] mb-1 font-sans">Headquarters</span>
                              <span className="font-medium text-slate-900 text-xs sm:text-sm block font-sans">Stanford, CA</span>
                            </div>
                          </SlideUpItem>

                          <SlideUpItem delay={0.25}>
                            <div>
                              <span className="text-slate-400 font-medium block uppercase tracking-wider text-[10px] mb-1 font-sans">Industry</span>
                              <span className="font-medium text-slate-900 text-xs sm:text-sm block font-sans">Software Development</span>
                            </div>
                          </SlideUpItem>

                          <SlideUpItem delay={0.28}>
                            <div>
                              <span className="text-slate-400 font-medium block uppercase tracking-wider text-[10px] mb-1 font-sans">Website</span>
                              <a
                                href="https://joinmodo.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-pink-600 hover:underline text-xs sm:text-sm inline-flex items-center gap-1 font-sans"
                              >
                                <span>joinmodo.com</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </SlideUpItem>
                        </div>
                      </div>

                      {/* Specialties & Focus Areas */}
                      <div className="pt-3 sm:pt-4 border-t border-slate-200/60 font-sans">
                        <SlideUpItem delay={0.30} className="mb-2">
                          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-slate-400 uppercase font-sans">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-[1px]" />
                            <span>Specialties</span>
                          </div>
                        </SlideUpItem>
                        <SlideUpItem delay={0.34}>
                          <div className="flex flex-wrap gap-2 font-sans">
                            {specialties.map((spec) => (
                              <span
                                key={spec}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs font-sans"
                              >
                                <span className="w-1.5 h-1.5 bg-slate-900 rounded-[1px]" />
                                {spec}
                              </span>
                            ))}
                          </div>
                        </SlideUpItem>
                      </div>

                      {/* Contact Mail + Interactive Copy Button */}
                      <div className="pt-1 flex items-center justify-between font-sans">
                        <SlideUpItem delay={0.38}>
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-sans flex-wrap">
                            <span>Direct Contact:</span>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-900 font-medium shadow-2xs">
                              <a href="mailto:info@joinmodo.com" className="font-medium hover:text-pink-600 transition-colors font-sans text-xs">
                                info@joinmodo.com
                              </a>
                              <button
                                onClick={handleCopyEmail}
                                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors relative focus:outline-none cursor-pointer"
                                title="Copy Email"
                                aria-label="Copy Email"
                              >
                                <AnimatePresence mode="wait">
                                  {isCopied ? (
                                    <motion.span
                                      key="check"
                                      initial={{ scale: 0.6, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.6, opacity: 0 }}
                                      transition={{ duration: 0.18 }}
                                      className="flex items-center gap-1 text-[11px] font-medium text-emerald-600"
                                    >
                                      <Check className="w-3.5 h-3.5" />
                                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded-full font-sans font-medium">Copied!</span>
                                    </motion.span>
                                  ) : (
                                    <motion.span
                                      key="copy"
                                      initial={{ scale: 0.6, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.6, opacity: 0 }}
                                      transition={{ duration: 0.18 }}
                                    >
                                      <Copy className="w-3.5 h-3.5" />
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                              </button>
                            </div>
                          </div>
                        </SlideUpItem>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Copyright Bar */}
                  <SlideUpItem delay={0.42}>
                    <div className="text-xs font-mono text-slate-500 pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <p>© 2026 Modo. All rights reserved.</p>
                    </div>
                  </SlideUpItem>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

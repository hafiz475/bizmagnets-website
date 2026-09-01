'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowRight, Sparkles, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const MENU_ITEMS = [
  { name: 'Platform', href: '#platform', blurb: 'Inbox, ticketing, workflows, service, engage, sell' },
  { name: 'Solutions', href: '#solutions', blurb: 'Support, sales, marketing, service, operations' },
  { name: 'Industries', href: '#industries', blurb: 'Seven workflow chains, one platform' },
  { name: 'Pricing', href: '#trial', blurb: 'Essential, Scale, Enterprise' },
  { name: 'Customers', href: '#customers', blurb: '9,800+ man-days saved at Athulya' },
  { name: 'Resources', href: '#resources', blurb: 'Templates, guides, free tools, blog' },
  { name: 'Company', href: '#company', blurb: 'About, partners, security, contact' },
  { name: 'Docs', href: '#resources', blurb: 'APIs, webhooks, developer guides' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const progressRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Direct DOM manipulation for buttery-smooth 60fps scroll progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      // Minimum 6% so the bar is always visible as a small accent
      const width = Math.max(6, progress);

      if (progressRef.current) {
        progressRef.current.style.width = `${width}%`;
      }
    };

    const onScroll = () => {
      // Cancel previous frame to avoid stacking
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    // Set initial state
    updateProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 flex justify-center pointer-events-none transition-all duration-300">
        <div className="pointer-events-auto w-full max-w-6xl">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Main Glass Pill — Logo, Links, Sign In, Book a Demo, CTA */}
            <div className="flex-1 flex items-center gap-2 sm:gap-5 glass-nav rounded-full p-2 transition-all shadow-lg hover:shadow-xl min-w-0">
              {/* Logo — New BizMagnets v4 Lockup */}
              <a
                href="#top"
                className="flex-shrink-0 flex items-center pl-2 transition-transform hover:scale-[1.02]"
                aria-label="BizMagnets Home"
              >
                <Image
                  src="/assets/Biz_logo_version4.png"
                  alt="BizMagnets"
                  width={140}
                  height={32}
                  className="h-7 sm:h-8 w-auto"
                  priority
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 ml-2">
                <a
                  href="#platform"
                  className="text-[#111C34] dark:text-[#EDF1FA] text-[15px] font-semibold hover:text-[#1A73E8] dark:hover:text-[#4C9AFF] transition-colors"
                >
                  Platform
                </a>
                <a
                  href="#industries"
                  className="text-[#111C34] dark:text-[#EDF1FA] text-[15px] font-semibold hover:text-[#EA3323] dark:hover:text-[#FF6B5E] transition-colors"
                >
                  Industries
                </a>
                <a
                  href="#customers"
                  className="text-[#111C34] dark:text-[#EDF1FA] text-[15px] font-semibold hover:text-[#F9AB00] dark:hover:text-[#FFC94D] transition-colors"
                >
                  Customers
                </a>
                <a
                  href="#resources"
                  className="text-[#111C34] dark:text-[#EDF1FA] text-[15px] font-semibold hover:text-[#12A150] dark:hover:text-[#3DDC8A] transition-colors"
                >
                  Resources
                </a>
              </nav>

              <span className="flex-1" />

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={onOpenDemo}
                  className="hidden lg:inline-flex text-[#5C6B85] dark:text-[#93A1BE] text-sm font-semibold hover:text-[#111C34] dark:hover:text-[#EDF1FA] px-2 py-1 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={onOpenDemo}
                  className="hidden sm:inline-flex items-center text-[#111C34] dark:text-[#EDF1FA] text-sm font-semibold px-4 py-2 rounded-full border border-[#12A150]/35 dark:border-[#3DDC8A]/35 hover:bg-[#12A150]/10 hover:text-[#12A150] dark:hover:text-[#3DDC8A] transition-all"
                >
                  Book a Demo
                </button>

                {/* Awesome Animated CTA — Aurora Ring + Mixed Font Treatment */}
                <button
                  onClick={onOpenTrial}
                  className="hidden sm:inline-flex relative items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full flex-shrink-0 group bg-[#0D1730] dark:bg-[#060A14]"
                >
                  <span className="absolute -inset-[3px] rounded-full bg-[conic-gradient(#1A73E8,#12A150,#F9AB00,#EA3323,#1A73E8)] opacity-90 blur-[5px] animate-bm-aurora -z-10 group-hover:blur-[7px] transition-[filter]" />
                  <Sparkles className="w-4 h-4 text-[#F9AB00] animate-bm-spark relative z-10" />
                  <span className="relative z-10 font-display font-bold text-xs sm:text-sm text-white tracking-tight whitespace-nowrap">
                    Get Started
                  </span>
                  <span className="relative z-10 font-display italic font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest text-[#0D1730] bg-white rounded-full px-2.5 py-1.5 group-hover:bg-[#F9AB00] transition-colors">
                    Free
                  </span>
                </button>
              </div>
            </div>

            {/* Outside Circle Buttons — separate from nav pill */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Light / Dark Mode Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle light and dark mode"
                className="relative w-11 h-11 flex-shrink-0 rounded-full border border-white/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md flex items-center justify-center overflow-hidden hover:scale-105 transition-all"
              >
                {theme === 'dark' ? (
                  <Moon key="moon" className="w-[18px] h-[18px] text-[#FFC94D] animate-bm-theme-in" />
                ) : (
                  <Sun key="sun" className="w-[18px] h-[18px] text-[#F9AB00] animate-bm-theme-in" />
                )}
              </button>

              {/* Menu Toggle — opens fullscreen menu */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                className="w-11 h-11 flex-shrink-0 rounded-full border-0 cursor-pointer bg-[conic-gradient(from_0deg,#1A73E8,#EA3323,#F9AB00,#12A150,#1A73E8)] p-[2px] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <span className="w-full h-full rounded-full bg-white dark:bg-[#0D1730] flex items-center justify-center">
                  {menuOpen ? (
                    <X className="w-[18px] h-[18px] text-[#111C34] dark:text-[#EDF1FA]" />
                  ) : (
                    <Menu className="w-[18px] h-[18px] text-[#111C34] dark:text-[#EDF1FA]" />
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Scroll-progress accent — direct DOM for 60fps, starts left, fills full width at page bottom */}
          <div className="flex justify-start px-6 mt-1">
            <div
              ref={progressRef}
              className="h-[3px] rounded-full"
              style={{
                width: '6%',
                background: 'linear-gradient(90deg, #1A73E8, #EA3323, #F9AB00, #12A150)',
                willChange: 'width',
              }}
            />
          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#E9F2FF]/80 dark:bg-[#060A14]/92 backdrop-blur-2xl overflow-y-auto animate-bm-in p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/assets/Biz_logo_version4.png"
                alt="BizMagnets Logo"
                width={180}
                height={38}
                className="h-9 w-auto"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/90 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-2xl text-[#111C34] dark:text-[#EDF1FA] hover:bg-white dark:hover:bg-white/10 transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MENU_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/95 dark:border-white/10 shadow-lg backdrop-blur-md hover:-translate-y-1 hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#111C34]/5 dark:bg-white/10 flex items-center justify-center mb-3 group-hover:bg-[#1A73E8]/10 transition-colors">
                    <Sparkles className="w-5 h-5 text-[#1A73E8] dark:text-[#4C9AFF]" />
                  </div>
                  <span className="block font-display text-xl font-bold text-[#111C34] dark:text-[#EDF1FA]">
                    {item.name}
                  </span>
                  <span className="block text-xs text-[#5C6B85] dark:text-[#93A1BE] mt-1.5">
                    {item.blurb}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/60 dark:border-white/10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenTrial();
                }}
                className="inline-flex items-center gap-2 bg-[#1A73E8] text-white font-display font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:bg-[#1257B8] transition-all"
              >
                Try BizMagnets Free <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenDemo();
                }}
                className="inline-flex items-center border-2 border-[#111C34] dark:border-white text-[#111C34] dark:text-white font-display font-bold text-sm px-6 py-3 rounded-full hover:bg-[#111C34] dark:hover:bg-white hover:text-white dark:hover:text-[#111C34] transition-all"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

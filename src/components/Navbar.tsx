'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  Sparkles,
  Sun,
  Moon,
  Layers,
  Briefcase,
  Building2,
  CreditCard,
  Users,
  BookOpen,
  Globe2,
  Code2,
  LogIn,
  Calendar,
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

// Custom-built hamburger — each bar breathes independently and mid-cycle
// morphs into a sidebar-style silhouette before springing back. Idle only;
// toggling to the open state overrides the loop with a clean X transition.
const HamburgerIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <span className="relative w-[18px] h-[13px] flex flex-col justify-between">
    <span
      className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ease-out ${
        open ? 'rotate-45 translate-y-[5.5px]' : 'animate-bm-ham-1'
      }`}
    />
    <span
      className={`block h-[2px] w-full rounded-full bg-current transition-all duration-200 ease-out ${
        open ? 'opacity-0 scale-x-0' : 'animate-bm-ham-2'
      }`}
    />
    <span
      className={`block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ease-out ${
        open ? '-rotate-45 -translate-y-[5.5px]' : 'animate-bm-ham-3'
      }`}
    />
  </span>
);

export const MENU_ITEMS = [
  {
    name: 'Platform',
    href: '#platform',
    blurb: 'Inbox, ticketing, workflows, service, engage, sell',
    icon: Layers,
    color: '#1A73E8', // Google Blue
  },
  {
    name: 'Solutions',
    href: '#solutions',
    blurb: 'Support, sales, marketing, service, operations',
    icon: Briefcase,
    color: '#EA3323', // Google Red
  },
  {
    name: 'Industries',
    href: '#industries',
    blurb: 'Seven workflow chains, one platform',
    icon: Building2,
    color: '#F9AB00', // Google Yellow
  },
  {
    name: 'Pricing',
    href: '#trial',
    blurb: 'Essential, Scale, Enterprise',
    icon: CreditCard,
    color: '#12A150', // WhatsApp Green
  },
  {
    name: 'Customers',
    href: '#customers',
    blurb: '9,800+ man-days saved at Athulya',
    icon: Users,
    color: '#1A73E8', // Google Blue
  },
  {
    name: 'Resources',
    href: '#resources',
    blurb: 'Templates, guides, free tools, blog',
    icon: BookOpen,
    color: '#EA3323', // Google Red
  },
  {
    name: 'Company',
    href: '#company',
    blurb: 'About, partners, security, contact',
    icon: Globe2,
    color: '#F9AB00', // Google Yellow
  },
  {
    name: 'Docs',
    href: '#resources',
    blurb: 'APIs, webhooks, developer guides',
    icon: Code2,
    color: '#12A150', // WhatsApp Green
  },
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
            {/* Menu Toggle — opens fullscreen menu, now leads the navbar */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="w-11 h-11 flex-shrink-0 rounded-full border border-white/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md flex items-center justify-center text-[#111C34] dark:text-[#EDF1FA] hover:scale-105 transition-transform"
            >
              <HamburgerIcon open={menuOpen} />
            </button>

            {/* Main Glass Pill — Logo, Login, Book a Demo */}
            <div className="flex-1 flex items-center gap-2 sm:gap-5 glass-nav rounded-full p-2 transition-all shadow-lg hover:shadow-xl min-w-0">
              {/* Logo — New BizMagnets v4 Lockup */}
              <a
                href="#top"
                className="flex-shrink-0 flex items-center pl-2 transition-transform hover:scale-[1.02]"
                aria-label="BizMagnets Home"
              >
                <span className="flex items-center rounded-full dark:bg-white/95 dark:px-3 dark:py-1.5 transition-colors">
                  <Image
                    src="/assets/Biz_logo_version4.png"
                    alt="BizMagnets"
                    width={200}
                    height={46}
                    className="h-10 sm:h-12 w-auto"
                    priority
                  />
                </span>
              </a>

              <span className="flex-1" />

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={onOpenDemo}
                  className="hidden lg:inline-flex items-center gap-1.5 text-[#5C6B85] dark:text-[#93A1BE] font-display text-base font-bold hover:text-[#111C34] dark:hover:text-[#EDF1FA] px-2 py-1 transition-colors group"
                >
                  <LogIn className="w-4 h-4 animate-bm-login-slide group-hover:text-[#25D366] transition-colors" />
                  Login
                </button>
                <button
                  onClick={onOpenDemo}
                  className="hidden sm:inline-flex items-center gap-1.5 bg-[#12A150] dark:bg-[#3DDC8A] text-white dark:text-[#0A0F1E] font-display text-base font-bold px-5 py-2.5 rounded-full shadow-md shadow-[#12A150]/25 hover:bg-[#0F8A44] dark:hover:bg-[#2ECC81] transition-all"
                >
                  <Calendar className="w-4 h-4 animate-bm-calendar-pulse" />
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Light / Dark Mode Toggle — trails the navbar */}
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
              <span className="flex items-center rounded-full dark:bg-white/95 dark:px-3 dark:py-1.5 transition-colors">
                <Image
                  src="/assets/Biz_logo_version4.png"
                  alt="BizMagnets Logo"
                  width={180}
                  height={38}
                  className="h-9 w-auto"
                />
              </span>
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
              {MENU_ITEMS.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/95 dark:border-white/10 shadow-lg backdrop-blur-md hover:-translate-y-1 hover:shadow-xl transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}18` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="block font-display text-xl font-bold text-[#111C34] dark:text-[#EDF1FA] group-hover:text-[#1A73E8] dark:group-hover:text-[#4C9AFF] transition-colors">
                      {item.name}
                    </span>
                    <span className="block text-xs text-[#5C6B85] dark:text-[#93A1BE] mt-1.5">
                      {item.blurb}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/60 dark:border-white/10">
              {/* Try BizMagnets Free — Glass Pill + Spinning WhatsApp-Green Sparkle */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenTrial();
                }}
                className="relative inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full flex-shrink-0 group bg-white/80 dark:bg-white/10 backdrop-blur-md border border-[#25D366]/40 dark:border-[#25D366]/35 shadow-[0_6px_20px_rgba(37,211,102,0.18)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.32)] hover:border-[#25D366]/70 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#25D366] animate-bm-spin relative z-10" />
                <span className="relative z-10 font-display font-bold text-sm text-[#111C34] dark:text-[#EDF1FA] tracking-tight whitespace-nowrap">
                  Try BizMagnets
                </span>
                <span className="relative z-10 font-display italic font-extrabold text-[11px] uppercase tracking-widest text-white bg-[#25D366] rounded-full px-2.5 py-1.5 group-hover:bg-[#128C4A] transition-colors">
                  Free
                </span>
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

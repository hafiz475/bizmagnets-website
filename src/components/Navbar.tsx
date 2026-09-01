'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  ArrowRight,
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
  User,
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
                <Image
                  src={theme === 'dark' ? '/assets/bizlogov4-cropped-dark.png' : '/assets/bizlogov4-cropped.png'}
                  alt="BizMagnets"
                  width={735}
                  height={197}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
              </a>

              <span className="flex-1" />

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Login */}
                <button
                  onClick={onOpenDemo}
                  aria-label="Login"
                  className="hidden lg:inline-flex items-center gap-1.5 text-[#5C6B85] dark:text-[#93A1BE] hover:text-[#111C34] dark:hover:text-[#EDF1FA] hover:bg-[#111C34]/5 dark:hover:bg-white/10 px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={onOpenDemo}
                  className="hidden sm:inline-flex items-center gap-2 text-[#111C34] dark:text-[#EDF1FA] text-sm font-semibold px-4 py-2 rounded-xl border border-[#111C34]/15 dark:border-white/20 hover:bg-[#111C34]/5 dark:hover:bg-white/10 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#1A73E8] animate-bm-blink" />
                  <span>Book a Demo</span>
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

          {/* Scroll-progress accent — mirrors the hamburger/pill/theme-toggle row
              so it starts under the glass pill, not the hamburger button */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1">
            <span className="w-11 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1 min-w-0 px-6">
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
            <span className="w-11 flex-shrink-0" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#E9F2FF]/85 dark:bg-[#060A14]/95 backdrop-blur-2xl overflow-y-auto animate-bm-in p-3.5 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <Image
                src={theme === 'dark' ? '/assets/bizlogov4-cropped-dark.png' : '/assets/bizlogov4-cropped.png'}
                alt="BizMagnets Logo"
                width={735}
                height={197}
                className="h-7 sm:h-9 w-auto"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/90 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-xl text-[#111C34] dark:text-[#EDF1FA] hover:bg-white dark:hover:bg-white/10 transition-all"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4">
              {MENU_ITEMS.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-white/75 dark:bg-white/5 border border-white/95 dark:border-white/10 shadow-sm sm:shadow-md backdrop-blur-md hover:-translate-y-0.5 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}18` }}
                      >
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.color }} />
                      </div>
                      <span className="block font-display text-sm sm:text-base lg:text-lg font-bold text-[#111C34] dark:text-[#EDF1FA] group-hover:text-[#1A73E8] dark:group-hover:text-[#4C9AFF] transition-colors leading-snug">
                        {item.name}
                      </span>
                    </div>
                    <span className="block text-[11px] sm:text-xs text-[#5C6B85] dark:text-[#93A1BE] mt-1 sm:mt-1.5 leading-snug line-clamp-2">
                      {item.blurb}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3.5 mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-white/60 dark:border-white/10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenTrial();
                }}
                className="inline-flex items-center gap-2 bg-[#12A150] hover:bg-[#0E8A42] text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl shadow-md shadow-[#12A150]/20 hover:shadow-lg transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-white animate-bm-spin" />
                <span>Try BizMagnets Free</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenDemo();
                }}
                className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-[#111C34]/15 dark:border-white/20 text-[#111C34] dark:text-[#EDF1FA] hover:bg-[#111C34]/5 dark:hover:bg-white/10 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1A73E8] animate-bm-blink" />
                <span>Book a Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

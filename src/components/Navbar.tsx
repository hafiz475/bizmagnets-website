'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowRight, Sparkles } from 'lucide-react';

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
          <div className="flex items-center gap-2 sm:gap-5 glass-nav rounded-full p-2 transition-all shadow-lg hover:shadow-xl">
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
                className="text-[#111C34] text-[15px] font-semibold hover:text-[#1A73E8] transition-colors"
              >
                Platform
              </a>
              <a
                href="#industries"
                className="text-[#111C34] text-[15px] font-semibold hover:text-[#EA3323] transition-colors"
              >
                Industries
              </a>
              <a
                href="#customers"
                className="text-[#111C34] text-[15px] font-semibold hover:text-[#F9AB00] transition-colors"
              >
                Customers
              </a>
              <a
                href="#resources"
                className="text-[#111C34] text-[15px] font-semibold hover:text-[#12A150] transition-colors"
              >
                Resources
              </a>
            </nav>

            <span className="flex-1" />

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenDemo}
                className="hidden lg:inline-flex text-[#5C6B85] text-sm font-semibold hover:text-[#111C34] px-2 py-1 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={onOpenDemo}
                className="hidden sm:inline-flex items-center text-[#111C34] text-sm font-semibold px-4 py-2 rounded-full border border-[#12A150]/35 hover:bg-[#12A150]/10 hover:text-[#12A150] transition-all"
              >
                Book a Demo
              </button>

              {/* Animated Gradient CTA Button */}
              <button
                onClick={onOpenTrial}
                className="relative inline-flex p-[2px] rounded-full overflow-hidden flex-shrink-0 group"
              >
                <span className="absolute -top-[160%] -left-[60%] w-[220%] h-[420%] bg-[conic-gradient(#1A73E8,#EA3323,#F9AB00,#12A150,#1A73E8)] animate-bm-spin" />
                <span className="relative inline-flex items-center gap-1.5 bg-white rounded-full px-4 sm:px-5 py-2 font-bold text-xs sm:text-sm text-[#111C34] group-hover:bg-[#F2F7FF] transition-colors">
                  Try BizMagnets Free
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                className="w-11 h-11 flex-shrink-0 rounded-full border-0 cursor-pointer bg-[conic-gradient(from_0deg,#1A73E8,#EA3323,#F9AB00,#12A150,#1A73E8)] p-[2px] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <span className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/assets/Biz_logo_version4.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-5 w-auto"
                  />
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
        <div className="fixed inset-0 z-50 bg-[#E9F2FF]/80 backdrop-blur-2xl overflow-y-auto animate-bm-in p-4 sm:p-8">
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
                className="w-12 h-12 rounded-full border border-white/90 bg-white/70 backdrop-blur-md flex items-center justify-center text-2xl text-[#111C34] hover:bg-white transition-all"
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
                  className="p-6 rounded-2xl bg-white/70 border border-white/95 shadow-lg backdrop-blur-md hover:-translate-y-1 hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#111C34]/5 flex items-center justify-center mb-3 group-hover:bg-[#1A73E8]/10 transition-colors">
                    <Sparkles className="w-5 h-5 text-[#1A73E8]" />
                  </div>
                  <span className="block font-display text-xl font-bold text-[#111C34]">
                    {item.name}
                  </span>
                  <span className="block text-xs text-[#5C6B85] mt-1.5">
                    {item.blurb}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/60">
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
                className="inline-flex items-center border-2 border-[#111C34] text-[#111C34] font-display font-bold text-sm px-6 py-3 rounded-full hover:bg-[#111C34] hover:text-white transition-all"
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

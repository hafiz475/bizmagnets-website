'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3 pb-2 flex justify-center pointer-events-none transition-all duration-300">
        <div className="pointer-events-auto w-full max-w-6xl">
          <div className="flex items-center gap-2 sm:gap-5 glass-nav rounded-full p-2 transition-all shadow-lg hover:shadow-xl">
            {/* Logo Mark */}
            <a
              href="#top"
              className="w-11 h-11 flex-shrink-0 rounded-full bg-white shadow-md flex items-center justify-center transition-transform hover:-rotate-12"
              aria-label="BizMagnets Home"
            >
              <Image
                src="/assets/logo-mark.png"
                alt="BizMagnets Logo"
                width={28}
                height={28}
                className="w-7 h-auto"
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
                    src="/assets/logo-mark.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-auto"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Color accent line */}
          <div className="flex justify-end px-6 mt-1">
            <div className="w-[23%] min-w-[140px] h-[3px] rounded-full bg-gradient-to-r from-[#1A73E8] via-[#EA3323] via-[#F9AB00] to-[#12A150]" />
          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#E9F2FF]/80 backdrop-blur-2xl overflow-y-auto animate-bm-in p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/assets/logo-lockup.png"
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

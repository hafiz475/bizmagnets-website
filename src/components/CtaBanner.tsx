'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <section id="trial" className="relative bg-[#111C34] text-white overflow-hidden py-20 lg:py-28">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-36 -left-16 w-[420px] h-[420px] rounded-full bg-radial from-[#1A73E8]/55 to-transparent animate-bm-float" />
        <div className="absolute -bottom-40 right-[6%] w-[460px] h-[460px] rounded-full bg-radial from-[#12A150]/45 to-transparent animate-bm-float" />
        <div className="absolute top-[20%] right-[34%] w-[280px] h-[280px] rounded-full bg-radial from-[#F9AB00]/38 to-transparent animate-bm-float" />
        <div className="absolute bottom-[12%] left-[26%] w-[240px] h-[240px] rounded-full bg-radial from-[#EA3323]/34 to-transparent animate-bm-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mb-6 text-balance">
          Your WhatsApp is already busy.<br />
          <span className="text-[#6BDD9C]">Now make it productive.</span>
        </h2>

        <p className="text-base sm:text-lg text-white/75 max-w-xl mb-10 leading-relaxed">
          Bring your messiest process. Fourteen days is plenty of time to embarrass a spreadsheet.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenTrial}
            className="inline-flex items-center gap-2 bg-white text-[#111C34] font-display font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl shadow-black/30 hover:bg-[#EAF2FF] hover:-translate-y-0.5 transition-all"
          >
            Try BizMagnets Free <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center text-white font-display font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full border-2 border-white/40 hover:bg-white/10 transition-all"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

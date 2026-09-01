'use client';

import React from 'react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Animated SVG Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.16]">
        <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <g fill="none" stroke="#12A150" strokeWidth="4" strokeLinecap="round" className="animate-bm-drift">
            <rect x="120" y="80" width="176" height="98" rx="26" />
            <path d="M148 178 L148 206 L176 178" />
            <path d="M330 200 h90" strokeDasharray="14 16" />
            <rect x="470" y="120" width="150" height="86" rx="22" />
            <path d="M604 206 L604 232 L580 206" />
            <path d="M700 320 h120" strokeDasharray="14 16" />
            <rect x="860" y="420" width="190" height="104" rx="28" />
            <path d="M888 524 L888 552 L918 524" />
            <path d="M180 480 q26 -34 52 0 t52 0" />
            <circle cx="640" cy="580" r="40" />
            <path d="M628 566 q12 -18 24 0 t-12 16" />
            <path d="M640 596 v2" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] max-w-3xl mb-4 text-balance">
          WhatsApp isn&rsquo;t the problem.<br />
          The <span className="text-[#EA3323]">missing business layer</span> is.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] max-w-2xl mb-12">
          Your team replies in seconds. Nobody can tell you what happened next. Speed without structure is just fast chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - WhatsApp Alone */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/65 border border-white/95 backdrop-blur-md shadow-xl shadow-[#EA3323]/10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA3323] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA3323]" />
              WHATSAPP ALONE
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-[#EA3323]/5 rounded-2xl font-bold text-sm text-[#111C34]">
                Messages
              </div>
              <div className="p-4 bg-[#EA3323]/7 rounded-2xl font-bold text-sm text-[#111C34]">
                Replies
              </div>
              <div className="p-4 bg-[#EA3323]/10 rounded-2xl font-bold text-sm text-[#111C34]">
                More messages
              </div>
              <div className="p-4 bg-[#EA3323]/15 rounded-2xl font-extrabold text-sm text-[#EA3323]">
                &ldquo;I&rsquo;ll check and revert&rdquo;
              </div>
            </div>
          </div>

          {/* Card 2 - WhatsApp + BizMagnets */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/65 border border-white/95 backdrop-blur-md shadow-xl shadow-[#12A150]/12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#12A150] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#12A150]" />
              WHATSAPP + BIZMAGNETS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-[#1A73E8]/7 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] text-center">
                Conversation
              </div>
              <div className="p-4 bg-[#F9AB00]/12 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] text-center">
                Owner
              </div>
              <div className="p-4 bg-[#1A73E8]/7 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] text-center">
                Workflow
              </div>
              <div className="p-4 bg-[#F9AB00]/12 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] text-center">
                SLA
              </div>
              <div className="p-4 bg-[#12A150]/10 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] text-center">
                Action
              </div>
              <div className="p-4 bg-[#12A150]/20 rounded-2xl font-extrabold text-xs sm:text-sm text-[#12A150] text-center">
                Outcome
              </div>
              <div className="col-span-2 sm:col-span-3 p-4 bg-[#1A73E8]/15 rounded-2xl font-extrabold text-xs sm:text-sm text-[#1A73E8] text-center">
                Analytics &amp; Full Transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

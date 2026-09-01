import React from 'react';
import { BizPatternBackground } from './BizPatternBackground';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] max-w-3xl mb-4 text-balance">
          WhatsApp isn&rsquo;t the problem.<br />
          The <span className="text-[#EA3323] dark:text-[#FF6B5E]">missing business layer</span> is.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-2xl mb-12">
          Your team replies in seconds. Nobody can tell you what happened next. Speed without structure is just fast chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - WhatsApp Alone */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/65 dark:bg-white/5 border border-white/95 dark:border-white/10 backdrop-blur-md shadow-xl shadow-[#EA3323]/10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA3323] dark:text-[#FF6B5E] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA3323]" />
              WHATSAPP ALONE
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-[#EA3323]/5 dark:bg-[#EA3323]/10 rounded-2xl font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">
                Messages
              </div>
              <div className="p-4 bg-[#EA3323]/7 dark:bg-[#EA3323]/14 rounded-2xl font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">
                Replies
              </div>
              <div className="p-4 bg-[#EA3323]/10 dark:bg-[#EA3323]/18 rounded-2xl font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">
                More messages
              </div>
              <div className="p-4 bg-[#EA3323]/15 dark:bg-[#EA3323]/25 rounded-2xl font-extrabold text-sm text-[#EA3323] dark:text-[#FF6B5E]">
                &ldquo;I&rsquo;ll check and revert&rdquo;
              </div>
            </div>
          </div>

          {/* Card 2 - WhatsApp + BizMagnets */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/65 dark:bg-white/5 border border-white/95 dark:border-white/10 backdrop-blur-md shadow-xl shadow-[#12A150]/12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#12A150] dark:text-[#3DDC8A] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#12A150]" />
              WHATSAPP + BIZMAGNETS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-[#1A73E8]/7 dark:bg-[#1A73E8]/14 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] text-center">
                Conversation
              </div>
              <div className="p-4 bg-[#F9AB00]/12 dark:bg-[#F9AB00]/18 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] text-center">
                Owner
              </div>
              <div className="p-4 bg-[#1A73E8]/7 dark:bg-[#1A73E8]/14 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] text-center">
                Workflow
              </div>
              <div className="p-4 bg-[#F9AB00]/12 dark:bg-[#F9AB00]/18 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] text-center">
                SLA
              </div>
              <div className="p-4 bg-[#12A150]/10 dark:bg-[#12A150]/18 rounded-2xl font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] text-center">
                Action
              </div>
              <div className="p-4 bg-[#12A150]/20 dark:bg-[#12A150]/28 rounded-2xl font-extrabold text-xs sm:text-sm text-[#12A150] dark:text-[#3DDC8A] text-center">
                Outcome
              </div>
              <div className="col-span-2 sm:col-span-3 p-4 bg-[#1A73E8]/15 dark:bg-[#1A73E8]/22 rounded-2xl font-extrabold text-xs sm:text-sm text-[#1A73E8] dark:text-[#4C9AFF] text-center">
                Analytics &amp; Full Transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

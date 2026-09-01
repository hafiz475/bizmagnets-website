import React from 'react';
import { ArrowRight, Play, CheckCircle2, XCircle } from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

interface CaseStudyProps {
  onOpenDemo: () => void;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ onOpenDemo }) => {
  return (
    <section id="athulya" className="relative overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-bold tracking-widest text-[#F9AB00] mb-3">
          CUSTOMER STORY · HEALTHCARE
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] max-w-3xl mb-4 text-balance">
          9,800+ man-days saved. Athulya stopped chasing, started closing.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-2xl mb-12">
          Patient onboarding, appointment coordination and service escalation — all running through the channel families already use.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - BEFORE */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-white/5 border border-white/95 dark:border-white/10 backdrop-blur-md shadow-lg shadow-[#EA3323]/10">
            <div className="text-xs font-bold tracking-widest text-[#EA3323] dark:text-[#FF6B5E] mb-6">
              BEFORE
            </div>
            <div className="space-y-3 font-semibold text-sm text-[#111C34] dark:text-[#EDF1FA]">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-[#EA3323]" /> WhatsApp groups
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-[#EA3323]" /> Manual follow-ups
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-[#EA3323]" /> Excel trackers
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-[#EA3323]" /> No clear ownership
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-[#EA3323]" /> No live visibility
              </div>
            </div>
          </div>

          {/* Card 2 - WITH BIZMAGNETS */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-white/5 border border-white/95 dark:border-white/10 backdrop-blur-md shadow-lg shadow-[#1A73E8]/12">
            <div className="text-xs font-bold tracking-widest text-[#1A73E8] dark:text-[#4C9AFF] mb-6">
              WITH BIZMAGNETS
            </div>
            <div className="space-y-3 font-semibold text-sm text-[#111C34] dark:text-[#EDF1FA]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> Structured workflows
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> Tickets with owners
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> Automated routing
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> SLA and escalation
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> Real-time visibility
              </div>
            </div>
          </div>

          {/* Card 3 - OUTCOME */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#111C34] to-[#1D2F52] text-white shadow-xl shadow-[#111C34]/25 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#6BDD9C] mb-6">
                OUTCOME
              </div>
              <div className="font-display text-5xl sm:text-6xl font-extrabold leading-none tracking-tight">
                9,800+
              </div>
              <div className="text-sm font-bold text-white/90 mt-2">
                man-days saved
              </div>
            </div>

            <p className="text-xs text-white/75 mt-6">
              Transformed Athulya&rsquo;s multi-center care network into a structured digital operation.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 bg-[#F9AB00] text-[#111C34] font-display font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#F9AB00]/30 hover:brightness-105 transition-all"
          >
            Read the Case Study <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 text-[#111C34] dark:text-[#EDF1FA] font-display font-extrabold text-sm sm:text-base px-6 py-3 rounded-full border-2 border-[#111C34] dark:border-white hover:bg-[#111C34] dark:hover:bg-white hover:text-white dark:hover:text-[#111C34] transition-all"
          >
            <Play className="w-4 h-4 fill-current" /> Watch Customer Story
          </button>
        </div>
      </div>
    </section>
  );
};

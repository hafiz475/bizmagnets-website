import React from 'react';
import { ArrowRight, Play, CheckCircle2, XCircle, FileText } from 'lucide-react';
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
          Athulya scaled geriatric care across 5 cities. On WhatsApp.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-2xl mb-12">
          From medicine requests to emergency nurse dispatches — how India&rsquo;s leading assisted living network eliminated the cracks where care fell through.
        </p>

        {/* 3 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - BEFORE */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-white/5 border border-red-200 dark:border-red-900/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#EA3323] mb-4">
                BEFORE BIZMAGNETS
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#111C34] dark:text-[#EDF1FA] mb-3">
                Fragmented WhatsApp groups. No ownership.
              </h3>
              <p className="text-xs text-[#5C6B85] dark:text-[#93A1BE] leading-relaxed mb-6">
                Family members messaged care managers directly. Requests got lost across personal phones. No central audit trail.
              </p>
            </div>

            <div className="space-y-2 text-xs font-semibold text-[#EA3323]">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4" /> 4+ hour delayed responses
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4" /> Zero SLA visibility
              </div>
            </div>
          </div>

          {/* Card 2 - AFTER */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-white/5 border border-green-200 dark:border-green-900/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#12A150] mb-4">
                AFTER BIZMAGNETS
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#111C34] dark:text-[#EDF1FA] mb-3">
                Automated triage and live SLA dashboards.
              </h3>
              <p className="text-xs text-[#5C6B85] dark:text-[#93A1BE] leading-relaxed mb-6">
                Incoming messages auto-tagged by urgency, routed to duty nurses, and escalated if untouched within 8 minutes.
              </p>
            </div>

            <div className="space-y-2 text-xs font-semibold text-[#12A150]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12A150]" /> 98.4% SLAs met
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

        <div className="flex flex-wrap gap-3.5 mt-8">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 bg-[#F9AB00] hover:bg-[#E59D00] text-[#111C34] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#F9AB00]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Read the Case Study</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </button>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 bg-white dark:bg-white/5 border border-[#111C34]/15 dark:border-white/20 text-[#111C34] dark:text-[#EDF1FA] hover:bg-[#111C34]/5 dark:hover:bg-white/10 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all"
          >
            <Play className="w-4 h-4 text-[#EA3323] fill-[#EA3323]" />
            <span>Watch Customer Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};

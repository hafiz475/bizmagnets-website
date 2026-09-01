import React from 'react';
import {
  MessageSquare,
  UserCheck,
  Zap,
  Clock,
  CheckCircle2,
  Sparkles,
  LineChart,
  MessageCircle,
  CornerDownLeft,
  Layers,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-bold tracking-widest text-[#1A73E8] dark:text-[#4C9AFF] mb-3">
          STRUCTURE VS CHAOS
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] max-w-3xl mb-4 text-balance">
          WhatsApp isn&rsquo;t the problem.<br />
          The <span className="text-[#EA3323] dark:text-[#FF6B5E]">missing business layer</span> is.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-2xl mb-12">
          Your team replies in seconds. Nobody can tell you what happened next. Speed without structure is just fast chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - WhatsApp Alone (The Chaos) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-white/5 border border-red-200/80 dark:border-red-900/40 backdrop-blur-md shadow-xl shadow-[#EA3323]/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA3323]/10 text-xs font-bold tracking-widest text-[#EA3323] dark:text-[#FF6B5E] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#EA3323] animate-bm-pulse" />
                WHATSAPP ALONE
              </div>

              <div className="space-y-3">
                <div className="p-3.5 sm:p-4 bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EA3323]/10 flex items-center justify-center text-[#EA3323]">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">Incoming Message</div>
                      <div className="text-[11px] text-[#5C6B85] dark:text-[#93A1BE]">Customer reaches out on WhatsApp</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5C6B85]">10:02</span>
                </div>

                <div className="p-3.5 sm:p-4 bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EA3323]/10 flex items-center justify-center text-[#EA3323]">
                      <CornerDownLeft className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">Quick Reply</div>
                      <div className="text-[11px] text-[#5C6B85] dark:text-[#93A1BE]">Agent replies from personal phone</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#5C6B85]">10:03</span>
                </div>

                <div className="p-3.5 sm:p-4 bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EA3323]/10 flex items-center justify-center text-[#EA3323]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#111C34] dark:text-[#EDF1FA]">Lost in Group Chat</div>
                      <div className="text-[11px] text-[#5C6B85] dark:text-[#93A1BE]">No ticket created, no CRM logged</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#EA3323]">Unassigned</span>
                </div>

                <div className="p-4 bg-gradient-to-r from-red-100/90 to-red-50/90 dark:from-red-950/40 dark:to-red-900/20 border border-red-300 dark:border-red-800/60 rounded-2xl flex items-center gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#EA3323] text-white flex items-center justify-center flex-shrink-0 animate-bm-pulse">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#EA3323] dark:text-[#FF8B7E]">
                      &ldquo;I&rsquo;ll check and revert&rdquo;
                    </div>
                    <div className="text-[11px] text-[#EA3323]/80 dark:text-[#FF8B7E]/80 font-medium">
                      Never tracked · No owner · SLA breached
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-red-200/60 dark:border-red-900/30 text-xs font-semibold text-[#EA3323] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EA3323]" />
              Zero audit trail &amp; no customer receipt
            </div>
          </div>

          {/* Card 2 - WhatsApp + BizMagnets (The Solution) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/75 dark:bg-white/5 border border-green-200/80 dark:border-green-900/40 backdrop-blur-md shadow-2xl shadow-[#12A150]/15 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#12A150]/10 dark:bg-[#12A150]/15 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12A150]/10 text-xs font-bold tracking-widest text-[#12A150] dark:text-[#3DDC8A] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#12A150] animate-bm-pulse" />
                WHATSAPP + BIZMAGNETS
              </div>

              {/* Colorful 6-Step Operations Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-3">
                {/* 1. Conversation */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#1A73E8]/25 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#1A73E8]/12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4 text-[#1A73E8] animate-bm-pulse" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    Conversation
                  </span>
                  <span className="text-[10px] font-semibold text-[#1A73E8] dark:text-[#4C9AFF] mt-0.5">
                    WhatsApp Intake
                  </span>
                </div>

                {/* 2. Owner */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#F9AB00]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#F9AB00]/15 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-4 h-4 text-[#F9AB00] animate-bm-spark" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    Owner
                  </span>
                  <span className="text-[10px] font-semibold text-[#F9AB00] dark:text-[#FFC94D] mt-0.5">
                    Auto-Assigned
                  </span>
                </div>

                {/* 3. Workflow */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#EA3323]/25 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#EA3323]/12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-[#EA3323] animate-bm-pulse" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    Workflow
                  </span>
                  <span className="text-[10px] font-semibold text-[#EA3323] dark:text-[#FF8B7E] mt-0.5">
                    Triggered
                  </span>
                </div>

                {/* 4. SLA */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#F9AB00]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#F9AB00]/15 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 text-[#F9AB00] animate-bm-spin" style={{ animationDuration: '24s' }} />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    SLA Timer
                  </span>
                  <span className="text-[10px] font-semibold text-[#F9AB00] dark:text-[#FFC94D] mt-0.5">
                    Enforced
                  </span>
                </div>

                {/* 5. Action */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-[#12A150]/25 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#12A150]/12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-[#12A150] animate-bm-pulse" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    Action
                  </span>
                  <span className="text-[10px] font-semibold text-[#12A150] dark:text-[#3DDC8A] mt-0.5">
                    Completed
                  </span>
                </div>

                {/* 6. Outcome */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#12A150]/15 to-[#12A150]/5 dark:from-[#12A150]/20 dark:to-transparent border border-[#12A150]/40 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group flex flex-col items-center text-center">
                  <div className="w-9 h-9 rounded-xl bg-[#12A150] text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md shadow-[#12A150]/30">
                    <Sparkles className="w-4 h-4 text-white animate-bm-spin" style={{ animationDuration: '18s' }} />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#12A150] dark:text-[#3DDC8A] leading-tight">
                    Outcome
                  </span>
                  <span className="text-[10px] font-bold text-[#12A150] dark:text-[#3DDC8A] mt-0.5">
                    Verified SLA Met
                  </span>
                </div>
              </div>

              {/* Analytics & Full Transparency Span Banner */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#1A73E8]/15 via-[#1A73E8]/8 to-[#12A150]/15 dark:from-[#1A73E8]/20 dark:to-[#12A150]/20 border border-[#1A73E8]/30 dark:border-[#1A73E8]/40 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1A73E8] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <LineChart className="w-4 h-4 animate-bm-pulse" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA]">
                      Analytics &amp; Full Transparency
                    </div>
                    <div className="text-[11px] text-[#5C6B85] dark:text-[#93A1BE] font-medium hidden sm:block">
                      100% audit logging, SLA breach alerts &amp; customer receipt delivery
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1A73E8] dark:text-[#4C9AFF] flex-shrink-0">
                  Live Sync <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-green-200/60 dark:border-green-900/30 text-xs font-semibold text-[#12A150] dark:text-[#3DDC8A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#12A150] animate-bm-pulse" />
              Every chat gets an owner, a deadline and a digital receipt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

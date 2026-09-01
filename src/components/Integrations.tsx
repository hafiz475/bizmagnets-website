import React from 'react';
import { Database, Users, Calendar, CreditCard, ShoppingCart, Code2, Sparkles, Headphones } from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

const SYSTEMS = [
  { name: 'CRM', icon: Users, color: '#1A73E8' },
  { name: 'ERP', icon: Database, color: '#EA3323' },
  { name: 'Helpdesk', icon: Headphones, color: '#F9AB00' },
  { name: 'Calendar', icon: Calendar, color: '#12A150' },
  { name: 'Payments', icon: CreditCard, color: '#1A73E8' },
  { name: 'Ecommerce', icon: ShoppingCart, color: '#EA3323' },
  { name: 'Custom Apps', icon: Code2, color: '#F9AB00' },
  { name: 'AI Models', icon: Sparkles, color: '#12A150' },
];

export const Integrations: React.FC = () => {
  return (
    <section id="resources" className="relative overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] max-w-3xl mx-auto mb-4 text-balance">
          Your systems stay. <span className="text-[#1A73E8] dark:text-[#4C9AFF]">BizMagnets connects the gaps.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-2xl mx-auto mb-12">
          Nobody wants another migration. Keep the CRM you fought for — we&rsquo;ll just make sure it hears about what happened on WhatsApp.
        </p>

        <div className="flex flex-col items-center gap-0">
          {/* Ecosystem System Chips */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mb-2">
            {SYSTEMS.map((sys, idx) => {
              const IconComp = sys.icon;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-[#111C34]/10 dark:border-white/10 backdrop-blur-md shadow-sm text-xs sm:text-sm font-semibold text-[#111C34] dark:text-[#EDF1FA] hover:scale-105 transition-transform"
                  style={{ borderColor: `${sys.color}40`, boxShadow: `0 8px 20px ${sys.color}12` }}
                >
                  <IconComp className="w-4 h-4" style={{ color: sys.color }} />
                  {sys.name}
                </span>
              );
            })}
          </div>

          {/* Animated Connecting Line 1 */}
          <svg viewBox="0 0 200 60" className="w-[200px] h-[60px]">
            <path
              d="M100 0 L100 60"
              stroke="#1A73E8"
              strokeWidth="3"
              strokeDasharray="8 8"
              className="animate-bm-dash"
            />
          </svg>

          {/* BizMagnets Hub Box */}
          <div className="bg-[#111C34] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 sm:px-16 text-center min-w-[min(100%,420px)] shadow-2xl shadow-[#111C34]/30 my-1">
            <div className="font-display text-xl sm:text-3xl font-extrabold tracking-tight">
              BizMagnets Platform Engine
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs font-bold tracking-wider">
              <span className="text-[#8BB6F5]">ROUTE</span>
              <span className="text-white/30">•</span>
              <span className="text-[#FFC94D]">AUTOMATE</span>
              <span className="text-white/30">•</span>
              <span className="text-[#FF8B7E]">ASSIGN</span>
              <span className="text-white/30">•</span>
              <span className="text-[#6BDD9C]">INTEGRATE</span>
            </div>
          </div>

          {/* Animated Connecting Line 2 */}
          <svg viewBox="0 0 200 60" className="w-[200px] h-[60px]">
            <path
              d="M100 0 L100 60"
              stroke="#12A150"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="animate-bm-dash"
            />
          </svg>

          {/* WhatsApp Endpoint Message Card */}
          <div className="bg-white/90 dark:bg-[#0E1726] border border-[#12A150]/30 dark:border-[#12A150]/40 rounded-2xl p-4 sm:p-5 shadow-xl shadow-[#12A150]/10 backdrop-blur-md max-w-md w-full text-left transition-all hover:shadow-2xl">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-3 pb-2.5 mb-2.5 border-b border-[#12A150]/15 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" className="block">
                    <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.22-3.3-.69-2.77-1.09-4.54-3.9-4.68-4.08-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.53c.17 0 .4-.6.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.44.51c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.11.07.65-.17 1.33Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-[#111C34] dark:text-[#EDF1FA] leading-tight">
                    WhatsApp API &amp; Customer Channels
                  </div>
                  <div className="text-[11px] font-semibold text-[#12A150] dark:text-[#3DDC8A]">
                    Official Meta Cloud API
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#12A150]/15 text-[#12A150] dark:text-[#3DDC8A] text-[10px] font-bold tracking-wider uppercase flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12A150] animate-bm-pulse" />
                Live Sync
              </span>
            </div>

            {/* Card Body */}
            <div className="text-xs text-[#5C6B85] dark:text-[#93A1BE] leading-relaxed">
              Bi-directional messaging, catalogue carts, automated notifications, and interactive quick-reply flows.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

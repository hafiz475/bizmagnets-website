import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

interface StatsBarProps {
  onOpenStory?: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({ onOpenStory }) => {
  return (
    <section id="customers" className="relative bg-gradient-to-r from-[#F2FBF5] to-[#EFF6FF] border-y border-[#111C34]/10 overflow-hidden py-12 lg:py-16">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.18} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#12A150] mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#12A150" className="block">
              <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.22-3.3-.69-2.77-1.09-4.54-3.9-4.68-4.08-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.53c.17 0 .4-.6.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.44.51c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.11.07.65-.17 1.33Z" />
            </svg>
            PROVEN IN REAL OPERATIONS
          </div>

          <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-[#111C34]">
            9,800<span className="text-[#12A150]">+</span>
          </div>

          <div className="font-display text-lg sm:text-xl font-bold text-[#111C34] mt-2">
            man-days saved
          </div>
        </div>

        <div>
          <p className="text-base sm:text-lg text-[#111C34] leading-relaxed mb-4 max-w-lg">
            That&rsquo;s roughly 27 years of &ldquo;just following up on this&rdquo; — handed back to Athulya&rsquo;s teams.
          </p>

          <a
            href="#athulya"
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#12A150] hover:text-[#1257B8] transition-colors group"
          >
            Read the customer story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

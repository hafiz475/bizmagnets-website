'use client';

import React from 'react';
import Image from 'next/image';
import logoMark from '../../public/assets/logo-mark.png';

export const Footer: React.FC = () => {
  return (
    <footer id="company" className="bg-[#0B1424] text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src={logoMark}
              alt="BizMagnets"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" className="block">
              <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.22-3.3-.69-2.77-1.09-4.54-3.9-4.68-4.08-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.53c.17 0 .4-.6.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.44.51c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.11.07.65-.17 1.33Z" />
            </svg>
            <span className="font-display font-extrabold text-white text-lg tracking-tight">
              BizMagnets
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#resources" className="hover:text-white transition-colors">Docs</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#linkedin" className="hover:text-[#1A73E8] transition-colors">LinkedIn</a>
            <a href="#x" className="hover:text-white transition-colors">X</a>
            <a href="#youtube" className="hover:text-[#EA3323] transition-colors">YouTube</a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>&copy; 2026 BizMagnets. WhatsApp-first business operations. All rights reserved.</span>
          {/* Vertical Music Frequency Wave Bars */}
          <div className="flex items-center gap-1 h-5 px-1">
            <span
              className="w-[3px] h-[7px] rounded-full bg-[#1A73E8]"
              style={{
                animation: 'bmSoundWave1 2.4s ease-in-out 0s infinite',
                transformOrigin: 'center',
              }}
            />
            <span
              className="w-[3px] h-[7px] rounded-full bg-[#EA3323]"
              style={{
                animation: 'bmSoundWave2 2.4s ease-in-out 0.35s infinite',
                transformOrigin: 'center',
              }}
            />
            <span
              className="w-[3px] h-[7px] rounded-full bg-[#F9AB00]"
              style={{
                animation: 'bmSoundWave3 2.4s ease-in-out 0.70s infinite',
                transformOrigin: 'center',
              }}
            />
            <span
              className="w-[3px] h-[7px] rounded-full bg-[#12A150]"
              style={{
                animation: 'bmSoundWave4 2.4s ease-in-out 1.05s infinite',
                transformOrigin: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

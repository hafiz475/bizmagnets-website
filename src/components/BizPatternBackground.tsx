'use client';

import React from 'react';

interface BizPatternBackgroundProps {
  className?: string;
  opacity?: number;
}

export const BizPatternBackground: React.FC<BizPatternBackgroundProps> = ({
  className = '',
  opacity = 0.18,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <g
          fill="none"
          stroke="#12A150"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bm-drift"
        >
          {/* 1. Text Message Bubble with 3 Typing Dots */}
          <g transform="translate(60, 50)">
            <rect x="0" y="0" width="84" height="50" rx="14" />
            <path d="M14 50 L14 64 L28 50" />
            <circle cx="28" cy="25" r="3.5" fill="#12A150" />
            <circle cx="42" cy="25" r="3.5" fill="#12A150" />
            <circle cx="56" cy="25" r="3.5" fill="#12A150" />
          </g>

          {/* 2. Phone Calling Handset with Radio Waves */}
          <g transform="translate(420, 40)">
            <path d="M10 28 a18 18 0 0 1 24 24 l-5 5 a4 4 0 0 1 -5 1 c-8 -3 -15 -10 -18 -18 a4 4 0 0 1 1 -5 l5 -5 z" />
            <path d="M26 14 a24 24 0 0 1 24 24" strokeWidth="2.2" />
            <path d="M34 6 a36 36 0 0 1 36 36" strokeWidth="2.2" strokeDasharray="5 5" />
          </g>

          {/* 3. Paper Airplane / Messaging Flyer */}
          <g transform="translate(760, 45)">
            <path d="M0 45 L70 0 L40 68 L28 38 L0 45 Z" />
            <path d="M70 0 L28 38" />
          </g>

          {/* 4. Video Calling Camera with Recording Light */}
          <g transform="translate(1120, 50)">
            <rect x="0" y="8" width="56" height="40" rx="10" />
            <path d="M56 20 L78 8 L78 48 L56 36 Z" />
            <circle cx="28" cy="28" r="8" />
            <circle cx="12" cy="18" r="2.5" fill="#12A150" />
          </g>

          {/* 5. Voice Message / Audio Waveform Box */}
          <g transform="translate(1220, 260)">
            <rect x="0" y="0" width="94" height="46" rx="14" />
            <path d="M94 14 L106 23 L94 32" />
            {/* Play Triangle */}
            <polygon points="16,16 16,30 27,23" fill="#12A150" strokeWidth="1" />
            {/* Audio Waves */}
            <path d="M38 18 v10 M45 13 v20 M52 16 v14 M59 10 v26 M66 17 v12 M73 14 v18 M80 20 v6" strokeWidth="2.6" />
          </g>

          {/* 6. AI Bot Assistant Message Bubble */}
          <g transform="translate(120, 310)">
            <rect x="0" y="0" width="80" height="48" rx="14" />
            <path d="M68 48 L68 62 L54 48" />
            {/* Bot Antenna & Eyes */}
            <circle cx="40" cy="4" r="3" fill="#12A150" />
            <path d="M40 7 v5" />
            <circle cx="28" cy="24" r="4.5" fill="#12A150" />
            <circle cx="52" cy="24" r="4.5" fill="#12A150" />
            <path d="M34 33 q6 5 12 0" />
          </g>

          {/* 7. Double Checkmark / Delivered & Read Receipt */}
          <g transform="translate(480, 260)">
            <circle cx="34" cy="34" r="28" strokeDasharray="6 4" />
            <path d="M18 34 l9 10 18 -20" strokeWidth="3" />
            <path d="M28 34 l9 10 18 -20" strokeWidth="3" />
          </g>

          {/* 8. People / Team Support Avatar Chat */}
          <g transform="translate(860, 280)">
            <rect x="0" y="0" width="88" height="52" rx="14" />
            <path d="M16 52 L16 66 L30 52" />
            {/* User silhouettes */}
            <circle cx="34" cy="20" r="7" />
            <path d="M20 40 c0 -8 7 -12 14 -12 s14 4 14 12" />
            <circle cx="56" cy="18" r="5" strokeDasharray="3 3" />
            <path d="M48 38 c0 -6 5 -9 11 -9 s11 3 11 9" strokeDasharray="3 3" />
          </g>

          {/* 9. WhatsApp Conversation Bubble with Tail & Star */}
          <g transform="translate(1160, 520)">
            <rect x="0" y="0" width="86" height="50" rx="14" />
            <path d="M14 50 L8 65 L28 50" />
            <path d="M43 14 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 z" fill="#12A150" strokeWidth="1" />
          </g>

          {/* 10. Calendar / Appointment Scheduling Card */}
          <g transform="translate(90, 580)">
            <rect x="0" y="8" width="76" height="54" rx="12" />
            <path d="M20 0 v14 M56 0 v14 M0 22 h76" />
            {/* Check inside calendar */}
            <path d="M28 38 l8 8 16 -16" strokeWidth="2.8" />
          </g>

          {/* 11. Ticket / Workflow Task Badge */}
          <g transform="translate(480, 560)">
            <path d="M0 12 a12 12 0 0 1 12 -12 h56 a12 12 0 0 1 12 12 v10 a8 8 0 0 0 0 16 v10 a12 12 0 0 1 -12 12 h-56 a12 12 0 0 1 -12 -12 v-10 a8 8 0 0 0 0 -16 z" />
            <path d="M24 30 h32" strokeDasharray="4 4" />
            <circle cx="24" cy="20" r="3" fill="#12A150" />
            <circle cx="56" cy="40" r="3" fill="#12A150" />
          </g>

          {/* 12. Notification Bell with Signal Dot */}
          <g transform="translate(850, 600)">
            <path d="M30 6 a16 16 0 0 0 -16 16 c0 14 -6 18 -6 18 h44 s-6 -4 -6 -18 a16 16 0 0 0 -16 -16 z" />
            <path d="M24 40 a6 6 0 0 0 12 0" />
            <circle cx="44" cy="8" r="4.5" fill="#12A150" />
          </g>

          {/* Auxiliary Distributed Communication Accents */}
          <g transform="translate(290, 180)">
            <rect x="0" y="0" width="58" height="36" rx="10" />
            <path d="M12 36 L12 46 L22 36" />
            <path d="M16 18 h26" strokeDasharray="5 4" />
          </g>

          <g transform="translate(680, 440)">
            <rect x="0" y="0" width="64" height="38" rx="11" />
            <path d="M52 38 L52 48 L42 38" />
            <path d="M18 20 l8 8 18 -18" strokeWidth="2.5" />
          </g>

          <g transform="translate(1020, 420)">
            <circle cx="22" cy="22" r="18" />
            <path d="M14 22 l5 5 10 -10" strokeWidth="2.2" />
          </g>

          <g transform="translate(320, 450)">
            <path d="M0 24 q16 -20 32 0 t32 0" strokeDasharray="6 6" />
          </g>

          <g transform="translate(680, 160)">
            <path d="M0 0 q14 18 28 0 t28 0" strokeDasharray="5 5" />
          </g>
        </g>
      </svg>
    </div>
  );
};

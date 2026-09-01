'use client';

import React, { useId } from 'react';

interface BizPatternBackgroundProps {
  className?: string;
  opacity?: number;
}

export const BizPatternBackground: React.FC<BizPatternBackgroundProps> = ({
  className = '',
  opacity = 0.16,
}) => {
  const patternId = useId().replace(/:/g, '-');

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`biz-pattern-${patternId}`}
            width="1120"
            height="760"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="#12A150"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bm-drift"
            >
              {/* === ROW 1 (y: 35) === */}
              {/* 1. Text Message Bubble with 3 Typing Dots */}
              <g transform="translate(60, 35)">
                <rect x="0" y="0" width="44" height="26" rx="7" />
                <path d="M8 26 L8 34 L15 26" />
                <circle cx="14" cy="13" r="1.8" fill="#12A150" />
                <circle cx="22" cy="13" r="1.8" fill="#12A150" />
                <circle cx="30" cy="13" r="1.8" fill="#12A150" />
              </g>

              {/* 2. Phone Calling Handset with Radio Waves */}
              <g transform="translate(340, 35)">
                <path d="M5 15 a9 9 0 0 1 13 13 l-2.5 2.5 a2 2 0 0 1 -2.5 0.5 c-4 -1.6 -7.5 -5.1 -9.1 -9.1 a2 2 0 0 1 0.5 -2.5 l2.5 -2.5 z" />
                <path d="M14 7 a13 13 0 0 1 13 13" strokeWidth="1.4" />
                <path d="M19 2 a19 19 0 0 1 19 19" strokeWidth="1.4" strokeDasharray="3 3" />
              </g>

              {/* 3. Paper Airplane / Messaging Flyer */}
              <g transform="translate(620, 35)">
                <path d="M0 24 L34 0 L20 34 L13 19 L0 24 Z" />
                <path d="M34 0 L13 19" />
              </g>

              {/* 4. Video Calling Camera with Lens */}
              <g transform="translate(900, 35)">
                <rect x="0" y="4" width="32" height="22" rx="5" />
                <path d="M32 10 L43 4 L43 26 L32 20 Z" />
                <circle cx="16" cy="15" r="4.5" />
                <circle cx="7" cy="9" r="1.4" fill="#12A150" />
              </g>

              {/* === ROW 2 (y: 225 - Staggered Offset) === */}
              {/* 5. Voice Message Audio Waveform Box */}
              <g transform="translate(200, 225)">
                <rect x="0" y="0" width="52" height="24" rx="7" />
                <path d="M52 7 L58 12 L52 17" />
                <polygon points="8,8 8,16 14,12" fill="#12A150" strokeWidth="0.8" />
                <path d="M20 9 v6 M24 6 v12 M28 8 v8 M32 4 v16 M36 9 v6 M40 7 v10 M44 10 v4" strokeWidth="1.5" />
              </g>

              {/* 6. AI Bot Assistant Message Bubble */}
              <g transform="translate(480, 225)">
                <rect x="0" y="0" width="42" height="26" rx="7" />
                <path d="M34 26 L34 33 L27 26" />
                <circle cx="21" cy="2" r="1.6" fill="#12A150" />
                <path d="M21 4 v3" />
                <circle cx="14" cy="13" r="2.2" fill="#12A150" />
                <circle cx="28" cy="13" r="2.2" fill="#12A150" />
                <path d="M17 19 q4 2.5 8 0" />
              </g>

              {/* 7. Double Checkmark / Delivered & Read Receipt */}
              <g transform="translate(760, 225)">
                <circle cx="16" cy="16" r="14" strokeDasharray="3.5 2.5" />
                <path d="M8 16 l4.5 4.5 9 -10" strokeWidth="1.7" />
                <path d="M13 16 l4.5 4.5 9 -10" strokeWidth="1.7" />
              </g>

              {/* 8. Credit Card / In-Chat Instant Payment */}
              <g transform="translate(1040, 225)">
                <rect x="0" y="0" width="36" height="24" rx="5" />
                <path d="M0 7 h36" strokeWidth="1.8" />
                <rect x="5" y="13" width="7" height="5" rx="1.5" fill="#12A150" />
                <circle cx="26" cy="15.5" r="2.5" />
                <circle cx="30" cy="15.5" r="2.5" />
              </g>

              {/* === ROW 3 (y: 415) === */}
              {/* 9. People / Team Support Avatar Chat */}
              <g transform="translate(60, 415)">
                <rect x="0" y="0" width="46" height="28" rx="7" />
                <path d="M8 28 L8 35 L15 28" />
                <circle cx="17" cy="10" r="3.5" />
                <path d="M10 21 c0 -4 3.5 -6 7 -6 s7 2 7 6" />
                <circle cx="30" cy="9" r="2.5" strokeDasharray="2 2" />
                <path d="M25 20 c0 -3 2.5 -4.5 5 -4.5 s5 1.5 5 4.5" strokeDasharray="2 2" />
              </g>

              {/* 10. Calendar Scheduler Date Card */}
              <g transform="translate(340, 415)">
                <rect x="0" y="4" width="38" height="26" rx="6" />
                <path d="M10 0 v7 M28 0 v7 M0 11 h38" />
                <path d="M13 19 l3.5 3.5 8 -8" strokeWidth="1.5" />
              </g>

              {/* 11. Ticket / SLA Workflow Task Badge */}
              <g transform="translate(620, 415)">
                <path d="M0 6 a6 6 0 0 1 6 -6 h28 a6 6 0 0 1 6 6 v4 a4 4 0 0 0 0 8 v4 a6 6 0 0 1 -6 6 h-28 a6 6 0 0 1 -6 -6 v-4 a4 4 0 0 0 0 -8 z" />
                <path d="M12 14 h16" strokeDasharray="2.5 2" />
                <circle cx="12" cy="9" r="1.5" fill="#12A150" />
                <circle cx="28" cy="19" r="1.5" fill="#12A150" />
              </g>

              {/* 12. Notification Bell with Broadcast Wave */}
              <g transform="translate(900, 415)">
                <path d="M15 2 a8 8 0 0 0 -8 8 c0 7 -3 9 -3 9 h22 s-3 -2 -3 -9 a8 8 0 0 0 -8 -8 z" />
                <path d="M12 19 a3 3 0 0 0 6 0" />
                <circle cx="22" cy="3" r="2" fill="#12A150" />
              </g>

              {/* === ROW 4 (y: 605 - Staggered Offset) === */}
              {/* 13. WhatsApp Speech Balloon with Star */}
              <g transform="translate(200, 605)">
                <rect x="0" y="0" width="44" height="26" rx="7" />
                <path d="M7 26 L3 34 L14 26" />
                <path d="M22 7 l1.8 3.6 3.6 0.5 -2.7 2.7 0.6 3.6 -3.3 -1.8 -3.3 1.8 0.6 -3.6 -2.7 -2.7 3.6 -0.5 z" fill="#12A150" strokeWidth="0.6" />
              </g>

              {/* 14. Lightning Fast Automation Trigger */}
              <g transform="translate(480, 605)">
                <circle cx="15" cy="15" r="13" />
                <path d="M16 5 L9 16 h6 l-2 9 9 -12 h-6 z" fill="#12A150" strokeWidth="0.8" />
              </g>

              {/* 15. GPS Location Pin with Radar Waves */}
              <g transform="translate(760, 605)">
                <path d="M16 0 a11 11 0 0 0 -11 11 c0 8 11 18 11 18 s11 -10 11 -18 a11 11 0 0 0 -11 -11 z" />
                <circle cx="16" cy="11" r="3.5" />
                <path d="M2 11 a14 14 0 0 1 28 0" strokeDasharray="3 3" />
              </g>

              {/* 16. Shopping Cart / Catalogue */}
              <g transform="translate(1040, 605)">
                <path d="M0 0 h6 l6 18 h18 l4 -13 h-24" />
                <circle cx="14" cy="23" r="2.5" fill="#12A150" />
                <circle cx="28" cy="23" r="2.5" fill="#12A150" />
              </g>
            </g>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#biz-pattern-${patternId})`}
        />
      </svg>
    </div>
  );
};

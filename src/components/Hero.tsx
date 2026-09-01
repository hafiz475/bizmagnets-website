'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Clock, Calendar, Sparkles, Bell, Star } from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

const HERO_STEPS = [
  { label: 'Appointment request spotted', meta: 'AI INTENT', color: '#1A73E8', time: '10:04', icon: Sparkles },
  { label: 'Slots offered · Thu 11:30', meta: 'SCHEDULING', color: '#F9AB00', time: '10:04', icon: Calendar },
  { label: 'Confirmed · APT-2291', meta: 'OWNER: FRONT DESK', color: '#12A150', time: '10:05', icon: CheckCircle2 },
  { label: 'Reminder sent · T-24h', meta: 'AUTOMATION', color: '#EA3323', time: '10:05', icon: Bell },
  { label: 'Visit completed', meta: 'SLA MET', color: '#1A73E8', time: '10:06', icon: Clock },
  { label: 'Feedback ★★★★★', meta: 'CSAT', color: '#F9AB00', time: '10:06', icon: Star },
];

const CAPABILITIES = [
  'Ticketing',
  'Workflows',
  'Scheduling',
  'Campaigns',
  'Field Ops',
  'Commerce',
  'AI',
  'Integrations',
];

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % HERO_STEPS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 lg:pb-24">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-[#12A150]/20 to-transparent" />
        
        {/* Glowing Colorful Radial Floating Blobs that shine through Glassy Navbar and Hero */}
        <div
          className="absolute -top-[70px] -left-[40px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(26, 115, 232, 0.32), transparent 68%)',
            animation: 'bmFloat 13s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -top-[90px] left-[36%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(37, 211, 102, 0.36), transparent 68%)',
            animation: 'bmFloat 11s ease-in-out 0.4s infinite',
          }}
        />
        <div
          className="absolute -top-[60px] right-[12%] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 171, 0, 0.30), transparent 68%)',
            animation: 'bmFloat 14s ease-in-out 1.2s infinite',
          }}
        />
        <div
          className="absolute top-[120px] -right-[100px] w-[440px] h-[440px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(18, 161, 80, 0.28), transparent 68%)',
            animation: 'bmFloat 16s ease-in-out 1s infinite',
          }}
        />
        <div
          className="absolute bottom-[-160px] left-[34%] w-[540px] h-[540px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 171, 0, 0.24), transparent 68%)',
            animation: 'bmFloat 18s ease-in-out 0.6s infinite',
          }}
        />
        <div
          className="absolute bottom-[20px] right-[22%] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(234, 51, 35, 0.22), transparent 68%)',
            animation: 'bmFloat 15s ease-in-out 2s infinite',
          }}
        />
        
        {/* 12-Icon Multi-Communication Animated Background */}
        <BizPatternBackground opacity={0.22} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Copy & Value Proposition */}
        <div className="lg:col-span-7">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/75 border border-white/90 backdrop-blur-md shadow-sm text-xs font-extrabold tracking-widest text-[#111C34] mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="block">
              <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.22-3.3-.69-2.77-1.09-4.54-3.9-4.68-4.08-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.53c.17 0 .4-.6.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.44.51c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.11.07.65-.17 1.33Z" />
            </svg>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA3323]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F9AB00]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#12A150]" />
            </div>
            WHATSAPP-FIRST BUSINESS OPERATIONS
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-[#111C34] mb-6">
            WhatsApp is where work <span className="text-[#12A150]">starts</span>.<br />
            Make sure it gets <span className="text-[#1A73E8]">finished</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#5C6B85] max-w-xl mb-4 leading-relaxed">
            Customers message. Teams reply. Then somebody, somewhere, promises to &ldquo;check and revert.&rdquo; That&rsquo;s where most businesses lose the plot.
          </p>

          <p className="text-base sm:text-lg text-[#111C34] font-semibold max-w-xl mb-8 leading-relaxed">
            BizMagnets turns every chat into trackable work — with an owner, a deadline and a receipt.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center gap-2 bg-[#1A73E8] text-white font-display font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#1A73E8]/30 hover:bg-[#1257B8] hover:-translate-y-0.5 transition-all"
            >
              Try BizMagnets Free <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center text-[#111C34] font-display font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full border-2 border-[#111C34] hover:bg-[#111C34] hover:text-white transition-all"
            >
              Book a Demo
            </button>
          </div>

          {/* Capability Chips */}
          <div className="flex flex-wrap gap-2">
            {CAPABILITIES.map((cap, idx) => {
              const colors = ['#1A73E8', '#EA3323', '#F9AB00', '#12A150'];
              const color = colors[idx % colors.length];
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#111C34]/10 backdrop-blur-sm text-xs font-bold text-[#111C34] shadow-sm"
                  style={{ borderColor: `${color}40`, color: color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  {cap}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right Column - Live Workflow Simulator Card */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 sm:p-7 rounded-3xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold tracking-widest text-[#5C6B85]">
                FROM CONVERSATION TO COMPLETION
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#12A150]">
                <span className="w-2 h-2 rounded-full bg-[#12A150] animate-bm-pulse" />
                LIVE
              </span>
            </div>

            {/* Inbound Customer Message */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 flex gap-3 items-start shadow-md mb-4 max-w-[92%]">
              <span className="w-8 h-8 rounded-full bg-[#25D366] flex-shrink-0 flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.34 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.22-3.3-.69-2.77-1.09-4.54-3.9-4.68-4.08-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.53c.17 0 .4-.6.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.18-.15.29-.29.45l-.44.51c-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.44.12.61-.07.17-.2.7-.82.89-1.1.19-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.11.07.65-.17 1.33Z" />
                </svg>
              </span>
              <div>
                <div className="text-xs font-bold text-[#12A150] mb-0.5">Priya R.</div>
                <div className="text-sm font-medium text-[#111C34]">
                  Hi! Can I see Dr. Menon sometime this week? 😊
                </div>
                <div className="text-[10px] text-[#8794A8] text-right mt-1">10:04</div>
              </div>
            </div>

            {/* Dynamic Step Cards */}
            <div className="space-y-2.5">
              {HERO_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = idx <= activeStepIndex;
                return (
                  <div
                    key={idx}
                    className={`flex justify-end transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'
                    }`}
                  >
                    <div className="max-w-[90%] bg-[#E7FFDB] rounded-2xl rounded-tr-sm p-3 shadow-md border border-[#12A150]/20">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}20` }}
                        >
                          <IconComponent className="w-3.5 h-3.5" style={{ color: step.color }} />
                        </span>
                        <span className="text-sm font-semibold text-[#111C34]">{step.label}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4 mt-2">
                        <span
                          className="text-[9.5px] font-bold tracking-wider px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${step.color}15`, color: step.color }}
                        >
                          {step.meta}
                        </span>
                        <span className="text-[10px] text-[#8794A8] flex items-center gap-1">
                          {step.time}
                          <svg width="15" height="10" viewBox="0 0 16 11" fill="none">
                            <path d="M1 5.6 4.1 8.7 9.4 2.3" stroke="#34B7F1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.2 5.6 9.3 8.7 14.6 2.3" stroke="#34B7F1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

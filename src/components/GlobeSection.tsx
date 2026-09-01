'use client';

import React from 'react';
import { GlobeCanvas } from './GlobeCanvas';

export const GlobeSection: React.FC = () => {
  return (
    <section id="global" className="relative bg-gradient-to-br from-white via-[#F4F9FF] to-[#F3FBF6] border-t border-[#111C34]/10 overflow-hidden py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Copy & Multilingual Cards */}
        <div className="lg:col-span-7">
          <div className="text-xs font-bold tracking-widest text-[#F9AB00] mb-3">
            BUILT FOR MULTILINGUAL CONVERSATIONS
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] mb-4 text-balance">
            Your customers don&rsquo;t all speak the same language. Your business shouldn&rsquo;t have to.
          </h2>

          <p className="text-base sm:text-lg text-[#5C6B85] max-w-xl mb-8">
            Serve customers and teams across languages while every interaction stays wired to the same workflow, ticket and customer history.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {/* English Card */}
            <div className="p-4 rounded-2xl bg-white/75 border border-white/95 backdrop-blur-md shadow-md shadow-[#111C34]/5">
              <span className="text-[11px] font-bold tracking-widest text-[#1A73E8]">
                ENGLISH
              </span>
              <div className="text-sm font-medium text-[#111C34] mt-1">
                Hello, I&rsquo;d like to book an appointment.
              </div>
            </div>

            {/* Tamil Card */}
            <div className="p-4 rounded-2xl bg-white/75 border border-white/95 backdrop-blur-md shadow-md shadow-[#111C34]/5">
              <span className="text-[11px] font-bold tracking-widest text-[#12A150]">
                தமிழ் (TAMIL)
              </span>
              <div className="text-sm font-medium text-[#111C34] mt-1">
                எனக்கு ஒரு appointment book செய்ய வேண்டும்.
              </div>
            </div>

            {/* Hindi Card */}
            <div className="p-4 rounded-2xl bg-white/75 border border-white/95 backdrop-blur-md shadow-md shadow-[#111C34]/5">
              <span className="text-[11px] font-bold tracking-widest text-[#F9AB00]">
                हिन्दी (HINDI)
              </span>
              <div className="text-sm font-medium text-[#111C34] mt-1">
                मुझे अपॉइंटमेंट बुक करना है।
              </div>
            </div>

            {/* Arabic Card */}
            <div className="p-4 rounded-2xl bg-white/75 border border-white/95 backdrop-blur-md shadow-md shadow-[#111C34]/5">
              <span className="text-[11px] font-bold tracking-widest text-[#EA3323]">
                العربية (ARABIC)
              </span>
              <div className="text-sm font-medium text-[#111C34] mt-1 text-right dir-rtl">
                أريد حجز موعد من فضلك.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D D3 Globe */}
        <div className="lg:col-span-5 flex justify-center">
          <GlobeCanvas size={480} />
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { ProblemSolution } from '@/components/ProblemSolution';
import { PlatformPillars } from '@/components/PlatformPillars';
import { GlobeSection } from '@/components/GlobeSection';
import { Integrations } from '@/components/Integrations';
import { IndustryWorkflows } from '@/components/IndustryWorkflows';
import { CaseStudySection } from '@/components/CaseStudySection';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';
import { DemoModal } from '@/components/DemoModal';

export default function HomePage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Book a Demo with BizMagnets');

  const handleOpenDemo = () => {
    setModalTitle('Book a Personalized Demo');
    setDemoOpen(true);
  };

  const handleOpenTrial = () => {
    setModalTitle('Start Your 14-Day Free Trial');
    setDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E] text-[#111C34] dark:text-[#EDF1FA] font-sans selection:bg-[#1A73E8]/20 transition-colors duration-300">
      {/* Navigation — fixed overlay */}
      <Navbar onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />

      {/* Main SEO Semantic Sections */}
      <main>
        <Hero onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
        <StatsBar onOpenStory={handleOpenDemo} />
        <ProblemSolution />
        <PlatformPillars />
        <GlobeSection />
        <Integrations />
        <IndustryWorkflows />
        <CaseStudySection onOpenDemo={handleOpenDemo} />
        <CtaBanner onOpenDemo={handleOpenDemo} onOpenTrial={handleOpenTrial} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal */}
      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}

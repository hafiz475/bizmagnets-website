import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Building2,
  Home,
  GraduationCap,
  Truck,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

export const INDUSTRIES = [
  {
    name: 'Healthcare',
    title: 'Healthcare Operations',
    icon: HeartPulse,
    copy: 'Patient support, appointments, care coordination, complaints and internal workflows.',
    chain: ['Enquiry', 'Appointment', 'Visit', 'Follow-up', 'Feedback'],
    color: '#1A73E8',
  },
  {
    name: 'Facility Management',
    title: 'Facility Management & Field Ops',
    icon: Building2,
    copy: 'SLA tickets, maintenance requests, inspections, geo verification and escalation.',
    chain: ['Complaint', 'Ticket', 'Technician', 'SLA', 'Proof', 'Closure'],
    color: '#EA3323',
  },
  {
    name: 'Real Estate',
    title: 'Real Estate & Property',
    icon: Home,
    copy: 'Lead qualification, property enquiries, site visits and sales follow-ups.',
    chain: ['CTWA Ad', 'Qualification', 'Agent Match', 'Site Visit', 'Follow-up'],
    color: '#F9AB00',
  },
  {
    name: 'Education',
    title: 'Education & Admissions',
    icon: GraduationCap,
    copy: 'Admissions, enquiry management, counselling appointments and reminders.',
    chain: ['Enquiry', 'Qualification', 'Counselling', 'Admission', 'Reminder'],
    color: '#12A150',
  },
  {
    name: 'Logistics',
    title: 'Logistics & Transportation',
    icon: Truck,
    copy: 'Customer support, delivery updates, field coordination and escalations.',
    chain: ['Request', 'Dispatch', 'Driver Assigned', 'Live Status', 'Delivery'],
    color: '#1A73E8',
  },
  {
    name: 'Ecommerce & Retail',
    title: 'Ecommerce & D2C Retail',
    icon: ShoppingBag,
    copy: 'Campaigns, catalogue, orders, payments and customer service.',
    chain: ['Campaign', 'Product Catalog', 'Order Cart', 'Payment Link', 'Support'],
    color: '#EA3323',
  },
  {
    name: 'Professional Services',
    title: 'Professional Services & Consulting',
    icon: Briefcase,
    copy: 'Lead management, appointments, document collection and customer support.',
    chain: ['Enquiry', 'Appointment', 'Documents', 'Delivery', 'Invoice'],
    color: '#F9AB00',
  },
];

export const IndustryWorkflows: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="relative bg-gradient-to-b from-[#F7FAFF] to-white dark:from-[#0D1730] dark:to-[#0A0F1E] border-t border-[#111C34]/10 dark:border-white/10 overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-bold tracking-widest text-[#EA3323] dark:text-[#FF6B5E] mb-3">
          ONE PLATFORM. MANY INDUSTRIES.
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] mb-4 text-balance">
          Whatever your industry, the workflow starts with a conversation.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-xl mb-8">
          Pick yours. We&rsquo;ll show you the chain, not a brochure.
        </p>

        {/* Tab Buttons with Colorful Dedicated Icons */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
          {INDUSTRIES.map((tab, idx) => {
            const isSelected = idx === activeTab;
            const TabIcon = tab.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all backdrop-blur-md shadow-sm group border ${
                  isSelected
                    ? 'bg-[#111C34] text-white dark:bg-white dark:text-[#111C34] shadow-lg scale-105'
                    : 'bg-white/80 dark:bg-white/5 text-[#111C34] dark:text-[#EDF1FA] hover:bg-white dark:hover:bg-white/10 border-[#111C34]/10 dark:border-white/10 hover:scale-[1.02]'
                }`}
                style={{
                  borderColor: isSelected ? tab.color : undefined,
                  boxShadow: isSelected ? `0 0 0 2px ${tab.color}40, 0 10px 25px -5px ${tab.color}25` : undefined,
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: isSelected ? `${tab.color}30` : `${tab.color}15`,
                    color: tab.color,
                  }}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                </div>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Chain Box */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white/85 dark:bg-white/5 border border-white/95 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-[#111C34]/10">
          <div className="flex items-center gap-3.5 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{
                backgroundColor: `${current.color}18`,
                color: current.color,
              }}
            >
              <CurrentIcon className="w-5 h-5 animate-bm-pulse" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111C34] dark:text-[#EDF1FA]">
              {current.title}
            </h3>
          </div>

          <p className="text-base text-[#5C6B85] dark:text-[#93A1BE] mb-8 max-w-2xl leading-relaxed">
            {current.copy}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {current.chain.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  className="flex items-center gap-2.5 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 font-bold text-xs sm:text-sm text-[#111C34] dark:text-[#EDF1FA] border shadow-sm min-w-[120px] transition-all hover:scale-105"
                  style={{
                    backgroundColor: `${current.color}10`,
                    borderColor: `${current.color}35`,
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 animate-bm-pulse" style={{ color: current.color }} />
                  {step}
                </div>
                {idx < current.chain.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#111C34]/30 dark:text-white/30 hidden sm:block flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

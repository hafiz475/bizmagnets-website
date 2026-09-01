'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const INDUSTRIES = [
  {
    name: 'Healthcare',
    title: 'Healthcare Operations',
    copy: 'Patient support, appointments, care coordination, complaints and internal workflows.',
    chain: ['Enquiry', 'Appointment', 'Visit', 'Follow-up', 'Feedback'],
    color: '#1A73E8',
  },
  {
    name: 'Facility Management',
    title: 'Facility Management & Field Ops',
    copy: 'SLA tickets, maintenance requests, inspections, geo verification and escalation.',
    chain: ['Complaint', 'Ticket', 'Technician', 'SLA', 'Proof', 'Closure'],
    color: '#EA3323',
  },
  {
    name: 'Real Estate',
    title: 'Real Estate & Property',
    copy: 'Lead qualification, property enquiries, site visits and sales follow-ups.',
    chain: ['CTWA Ad', 'Qualification', 'Agent Match', 'Site Visit', 'Follow-up'],
    color: '#F9AB00',
  },
  {
    name: 'Education',
    title: 'Education & Admissions',
    copy: 'Admissions, enquiry management, counselling appointments and reminders.',
    chain: ['Enquiry', 'Qualification', 'Counselling', 'Admission', 'Reminder'],
    color: '#12A150',
  },
  {
    name: 'Logistics',
    title: 'Logistics & Transportation',
    copy: 'Customer support, delivery updates, field coordination and escalations.',
    chain: ['Request', 'Dispatch', 'Driver Assigned', 'Live Status', 'Delivery'],
    color: '#1A73E8',
  },
  {
    name: 'Ecommerce & Retail',
    title: 'Ecommerce & D2C Retail',
    copy: 'Campaigns, catalogue, orders, payments and customer service.',
    chain: ['Campaign', 'Product Catalog', 'Order Cart', 'Payment Link', 'Support'],
    color: '#12A150',
  },
  {
    name: 'Professional Services',
    title: 'Professional Services & Consulting',
    copy: 'Lead management, appointments, document collection and customer support.',
    chain: ['Enquiry', 'Appointment', 'Documents', 'Delivery', 'Invoice'],
    color: '#F9AB00',
  },
];

export const IndustryWorkflows: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = INDUSTRIES[activeTab];

  return (
    <section id="industries" className="relative bg-gradient-to-b from-[#F7FAFF] to-white border-t border-[#111C34]/10 overflow-hidden py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-bold tracking-widest text-[#EA3323] mb-3">
          ONE PLATFORM. MANY INDUSTRIES.
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] mb-4 text-balance">
          Whatever your industry, the workflow starts with a conversation.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] max-w-xl mb-8">
          Pick yours. We&rsquo;ll show you the chain, not a brochure.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {INDUSTRIES.map((tab, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all backdrop-blur-md shadow-sm ${
                  isSelected
                    ? 'bg-[#111C34] text-white shadow-lg scale-105'
                    : 'bg-white/80 text-[#111C34] hover:bg-white border border-[#111C34]/10'
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Industry Chain Box */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white/80 border border-white/95 backdrop-blur-xl shadow-xl shadow-[#111C34]/10">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111C34] mb-2">
            {current.title}
          </h3>

          <p className="text-base text-[#5C6B85] mb-8 max-w-2xl leading-relaxed">
            {current.copy}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {current.chain.map((step, idx) => (
              <React.Fragment key={idx}>
                <div
                  className="flex items-center gap-2.5 rounded-2xl px-5 py-3.5 font-bold text-sm text-[#111C34] border shadow-sm min-w-[130px]"
                  style={{
                    backgroundColor: `${current.color}10`,
                    borderColor: `${current.color}35`,
                  }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: current.color }} />
                  {step}
                </div>
                {idx < current.chain.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#111C34]/30 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Inbox, Ticket, Zap, Calendar, Megaphone, ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { BizPatternBackground } from './BizPatternBackground';

export const PILLARS = [
  {
    id: 'conversations',
    name: 'Conversations',
    promise: 'One inbox. Every customer. Zero "who replied to this?"',
    detail: 'Shared inbox, customer records, quick replies, assignment and templates.',
    color: '#1A73E8',
    icon: Inbox,
    features: ['Multi-agent Inbox', 'Customer Timeline', 'Canned Responses', 'Smart Routing'],
  },
  {
    id: 'support',
    name: 'Support',
    promise: 'Turn messages into tickets someone actually owns.',
    detail: 'Ticketing, ownership, SLA, escalation, ticket fields, CSAT and reporting.',
    color: '#EA3323',
    icon: Ticket,
    features: ['SLA Escalation Alerts', 'Custom Ticket Fields', 'CSAT Surveys', 'Performance Metrics'],
  },
  {
    id: 'automate',
    name: 'Automate',
    promise: 'Retire the follow-up. It was never anyone’s favourite job.',
    detail: 'Flows, automation rules, forms, sequences, approvals and routing.',
    color: '#F9AB00',
    icon: Zap,
    features: ['Visual Flow Builder', 'Drip Sequences', 'Interactive Forms', 'Approval Triggers'],
  },
  {
    id: 'service',
    name: 'Service',
    promise: 'Appointments and field teams that run themselves.',
    detail: 'Bookings, reminders, field teams, geofencing and service workflows.',
    color: '#12A150',
    icon: Calendar,
    features: ['Slot Booking Engine', 'GPS Geofencing', 'Field Dispatching', 'Automated Reminders'],
  },
  {
    id: 'engage',
    name: 'Engage',
    promise: 'Campaigns that end in conversations, not silence.',
    detail: 'Campaigns, CTWA, ad insights, forms and segmentation.',
    color: '#1A73E8',
    icon: Megaphone,
    features: ['Broadcast Campaigns', 'Click-to-WhatsApp Ads', 'Audience Segmenter', 'Opt-in Compliance'],
  },
  {
    id: 'sell',
    name: 'Sell',
    promise: 'Catalogue, order and payment — all inside the chat.',
    detail: 'Products, catalogues, orders and payments, no checkout detour.',
    color: '#12A150',
    icon: ShoppingBag,
    features: ['WhatsApp Product Catalogue', 'In-Chat Cart', 'Payment Gateway Sync', 'Instant Invoicing'],
  },
];

export const PlatformPillars: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<(typeof PILLARS)[0] | null>(null);

  return (
    <section id="platform" className="relative bg-gradient-to-b from-white to-[#F5F9FF] dark:from-[#0A0F1E] dark:to-[#0D1730] overflow-hidden py-16 lg:py-24">
      {/* 12-Icon Multi-Communication Animated Background */}
      <BizPatternBackground opacity={0.16} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-bold tracking-widest text-[#1A73E8] dark:text-[#4C9AFF] mb-3">
          THE PLATFORM
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#111C34] dark:text-[#EDF1FA] mb-4">
          From conversation to completion.
        </h2>

        <p className="text-base sm:text-lg text-[#5C6B85] dark:text-[#93A1BE] max-w-xl mb-12">
          Six things your business does every day. All of them, in the app your customers never had to download.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPillar(p)}
                className="glass-card p-7 rounded-3xl cursor-pointer group hover:-translate-y-1.5 transition-all"
                style={{ boxShadow: `0 20px 46px ${p.color}15` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${p.color}15` }}
                >
                  <IconComp className="w-7 h-7" style={{ color: p.color }} />
                </div>

                <h3 className="font-display text-xl font-extrabold text-[#111C34] dark:text-[#EDF1FA] mb-2">
                  {p.name}
                </h3>

                <p className="text-sm font-semibold text-[#111C34] dark:text-[#EDF1FA] mb-2 leading-snug">
                  {p.promise}
                </p>

                <p className="text-xs text-[#5C6B85] dark:text-[#93A1BE] leading-relaxed mb-4">
                  {p.detail}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A73E8] dark:text-[#4C9AFF] group-hover:translate-x-1 transition-transform">
                  Explore features <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 bg-[#111C34]/60 dark:bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0F1729] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-bm-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${selectedPillar.color}18` }}
                >
                  {React.createElement(selectedPillar.icon, {
                    className: 'w-6 h-6',
                    style: { color: selectedPillar.color },
                  })}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#111C34] dark:text-[#EDF1FA]">
                    {selectedPillar.name}
                  </h3>
                  <span className="text-xs font-bold" style={{ color: selectedPillar.color }}>
                    BizMagnets Core Module
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPillar(null)}
                className="w-9 h-9 rounded-full bg-[#111C34]/5 dark:bg-white/10 flex items-center justify-center text-[#111C34] dark:text-[#EDF1FA] hover:bg-[#111C34]/10 dark:hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-sm font-semibold text-[#111C34] dark:text-[#EDF1FA] mb-3">
              {selectedPillar.promise}
            </p>

            <p className="text-xs text-[#5C6B85] dark:text-[#93A1BE] mb-6 leading-relaxed">
              {selectedPillar.detail}
            </p>

            <div className="space-y-2.5 mb-8">
              <div className="text-xs font-bold text-[#111C34] dark:text-[#EDF1FA] tracking-wider uppercase mb-2">
                Included Capabilities
              </div>
              {selectedPillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-[#111C34] dark:text-[#EDF1FA]">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${selectedPillar.color}20` }}
                  >
                    <Check className="w-3 h-3" style={{ color: selectedPillar.color }} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedPillar(null)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all shadow-md hover:brightness-105"
              style={{ backgroundColor: selectedPillar.color }}
            >
              <Check className="w-4 h-4" />
              <span>Got it</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

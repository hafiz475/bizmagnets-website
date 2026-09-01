'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  title = 'Book a Demo with BizMagnets',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Healthcare',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111C34]/60 dark:bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#0F1729] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-bm-in">
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#111C34]/5 dark:bg-white/10 flex items-center justify-center text-[#111C34] dark:text-[#EDF1FA] hover:bg-[#111C34]/10 dark:hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#12A150]/15 text-[#12A150] dark:text-[#3DDC8A] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#111C34] dark:text-[#EDF1FA] mb-2">
              You&rsquo;re all set!
            </h3>
            <p className="text-sm text-[#5C6B85] dark:text-[#93A1BE] mb-6">
              Our operations team will reach out on WhatsApp to set up your tailored workflow demo.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-full bg-[#111C34] dark:bg-white text-white dark:text-[#111C34] font-display font-bold text-sm hover:bg-[#111C34]/90 dark:hover:bg-white/90 transition-colors"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1A73E8] dark:text-[#4C9AFF] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> 14-Day Free Access
            </div>
            <h3 className="font-display text-2xl font-bold text-[#111C34] dark:text-[#EDF1FA] mb-1">
              {title}
            </h3>
            <p className="text-xs text-[#5C6B85] dark:text-[#93A1BE] mb-6">
              Turn your WhatsApp conversations into trackable, automated business workflows.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#111C34] dark:text-[#EDF1FA] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#111C34]/15 dark:border-white/15 dark:bg-white/5 dark:text-[#EDF1FA] text-sm focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111C34] dark:text-[#EDF1FA] mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#111C34]/15 dark:border-white/15 dark:bg-white/5 dark:text-[#EDF1FA] text-sm focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111C34] dark:text-[#EDF1FA] mb-1">WhatsApp Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#111C34]/15 dark:border-white/15 dark:bg-white/5 dark:text-[#EDF1FA] text-sm focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111C34] dark:text-[#EDF1FA] mb-1">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#111C34]/15 dark:border-white/15 text-sm focus:outline-none focus:border-[#1A73E8] bg-white dark:bg-[#0F1729] dark:text-[#EDF1FA]"
                >
                  <option value="Healthcare">Healthcare</option>
                  <option value="Facility Management">Facility Management</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Education">Education</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Ecommerce">Ecommerce &amp; D2C</option>
                  <option value="Professional Services">Professional Services</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#1A73E8] text-white font-display font-extrabold text-sm shadow-lg hover:bg-[#1257B8] transition-all flex items-center justify-center gap-2 mt-2"
              >
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

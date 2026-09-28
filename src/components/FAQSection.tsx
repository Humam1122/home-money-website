'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Is Home Money completely free to use?',
    answer:
      'Yes. Home Money is completely free and contains zero advertisements, tracking SDKs, or premium subscription tiers. Every feature—from multi-item receipt splitting to PDF reports—is unlocked out of the box.',
  },
  {
    question: 'Where is my expense data stored?',
    answer:
      'All your transactions, categories, bills, and budgets are saved in an embedded SQLite database stored locally within your Android phone’s sandboxed app directory. No financial data leaves your phone.',
  },
  {
    question: 'Why is Home Money distributed as an APK download?',
    answer:
      'Direct APK distribution allows Android users to install and run the app immediately without requiring a Google account or waiting for third-party store approvals. It provides direct, transparent software ownership.',
  },
  {
    question: 'Why does Android warn that the file might be harmful?',
    answer:
      'Android displays a standard precautionary prompt for any APK downloaded outside the Google Play Store. This is standard Android security behavior. Tap "Download anyway" and allow installation in your browser settings to proceed.',
  },
  {
    question: 'Does Home Money require an active internet connection?',
    answer:
      'No. Home Money works 100% offline. You can log expenses while traveling, in remote areas, or in airplane mode. Your ledger and analytics are computed entirely on-device.',
  },
  {
    question: 'Can I export my records to spreadsheets or PDF?',
    answer:
      'Yes. Home Money includes on-device PDF report generation with clean monthly summaries and transaction tables. You can also export raw CSV files for use in Microsoft Excel or Google Sheets using the native Android share menu.',
  },
  {
    question: 'How do I update to future versions without losing data?',
    answer:
      'When an updated APK is released, simply download the new APK file and tap Install. Android updates the app package automatically while safely preserving your existing SQLite database and transaction history.',
  },
  {
    question: 'What Android versions are supported?',
    answer:
      'Home Money is compatible with Android 8.0 (API Level 26, Oreo) and newer, including modern Android 13, 14, and 15 devices.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#E3E8EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101A1E]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6B72]">
            Everything you need to know about Home Money, installation, and data privacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F8FAFB] rounded-2xl border border-[#E3E8EB] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base text-[#101A1E]">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E3E8EB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E4F0EE] text-[#0F5F55]' : 'text-[#5A6B72]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#5A6B72] leading-relaxed border-t border-[#E3E8EB]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

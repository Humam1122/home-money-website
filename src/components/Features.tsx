'use client';

import React from 'react';
import {
  CalendarDays,
  Receipt,
  Sparkles,
  CalendarClock,
  Sliders,
  FileSpreadsheet,
  Coins,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  detailPoints: string[];
}

const FEATURES: FeatureCard[] = [
  {
    icon: <CalendarDays className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Core Ledger',
    title: 'Strict Month-Isolated Ledgers',
    description:
      'Unlike generic budget apps that lump transactions into endless feeds, Home Money isolates every month into its own dedicated financial ledger.',
    detailPoints: [
      'September spending never bleeds into October totals',
      'Clean accounting boundaries for monthly budgeting',
      'Switch between months with instant navigation',
    ],
  },
  {
    icon: <Receipt className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Smart Logging',
    title: 'Multi-Item Receipt Splitting',
    description:
      'Log an entire store visit in one entry. Break down receipts into multiple items, each with its own independent category and price.',
    detailPoints: [
      'Split groceries, household items, and pets in one receipt',
      'Each sub-item updates its own category budget',
      'Zero manual math: automatic sum verification',
    ],
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Automation',
    title: 'Smart Category Auto-Detection',
    description:
      'Home Money learns from your past descriptions and merchant keywords to suggest the exact category before you even finish typing.',
    detailPoints: [
      'Keyword detection based on past entry history',
      'Saves repetitive taps on everyday purchases',
      'Learns locally on your device without sending text to AI servers',
    ],
  },
  {
    icon: <CalendarClock className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Obligations',
    title: 'Recurring Bills & Edge Cases',
    description:
      'Manage recurring bills on weekly, monthly, quarterly, or yearly cycles. The engine accurately handles month-ends and February leap days.',
    detailPoints: [
      'Visual status indicators: Paid, Due Soon, and Overdue',
      'One-tap "Mark as Paid" automatically writes the expense entry',
      'Custom recurrence intervals tailored to your pay schedule',
    ],
  },
  {
    icon: <Sliders className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Spending Limits',
    title: 'Monthly & Category Budgets',
    description:
      'Set an overall monthly spending ceiling alongside dedicated category targets for groceries, dining out, transport, or entertainment.',
    detailPoints: [
      'Real-time status: Budget, Spent, and Remaining',
      'Visual progress bars with soft color-coded alerts',
      'Non-restrictive design that informs rather than locks',
    ],
  },
  {
    icon: <FileSpreadsheet className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Data Portability',
    title: 'Print-Ready PDF & CSV Export',
    description:
      'Create publication-quality PDF monthly financial summaries completely offline on your device, ready to print, file, or share.',
    detailPoints: [
      'Full monthly summaries: totals, category distribution, & tables',
      'Native Android Share Sheet support (WhatsApp, Drive, Email)',
      'CSV spreadsheet export for Excel and Google Sheets',
    ],
  },
  {
    icon: <Coins className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Cash Flow',
    title: 'Income & Net Cash Flow Tracking',
    description:
      'Record salaries, freelance income, investments, and side hustles to view your true net monthly balance in real time.',
    detailPoints: [
      'Live Net Balance calculation (Income minus Expenses)',
      'Supports multiple income streams and custom sources',
      'Helps you see your exact savings rate every month',
    ],
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-[#0F5F55]" />,
    category: 'Reliability',
    title: 'Non-Destructive Data Integrity',
    description:
      'Built upon an embedded SQLite engine with robust schema migrations. Deleting a category never deletes past transaction records.',
    detailPoints: [
      'Transactions safely transition to uncategorized if category deleted',
      'Strict input validation prevents corrupted balances',
      'Embedded schema migrations protect data across app updates',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101A1E]">
            Everything you need to master your home finances.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6B72]">
            No bloated social feeds, no third-party bank linking errors, and no intrusive ads. Just
            purpose-built tools for real everyday expenses.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E3E8EB] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F0EE] flex items-center justify-center transition-transform group-hover:scale-105">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5A6B72] tracking-wide uppercase px-2 py-0.5 rounded-sm bg-[#F4F6F7]">
                    {feat.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#101A1E] group-hover:text-[#0F5F55] transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm text-[#5A6B72] leading-relaxed">
                  {feat.description}
                </p>

                {/* Sub-points */}
                <ul className="mt-4 space-y-1.5 pt-4 border-t border-[#F4F6F7]">
                  {feat.detailPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-[#5A6B72] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F5F55] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3E8EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#101A1E]">
              Ready to simplify your home bookkeeping?
            </h4>
            <p className="text-sm text-[#5A6B72]">
              Download the APK directly to your Android device. Setup takes less than 30 seconds.
            </p>
          </div>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F5F55] text-white text-sm font-semibold hover:bg-[#0A4740] transition-colors shrink-0 shadow-xs"
          >
            <span>Get Home Money</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

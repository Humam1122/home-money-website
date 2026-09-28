'use client';

import React from 'react';
import {
  TrendingUp,
  PieChart,
  Calendar,
  BarChart3,
  Award,
} from 'lucide-react';

export default function AnalyticsSection() {
  const metrics = [
    {
      title: 'Net Monthly Balance',
      value: 'Income − Expenses',
      badge: 'Cash Flow',
      description:
        'Instantly see whether your monthly cash flow is positive or negative. Updates with every logged transaction.',
      icon: <TrendingUp className="w-5 h-5 text-[#157A5F]" />,
    },
    {
      title: 'Daily Average Spend',
      value: 'Spend / Days Elapsed',
      badge: 'Pacing Metric',
      description:
        'Calculates your daily burn rate so you can evaluate whether your spending pace will survive until month-end.',
      icon: <Calendar className="w-5 h-5 text-[#0F5F55]" />,
    },
    {
      title: 'Top Category Share',
      value: '% of Total Ledger',
      badge: 'Distribution',
      description:
        'Shows exactly what category takes the largest portion of your income, with full percentage distributions.',
      icon: <PieChart className="w-5 h-5 text-[#B7791F]" />,
    },
    {
      title: 'Largest Transaction',
      value: 'Highest Single Expense',
      badge: 'Outlier Tracking',
      description:
        'Pinpoints major single purchases (such as rent, car repairs, or electronics) that swayed your monthly bottom line.',
      icon: <Award className="w-5 h-5 text-[#B4453C]" />,
    },
  ];

  return (
    <section id="analytics" className="py-20 sm:py-28 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider">
              On-Device Analytics
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101A1E]">
              Clear financial insights without cloud surveillance.
            </h2>
            <p className="text-base sm:text-lg text-[#5A6B72] leading-relaxed">
              Most expense apps require sending your personal spending history to third-party
              analytic servers. Home Money calculates all summary tables, daily averages, and
              category shares strictly on-device in pure local SQLite.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#E3E8EB] shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#101A1E]">
                <BarChart3 className="w-4 h-4 text-[#0F5F55]" />
                <span>Plain-language summary</span>
              </div>
              <p className="text-xs text-[#5A6B72] leading-normal">
                Home Money translates raw numbers into clear takeaways like &ldquo;Groceries make
                up 38% of your expenses this month&rdquo; so you can make informed decisions
                without reading a complex spreadsheet.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#E3E8EB] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F6F7] flex items-center justify-center">
                      {m.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-[#5A6B72] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#EEF2F4]">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#101A1E]">{m.title}</h3>
                  <div className="text-xs font-mono font-medium text-[#0F5F55] mt-0.5 mb-2">
                    {m.value}
                  </div>
                  <p className="text-xs text-[#5A6B72] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

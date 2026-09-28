'use client';

import React from 'react';
import { Download, Sparkles, PieChart, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Download & Install the APK',
      subtitle: 'Fast direct installation',
      description:
        'Download Home-Money-v1.0.0.apk directly to your Android phone. When prompted by your browser, tap allow to install the standalone application.',
      icon: <Download className="w-6 h-6 text-[#0F5F55]" />,
    },
    {
      step: '02',
      title: 'Open & Log Instantly',
      subtitle: 'Zero accounts or setup',
      description:
        'No registration forms, no email verification, and no cloud passwords. Open the app and begin logging your daily expenses and income in under 10 seconds.',
      icon: <Sparkles className="w-6 h-6 text-[#0F5F55]" />,
    },
    {
      step: '03',
      title: 'Stay on Budget & Export Reports',
      subtitle: 'Total financial transparency',
      description:
        'Monitor monthly cash flow, keep bills paid on time, review interactive category analytics, and export clean PDF reports with the Android share sheet.',
      icon: <PieChart className="w-6 h-6 text-[#0F5F55]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E3E8EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101A1E]">
            How Home Money works.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6B72]">
            Start tracking expenses without surrendering your private personal or financial details.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#F8FAFB] rounded-3xl p-8 border border-[#E3E8EB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E3E8EB] flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#CFD7DC]">
                    {item.step}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[#0F5F55] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#101A1E] mb-3">{item.title}</h3>
                <p className="text-sm text-[#5A6B72] leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E8EB]/60 flex items-center gap-2 text-xs font-medium text-[#101A1E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#157A5F]" />
                <span>100% offline & local</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

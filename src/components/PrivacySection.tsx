'use client';

import React from 'react';
import { Database, HardDrive, Smartphone, Check, ShieldCheck } from 'lucide-react';

export default function PrivacySection() {
  const privacyPoints = [
    {
      title: 'Local SQLite Database',
      description:
        'All your financial records, income entries, categories, and budgets are written directly into an embedded SQLite database inside your Android phone’s sandboxed app storage.',
      icon: <Database className="w-5 h-5 text-[#0F5F55]" />,
    },
    {
      title: 'Zero Accounts & Logins',
      description:
        'Home Money has no user accounts, no passwords, and no login portals. We never ask for your email address, phone number, or identity.',
      icon: <HardDrive className="w-5 h-5 text-[#0F5F55]" />,
    },
    {
      title: 'No Cloud Sync Servers',
      description:
        'There is no external server tracking your purchases or storing financial profiles. What you spend on groceries or bills remains strictly between you and your phone.',
      icon: <Smartphone className="w-5 h-5 text-[#0F5F55]" />,
    },
  ];

  return (
    <section id="privacy" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#E3E8EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Local-First Philosophy</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101A1E]">
            Your expense data stays on your device.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A6B72] leading-relaxed">
            Personal finance is inherently personal. Home Money is engineered around local storage
            so your everyday spending habits never live on someone else&apos;s cloud computer.
          </p>
        </div>

        {/* 3 Privacy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {privacyPoints.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFB] rounded-3xl p-8 border border-[#E3E8EB] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E3E8EB] flex items-center justify-center mb-6 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#101A1E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5A6B72] leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E8EB] flex items-center gap-2 text-xs font-medium text-[#157A5F]">
                <Check className="w-4 h-4 shrink-0" />
                <span>Verified by design</span>
              </div>
            </div>
          ))}
        </div>

        {/* Permissions & Transparency Card */}
        <div className="mt-12 bg-[#F4F6F7] rounded-2xl p-6 sm:p-8 border border-[#CFD7DC] text-xs sm:text-sm text-[#5A6B72]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#101A1E] text-sm sm:text-base mb-1">
                Permission Transparency (Android Manifest)
              </h4>
              <p className="text-[#5A6B72] leading-normal">
                Home Money requests standard <code className="font-mono text-[#0F5F55] font-semibold bg-white px-1.5 py-0.5 rounded-sm border border-[#E3E8EB]">android.permission.INTERNET</code> solely because the underlying React Native runtime and external document sharing hooks use it. No transaction or ledger data is ever sent to any remote server.
              </p>
            </div>
            <span className="shrink-0 text-xs px-3 py-1.5 rounded-lg bg-white border border-[#CFD7DC] font-semibold text-[#101A1E]">
              Zero Ad Trackers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

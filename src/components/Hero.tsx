'use client';

import React from 'react';
import { Download, ArrowRight, ShieldCheck, Database, Smartphone, Check, Loader2, CheckCircle2 } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { DashboardMockup } from './AppScreenMockups';
import { CURRENT_RELEASE } from '@/config/release';
import { useDownload } from '@/context/DownloadContext';

export default function Hero() {
  const { status, progress, startDownload } = useDownload();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F4F6F7]">
      {/* Background Subtle Gradient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(15, 95, 85, 0.12) 0%, rgba(244, 246, 247, 0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Version & Privacy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E4F0EE] border border-[#A7D2CC]/50 text-[#0F5F55] text-xs font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#157A5F] animate-pulse" />
              <span>Release {CURRENT_RELEASE.version} for Android</span>
              <span className="text-[#A7D2CC]">•</span>
              <span className="font-medium text-[#0A4740]">100% Local Storage</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101A1E] leading-[1.12]">
              Take control of your <br className="hidden sm:inline" />
              <span className="text-[#0F5F55]">everyday spending.</span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 text-lg sm:text-xl text-[#5A6B72] max-w-2xl leading-relaxed">
              A calm, modern, and private home expense manager. Track daily transactions, split
              supermarket receipts across multiple categories, manage recurring bills, and set
              budgets — safely stored in an embedded SQLite database on your device.
            </p>

            {/* Key Value Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-sm text-[#5A6B72]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#157A5F]" />
                <span>Zero accounts or logins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#157A5F]" />
                <span>Zero cloud tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#157A5F]" />
                <span>Works 100% offline</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => startDownload()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#0F5F55] hover:bg-[#0A4740] rounded-xl shadow-xs hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] focus-visible:ring-offset-2 active:scale-[0.99]"
              >
                {status === 'downloading' ? (
                  <>
                    <Loader2 className="w-5 h-5 shrink-0 animate-spin" />
                    <span>Downloading ({progress}%)...</span>
                  </>
                ) : status === 'completed' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#E4F0EE]" />
                    <span>Downloaded ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download for Android</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">
                      {CURRENT_RELEASE.apkFileSize}
                    </span>
                  </>
                )}
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#101A1E] bg-white hover:bg-[#EEF2F4] border border-[#CFD7DC] rounded-xl shadow-2xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55]"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-[#5A6B72]" />
              </a>
            </div>

            {/* APK Distribution Note */}
            <div className="mt-4 text-xs text-[#8A98A0] flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Standalone APK • Android 8.0 (Oreo) or later • Free & Ad-Free</span>
            </div>
          </div>

          {/* Right Column: Hero Smartphone Preview */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Subtle decorative glow ring */}
            <div className="absolute inset-0 bg-[#0F5F55]/5 rounded-full blur-3xl -z-10" />

            <div className="relative group transition-transform duration-300 hover:scale-[1.02]">
              <PhoneFrame
                imageSrc="/screenshots/01-dashboard.png"
                imageAlt="Home Money Dashboard Screen"
                screenTitle="Home Dashboard"
                fallbackContent={<DashboardMockup />}
                className="max-w-[310px] sm:max-w-[330px]"
              />

              {/* Floating Highlight Badge 1: Local SQLite */}
              <div className="absolute -left-6 top-1/4 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E3E8EB] shadow-xs text-xs">
                <div className="w-7 h-7 rounded-lg bg-[#E4F0EE] text-[#0F5F55] flex items-center justify-center">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-[#101A1E]">Local SQLite</div>
                  <div className="text-[10px] text-[#5A6B72]">Saved only on phone</div>
                </div>
              </div>

              {/* Floating Highlight Badge 2: Cash Flow */}
              <div className="absolute -right-6 bottom-1/4 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E3E8EB] shadow-xs text-xs">
                <div className="w-7 h-7 rounded-lg bg-[#E2F3EE] text-[#157A5F] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-[#101A1E]">Privacy-First</div>
                  <div className="text-[10px] text-[#5A6B72]">No cloud sync needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

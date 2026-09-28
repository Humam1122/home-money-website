'use client';

import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { CURRENT_RELEASE } from '@/config/release';

export default function DownloadSection() {
  const [copied, setCopied] = useState(false);

  const copyDownloadLink = () => {
    if (typeof window !== 'undefined') {
      const fullUrl = CURRENT_RELEASE.apkDownloadPath.startsWith('http')
        ? CURRENT_RELEASE.apkDownloadPath
        : `${window.location.origin}${CURRENT_RELEASE.apkDownloadPath}`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="download" className="py-20 sm:py-28 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            <Download className="w-3.5 h-3.5" />
            <span>Official APK Release</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101A1E]">
            Download Home Money for Android
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6B72]">
            Install directly on any Android phone or tablet. Fast, private, and 100% ad-free.
          </p>
        </div>

        {/* Main Release Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E3E8EB] shadow-raised relative overflow-hidden">
          {/* Subtle Decorative accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E4F0EE]/60 rounded-bl-full pointer-events-none -mr-8 -mt-8" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#E3E8EB]">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-[#101A1E]">
                  Home Money {CURRENT_RELEASE.version}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold">
                  Stable
                </span>
              </div>
              <p className="text-xs text-[#5A6B72] mt-1 font-mono">
                {CURRENT_RELEASE.packageName} • {CURRENT_RELEASE.releaseDate}
              </p>
            </div>

            {/* Quick Specs */}
            <div className="flex items-center gap-4 text-xs font-medium text-[#5A6B72] bg-[#F8FAFB] px-4 py-2.5 rounded-xl border border-[#E3E8EB]">
              <div>
                <span className="text-[#8A98A0] block text-[10px] uppercase font-semibold">
                  File Size
                </span>
                <span className="font-bold text-[#101A1E]">{CURRENT_RELEASE.apkFileSize}</span>
              </div>
              <div className="w-px h-6 bg-[#CFD7DC]" />
              <div>
                <span className="text-[#8A98A0] block text-[10px] uppercase font-semibold">
                  Requires
                </span>
                <span className="font-bold text-[#101A1E]">{CURRENT_RELEASE.minAndroidVersion}</span>
              </div>
            </div>
          </div>

          {/* Primary Action Button & GitHub Release */}
          <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={CURRENT_RELEASE.apkDownloadPath}
              download={CURRENT_RELEASE.apkFileName}
              className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#0F5F55] hover:bg-[#0A4740] rounded-2xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] focus-visible:ring-offset-2 active:scale-[0.99]"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>Download APK ({CURRENT_RELEASE.apkFileSize})</span>
            </a>

            <button
              type="button"
              onClick={copyDownloadLink}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-[#101A1E] bg-[#F4F6F7] hover:bg-[#EEF2F4] border border-[#CFD7DC] rounded-2xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55]"
              title="Copy direct APK download link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#157A5F]" />
                  <span className="text-[#157A5F]">Copied Link!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#5A6B72]" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href={CURRENT_RELEASE.githubReleaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-4 text-xs font-semibold text-[#5A6B72] hover:text-[#101A1E] bg-white hover:bg-[#F4F6F7] border border-[#CFD7DC] rounded-2xl transition-all"
              title="View GitHub Release notes and asset"
            >
              <span>Release Notes</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Desktop vs Phone Context Note */}
          <div className="mt-4 text-xs text-[#8A98A0] text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
            <Smartphone className="w-3.5 h-3.5 shrink-0" />
            <span>
              Visiting from your PC or laptop? Click &ldquo;Copy Link&rdquo; to send the URL to your Android device, or transfer the downloaded file via USB.
            </span>
          </div>

          {/* Release Highlights / Changelog */}
          <div className="mt-8 pt-6 border-t border-[#E3E8EB]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A6B72] mb-3">
              Included in this release:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#101A1E]">
              {CURRENT_RELEASE.changelog.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#157A5F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Android Installation Instructions (Friendly & Non-intimidating) */}
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-[#CFD7DC] shadow-xs">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#FDF3E1] text-[#B7791F] flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#101A1E]">
                Installing on Android (Outside Google Play)
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6B72] mt-0.5 leading-relaxed">
                Because Home Money is distributed directly as an APK file without Google Play,
                Android displays a standard safety confirmation. Installation takes 3 quick steps:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#E3E8EB]">
            <div className="p-3 bg-[#F8FAFB] rounded-xl border border-[#E3E8EB]">
              <span className="text-xs font-mono font-bold text-[#0F5F55] block mb-1">
                Step 1: Download
              </span>
              <p className="text-xs text-[#5A6B72]">
                Tap &ldquo;Download APK&rdquo; above. If your browser asks, tap &ldquo;Download anyway&rdquo;.
              </p>
            </div>

            <div className="p-3 bg-[#F8FAFB] rounded-xl border border-[#E3E8EB]">
              <span className="text-xs font-mono font-bold text-[#0F5F55] block mb-1">
                Step 2: Allow Install
              </span>
              <p className="text-xs text-[#5A6B72]">
                Open the downloaded file. If prompted, toggle &ldquo;Allow from this source&rdquo; in settings.
              </p>
            </div>

            <div className="p-3 bg-[#F8FAFB] rounded-xl border border-[#E3E8EB]">
              <span className="text-xs font-mono font-bold text-[#0F5F55] block mb-1">
                Step 3: Launch
              </span>
              <p className="text-xs text-[#5A6B72]">
                Tap &ldquo;Install&rdquo; then open Home Money to begin recording your transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

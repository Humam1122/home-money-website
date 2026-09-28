'use client';

import React from 'react';
import Image from 'next/image';
import { Download, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CURRENT_RELEASE } from '@/config/release';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101A1E] text-white pt-16 pb-12 border-t border-[#2B3B42]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2B3B42]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center p-0.5">
                <Image
                  src="/brand/app-icon.png"
                  alt="Home Money Icon"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white">Home Money</span>
                <span className="ml-2 text-[10px] font-mono uppercase bg-[#0F5F55] px-2 py-0.5 rounded-sm text-white">
                  {CURRENT_RELEASE.version}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#8A98A0] max-w-md leading-relaxed">
              A calm, simple personal and home expense manager that helps you track daily spending,
              recurring bills, categories, and monthly budgets locally on your Android device.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A7D2CC]">
              <ShieldCheck className="w-4 h-4 text-[#157A5F]" />
              <span>100% Local SQLite • Zero Cloud Tracking • Distraction Free</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#8A98A0]">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-white transition-colors">
                  App Screenshots
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-white transition-colors">
                  Analytics & Insights
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Local-First Privacy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Release & Downloads */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90">Downloads</h4>
            <div className="space-y-2">
              <a
                href={CURRENT_RELEASE.apkDownloadPath}
                download={CURRENT_RELEASE.apkFileName}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F5F55] hover:bg-[#0A4740] text-sm font-semibold text-white shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download APK ({CURRENT_RELEASE.apkFileSize})</span>
              </a>

              <a
                href={CURRENT_RELEASE.githubReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#8A98A0] hover:text-white transition-colors"
              >
                <span>GitHub Release (v1.0.0)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={CURRENT_RELEASE.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#8A98A0] hover:text-white transition-colors"
              >
                <span>View GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#5A6B72]">
              Package: <code className="text-[#8A98A0]">{CURRENT_RELEASE.packageName}</code>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6B72]">
          <div>
            © {currentYear} Home Money. Distributed under the{' '}
            <a
              href={`${CURRENT_RELEASE.githubRepoUrl}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A98A0] hover:text-white underline"
            >
              MIT License
            </a>
            .
          </div>

          <div className="flex items-center gap-1 text-[#8A98A0]">
            <span>Crafted for private personal finance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

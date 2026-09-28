'use client';

import React, { useState } from 'react';
import { Heart, Coffee, Sparkles, ExternalLink } from 'lucide-react';
import { BUY_ME_A_COFFEE_URL } from '@/config/release';

export default function SupportDeveloper() {
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(5);
  const [customVal, setCustomVal] = useState<string>('20');
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const presets = [5, 10, 15];

  const handleSupportClick = () => {
    if (BUY_ME_A_COFFEE_URL) {
      window.open(BUY_ME_A_COFFEE_URL, '_blank', 'noopener,noreferrer');
    } else {
      setShowStatus(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-[#E3E8EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFB] rounded-3xl p-6 sm:p-10 border border-[#E3E8EB] text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#E4F0EE] text-[#0F5F55] flex items-center justify-center mx-auto mb-4 shadow-xs">
            <Heart className="w-6 h-6 text-[#0F5F55]" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F5F55] block mb-1">
            Enjoying Home Money?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101A1E]">
            Support the developer ☕
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#5A6B72] max-w-xl mx-auto leading-relaxed">
            Home Money is free, local-first, and completely ad-free. If this app helps you manage
            your household spending with peace of mind, voluntary contributions are warmly
            appreciated.
          </p>

          {/* Amount Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {presets.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setShowStatus(false);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] ${
                  selectedAmount === amt
                    ? 'bg-[#0F5F55] text-white shadow-xs'
                    : 'bg-white border border-[#CFD7DC] text-[#101A1E] hover:bg-[#EEF2F4]'
                }`}
              >
                ${amt}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setSelectedAmount('custom');
                setShowStatus(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] ${
                selectedAmount === 'custom'
                  ? 'bg-[#0F5F55] text-white shadow-xs'
                  : 'bg-white border border-[#CFD7DC] text-[#101A1E] hover:bg-[#EEF2F4]'
              }`}
            >
              Custom
            </button>
          </div>

          {/* Custom Input */}
          {selectedAmount === 'custom' && (
            <div className="mt-4 flex items-center justify-center gap-2 max-w-xs mx-auto animate-in fade-in duration-150">
              <span className="text-sm font-bold text-[#5A6B72]">$</span>
              <input
                type="number"
                min="1"
                step="1"
                value={customVal}
                onChange={(e) => setCustomVal(e.target.value)}
                placeholder="Amount"
                className="w-28 px-3 py-1.5 text-sm bg-white rounded-lg border border-[#CFD7DC] text-[#101A1E] font-medium text-center focus:outline-hidden focus:ring-2 focus:ring-[#0F5F55]"
              />
            </div>
          )}

          {/* Support Actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleSupportClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0F5F55] hover:bg-[#0A4740] shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55]"
            >
              <Coffee className="w-4 h-4" />
              <span>
                Support ${selectedAmount === 'custom' ? customVal || '0' : selectedAmount}
              </span>
            </button>

            {BUY_ME_A_COFFEE_URL && (
              <a
                href={BUY_ME_A_COFFEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold text-[#101A1E] bg-white border border-[#CFD7DC] hover:bg-[#EEF2F4] transition-all"
              >
                <span>Buy Me a Coffee</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5A6B72]" />
              </a>
            )}
          </div>

          {/* Transparent Notice */}
          {showStatus ? (
            <div className="mt-4 p-3 bg-white rounded-xl border border-[#A7D2CC] max-w-md mx-auto text-xs text-[#0F5F55] flex items-center gap-2 text-left animate-in fade-in duration-150">
              <Sparkles className="w-4 h-4 shrink-0 text-[#157A5F]" />
              <span>
                Donation checkout integration is coming soon (configure{' '}
                <code className="font-mono text-[#101A1E]">BUY_ME_A_COFFEE_URL</code> in{' '}
                <code className="font-mono text-[#101A1E]">src/config/release.ts</code>). Thank you
                deeply for supporting Home Money!
              </span>
            </div>
          ) : (
            <p className="mt-4 text-xs text-[#8A98A0]">
              100% voluntary • Never required to unlock any features
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

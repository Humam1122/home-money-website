'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Wifi, BatteryMedium, Signal, Info } from 'lucide-react';

interface PhoneFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  screenTitle?: string;
  fallbackContent?: React.ReactNode;
  aspectRatioClass?: string;
  className?: string;
}

export default function PhoneFrame({
  imageSrc,
  imageAlt = 'Home Money App Screen',
  screenTitle = 'Home Money',
  fallbackContent,
  className = '',
}: PhoneFrameProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19] rounded-[44px] p-3 bg-[#0B1A20] shadow-[0_20px_50px_rgba(11,26,32,0.18),0_4px_12px_rgba(11,26,32,0.08)] ring-1 ring-black/10 select-none ${className}`}
    >
      {/* Outer Phone Frame Accents (Buttons on sides) */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-[#2B3B42] rounded-l-sm" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-[#2B3B42] rounded-l-sm" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#2B3B42] rounded-r-sm" />

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[#F4F6F7] flex flex-col border border-[#101A1E]/10">
        {/* Android Status Bar */}
        <div className="w-full bg-[#0F5F55] text-white px-5 pt-2.5 pb-1 flex items-center justify-between z-20 text-[11px] font-medium tracking-tight">
          <span className="font-semibold">09:41</span>
          
          {/* Top Camera Punch Hole & Speaker */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-black/80 ring-1 ring-white/20" />
            <div className="w-8 h-1 rounded-full bg-black/40" />
          </div>

          <div className="flex items-center gap-1.5 opacity-90">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <BatteryMedium className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col bg-[#F4F6F7]">
          {imageSrc && !imgError ? (
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 320px, 340px"
                className="object-cover object-top"
                onError={() => setImgError(true)}
                priority
              />
            </div>
          ) : fallbackContent ? (
            <div className="relative w-full h-full flex flex-col">
              {fallbackContent}
              {imageSrc && (
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-2 rounded-lg border border-[#E3E8EB] shadow-xs text-[10px] text-[#5A6B72] flex items-center gap-1.5 z-30">
                  <Info className="w-3 h-3 text-[#0F5F55] shrink-0" />
                  <span className="truncate">
                    Place real screenshot in <code className="font-mono text-[#101A1E]">{imageSrc}</code>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#5A6B72]">
              <span className="text-sm font-semibold text-[#101A1E] mb-1">{screenTitle}</span>
              <p className="text-xs text-[#8A98A0]">No screenshot provided yet.</p>
            </div>
          )}
        </div>

        {/* Android Gesture Bar */}
        <div className="w-full h-4 bg-[#F4F6F7] flex items-center justify-center z-20">
          <div className="w-24 h-1 rounded-full bg-[#CFD7DC]" />
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import {
  Download,
  CheckCircle2,
  AlertCircle,
  X,
  RotateCw,
} from 'lucide-react';
import { useDownload } from '@/context/DownloadContext';
import { CURRENT_RELEASE } from '@/config/release';

export default function DownloadProgressCard() {
  const {
    status,
    progress,
    formattedLoaded,
    formattedTotal,
    downloadSpeed,
    startDownload,
    cancelDownload,
    dismissProgress,
    directDownloadFallback,
  } = useDownload();

  if (status === 'idle') return null;

  return (
    <aside
      aria-label="Download Progress"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 z-50 animate-in slide-in-from-bottom-5 duration-200"
    >
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#CFD7DC] shadow-[0_12px_36px_rgba(16,26,30,0.14),0_2px_8px_rgba(16,26,30,0.06)] select-none">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-[#CFD7DC] shrink-0 bg-[#F4F6F7] flex items-center justify-center">
              <Image
                src="/brand/app-icon.png"
                alt="Home Money Icon"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#101A1E] leading-tight">
                {status === 'downloading' && 'Downloading Home Money'}
                {status === 'completed' && 'Home Money downloaded ✓'}
                {status === 'failed' && 'Download issue encountered'}
              </h4>
              <p className="text-[11px] text-[#5A6B72] mt-0.5">
                {status === 'downloading' && (
                  <span>
                    {progress}% • {formattedLoaded} / {formattedTotal}
                    {downloadSpeed ? ` • ${downloadSpeed}` : ''}
                  </span>
                )}
                {status === 'completed' && 'Open the downloaded APK to install.'}
                {status === 'failed' && 'Switching to direct GitHub Release download.'}
              </p>
            </div>
          </div>

          {/* Dismiss / Cancel Button */}
          <button
            type="button"
            onClick={status === 'downloading' ? cancelDownload : dismissProgress}
            className="p-1 text-[#8A98A0] hover:text-[#101A1E] hover:bg-[#F4F6F7] rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55]"
            aria-label={status === 'downloading' ? 'Cancel download' : 'Dismiss notice'}
            title={status === 'downloading' ? 'Cancel download' : 'Dismiss notice'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Downloading State */}
        {status === 'downloading' && (
          <div className="mt-3 space-y-2">
            {/* Progress Bar Track */}
            <div
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="w-full h-2 bg-[#EEF2F4] rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-[#0F5F55] rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#8A98A0] pt-0.5">
              <span>You can continue browsing the page</span>
              <button
                type="button"
                onClick={cancelDownload}
                className="text-[#B4453C] hover:underline font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Completed State */}
        {status === 'completed' && (
          <div className="mt-3 pt-3 border-t border-[#E3E8EB] flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#157A5F] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ready to install</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={directDownloadFallback}
                className="text-xs text-[#5A6B72] hover:text-[#101A1E] hover:underline font-medium"
                title="Download file again"
              >
                Save again
              </button>
              <button
                type="button"
                onClick={dismissProgress}
                className="px-3 py-1 bg-[#0F5F55] text-white text-xs font-semibold rounded-lg hover:bg-[#0A4740] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* Failed State with Direct Fallback Action */}
        {status === 'failed' && (
          <div className="mt-3 pt-3 border-t border-[#E3E8EB] space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-[#B7791F]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Browser streaming failed. Use direct download instead:</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => startDownload()}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F4F6F7] hover:bg-[#EEF2F4] text-[#101A1E] text-xs font-semibold rounded-lg border border-[#CFD7DC] transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>

              <a
                href={CURRENT_RELEASE.apkDownloadPath}
                download={CURRENT_RELEASE.apkFileName}
                onClick={directDownloadFallback}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#0F5F55] hover:bg-[#0A4740] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Direct Download</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

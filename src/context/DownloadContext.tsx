'use client';

import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import { CURRENT_RELEASE } from '@/config/release';

export type DownloadStatus = 'idle' | 'downloading' | 'completed' | 'failed';

interface DownloadContextType {
  status: DownloadStatus;
  progress: number;
  loadedBytes: number;
  totalBytes: number;
  formattedLoaded: string;
  formattedTotal: string;
  downloadSpeed: string;
  error: string | null;
  startDownload: () => Promise<void>;
  cancelDownload: () => void;
  dismissProgress: () => void;
  directDownloadFallback: () => void;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

function formatBytes(bytes: number): string {
  if (bytes <= 0) return '0 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export function DownloadProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<DownloadStatus>('idle');
  const [progress, setProgress] = useState<number>(0);
  const [loadedBytes, setLoadedBytes] = useState<number>(0);
  const [totalBytes, setTotalBytes] = useState<number>(CURRENT_RELEASE.apkExpectedBytes);
  const [downloadSpeed, setDownloadSpeed] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const triggerDirectSave = useCallback((url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  const directDownloadFallback = useCallback(() => {
    triggerDirectSave(CURRENT_RELEASE.apkDownloadPath, CURRENT_RELEASE.apkFileName);
    setStatus('completed');
  }, [triggerDirectSave]);

  const cancelDownload = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setStatus('idle');
    setProgress(0);
    setLoadedBytes(0);
    setDownloadSpeed('');
    setError(null);
  }, []);

  const dismissProgress = useCallback(() => {
    if (status !== 'downloading') {
      setStatus('idle');
      setProgress(0);
      setLoadedBytes(0);
      setDownloadSpeed('');
      setError(null);
    }
  }, [status]);

  const startDownload = useCallback(async () => {
    // If already downloading, don't start duplicate
    if (status === 'downloading') return;

    setStatus('downloading');
    setProgress(0);
    setLoadedBytes(0);
    setDownloadSpeed('Connecting...');
    setError(null);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // First attempt: stream through same-origin API proxy with progress tracking
      const response = await fetch(CURRENT_RELEASE.apkStreamingApiPath, {
        signal: controller.signal,
      });

      // If streaming proxy is unavailable, fall back to direct GitHub Release asset
      if (!response.ok || !response.body) {
        throw new Error('Streaming endpoint unavailable; falling back to direct download');
      }

      const contentLengthHeader = response.headers.get('content-length');
      const total = contentLengthHeader
        ? parseInt(contentLengthHeader, 10)
        : CURRENT_RELEASE.apkExpectedBytes;
      setTotalBytes(total);

      const reader = response.body.getReader();
      const chunks: BlobPart[] = [];
      let receivedBytes = 0;
      let lastTime = performance.now();
      let lastBytes = 0;

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        if (value) {
          chunks.push(value);
          receivedBytes += value.length;
          setLoadedBytes(receivedBytes);

          const pct = Math.min(100, Math.round((receivedBytes / total) * 100));
          setProgress(pct);

          // Calculate speed every ~350ms
          const now = performance.now();
          const elapsed = (now - lastTime) / 1000;
          if (elapsed >= 0.35) {
            const bytesDelta = receivedBytes - lastBytes;
            const speedBytesPerSec = bytesDelta / elapsed;
            const speedMbPerSec = speedBytesPerSec / (1024 * 1024);
            setDownloadSpeed(`${speedMbPerSec.toFixed(1)} MB/s`);
            lastTime = now;
            lastBytes = receivedBytes;
          }
        }
      }

      // Assemble blob and trigger file save
      const blob = new Blob(chunks, { type: 'application/vnd.android.package-archive' });
      const objectUrl = URL.createObjectURL(blob);

      triggerDirectSave(objectUrl, CURRENT_RELEASE.apkFileName);

      setTimeout(() => {
        URL.revokeObjectURL(objectUrl);
      }, 60000);

      setProgress(100);
      setLoadedBytes(total);
      setDownloadSpeed('');
      setStatus('completed');
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        // User explicitly cancelled
        return;
      }

      const errMsg = err instanceof Error ? err.message : 'Download failed';
      console.warn('Progressive streaming failed, falling back to direct release URL:', errMsg);

      setError(errMsg);
      setStatus('failed');

      // Auto fallback to direct browser download so user always gets the file
      directDownloadFallback();
    } finally {
      abortControllerRef.current = null;
    }
  }, [status, directDownloadFallback, triggerDirectSave]);

  const value = {
    status,
    progress,
    loadedBytes,
    totalBytes,
    formattedLoaded: formatBytes(loadedBytes),
    formattedTotal: formatBytes(totalBytes),
    downloadSpeed,
    error,
    startDownload,
    cancelDownload,
    dismissProgress,
    directDownloadFallback,
  };

  return <DownloadContext.Provider value={value}>{children}</DownloadContext.Provider>;
}

export function useDownload() {
  const context = useContext(DownloadContext);
  if (!context) {
    throw new Error('useDownload must be used within a DownloadProvider');
  }
  return context;
}

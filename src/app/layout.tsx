import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DownloadProvider } from '@/context/DownloadContext';
import DownloadProgressCard from '@/components/DownloadProgressCard';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: '#0F5F55',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Home Money — Simple Expense Manager',
  description:
    'A calm, private local-first personal finance and expense manager for Android. Track spending, split supermarket receipts across categories, manage recurring bills, and set monthly budgets locally.',
  keywords: [
    'Home Money',
    'expense tracker',
    'Android expense manager',
    'offline finance app',
    'local SQLite finance',
    'budget planner',
    'receipt splitter',
    'APK download',
  ],
  authors: [{ name: 'Home Money' }],
  metadataBase: new URL('https://homemoney.app'),
  openGraph: {
    title: 'Home Money — Simple Expense Manager',
    description:
      'Calm, private local-first personal finance and home expense manager for Android. All your transaction records stay on your device.',
    url: 'https://homemoney.app',
    siteName: 'Home Money',
    images: [
      {
        url: '/brand/app-icon.png',
        width: 512,
        height: 512,
        alt: 'Home Money App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Home Money — Simple Expense Manager',
    description:
      'Calm, private local-first personal finance and home expense manager for Android.',
    images: ['/brand/app-icon.png'],
  },
  icons: {
    icon: [
      { url: '/brand/app-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/app-icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/brand/app-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/brand/app-icon.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F4F6F7] text-[#101A1E] antialiased selection:bg-[#E4F0EE] selection:text-[#0F5F55]">
        <DownloadProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <DownloadProgressCard />
        </DownloadProvider>
      </body>
    </html>
  );
}

'use client';

import React, { useState } from 'react';
import PhoneFrame from './PhoneFrame';
import {
  DashboardMockup,
  AddExpenseMockup,
  MultiItemMockup,
  AnalyticsMockup,
  BillsMockup,
  BudgetsMockup,
  PdfReportMockup,
} from './AppScreenMockups';
import {
  LayoutDashboard,
  PlusCircle,
  Receipt,
  PieChart,
  CalendarCheck2,
  SlidersHorizontal,
  FileCheck2,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ScreenItem {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  component: React.ReactNode;
}

const SCREENS: ScreenItem[] = [
  {
    id: 'dashboard',
    tabLabel: 'Dashboard',
    title: 'Month-Isolated Home Ledger',
    badge: 'Core Screen',
    description:
      'Home Money isolates each month into its own strict accounting ledger. September expenses never bleed into October. Glance at your net cash flow, monthly balance, and recent receipts in seconds.',
    bullets: [
      'Visual cash flow breakdown: Income minus Expenses in real time',
      'One-tap quick entry for both income and expenses',
      'Recent transactions list with clear category and status chips',
      'Offline SQLite storage ensures immediate loading speed with zero lag',
    ],
    imageSrc: '/screenshots/01-dashboard.png',
    component: <DashboardMockup />,
  },
  {
    id: 'add-expense',
    tabLabel: 'Add Expense',
    title: 'Fast Single-Item Entry & Smart Detection',
    badge: 'Instant Logging',
    description:
      'Adding an expense takes only seconds. Type a short note or merchant name, and Home Money automatically matches keywords against your past spending history to pick the right category for you.',
    bullets: [
      'Smart category suggestion based on past habits and descriptions',
      'Select payment method (Cash, Card, Digital Wallet)',
      'Assign optional paid-by household member for shared home tracking',
      'Strict write validation ensures positive amounts and clean records',
    ],
    imageSrc: '/screenshots/02-add-expense.png',
    component: <AddExpenseMockup />,
  },
  {
    id: 'multi-item',
    tabLabel: 'Multi-Item Split',
    title: 'Split One Store Receipt into Distinct Categories',
    badge: 'Supermarket Receipts',
    description:
      'Did you buy groceries, household supplies, and pet food on a single store trip? Record one receipt and assign independent amounts and categories to each line item with exact accounting.',
    bullets: [
      'Add unlimited line items under a single store or supermarket entry',
      'Each item independently updates its respective category budget',
      'Automatic receipt total validation prevents calculation errors',
      'Saves time by avoiding multiple separate receipts for one store run',
    ],
    imageSrc: '/screenshots/03-multi-item.png',
    component: <MultiItemMockup />,
  },
  {
    id: 'analytics',
    tabLabel: 'Analytics',
    title: 'Deep On-Device Spending Insights',
    badge: 'Real-Time Insights',
    description:
      'Get a clear answer to "Where did my money go this month?" without sending sensitive financial statements to remote servers. All analytics are computed entirely on your device.',
    bullets: [
      '5 core metrics: Net Balance, Daily Average, Top Category, Largest Transaction, MoM Trend',
      'Interactive category distribution with percentages and color-coded bars',
      'Visual comparison against previous month spending patterns',
      'Plain-language financial summary to guide your monthly decisions',
    ],
    imageSrc: '/screenshots/04-analytics.png',
    component: <AnalyticsMockup />,
  },
  {
    id: 'bills',
    tabLabel: 'Recurring Bills',
    title: 'Recurring Obligations & Due-Date Tracking',
    badge: 'Never Miss a Bill',
    description:
      'Manage recurring bills on weekly, monthly, quarterly, or yearly schedules. The recurrence engine cleanly handles leap years and month-end dates so due dates stay accurate.',
    bullets: [
      'Clear visual status chips: Paid, Due Soon, and Overdue',
      'One-tap "Mark as Paid" records the corresponding transaction directly into your ledger',
      'Smart calendar engine handles February 28/29 leap days and 31st dates',
      'Eliminates late fees by keeping upcoming expenses top-of-mind',
    ],
    imageSrc: '/screenshots/05-bills.png',
    component: <BillsMockup />,
  },
  {
    id: 'budgets',
    tabLabel: 'Budgets',
    title: 'Spending Limits & Category Targets',
    badge: 'Proactive Control',
    description:
      'Establish a monthly spending ceiling or enforce specific budgets for high-velocity categories like groceries, dining out, and utilities. Visual progress bars keep you on track.',
    bullets: [
      'Overall monthly spending budget with real-time remaining allowance',
      'Category-level budgets with percentage progress bars',
      'Color-coded warnings when approaching spending thresholds',
      'Helps you save more each month without restrictive budgeting rules',
    ],
    imageSrc: '/screenshots/06-budgets.png',
    component: <BudgetsMockup />,
  },
  {
    id: 'reports',
    tabLabel: 'PDF Reports',
    title: 'Print-Ready PDF Reports & CSV Export',
    badge: 'Data Portability',
    description:
      'Generate polished, professional monthly financial statements directly on your phone using native Android document generation. Share via WhatsApp, email, or save directly to Google Drive.',
    bullets: [
      'Beautifully structured PDF summaries: cash flow, category breakdowns, and transaction tables',
      'Integrates directly with the native Android Share Sheet for effortless printing or sharing',
      'On-device CSV export for in-depth analysis in Microsoft Excel or Google Sheets',
      'Your financial records remain yours to export, backup, or analyze anytime',
    ],
    imageSrc: '/screenshots/07-pdf-report.png',
    component: <PdfReportMockup />,
  },
];

export default function AppScreenshots() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const activeScreen = SCREENS.find((s) => s.id === activeTab) || SCREENS[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'dashboard':
        return <LayoutDashboard className="w-4 h-4" />;
      case 'add-expense':
        return <PlusCircle className="w-4 h-4" />;
      case 'multi-item':
        return <Receipt className="w-4 h-4" />;
      case 'analytics':
        return <PieChart className="w-4 h-4" />;
      case 'bills':
        return <CalendarCheck2 className="w-4 h-4" />;
      case 'budgets':
        return <SlidersHorizontal className="w-4 h-4" />;
      case 'reports':
        return <FileCheck2 className="w-4 h-4" />;
      default:
        return <LayoutDashboard className="w-4 h-4" />;
    }
  };

  return (
    <section id="preview" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#E3E8EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Real App Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101A1E]">
            Designed for clarity. Built for daily life.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5A6B72]">
            Explore the core screens of Home Money. Every interaction is engineered to be calm,
            fast, and respectful of your focus.
          </p>
        </div>

        {/* Screen Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 no-scrollbar">
          {SCREENS.map((screen) => {
            const isActive = screen.id === activeTab;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] ${
                  isActive
                    ? 'bg-[#0F5F55] text-white shadow-xs'
                    : 'bg-[#F4F6F7] text-[#5A6B72] hover:bg-[#EEF2F4] hover:text-[#101A1E]'
                }`}
              >
                {getTabIcon(screen.id)}
                <span>{screen.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Feature & Phone Frame Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F8FAFB] rounded-3xl p-6 sm:p-10 border border-[#E3E8EB]">
          {/* Phone Frame Mockup Column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <PhoneFrame
              imageSrc={activeScreen.imageSrc}
              imageAlt={`Home Money ${activeScreen.title}`}
              screenTitle={activeScreen.title}
              fallbackContent={activeScreen.component}
              className="max-w-[300px] sm:max-w-[320px]"
            />
          </div>

          {/* Details & Bullets Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 space-y-6">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#E4F0EE] text-[#0F5F55] text-xs font-semibold tracking-wide uppercase mb-3">
                {activeScreen.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101A1E]">
                {activeScreen.title}
              </h3>
              <p className="mt-3 text-base text-[#5A6B72] leading-relaxed">
                {activeScreen.description}
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              {activeScreen.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#E4F0EE] text-[#0F5F55] flex items-center justify-center shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#101A1E] font-medium leading-normal">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Quick action link */}
            <div className="pt-4 border-t border-[#E3E8EB]">
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F5F55] hover:text-[#0A4740] group"
              >
                <span>Download this version to test on your Android device</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

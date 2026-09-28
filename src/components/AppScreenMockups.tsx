'use client';

import React from 'react';
import {
  Plus,
  TrendingDown,
  TrendingUp,
  Receipt,
  Calendar,
  Layers,
  FileText,
  PieChart,
  CheckCircle2,
  Clock,
  Share2,
  Wallet,
  ShoppingBag,
  Zap,
  Home,
} from 'lucide-react';

/**
 * High-fidelity visual mockups representing Home Money's real screens.
 * Uses exact design tokens from the mobile app:
 * - Brand Primary: #0F5F55
 * - Surface Background: #F4F6F7
 * - Card Surface: #FFFFFF
 * - Text Primary: #101A1E
 * - Income: #157A5F
 * - Expense: #B4453C
 */

export function DashboardMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      {/* App Bar */}
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-5 rounded-b-[20px] shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">
              Current Ledger
            </span>
            <h3 className="text-base font-bold text-white flex items-center gap-1">
              September 2026
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-medium text-white/90">
            Local SQLite
          </span>
        </div>

        {/* Balance Card */}
        <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/15">
          <div className="text-[10px] text-white/80 font-medium">Monthly Cash Flow</div>
          <div className="text-xl font-bold text-white mt-0.5">+$1,380.00</div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px]">
            <span className="text-[#A7D2CC] flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Inc: $2,800.00
            </span>
            <span className="text-white/80 flex items-center gap-1">
              <TrendingDown className="w-3 h-3 text-[#FBEBE9]" /> Exp: $1,420.00
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-3 py-2 space-y-2.5 overflow-hidden">
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-[#0F5F55] text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1.5 shadow-2xs">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Expense</span>
          </button>
          <button className="bg-white text-[#101A1E] border border-[#E3E8EB] py-2 px-3 rounded-lg font-medium flex items-center justify-center gap-1.5 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#157A5F]" />
            <span>Add Income</span>
          </button>
        </div>

        {/* Recent Ledger Entries */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-[#101A1E]">Recent Transactions</span>
            <span className="text-[10px] text-[#5A6B72]">View all (18)</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between py-1 border-b border-[#F4F6F7]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#E4F0EE] text-[#0F5F55] flex items-center justify-center">
                  <ShoppingBag className="w-3 h-3" />
                </div>
                <div>
                  <div className="font-medium text-[11px] leading-tight">Supermarket Grocery</div>
                  <div className="text-[9px] text-[#8A98A0]">Groceries • Sept 28</div>
                </div>
              </div>
              <span className="font-semibold text-[#B4453C]">-$46.50</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-[#F4F6F7]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FDF3E1] text-[#B7791F] flex items-center justify-center">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <div className="font-medium text-[11px] leading-tight">Electricity Bill</div>
                  <div className="text-[9px] text-[#8A98A0]">Utilities • Sept 26</div>
                </div>
              </div>
              <span className="font-semibold text-[#B4453C]">-$85.00</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#E2F3EE] text-[#157A5F] flex items-center justify-center">
                  <Wallet className="w-3 h-3" />
                </div>
                <div>
                  <div className="font-medium text-[11px] leading-tight">Salary Direct Deposit</div>
                  <div className="text-[9px] text-[#8A98A0]">Income • Sept 25</div>
                </div>
              </div>
              <span className="font-semibold text-[#157A5F]">+$2,400.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* App Bottom Navigation Bar */}
      <div className="bg-white border-t border-[#E3E8EB] px-3 py-1.5 flex items-center justify-around text-[9px] text-[#8A98A0]">
        <div className="flex flex-col items-center text-[#0F5F55] font-semibold">
          <Home className="w-3.5 h-3.5 mb-0.5" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center">
          <Receipt className="w-3.5 h-3.5 mb-0.5" />
          <span>Expenses</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-3.5 h-3.5 mb-0.5" />
          <span>Bills</span>
        </div>
        <div className="flex flex-col items-center">
          <PieChart className="w-3.5 h-3.5 mb-0.5" />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  );
}

export function AddExpenseMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      {/* Header */}
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Record Expense</h3>
        <p className="text-[10px] text-white/70">Single entry with auto-category detection</p>
      </div>

      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        {/* Amount Input */}
        <div className="bg-white rounded-xl p-3 border border-[#E3E8EB] shadow-2xs text-center">
          <span className="text-[10px] text-[#8A98A0] font-medium uppercase">Expense Amount</span>
          <div className="text-2xl font-bold text-[#101A1E] my-1">$45.00</div>
          <span className="inline-block text-[10px] text-[#0F5F55] bg-[#E4F0EE] px-2 py-0.5 rounded-full font-medium">
            Cash / Wallet
          </span>
        </div>

        {/* Description & Auto Suggestion */}
        <div className="bg-white rounded-xl p-3 border border-[#E3E8EB] shadow-2xs space-y-2">
          <div>
            <label className="text-[10px] font-semibold text-[#5A6B72] block">Description</label>
            <div className="p-2 bg-[#F8FAFB] rounded-lg border border-[#E3E8EB] text-[11px] font-medium text-[#101A1E] mt-0.5">
              Weekly farmer&apos;s market groceries
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-[#5A6B72] block mb-1">
              Category (Auto-detected: Groceries)
            </label>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded-md bg-[#0F5F55] text-white text-[10px] font-medium flex items-center gap-1">
                <ShoppingBag className="w-2.5 h-2.5" /> Groceries
              </span>
              <span className="px-2 py-1 rounded-md bg-[#EEF2F4] text-[#5A6B72] text-[10px]">
                Utilities
              </span>
              <span className="px-2 py-1 rounded-md bg-[#EEF2F4] text-[#5A6B72] text-[10px]">
                Transport
              </span>
              <span className="px-2 py-1 rounded-md bg-[#EEF2F4] text-[#5A6B72] text-[10px]">
                Dining
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Item Prompt */}
        <div className="bg-[#E4F0EE] border border-[#A7D2CC] rounded-xl p-2.5 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 text-[#0F5F55] font-medium">
            <Layers className="w-3.5 h-3.5 shrink-0" />
            <span>Multiple receipt items?</span>
          </div>
          <span className="font-semibold text-[#0F5F55] underline">Switch to Multi-Item</span>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#0F5F55] text-white py-2.5 rounded-xl font-semibold shadow-xs flex items-center justify-center gap-1.5 mt-auto">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Save to September Ledger</span>
        </button>
      </div>
    </div>
  );
}

export function MultiItemMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Multi-Item Receipt Entry</h3>
        <p className="text-[10px] text-white/70">Split one store receipt into distinct categories</p>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs">
          <div className="flex items-center justify-between text-[11px] font-bold pb-1.5 border-b border-[#F4F6F7]">
            <span>Receipt: Supercenter Store</span>
            <span className="text-[#0F5F55]">Total: $78.40</span>
          </div>

          {/* Items */}
          <div className="space-y-1.5 mt-2">
            <div className="p-1.5 rounded-lg bg-[#F8FAFB] border border-[#E3E8EB] flex items-center justify-between">
              <div>
                <div className="font-medium text-[10px]">1. Milk, Eggs, Produce</div>
                <div className="text-[9px] text-[#0F5F55] font-semibold">Category: Groceries</div>
              </div>
              <span className="font-bold text-[#101A1E]">$32.50</span>
            </div>

            <div className="p-1.5 rounded-lg bg-[#F8FAFB] border border-[#E3E8EB] flex items-center justify-between">
              <div>
                <div className="font-medium text-[10px]">2. Detergent & Cleaning</div>
                <div className="text-[9px] text-[#B7791F] font-semibold">Category: Household</div>
              </div>
              <span className="font-bold text-[#101A1E]">$18.90</span>
            </div>

            <div className="p-1.5 rounded-lg bg-[#F8FAFB] border border-[#E3E8EB] flex items-center justify-between">
              <div>
                <div className="font-medium text-[10px]">3. Cat Food & Treats</div>
                <div className="text-[9px] text-[#5A6B72] font-semibold">Category: Pets</div>
              </div>
              <span className="font-bold text-[#101A1E]">$27.00</span>
            </div>
          </div>

          <button className="w-full mt-2 py-1.5 border border-dashed border-[#CFD7DC] rounded-lg text-[10px] font-medium text-[#5A6B72] flex items-center justify-center gap-1 hover:bg-[#F4F6F7]">
            <Plus className="w-3 h-3" /> Add Another Item
          </button>
        </div>

        <div className="p-2 bg-white rounded-xl border border-[#E3E8EB] text-[10px] text-[#5A6B72]">
          💡 Each item updates its respective category budget independently!
        </div>

        <button className="w-full bg-[#0F5F55] text-white py-2 rounded-xl font-semibold shadow-xs flex items-center justify-center gap-1.5 mt-auto">
          <CheckCircle2 className="w-3.5 h-3.5" /> Save 3 Split Items
        </button>
      </div>
    </div>
  );
}

export function AnalyticsMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Spending Analytics</h3>
        <p className="text-[10px] text-white/70">Real-time on-device calculations</p>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-2.5 rounded-xl border border-[#E3E8EB] shadow-2xs">
            <span className="text-[9px] text-[#8A98A0] font-semibold uppercase">Daily Average</span>
            <div className="text-base font-bold text-[#101A1E] mt-0.5">$47.33</div>
            <span className="text-[9px] text-[#157A5F]">Within budget target</span>
          </div>

          <div className="bg-white p-2.5 rounded-xl border border-[#E3E8EB] shadow-2xs">
            <span className="text-[9px] text-[#8A98A0] font-semibold uppercase">Top Category</span>
            <div className="text-base font-bold text-[#101A1E] mt-0.5">Groceries</div>
            <span className="text-[9px] text-[#5A6B72]">38% of total spend</span>
          </div>
        </div>

        {/* Category Breakdown Bars */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs">
          <span className="text-[11px] font-bold text-[#101A1E] block mb-2">Category Distribution</span>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[10px] font-medium mb-0.5">
                <span>Groceries ($540.00)</span>
                <span className="font-bold text-[#0F5F55]">38%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
                <div className="h-full bg-[#0F5F55] rounded-full w-[38%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] font-medium mb-0.5">
                <span>Utilities ($280.00)</span>
                <span className="font-bold text-[#B7791F]">20%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
                <div className="h-full bg-[#B7791F] rounded-full w-[20%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] font-medium mb-0.5">
                <span>Housing & Rent ($420.00)</span>
                <span className="font-bold text-[#2E6F8E]">30%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
                <div className="h-full bg-[#2E6F8E] rounded-full w-[30%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] font-medium mb-0.5">
                <span>Transport & Fuel ($180.00)</span>
                <span className="font-bold text-[#5A6B72]">12%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
                <div className="h-full bg-[#5A6B72] rounded-full w-[12%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Largest Transaction */}
        <div className="bg-[#E4F0EE] rounded-xl p-2 border border-[#A7D2CC] text-[10px] flex items-center justify-between">
          <span className="text-[#0F5F55] font-medium">Largest Spend:</span>
          <span className="font-bold text-[#0F5F55]">$420.00 (Rent Installment)</span>
        </div>
      </div>
    </div>
  );
}

export function BillsMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Recurring Bills</h3>
        <p className="text-[10px] text-white/70">Never miss an obligation or due date</p>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {/* Bill 1: Due soon */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-[11px] block">High-Speed Fiber Internet</span>
              <span className="text-[9px] text-[#5A6B72] flex items-center gap-1 mt-0.5">
                <Clock className="w-2.5 h-2.5 text-[#B7791F]" /> Due in 2 days (Oct 1)
              </span>
            </div>
            <div className="text-right">
              <span className="font-bold text-[#101A1E] block">$60.00</span>
              <span className="text-[9px] font-semibold text-[#B7791F] bg-[#FDF3E1] px-1.5 py-0.5 rounded-sm">
                Due Soon
              </span>
            </div>
          </div>
          <button className="w-full mt-2 bg-[#0F5F55] text-white py-1 rounded-lg text-[10px] font-semibold">
            Mark as Paid ($60.00)
          </button>
        </div>

        {/* Bill 2: Paid */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs opacity-90">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-[11px] block">Home Insurance</span>
              <span className="text-[9px] text-[#157A5F] flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-2.5 h-2.5" /> Paid on Sept 15
              </span>
            </div>
            <div className="text-right">
              <span className="font-bold text-[#101A1E] block">$110.00</span>
              <span className="text-[9px] font-semibold text-[#157A5F] bg-[#E2F3EE] px-1.5 py-0.5 rounded-sm">
                Paid
              </span>
            </div>
          </div>
        </div>

        {/* Bill 3: Water Utility */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-[11px] block">City Water & Trash</span>
              <span className="text-[9px] text-[#5A6B72] flex items-center gap-1 mt-0.5">
                <Clock className="w-2.5 h-2.5" /> Due Oct 12
              </span>
            </div>
            <div className="text-right">
              <span className="font-bold text-[#101A1E] block">$42.00</span>
              <span className="text-[9px] text-[#8A98A0]">Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BudgetsMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Budgets & Limits</h3>
        <p className="text-[10px] text-white/70">Category and monthly spending targets</p>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {/* Overall Monthly Budget */}
        <div className="bg-white rounded-xl p-3 border border-[#E3E8EB] shadow-2xs">
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-[10px] text-[#8A98A0] font-semibold uppercase">Overall Budget</span>
            <span className="text-[10px] font-semibold text-[#157A5F]">$580.00 Remaining</span>
          </div>
          <div className="text-base font-bold text-[#101A1E]">$1,420 / $2,000</div>
          <div className="w-full h-2 bg-[#EEF2F4] rounded-full overflow-hidden mt-1.5">
            <div className="h-full bg-[#0F5F55] rounded-full w-[71%]" />
          </div>
        </div>

        {/* Category Limits */}
        <div className="bg-white rounded-xl p-2.5 border border-[#E3E8EB] shadow-2xs space-y-2">
          <span className="text-[11px] font-bold text-[#101A1E] block">Category Budgets</span>
          <div>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="font-medium">Groceries</span>
              <span className="text-[#5A6B72]">$540 / $600 (90%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
              <div className="h-full bg-[#B7791F] rounded-full w-[90%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="font-medium">Dining Out</span>
              <span className="text-[#5A6B72]">$110 / $200 (55%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
              <div className="h-full bg-[#0F5F55] rounded-full w-[55%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="font-medium">Transport</span>
              <span className="text-[#5A6B72]">$180 / $250 (72%)</span>
            </div>
            <div className="w-full h-1.5 bg-[#EEF2F4] rounded-full overflow-hidden">
              <div className="h-full bg-[#0F5F55] rounded-full w-[72%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PdfReportMockup() {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F4F6F7] text-[#101A1E] text-xs">
      <div className="bg-[#0F5F55] text-white px-4 pt-3 pb-3">
        <h3 className="text-sm font-semibold">Print-Ready PDF Export</h3>
        <p className="text-[10px] text-white/70">Generated 100% on-device via expo-print</p>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        {/* PDF Paper Sheet representation */}
        <div className="bg-white rounded-lg p-3 border border-[#CFD7DC] shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-[#E3E8EB] pb-2">
            <div>
              <div className="font-bold text-[11px] text-[#101A1E]">MONTHLY FINANCIAL REPORT</div>
              <div className="text-[9px] text-[#5A6B72]">September 1 – September 30, 2026</div>
            </div>
            <FileText className="w-4 h-4 text-[#0F5F55]" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-[9px] text-center bg-[#F8FAFB] p-1.5 rounded-md">
            <div>
              <div className="text-[#8A98A0]">Income</div>
              <div className="font-bold text-[#157A5F]">$2,800</div>
            </div>
            <div>
              <div className="text-[#8A98A0]">Expenses</div>
              <div className="font-bold text-[#B4453C]">$1,420</div>
            </div>
            <div>
              <div className="text-[#8A98A0]">Balance</div>
              <div className="font-bold text-[#0F5F55]">+$1,380</div>
            </div>
          </div>

          <div className="text-[8px] text-[#8A98A0] font-mono leading-tight space-y-1">
            <div className="flex justify-between">
              <span>Groceries (14 txs)</span>
              <span>$540.00</span>
            </div>
            <div className="flex justify-between">
              <span>Housing & Utilities (3 txs)</span>
              <span>$700.00</span>
            </div>
            <div className="flex justify-between">
              <span>Transport & Fuel (4 txs)</span>
              <span>$180.00</span>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div className="bg-[#E4F0EE] p-2.5 rounded-xl border border-[#A7D2CC] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#0F5F55] font-semibold">
            <Share2 className="w-3.5 h-3.5" />
            <span>Android Share Sheet Ready</span>
          </div>
          <span className="text-[9px] bg-white px-2 py-0.5 rounded-md text-[#0F5F55] font-medium border border-[#A7D2CC]">
            PDF & CSV
          </span>
        </div>
      </div>
    </div>
  );
}

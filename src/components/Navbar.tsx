'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { CURRENT_RELEASE } from '@/config/release';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'App Preview', href: '#preview' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F4F6F7]/90 backdrop-blur-md border-b border-[#E3E8EB] shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs ring-1 ring-[#101A1E]/10 bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/brand/app-icon.png"
                alt="Home Money Icon"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg tracking-tight text-[#101A1E]">
                  Home Money
                </span>
                <span className="text-[11px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded-sm bg-[#E4F0EE] text-[#0F5F55]">
                  {CURRENT_RELEASE.version}
                </span>
              </div>
              <span className="text-[11px] text-[#5A6B72] hidden sm:inline -mt-0.5">
                Simple Android Expense Ledger
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#5A6B72] hover:text-[#101A1E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0F5F55] hover:bg-[#0A4740] rounded-xl shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] focus-visible:ring-offset-2"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0F5F55] rounded-lg shadow-xs"
              aria-label="Download APK"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5A6B72] hover:text-[#101A1E] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0F5F55] rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F6F7] border-b border-[#E3E8EB] px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#101A1E] hover:bg-[#EEF2F4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E3E8EB] flex flex-col gap-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#0F5F55] rounded-xl shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download APK ({CURRENT_RELEASE.apkFileSize})</span>
            </a>
            <a
              href={CURRENT_RELEASE.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#5A6B72] hover:text-[#101A1E]"
            >
              <span>View Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

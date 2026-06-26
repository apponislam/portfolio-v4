'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { X, Menu, ArrowRight } from 'lucide-react';
import detailsData from '@/data/details.json';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#eaeaea]/90 backdrop-blur-md pt-7 pb-4">


      {/* 1. Centered Top Notch stuck to the ceiling */}
      {detailsData.availableForHire && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-1 rounded-b-2xl flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#007fff] animate-pulse" />
          Available for hire
        </div>
      )}


      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="font-bold text-base sm:text-lg tracking-tight text-neutral-900 flex items-center gap-1.5">
            <span className="w-4 h-4 bg-black rounded-sm transform rotate-45 inline-block" />
            {detailsData.name}
          </Link>
        </div>


        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Contact Button */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 text-xs font-bold px-6 py-2.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Contact
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>


          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-800 dark:text-neutral-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f0f0f0] dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 shadow-xl flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider ${
                  isActive ? 'text-black' : 'text-neutral-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="border-t border-neutral-250 pt-4 flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider text-black"
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}

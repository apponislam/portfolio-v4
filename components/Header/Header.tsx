'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { X, Menu, ArrowRight } from 'lucide-react';
import { Norican } from 'next/font/google';
import detailsData from '@/data/details.json';

const norican = Norican({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];


  return (
    <>
      {/* 1. Centered Top Notch stuck to the ceiling */}
      {detailsData.availableForHire && (
        <div
          className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-8 py-1 rounded-b-3xl flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 ${
            scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#007fff] animate-pulse" />
          Available for hire
        </div>
      )}

      <header
          className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'top-0 w-full rounded-none bg-[#eaeaea]/90 backdrop-blur-md py-4 border-b border-neutral-300/50 shadow-sm'
            : 'top-8 w-[92%] md:w-[88%] max-w-6xl rounded-4xl border border-neutral-300/50 bg-[#eaeaea]/85 backdrop-blur-md py-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Left Side: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className={`${norican.className} text-2xl sm:text-3xl text-neutral-900 leading-none`}>
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
                  className={`group relative text-xs font-semibold uppercase tracking-wider py-1.5 transition-colors ${
                    isActive ? 'text-black font-bold' : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-black transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Contact Button */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <a
                href={detailsData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 text-xs font-bold px-6 py-2.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Hire me
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-800 hover:text-black transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-[#eaeaea]/95 backdrop-blur-md p-6 shadow-xl flex flex-col gap-5 z-50 transition-all duration-300 ${
              scrolled
                ? 'border-b border-neutral-300/50 rounded-none'
                : 'border border-neutral-300/50 rounded-4xl mt-2 w-[95%] mx-auto'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-black font-bold' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="border-t border-neutral-300/50 pt-4 flex flex-col gap-4">
              <a
                href={detailsData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider text-black hover:text-neutral-700 transition-colors"
              >
                Hire me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

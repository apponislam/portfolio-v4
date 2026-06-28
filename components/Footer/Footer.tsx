'use client';

import Link from 'next/link';
import { Mail, ArrowUp, ArrowRight, Phone, MapPin } from 'lucide-react';
import detailsData from '@/data/details.json';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials, email, location } = detailsData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#eaeaea] border-t border-neutral-300/60 pt-20 pb-12 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top CTA & Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-300/40">
          
          {/* Left Column: Big Bold CTA */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-neutral-900 leading-none">
              Let's create <br />
              something great.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-md">
              Have an idea, project, or opportunity you'd like to discuss? Drop me a message and let's make it happen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-black text-white hover:bg-neutral-800 text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Columns: Links & Info */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
            
            {/* Navigation Sitemap */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Navigation</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/" className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Channels */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Connect</h4>
              <ul className="flex flex-col gap-2.5">
                {socials.github && (
                  <li>
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  </li>
                )}
                {socials.linkedin && (
                  <li>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-neutral-600 hover:text-[#0A66C2] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </li>
                )}
                {socials.twitter && (
                  <li>
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5"
                    >
                      <XIcon className="w-4 h-4" />
                      X
                    </a>
                  </li>
                )}
                {socials.facebook && (
                  <li>
                    <a
                      href={socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-neutral-600 hover:text-[#0866FF] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5"
                    >
                      <FacebookIcon className="w-4 h-4" />
                      Facebook
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Contact Email/Status */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Direct</h4>
              <div className="flex flex-col gap-2.5">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5 break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-neutral-500" />
                    {email}
                  </a>
                )}
                {detailsData.phone && (
                  <a
                    href={`tel:${detailsData.phone}`}
                    className="text-sm font-semibold text-neutral-600 hover:text-black transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-neutral-500" />
                    {detailsData.phone}
                  </a>
                )}
                {location && (
                  <div className="text-sm font-semibold text-neutral-600 inline-flex items-center gap-1.5 py-0.5">
                    <MapPin className="w-4 h-4 shrink-0 text-neutral-500" />
                    {location}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-xs font-bold tracking-tight text-neutral-900">
              {detailsData.name}
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="text-[11px] text-neutral-500">
              &copy; {currentYear} • All rights reserved.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-neutral-900 border border-neutral-300/40 rounded-full hover:scale-105 active:scale-95 text-neutral-600 hover:text-white shadow-sm transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

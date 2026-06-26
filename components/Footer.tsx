import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

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

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials, email } = portfolioData.details;

  return (
    <footer className="w-full bg-[#f9fafb] border-t border-neutral-100 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Info Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <p className="font-semibold text-sm tracking-tight text-neutral-800">
            {portfolioData.details.name}
          </p>
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-neutral-100 rounded-full hover:scale-105 active:scale-95 transition-all text-neutral-600 hover:text-black"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-neutral-100 rounded-full hover:scale-105 active:scale-95 transition-all text-neutral-600 hover:text-black"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-neutral-100 rounded-full hover:scale-105 active:scale-95 transition-all text-neutral-600 hover:text-black"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          )}
          {socials.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white border border-neutral-100 rounded-full hover:scale-105 active:scale-95 transition-all text-neutral-600 hover:text-black"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-white border border-neutral-100 rounded-full hover:scale-105 active:scale-95 transition-all text-neutral-600 hover:text-black"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </footer>

  );
}


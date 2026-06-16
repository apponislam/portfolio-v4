"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-auto border-t border-brand-primary/10 bg-brand-bg relative z-10">
      {/* Top Footer Details */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Brand */}
        <div className="md:col-span-5 space-y-4">
          <a href="#home" className="text-xl font-bold tracking-tight text-brand-dark flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-brand-primary animate-pulse-slow"></span>
            <span>Appon</span>
            <span className="gradient-text font-black">.dev</span>
          </a>
          <p className="text-sm text-brand-dark/75 leading-relaxed max-w-sm">
            High-performance full stack software engineering. Designing clean backend microservices and modern, accessible frontend web interfaces.
          </p>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-black text-brand-dark/50 uppercase tracking-widest">
            Sitemap
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-dark/75 hover:text-brand-primary transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-black text-brand-dark/50 uppercase tracking-widest">
            Connect
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
              aria-label="Twitter Profile"
            >
              <TwitterIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:appon.islam@example.com"
              className="p-2.5 rounded-xl bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 md:px-12 py-8 border-t border-brand-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-dark/60 font-medium">
        <p>&copy; {new Date().getFullYear()} Appon Islam. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Designed with ❤️ using Next.js & Tailwind</span>
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-colors flex items-center gap-1 shadow-sm"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

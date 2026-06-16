"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-4 shadow-md bg-opacity-80"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="text-2xl font-bold tracking-tight text-brand-dark flex items-center gap-1.5"
        >
          <span className="h-3.5 w-3.5 rounded-full bg-brand-primary animate-pulse-slow"></span>
          <span>Appon</span>
          <span className="gradient-text font-black">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1.5 ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-primary"
                    : "text-brand-dark/75 hover:text-brand-primary"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
                )}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-brand-bg font-semibold text-sm hover:bg-brand-secondary transition-all hover:scale-105 shadow-sm hover:shadow-brand-secondary/20"
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-brand-accent/50 text-brand-dark transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-brand-primary/10 shadow-lg bg-opacity-95 flex flex-col p-6 gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-base font-semibold py-2 px-4 rounded-xl transition-all ${
                activeSection === link.href.slice(1)
                  ? "bg-brand-primary text-brand-bg"
                  : "text-brand-dark hover:bg-brand-accent/40"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl bg-brand-primary text-brand-bg font-semibold text-base shadow-md hover:bg-brand-secondary transition-colors"
          >
            Hire Me <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}

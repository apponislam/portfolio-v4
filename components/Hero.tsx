"use client";

import Image from "next/image";
import { Mail, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export default function Hero() {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center container mx-auto overflow-hidden">
            {/* Decorative Blur Orbs */}
            <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-secondary/15 blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-brand-accent/30 blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in-up">
                    {/* Greeting Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/60 border border-brand-primary/10 text-brand-primary text-sm font-semibold tracking-wider uppercase">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
                        </span>
                        Available for Freelance & Full-time
                    </div>

                    {/* Main Headings */}
                    <div className="space-y-3">
                        <p className="text-lg md:text-xl font-medium text-brand-primary">Hello, I am</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-brand-dark leading-tight">
                            Appon <span className="gradient-text">Islam</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary/80">Full Stack Developer</h2>
                    </div>

                    {/* Bio Description */}
                    <p className="text-base sm:text-lg leading-relaxed text-brand-dark/75 max-w-xl">I engineer scalable backend APIs, responsive frontends, and automated cloud deployments. My passion is turning complex architectural problems into elegant, production-ready, and user-centric web products.</p>

                    {/* Call to Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")} className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-brand-bg font-bold shadow-md hover:bg-brand-secondary hover:shadow-brand-secondary/20 transition-all hover:scale-102">
                            Explore My Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary/5 transition-all">
                            Let&apos;s Connect <Mail size={18} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4">
                        <span className="text-sm font-semibold text-brand-dark/50 mr-2 uppercase tracking-wider">Follow Me:</span>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary hover:scale-110 shadow-sm transition-all" aria-label="GitHub Profile">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary hover:scale-110 shadow-sm transition-all" aria-label="LinkedIn Profile">
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary hover:scale-110 shadow-sm transition-all" aria-label="Twitter Profile">
                            <TwitterIcon className="w-5 h-5" />
                        </a>
                        <a href="mailto:appon.islam@example.com" className="p-3 rounded-full bg-white border border-brand-primary/10 text-brand-dark hover:text-brand-primary hover:border-brand-primary hover:scale-110 shadow-sm transition-all" aria-label="Email Me">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Avatar Graphic */}
                <div className="lg:col-span-5 flex justify-center relative">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                        {/* Spinning Gradient Ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-secondary/40 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-2 border-brand-primary/20" />

                        {/* Background Blob decoration */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-brand-accent to-brand-secondary/45 -rotate-6 animate-pulse-slow" />

                        {/* Main Image Container */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-brand-bg shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <Image src="/developer_avatar.png" alt="Appon Islam - Full Stack Developer" fill sizes="(max-w-768px) 280px, 384px" priority className="object-cover" />
                        </div>

                        {/* Quick Badges */}
                        <div className="absolute -top-2 -right-2 bg-white px-4 py-2.5 rounded-2xl border border-brand-primary/15 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                            <div className="p-1.5 rounded-lg bg-brand-accent/50 text-brand-primary font-bold text-xs">React</div>
                            <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary font-bold text-xs">Node.js</div>
                        </div>

                        <div className="absolute -bottom-2 -left-2 bg-white px-4 py-2.5 rounded-2xl border border-brand-primary/15 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                            <div className="p-1.5 rounded-lg bg-brand-accent/50 text-brand-primary font-bold text-xs">Docker</div>
                            <div className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary font-bold text-xs">AWS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

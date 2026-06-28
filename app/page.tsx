import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, GraduationCap, Award, ExternalLink, Briefcase } from "lucide-react";
import detailsData from "@/data/details.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import educationData from "@/data/education.json";
import certificatesData from "@/data/certificates.json";
import experienceData from "@/data/experience.json";
import { getBrandIcon } from "@/components/BrandIcons/BrandIcons";

export default function Home() {
    const details = detailsData;
    const projects = projectsData;
    const skills = skillsData;
    const education = educationData;
    const certificates = certificatesData;
    const experience = experienceData;

    // Limit featured projects to first 3
    const featuredProjects = projects.slice(0, 3);

    // Highlight some skills for the scrolling marquee ticker
    const tickerSkills = [...skills.map((s) => s.name), ...skills.map((s) => s.name)];

    return (
        <main className="w-full flex flex-col items-center">
            {/* 1. Hero Section */}
            <section className="container mx-auto px-4 md:px-8 pt-28 pb-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Typography & Actions */}
                <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
                    {details.availableForHire && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300/40 rounded-full text-xs font-semibold text-neutral-600 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for new opportunities
                        </div>
                    )}

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-none">{details.name}</h1>

                    <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-neutral-500">{details.title}</h2>

                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-medium">{details.bio}</p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-black py-4 px-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider">
                            Get in touch
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300/60 text-xs font-black py-4 px-8 rounded-2xl shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider">
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Right Column: Profile Picture Container */}
                <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[40px] overflow-hidden border border-neutral-300/50 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group">
                        <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                            <Image src="/appon.png" alt={details.name} width={384} height={384} priority className="object-cover w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Infinite Sliding Skills Marquee */}
            <section className="w-full border-y border-neutral-100 bg-white py-8 overflow-hidden mb-24">
                <div className="relative w-full overflow-x-hidden flex items-center">
                    <div className="animate-marquee flex gap-12 text-sm font-semibold text-neutral-400 tracking-wider uppercase whitespace-nowrap">
                        {tickerSkills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span>{skill}</span>
                                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Featured Projects Section */}
            <section className="container mx-auto px-4 md:px-8 mb-24">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2">Featured Work</h2>
                        <p className="text-neutral-500 text-sm">A curated selection of core applications built with modern tools.</p>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors mt-4 md:mt-0 group">
                        View all projects
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.id}`} className="group flex flex-col bg-white border border-neutral-300/40 rounded-[32px] p-4 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-500">
                            {/* Image Container */}
                            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 rounded-2xl border border-neutral-200">
                                <Image src={project.image} alt={project.title} width={800} height={450} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white/90 backdrop-blur-sm text-[9px] font-black text-black px-4 py-2 rounded-full uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">View Case Study</span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] text-neutral-400 font-extrabold tracking-widest uppercase">Project &bull; {project.year}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-2 transition-colors flex items-center justify-between">
                                    {project.title}
                                    <ArrowUpRight className="w-4 h-4 text-neutral-900 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </h3>
                                <p className="text-neutral-500 text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold text-neutral-700 rounded-lg">
                                            <span className="shrink-0">{getBrandIcon(tag, "w-3.5 h-3.5")}</span>
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold text-neutral-400 rounded-lg">+{project.tags.length - 3} more</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 4. Work Experience Section */}
            <section className="container mx-auto px-4 md:px-8 mb-24">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
                        <Briefcase className="w-7 h-7 text-neutral-800" />
                        Work Experience
                    </h2>
                    <p className="text-neutral-500 text-sm font-semibold">My professional career path and past employment history.</p>
                </div>

                <div className="flex flex-col gap-6">
                    {experience.map((work, index) => {
                        const normCompany = work.company.toLowerCase();
                        let styles = {
                            glow: "hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]",
                            borderColor: "hover:border-neutral-300/60",
                            accentLine: "bg-neutral-400",
                            gradientBg: "hover:bg-gradient-to-br hover:from-neutral-50/50 hover:to-neutral-100/30",
                            logoBg: "bg-neutral-100 group-hover:bg-neutral-200/50",
                            logoBorder: "border-neutral-200/50 group-hover:border-neutral-300/60",
                            logo: <Briefcase className="w-6 h-6 text-neutral-400" />,
                            badge: "bg-neutral-50 text-neutral-600 border-neutral-200/60",
                            accentGlow: "group-hover:text-neutral-900",
                        };

                        if (normCompany.includes("ibox")) {
                            styles = {
                                glow: "hover:shadow-[0_25px_60px_rgba(14,165,233,0.08)]",
                                borderColor: "hover:border-sky-500/30",
                                accentLine: "bg-sky-500",
                                gradientBg: "hover:bg-gradient-to-br hover:from-sky-50/[0.03] hover:to-indigo-50/[0.03]",
                                logoBg: "bg-transparent",
                                logoBorder: "border-transparent",
                                logo: (
                                    <svg className="w-12 h-12 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
                                        <rect width="48" height="48" rx="14" fill="#0F172A" />
                                        <rect x="1" y="1" width="46" height="46" rx="13" stroke="#334155" strokeWidth="1" />
                                        <path d="M24 11l12 7v13.5L24 38.5 12 31.5V18l12-7z" fill="url(#ibox-grad)" opacity="0.15" />
                                        <path d="M24 11l12 7-12 7-12-7 12-7z" stroke="#0EA5E9" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M12 18v13.5l12 7V25l-12-7z" stroke="#38BDF8" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M36 18v13.5l-12 7V25l12-7z" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="ibox-grad" x1="12" y1="11" x2="36" y2="38.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0EA5E9" />
                                                <stop offset="1" stopColor="#6366F1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                ),
                                badge: "bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-100/50",
                                accentGlow: "group-hover:text-sky-600",
                            };
                        } else if (normCompany.includes("aura")) {
                            styles = {
                                glow: "hover:shadow-[0_25px_60px_rgba(139,92,246,0.08)]",
                                borderColor: "hover:border-violet-500/30",
                                accentLine: "bg-violet-500",
                                gradientBg: "hover:bg-gradient-to-br hover:from-violet-50/[0.03] hover:to-fuchsia-50/[0.03]",
                                logoBg: "bg-transparent",
                                logoBorder: "border-transparent",
                                logo: (
                                    <svg className="w-12 h-12 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
                                        <rect width="48" height="48" rx="14" fill="#0F172A" />
                                        <rect x="1" y="1" width="46" height="46" rx="13" stroke="#334155" strokeWidth="1" />
                                        <circle cx="24" cy="24" r="12" fill="url(#aura-radial)" />
                                        <circle cx="20" cy="20" r="10" fill="url(#aura-radial2)" opacity="0.8" />
                                        <defs>
                                            <radialGradient id="aura-radial" cx="50%" cy="50%" r="50%">
                                                <stop stopColor="#8B5CF6" />
                                                <stop offset="1" stopColor="#EC4899" stopOpacity="0" />
                                            </radialGradient>
                                            <radialGradient id="aura-radial2" cx="50%" cy="50%" r="50%">
                                                <stop stopColor="#3B82F6" />
                                                <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                ),
                                badge: "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-100/50",
                                accentGlow: "group-hover:text-violet-600",
                            };
                        } else if (normCompany.includes("designlabs") || normCompany.includes("design")) {
                            styles = {
                                glow: "hover:shadow-[0_25px_60px_rgba(249,115,22,0.08)]",
                                borderColor: "hover:border-orange-500/30",
                                accentLine: "bg-orange-500",
                                gradientBg: "hover:bg-gradient-to-br hover:from-orange-50/[0.03] hover:to-amber-50/[0.03]",
                                logoBg: "bg-transparent",
                                logoBorder: "border-transparent",
                                logo: (
                                    <svg className="w-12 h-12 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
                                        <rect width="48" height="48" rx="14" fill="#0F172A" />
                                        <rect x="1" y="1" width="46" height="46" rx="13" stroke="#334155" strokeWidth="1" />
                                        <path d="M16 14h10c5.523 0 10 4.477 10 10s-4.477 10-10 10H16V14z" stroke="url(#design-grad)" strokeWidth="3" strokeLinejoin="round" />
                                        <circle cx="22" cy="24" r="4" fill="#F59E0B" />
                                        <path d="M16 14v20M21 14h5" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="design-grad" x1="16" y1="14" x2="36" y2="34" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F97316" />
                                                <stop offset="1" stopColor="#F59E0B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                ),
                                badge: "bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-100/50",
                                accentGlow: "group-hover:text-orange-500",
                            };
                        }

                        return (
                            <div key={index} className={`group relative border border-neutral-300/40 rounded-[36px] bg-white/60 backdrop-blur-md p-6 sm:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-500 ${styles.borderColor} ${styles.glow} ${styles.gradientBg} hover:-translate-y-1`}>
                                {/* Left colored decorative timeline stripe */}
                                <div className={`absolute left-0 top-10 bottom-10 w-[4px] rounded-r-full ${styles.accentLine} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                                {/* Left Column: Logo & Timeline/Badge details */}
                                <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:w-44 shrink-0">
                                    <div className={`w-20 h-20 rounded-[28px] ${styles.logoBg} border ${styles.logoBorder} flex items-center justify-center shadow-sm group-hover:rotate-3 transition-all duration-500`}>{styles.logo}</div>

                                    <span className={`inline-flex items-center px-4 py-1.5 border rounded-full text-[10px] font-black uppercase tracking-widest ${styles.badge} transition-all duration-300 md:mt-4`}>{work.duration}</span>
                                </div>

                                {/* Right Column: Text & Descriptions */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 mb-1.5 leading-snug group-hover:text-black transition-colors flex items-center justify-between">
                                        {work.role}
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 text-neutral-800" />
                                    </h3>

                                    <p className="text-xs sm:text-sm font-black text-neutral-500 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                                        <span className={`transition-colors ${styles.accentGlow}`}>{work.company}</span>
                                        <span className="text-neutral-300">&bull;</span>
                                        <span className="text-neutral-400 font-bold">{work.location}</span>
                                    </p>

                                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">{work.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. Education & Academic Background */}
            <section className="container mx-auto px-4 md:px-8 mb-24">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
                        <GraduationCap className="w-7 h-7 text-neutral-800" />
                        Education
                    </h2>
                    <p className="text-neutral-500 text-sm font-semibold">Academic milestones and studies in software engineering.</p>
                </div>

                <div className="flex flex-col gap-6">
                    {education.map((edu, index) => {
                        const normInst = edu.institution.toLowerCase();
                        let styles = {
                            glow: "hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]",
                            borderColor: "hover:border-neutral-300/60",
                            accentLine: "bg-neutral-400",
                            gradientBg: "hover:bg-gradient-to-br hover:from-neutral-50/50 hover:to-neutral-100/30",
                            logoBg: "bg-neutral-100 group-hover:bg-neutral-200/50",
                            logoBorder: "border-neutral-200/50 group-hover:border-neutral-300/60",
                            logo: <GraduationCap className="w-6 h-6 text-neutral-400" />,
                            badge: "bg-neutral-50 text-neutral-600 border-neutral-200/60",
                            accentGlow: "group-hover:text-neutral-900",
                        };

                        if (normInst.includes("dhaka")) {
                            styles = {
                                glow: "hover:shadow-[0_25px_60px_rgba(0,104,56,0.08)]",
                                borderColor: "hover:border-[#006838]/30",
                                accentLine: "bg-[#006838]",
                                gradientBg: "hover:bg-gradient-to-br hover:from-[#006838]/[0.02] hover:to-[#F9A01B]/[0.02]",
                                logoBg: "bg-emerald-50/80 group-hover:bg-emerald-100/40",
                                logoBorder: "border-emerald-100 group-hover:border-emerald-200/40",
                                logo: (
                                    <svg className="w-12 h-12 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="22" fill="#006838" />
                                        <circle cx="24" cy="24" r="20" stroke="#F9A01B" strokeWidth="1.5" />
                                        <circle cx="24" cy="24" r="16" fill="#E21F26" />
                                        <circle cx="24" cy="24" r="15" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 1.5" />
                                        <path d="M24 18c-1.5-1.5-3.5-2-5.5-2H14v10h4.5c1.8 0 3.2.7 4.5 1.2 1.3-.5 2.7-1.2 4.5-1.2H32V16h-4.5c-2 .5-4 1-5.5 2z" fill="#FFFFFF" stroke="#000" strokeWidth="0.5" strokeLinejoin="round" />
                                        <line x1="24" y1="18" x2="24" y2="27.5" stroke="#000" strokeWidth="0.8" />
                                        <path d="M24 33c-1-1.5-2.5-2.5-3.5-2.5 1.5-.4 3-1.5 3.5-3 .5 1.5 2 2.6 3.5 3-1 0-2.5 1-3.5 2.5z" fill="#F9A01B" />
                                    </svg>
                                ),
                                badge: "bg-[#006838]/5 text-[#006838] border-[#006838]/10 group-hover:bg-[#006838]/10",
                                accentGlow: "group-hover:text-[#006838]",
                            };
                        } else if (normInst.includes("science")) {
                            styles = {
                                glow: "hover:shadow-[0_25px_60px_rgba(37,99,235,0.08)]",
                                borderColor: "hover:border-blue-500/30",
                                accentLine: "bg-blue-600",
                                gradientBg: "hover:bg-gradient-to-br hover:from-blue-50/[0.03] hover:to-cyan-50/[0.03]",
                                logoBg: "bg-blue-50/80 group-hover:bg-blue-100/40",
                                logoBorder: "border-blue-100 group-hover:border-blue-200/40",
                                logo: (
                                    <svg className="w-12 h-12 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="22" fill="#006A4E" />
                                        <circle cx="24" cy="24" r="20" stroke="#F42A41" strokeWidth="1.5" />
                                        <circle cx="24" cy="24" r="16" fill="#FFFFFF" />
                                        <ellipse cx="24" cy="24" rx="10" ry="3.5" stroke="#3B82F6" strokeWidth="1.2" transform="rotate(30 24 24)" />
                                        <ellipse cx="24" cy="24" rx="10" ry="3.5" stroke="#3B82F6" strokeWidth="1.2" transform="rotate(150 24 24)" />
                                        <ellipse cx="24" cy="24" rx="10" ry="3.5" stroke="#3B82F6" strokeWidth="1.2" transform="rotate(90 24 24)" />
                                        <circle cx="15.5" cy="19" r="1.2" fill="#3B82F6" />
                                        <circle cx="32.5" cy="19" r="1.2" fill="#3B82F6" />
                                        <circle cx="24" cy="14" r="1.2" fill="#3B82F6" />
                                        <path d="M23 18h2v3.5h-2V18z" fill="#EF4444" />
                                        <path d="M20 27.5l2.5-5.5h3l2.5 5.5c.3.6-.1 1.5-.8 1.5H20.8c-.7 0-1.1-.9-.8-1.5z" fill="#EF4444" opacity="0.85" />
                                    </svg>
                                ),
                                badge: "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100/50",
                                accentGlow: "group-hover:text-blue-600",
                            };
                        }

                        return (
                            <div key={index} className={`group relative border border-neutral-300/40 rounded-[36px] bg-white/60 backdrop-blur-md p-6 sm:p-10 flex flex-col md:flex-row gap-6 md:gap-10 transition-all duration-500 ${styles.borderColor} ${styles.glow} ${styles.gradientBg} hover:-translate-y-1`}>
                                {/* Left colored decorative timeline stripe */}
                                <div className={`absolute left-0 top-10 bottom-10 w-[4px] rounded-r-full ${styles.accentLine} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                                {/* Left Column: Logo & Timeline/Badge details */}
                                <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:w-44 shrink-0">
                                    <div className={`w-20 h-20 rounded-[28px] ${styles.logoBg} border ${styles.logoBorder} flex items-center justify-center shadow-sm group-hover:rotate-3 transition-all duration-500`}>{styles.logo}</div>

                                    <span className={`inline-flex items-center px-4 py-1.5 border rounded-full text-[10px] font-black uppercase tracking-widest ${styles.badge} transition-all duration-300 md:mt-4`}>{edu.duration}</span>
                                </div>

                                {/* Right Column: Text & Descriptions */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 mb-1.5 leading-snug group-hover:text-black transition-colors flex items-center justify-between">
                                        {edu.degree}
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 text-neutral-800" />
                                    </h3>

                                    <p className="text-xs sm:text-sm font-black text-neutral-500 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                                        <span className={`transition-colors ${styles.accentGlow}`}>{edu.institution}</span>
                                        <span className="text-neutral-300">&bull;</span>
                                        <span className="text-neutral-400 font-bold">{edu.field}</span>
                                    </p>

                                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">{edu.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 5. Certificates Section */}
            <section className="container mx-auto px-4 md:px-8 mb-24">
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
                        <Award className="w-7 h-7 text-neutral-800" />
                        Certifications
                    </h2>
                    <p className="text-neutral-500 text-sm font-semibold">Industry accomplishments and technical certifications.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => {
                        const normIssuer = cert.issuer.toLowerCase();
                        let styles = {
                            glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
                            borderColor: "hover:border-neutral-400/40",
                            bgClass: "bg-white",
                            logo: <Award className="w-5 h-5 text-neutral-400" />,
                            accentLine: "bg-neutral-400",
                            badge: "bg-neutral-50 text-neutral-500 border-neutral-200",
                        };

                        if (normIssuer.includes("aws") || normIssuer.includes("amazon")) {
                            styles = {
                                glow: "hover:shadow-[0_12px_40px_rgba(255,153,0,0.12)]",
                                borderColor: "hover:border-[#FF9900]/40",
                                bgClass: "bg-white",
                                logo: getBrandIcon("aws", "w-6 h-6"),
                                accentLine: "bg-[#FF9900]",
                                badge: "bg-[#FF9900]/5 text-[#FF9900] border-[#FF9900]/10",
                            };
                        } else if (normIssuer.includes("vercel")) {
                            styles = {
                                glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]",
                                borderColor: "hover:border-neutral-800/40",
                                bgClass: "bg-white",
                                logo: getBrandIcon("vercel", "w-5 h-5"),
                                accentLine: "bg-black",
                                badge: "bg-neutral-100 text-neutral-900 border-neutral-200",
                            };
                        } else if (normIssuer.includes("meta") || normIssuer.includes("coursera")) {
                            styles = {
                                glow: "hover:shadow-[0_12px_40px_rgba(0,129,251,0.12)]",
                                borderColor: "hover:border-[#0081FB]/40",
                                bgClass: "bg-white",
                                logo: getBrandIcon(normIssuer.includes("meta") ? "meta" : "coursera", "w-6 h-6"),
                                accentLine: "bg-[#0081FB]",
                                badge: "bg-[#0081FB]/5 text-[#0081FB] border-[#0081FB]/10",
                            };
                        }

                        return (
                            <div key={index} className={`group relative ${styles.bgClass} border border-neutral-300/40 rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-sm transition-all duration-500 ${styles.borderColor} ${styles.glow} hover:-translate-y-1.5`}>
                                {/* Accent decoration line */}
                                <div className={`absolute top-0 left-8 right-8 h-[3px] rounded-b-full ${styles.accentLine} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                                <div>
                                    {/* Top Bar with Brand Logo and Date Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-200/50 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-500 shadow-sm">{styles.logo}</div>
                                        <span className={`inline-flex items-center px-3 py-1 border rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.badge}`}>{cert.date}</span>
                                    </div>

                                    {/* Title and Issuer */}
                                    <h3 className="font-black text-neutral-900 text-base sm:text-lg mb-1 leading-snug group-hover:text-black transition-colors">{cert.title}</h3>
                                    <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-8">{cert.issuer}</p>
                                </div>

                                {/* Verification link */}
                                {cert.credentialUrl && (
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-neutral-700 hover:text-black transition-colors group/link mt-auto pt-4 border-t border-neutral-100/60">
                                        Verify Credential
                                        <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

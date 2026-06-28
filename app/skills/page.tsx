import type { Metadata } from "next";
import skillsData from "@/data/skills.json";

export const metadata: Metadata = {
    title: "Skills & Expertise",
    description: "A comprehensive look at the technologies, languages, databases, and frameworks that Appon Islam works with.",
};
import { Code, Server, Wrench, Layout, MessageSquare, Brain, Users, CheckCircle, Lightbulb } from "lucide-react";

interface SkillStyle {
    icon: React.ReactNode;
    glow: string;
    borderColor: string;
}

// Brand-specific SVG icons with native colors for maximum visual appeal
const skillStyles: Record<string, SkillStyle> = {
    "React / Next.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]",
        borderColor: "hover:border-[#61DAFB]/50",
        icon: (
            <svg className="w-8 h-8 transition-all group-hover:rotate-180 duration-1200 ease-out text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        ),
    },
    TypeScript: {
        glow: "hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)]",
        borderColor: "hover:border-[#3178C6]/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:scale-110 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M0 0h24v24H0V0zm22.034 18.5c-.015-1.124-.585-2.205-1.74-2.82-1.155-.615-2.52-.75-3.51-.15-.99.6-1.53 1.575-1.53 2.76 0 2.22 2.655 2.85 4.305 3.39 1.65.54 2.205.975 2.205 1.695 0 .84-.705 1.35-1.875 1.35-1.17 0-1.89-.525-2.22-1.5-.03-.105-.135-.18-.24-.18h-2.19c-.075 0-.15.045-.18.12-.345 1.095-.06 2.085.81 2.955.87.87 2.16 1.32 3.825 1.32 1.95 0 3.315-.6 4.14-1.8.825-1.2.945-2.655.87-3.99zm-8.88-5.37h-3.03V24H7.47v-10.87H4.44V10.87h8.715v2.26z"
                    transform="scale(0.8) translate(3, 3)"
                />
            </svg>
        ),
    },
    "Tailwind CSS": {
        glow: "hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)]",
        borderColor: "hover:border-[#38BDF8]/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:translate-x-0.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        ),
    },
    "HTML5 / CSS3": {
        glow: "hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)]",
        borderColor: "hover:border-[#E34F26]/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:scale-105 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.038 8.002H8.384l-.234-2.62h9.124L17.5 3.013H5.275l.707 7.913h9.006l-.307 3.425-2.701.733-2.731-.738-.174-1.952H6.55l.342 3.827 5.088 1.412 5.069-1.406.634-7.143z" />
            </svg>
        ),
    },
    "Node.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(34,197,94,0.15)]",
        borderColor: "hover:border-[#215732]/50",
        icon: (
            <svg className="w-7.5 h-7.5 transition-all group-hover:scale-105 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0L2.4 5.5v11L12 24l9.6-5.5v-11L12 0zm5.5 15.6c-.3.5-.8.9-1.4 1.1-.6.2-1.3.3-2.1.3-1.1 0-2-.3-2.7-.9-.7-.6-1-1.4-1.1-2.5h2.3c.1.5.2.9.5 1.2.3.3.7.4 1.2.4.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8 0-.4-.2-.7-.5-.9-.3-.2-.9-.4-1.7-.7-1.1-.3-1.8-.7-2.3-1.2-.5-.5-.7-1.2-.7-2.1 0-.9.3-1.6 1-2.2.7-.6 1.6-.9 2.7-.9 1 0 1.8.2 2.4.7.6.5.9 1.1 1 1.9h-2.3c0-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.4 0-.6.1-.8.3-.2.2-.3.4-.3.7 0 .3.1.5.4.7.3.2.8.4 1.5.6 1.1.3 1.9.7 2.4 1.2.5.5.7 1.2.7 2.1-.1.9-.4 1.6-1.1 2.2z"
                    transform="scale(0.85) translate(2, 2)"
                />
            </svg>
        ),
    },
    "Go (Golang)": {
        glow: "hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]",
        borderColor: "hover:border-[#00ADD8]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:-translate-y-px text-[#00ADD8]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.07 7.74c0-1.86-1.3-3.32-3.83-3.32-2.58 0-3.9 1.48-3.9 3.32 0 1.83 1.32 3.3 3.9 3.3 2.53 0 3.83-1.47 3.83-3.3zm2.53 0c0 3.12-2.35 5.56-6.36 5.56-3.97 0-6.43-2.44-6.43-5.56C3.81 4.62 6.27 2.2 10.24 2.2c4.01 0 6.36 2.42 6.36 5.54zm5.54.54h-5.01c-.06.75-.41 1.29-1.07 1.63-.59.3-1.39.43-2.34.43-2.12 0-3.33-1.05-3.55-2.73h12.16c.14-.85.18-1.57.18-2.22 0-3.15-2.16-5.58-6.19-5.58-4.02 0-6.48 2.44-6.48 5.56s2.43 5.56 6.48 5.56c3.21 0 5.43-1.51 5.82-2.65z" />
            </svg>
        ),
    },
    "Express.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(64,64,64,0.15)]",
        borderColor: "hover:border-neutral-500/50",
        icon: <Server className="w-7 h-7 text-neutral-800 transition-transform group-hover:scale-105" />,
    },
    PostgreSQL: {
        glow: "hover:shadow-[0_12px_40px_rgba(51,102,153,0.15)]",
        borderColor: "hover:border-[#336699]/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:scale-105 text-[#336699]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
    },
    MongoDB: {
        glow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)]",
        borderColor: "hover:border-[#13aa52]/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:scale-110 text-[#13aa52]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.15 10.3c-.6-.7-1.6-1.5-2.7-1.9V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.9c-1.1.4-2.1 1.2-2.7 1.9-1 1.1-1.6 2.6-1.6 4.3 0 4.5 4.5 9 4.5 9.2 0 .1.1.2.2.2s.2-.1.2-.2c0-.2 4.5-4.7 4.5-9.2 0-1.7-.5-3.2-1.4-4.3zm-3.7 7.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm0-3.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
            </svg>
        ),
    },
    "Prisma ORM": {
        glow: "hover:shadow-[0_12px_40px_rgba(15,23,42,0.15)]",
        borderColor: "hover:border-[#0c344b]/50",
        icon: (
            <svg className="w-7 h-7 text-[#0c344b] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l11.4 6.6v10.8L12 24 .6 17.4V6.6L12 0zm0 3.3L3.8 8v8l8.2 4.7 8.2-4.7V8L12 3.3zm0 3.5l4.7 2.7v5.4L12 17.6l-4.7-2.7V9.5L12 6.8z" />
            </svg>
        ),
    },
    "Docker & Kubernetes": {
        glow: "hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]",
        borderColor: "hover:border-[#2496ed]/50",
        icon: (
            <svg className="w-7.5 h-7.5 transition-transform group-hover:-translate-y-px text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M13.983 8.871h-2.111c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H8.979c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H6.086c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H.3c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893-2.892h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H2.527c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H5.42c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H8.313c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 2.892h2.111c.086 0 .153-.074.153-.163V6.541c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V8.65c0 .089.067.163.153.163zm2.893-5.785h2.111c.086 0 .153-.074.153-.163V.814c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V2.92c0 .089.067.163.153.163zm10.29 8.163c.277-.076.541-.186.793-.327.917-.514 1.488-1.503 1.488-2.585 0-2.482-2.02-4.502-4.502-4.502-.455 0-.895.068-1.312.196v1.28c.404-.108.815-.164 1.229-.164 1.83 0 3.32 1.49 3.32 3.32 0 .783-.414 1.506-1.077 1.888a3.344 3.344 0 01-1.636.432H0c.046.262.112.523.2.783h18.232c.328 0 .647-.074.941-.219z"
                    transform="scale(0.85) translate(2, 2)"
                />
            </svg>
        ),
    },
    "AWS (S3, EC2, Lambda)": {
        glow: "hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)]",
        borderColor: "hover:border-[#FF9900]/50",
        icon: (
            <svg className="w-7.5 h-7.5 transition-transform group-hover:scale-105 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.7 5.9v12.2L12 24l10.3-5.9V5.9L12 0zm0 3.5c1.8 0 3.4.6 4.7 1.6L5.1 16.7c-1-1.3-1.6-2.9-1.6-4.7 0-4.6 3.7-8.3 8.5-8.3zm0 17c-1.8 0-3.4-.6-4.7-1.6L18.9 7.3c1 1.3 1.6 2.9 1.6 4.7 0 4.6-3.7 8.3-8.5 8.3z" />
            </svg>
        ),
    },
    "Git & GitHub Actions": {
        glow: "hover:shadow-[0_12px_40px_rgba(240,80,51,0.15)]",
        borderColor: "hover:border-[#F05033]/50",
        icon: (
            <svg className="w-7 h-7 transition-all group-hover:rotate-12 text-[#F05033]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.747 2.748c.644-.228 1.387-.089 1.902.428.621.621.621 1.628 0 2.25-.62.62-1.628.62-2.25 0-.52-.52-.656-1.267-.423-1.91l-2.73-2.73c-.265.08-.544.12-.823.12-.55 0-1.08-.22-1.48-.62-.486-.485-.635-1.18-.46-1.78l-2.6-2.6L.453 10.93c-.604.604-.604 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.427-10.477c.604-.605.604-1.583 0-2.187z"
                    transform="scale(0.85) translate(2, 2)"
                />
            </svg>
        ),
    },
    "Vercel & Netlify": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
        borderColor: "hover:border-black/60",
        icon: (
            <svg className="w-6.5 h-6.5 transition-transform group-hover:-translate-y-px text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0L12 1.475L24 22.525Z" />
            </svg>
        ),
    },
    "Responsive Design": {
        glow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)]",
        borderColor: "hover:border-blue-400/50",
        icon: <Layout className="w-7 h-7 text-blue-500 transition-transform group-hover:scale-105" />,
    },
    "REST & GraphQL APIs": {
        glow: "hover:shadow-[0_12px_40px_rgba(219,39,119,0.15)]",
        borderColor: "hover:border-pink-400/50",
        icon: (
            <svg className="w-7 h-7 transition-transform group-hover:scale-110 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
        ),
    },
    "Effective Communication": {
        glow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)]",
        borderColor: "hover:border-emerald-400/50",
        icon: <MessageSquare className="w-7 h-7 text-emerald-500 transition-transform group-hover:-translate-y-0.5" />,
    },
    "Analytical Problem Solving": {
        glow: "hover:shadow-[0_12px_40px_rgba(239,68,68,0.15)]",
        borderColor: "hover:border-red-400/50",
        icon: <Brain className="w-7 h-7 text-red-500 transition-transform group-hover:scale-105" />,
    },
    "Team Collaboration": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]",
        borderColor: "hover:border-indigo-400/50",
        icon: <Users className="w-7 h-7 text-indigo-500 transition-transform group-hover:scale-105" />,
    },
    "Agile & Scrum": {
        glow: "hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)]",
        borderColor: "hover:border-amber-400/50",
        icon: <CheckCircle className="w-7 h-7 text-amber-500 transition-all group-hover:rotate-12" />,
    },
    "Framer Motion": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-7 h-7 text-black transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24L12 12h12v12H0l12-12H0V0z"/>
            </svg>
        ),
    },
    "HTML5 Canvas API": {
        glow: "hover:shadow-[0_12px_40px_rgba(241,101,41,0.15)]",
        borderColor: "hover:border-[#F16529]/50",
        icon: (
            <svg className="w-7 h-7 text-[#F16529] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03345 19.1749 5.09333 19.4312 5.01168 19.6663C4.83151 20.1852 4.7709 20.7392 4.84659 21.2891C4.91979 21.8206 5.42168 22 5.95857 22H12Z" fill="none"/>
                <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/>
                <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/>
                <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/>
                <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"/>
            </svg>
        ),
    },
    "Recharts": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,196,159,0.15)]",
        borderColor: "hover:border-[#00C49F]/50",
        icon: (
            <svg className="w-7 h-7 text-[#00C49F] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
        ),
    },
    "Socket.io": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-7 h-7 text-black transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.88 17.52h-3.76l1.2-4.8h-2.12l3.4-6.8h3.16l-1.32 5.2h2.24l-3.8 6.4z"/>
            </svg>
        ),
    },
    "Redis Pub/Sub": {
        glow: "hover:shadow-[0_12px_40px_rgba(163,36,34,0.15)]",
        borderColor: "hover:border-[#A32422]/50",
        icon: (
            <svg className="w-7 h-7 text-[#A32422] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    "GraphQL Client": {
        glow: "hover:shadow-[0_12px_40px_rgba(225,0,152,0.15)]",
        borderColor: "hover:border-[#E10098]/50",
        icon: (
            <svg className="w-7 h-7 text-[#E10098] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L21 7V17L12 22L3 17V7L12 2z"/>
                <circle cx="12" cy="2" r="2" fill="currentColor"/>
                <circle cx="21" cy="7" r="2" fill="currentColor"/>
                <circle cx="21" cy="17" r="2" fill="currentColor"/>
                <circle cx="12" cy="22" r="2" fill="currentColor"/>
                <circle cx="3" cy="17" r="2" fill="currentColor"/>
                <circle cx="3" cy="7" r="2" fill="currentColor"/>
                <path d="M12 2l9 15H3L12 2zM12 22L3 7h18L12 22z" strokeWidth="1"/>
            </svg>
        ),
    },
    "WebSockets API": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]",
        borderColor: "hover:border-indigo-400/50",
        icon: (
            <svg className="w-7 h-7 text-indigo-500 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <polyline points="7 23 3 19 7 15"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
        ),
    },
    "Stripe API": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,91,255,0.15)]",
        borderColor: "hover:border-[#635BFF]/50",
        icon: (
            <svg className="w-7 h-7 text-[#635BFF] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.962 10.98c0-1.252-.962-1.782-2.483-1.782-1.614 0-3.328.618-4.468 1.258l-.946-2.585c1.472-.756 3.738-1.218 5.922-1.218 3.992 0 6.22 1.956 6.22 5.176 0 4.148-3.376 5.485-5.972 6.554-1.892.774-2.502 1.233-2.502 2.05 0 1.05.976 1.545 2.518 1.545 1.896 0 3.79-.696 4.966-1.39l.947 2.6c-1.464.912-3.926 1.39-6.273 1.39-4.218 0-6.495-2.023-6.495-5.267 0-4.048 3.208-5.328 6.012-6.467 1.767-.714 2.506-1.18 2.506-2.066z" transform="scale(0.8) translate(3, 3)"/>
            </svg>
        ),
    },
    "Shopify Storefront API": {
        glow: "hover:shadow-[0_12px_40px_rgba(149,191,71,0.15)]",
        borderColor: "hover:border-[#95BF47]/50",
        icon: (
            <svg className="w-7 h-7 text-[#95BF47] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.8 6.4L17 2.3c-.2-.4-.6-.7-1-.7H8c-.4 0-.8.3-1 .7L5.2 6.4H1.5c-.8 0-1.5.7-1.5 1.5v12.3c0 1.2.9 2.2 2.1 2.2h19.8c1.2 0 2.1-1 2.1-2.2V7.9c0-.8-.7-1.5-1.5-1.5h-3.7zM8.5 3.1h7l1.4 3.3H7.1l1.4-3.3zm11.9 16.6c0 .4-.3.7-.7.7H4.3c-.4 0-.7-.3-.7-.7V9.5h16.8v10.2z"/>
            </svg>
        ),
    },
    "Firebase": {
        glow: "hover:shadow-[0_12px_40px_rgba(255,166,17,0.15)]",
        borderColor: "hover:border-[#FFA611]/50",
        icon: (
            <svg className="w-7.5 h-7.5 transition-transform group-hover:scale-105 text-[#FFA611]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.89 15.75L5.43 5.86c.07-.46.42-.82.88-.87.46-.05.9.19 1.09.61L9 8.25l2.89-5.46c.21-.4.65-.63 1.1-.57.45.06.82.38.93.82l2.19 8.76L3.89 15.75z" fill="#FFA000"/>
                <path d="M20.09 17.78L12.01 22 3.89 15.75l8.12 4.22c.39.31.63.79.57 1.29l1.77-15.65c.06-.5-.43-.88-.93-.94-.5-.06-.99.17-1.2.63l-1.76 3.4z" fill="#F57C00"/>
                <path d="M12.01 18.5L3.89 15.75l1.54-9.89 6.58 12.14 8.08-9.88.57 1.29-8.66 11.23z" fill="#FFCA28"/>
            </svg>
        ),
    },
};

const getCategoryFallback = (category: string) => {
    switch (category) {
        case "Frontend":
            return <Layout className="w-5 h-5 text-neutral-400" />;
        case "Backend":
            return <Server className="w-5 h-5 text-neutral-400" />;
        case "DevOps & Tools":
            return <Wrench className="w-5 h-5 text-neutral-400" />;
        case "Soft Skills":
            return <Lightbulb className="w-5 h-5 text-neutral-400" />;
        default:
            return <Code className="w-5 h-5 text-neutral-400" />;
    }
};

export default function Skills() {
    const skills = skillsData;
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <main className="container mx-auto px-4 md:px-8 pt-6 pb-20 flex flex-col min-h-screen">
            {/* Header */}
            <div className="mb-16 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300/40 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4 shadow-sm">
                    <Wrench className="w-3 h-3 text-neutral-400" /> Stack & Expertise
                </div>
                <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-900 mb-4 leading-none">Skills & Expertise</h1>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-semibold">A modular collection of technologies, languages, databases, environment setups, and soft skills that I practice daily.</p>
            </div>

            {/* Grid of Categories */}
            <div className="flex flex-col gap-14">
                {categories.map((category) => {
                    const categorySkills = skills.filter((s) => s.category === category);

                    return (
                        <div key={category} className="flex flex-col gap-6">
                            {/* Category Title */}
                            <h2 className="text-xs font-black tracking-widest text-neutral-400 uppercase border-b border-neutral-300/50 pb-3 flex items-center gap-2">
                                {getCategoryFallback(category)}
                                {category}
                            </h2>

                            {/* Skills Grid - Responsive Grid with Square Bento Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                {categorySkills.map((skill) => {
                                    const style = skillStyles[skill.name] || {
                                        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]",
                                        borderColor: "hover:border-neutral-400/50",
                                        icon: getCategoryFallback(category),
                                    };

                                    return (
                                        <div key={skill.name} className={`group relative aspect-square bg-white border border-neutral-300/40 rounded-3xl p-5 shadow-sm hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer ${style.borderColor} ${style.glow}`}>
                                            {/* Icon inside a centered rounded container frame */}
                                            <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-200/50 group-hover:bg-white group-hover:scale-105 transition-all duration-500 shadow-sm mb-4">{style.icon}</div>

                                            {/* Centered Title */}
                                            <div className="flex flex-col items-center">
                                                <span className="font-bold text-neutral-800 text-xs sm:text-sm tracking-tight transition-colors duration-300 group-hover:text-black line-clamp-2">{skill.name}</span>
                                                <span className="text-[8px] text-neutral-400 font-extrabold uppercase tracking-widest mt-1">{category === "Soft Skills" ? "Ability" : "Core Tech"}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

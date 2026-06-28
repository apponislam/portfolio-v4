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
    React: {
        glow: "hover:shadow-[0_12px_40px_rgba(97,218,251,0.15)]",
        borderColor: "hover:border-[#61DAFB]/50",
        icon: (
            <svg className="w-8 h-8 text-[#61DAFB] transition-all group-hover:rotate-180 duration-1000" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        ),
    },
    "Next.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="90" fill="#000000" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.344L137.492 160.628C141.745 159.709 145.761 158.643 149.508 157.52Z" fill="#FFFFFF" />
                <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
            </svg>
        ),
    },
    JavaScript: {
        glow: "hover:shadow-[0_12px_40px_rgba(247,223,30,0.15)]",
        borderColor: "hover:border-[#F7DF1E]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill="#000000" />
            </svg>
        ),
    },
    TypeScript: {
        glow: "hover:shadow-[0_12px_40px_rgba(49,120,198,0.15)]",
        borderColor: "hover:border-[#3178C6]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path d="M0 0h256v256H0V0z" fill="#3178C6" />
                <path d="M136.917 111.492H97.714V224H78.36v-112.508H39.157V94.887h97.76v16.605zm80.208 51.528c0 23.473-14.747 34.168-38.307 34.168-23.013 0-36.467-12.433-41.996-24.873l18.423-10.597c4.606 8.75 10.593 16.598 23.951 16.598 12.436 0 18.882-5.986 18.882-15.19 0-25.795-39.231-18.424-39.231-52.506 0-19.805 13.819-32.325 35.056-32.325 19.344 0 31.36 9.213 36.425 21.65l-17.5 10.6c-4.145-8.293-9.21-12.894-19.817-12.894-10.594 0-15.659 4.605-15.659 12.894 0 22.107 39.227 16.593 39.227 50.175z" fill="#FFFFFF" />
            </svg>
        ),
    },
    "Tailwind CSS": {
        glow: "hover:shadow-[0_12px_40px_rgba(56,189,248,0.15)]",
        borderColor: "hover:border-[#38BDF8]/50",
        icon: (
            <svg className="w-8 h-8 text-[#38BDF8] fill-current transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        ),
    },
    Redux: {
        glow: "hover:shadow-[0_12px_40px_rgba(118,74,188,0.15)]",
        borderColor: "hover:border-[#764ABC]/50",
        icon: (
            <svg className="w-8 h-8 text-[#764ABC] fill-current transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.64-8.874a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zm7.28 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zm-3.64 3.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
            </svg>
        ),
    },
    "Socket.io Client": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-8 h-8 text-black fill-current transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="currentColor" />
                <path d="M13.88 17.52h-3.76l1.2-4.8h-2.12l3.4-6.8h3.16l-1.32 5.2h2.24l-3.8 6.4z" fill="white" />
            </svg>
        ),
    },
    Recharts: {
        glow: "hover:shadow-[0_12px_40px_rgba(0,196,159,0.15)]",
        borderColor: "hover:border-[#00C49F]/50",
        icon: (
            <svg className="w-8 h-8 text-[#00C49F] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
    },
    Zustand: {
        glow: "hover:shadow-[0_12px_40px_rgba(68,62,56,0.15)]",
        borderColor: "hover:border-[#443E38]/50",
        icon: (
            <svg className="w-8 h-8 text-[#443E38] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v1.17C7.62 6.6 6.36 7.55 5.5 8.85A6 6 0 0 0 4 12v5a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5a6 6 0 0 0-1.5-3.15c-.86-1.3-2.12-2.25-3.5-2.68V5a3 3 0 0 0-3-3z" />
                <circle cx="9" cy="12" r="1" fill="currentColor" />
                <circle cx="15" cy="12" r="1" fill="currentColor" />
                <path d="M10 15c.5.5 1.5.5 2 0" fill="none" />
            </svg>
        ),
    },
    "Framer Motion": {
        glow: "hover:shadow-[0_12px_40px_rgba(255,0,128,0.15)]",
        borderColor: "hover:border-pink-500/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <defs>
                    <linearGradient id="framer-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF0080" />
                        <stop offset="100%" stopColor="#7928CA" />
                    </linearGradient>
                </defs>
                <path d="M0 0h24L12 12h12v12H0l12-12H0V0z" fill="url(#framer-grad-3)" />
            </svg>
        ),
    },
    GSAP: {
        glow: "hover:shadow-[0_12px_40px_rgba(136,206,2,0.15)]",
        borderColor: "hover:border-[#88CE02]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="22" fill="#88CE02" />
                <text x="50" y="68" fill="black" fontSize="54" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">
                    G
                </text>
            </svg>
        ),
    },
    "Shadcn UI": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-8 h-8 text-black transition-transform group-hover:scale-105" viewBox="0 0 256 256" fill="none">
                <g stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M208 128L128 208" />
                    <path d="M192 40L40 192" />
                </g>
            </svg>
        ),
    },
    "Node.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(33,87,50,0.15)]",
        borderColor: "hover:border-[#215732]/50",
        icon: (
            <svg className="w-8 h-8 transition-all group-hover:scale-105 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
            </svg>
        ),
    },
    "Express.js": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-8 h-8 text-black transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
        ),
    },
    PostgreSQL: {
        glow: "hover:shadow-[0_12px_40px_rgba(51,102,153,0.15)]",
        borderColor: "hover:border-[#336699]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105 text-[#336699]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
            </svg>
        ),
    },
    MongoDB: {
        glow: "hover:shadow-[0_12px_40px_rgba(19,170,82,0.15)]",
        borderColor: "hover:border-[#13aa52]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-110 text-[#13aa52]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.15 10.3c-.6-.7-1.6-1.5-2.7-1.9V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.9c-1.1.4-2.1 1.2-2.7 1.9-1 1.1-1.6 2.6-1.6 4.3 0 4.5 4.5 9 4.5 9.2 0 .1.1.2.2.2s.2-.1.2-.2c0-.2 4.5-4.7 4.5-9.2 0-1.7-.5-3.2-1.4-4.3zm-3.7 7.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm0-3.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
            </svg>
        ),
    },
    "Prisma ORM": {
        glow: "hover:shadow-[0_12px_40px_rgba(12,52,75,0.15)]",
        borderColor: "hover:border-[#0c344b]/50",
        icon: (
            <svg className="w-8 h-8 text-[#0c344b] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l11.4 6.6v10.8L12 24 .6 17.4V6.6L12 0zm0 3.3L3.8 8v8l8.2 4.7 8.2-4.7V8L12 3.3zm0 3.5l4.7 2.7v5.4L12 17.6l-4.7-2.7V9.5L12 6.8z" />
            </svg>
        ),
    },
    "Socket.io": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        borderColor: "hover:border-black/50",
        icon: (
            <svg className="w-8 h-8 text-black fill-current transition-transform group-hover:scale-105" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="currentColor" />
                <path d="M13.88 17.52h-3.76l1.2-4.8h-2.12l3.4-6.8h3.16l-1.32 5.2h2.24l-3.8 6.4z" fill="white" />
            </svg>
        ),
    },
    "Redis Pub/Sub": {
        glow: "hover:shadow-[0_12px_40px_rgba(163,36,34,0.15)]",
        borderColor: "hover:border-[#A32422]/50",
        icon: (
            <svg className="w-8 h-8 text-[#A32422] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" />
            </svg>
        ),
    },
    "GraphQL Client": {
        glow: "hover:shadow-[0_12px_40px_rgba(225,0,152,0.15)]",
        borderColor: "hover:border-[#E10098]/50",
        icon: (
            <svg className="w-8 h-8 text-[#E10098] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L21 7V17L12 22L3 17V7L12 2z" />
                <circle cx="12" cy="2" r="2" fill="currentColor" />
                <circle cx="21" cy="7" r="2" fill="currentColor" />
                <circle cx="21" cy="17" r="2" fill="currentColor" />
                <circle cx="12" cy="22" r="2" fill="currentColor" />
                <circle cx="3" cy="17" r="2" fill="currentColor" />
                <circle cx="3" cy="7" r="2" fill="currentColor" />
                <path d="M12 2l9 15H3L12 2zM12 22L3 7h18L12 22z" strokeWidth="1" />
            </svg>
        ),
    },
    "WebSockets API": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]",
        borderColor: "hover:border-indigo-400/50",
        icon: (
            <svg className="w-8 h-8 text-indigo-500 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
        ),
    },
    "Docker & Kubernetes": {
        glow: "hover:shadow-[0_12px_40px_rgba(36,150,237,0.15)]",
        borderColor: "hover:border-[#2496ed]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105 text-[#2496ed]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M13.983 8.871h-2.111c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H8.979c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H6.086c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H.3c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893-2.892h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H2.527c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H5.42c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H8.313c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 2.892h2.111c.086 0 .153-.074.153-.163V6.541c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V8.65c0 .089.067.163.153.163zm2.893-5.785h2.111c.086 0 .153-.074.153-.163V.814c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V2.92c0 .089.067.163.153.163zm10.29 8.163c.277-.076.541-.186.793-.327.917-.514 1.488-1.503 1.488-2.585 0-2.482-2.02-4.502-4.502-4.502-.455 0-.895.068-1.312.196v1.28c.404-.108.815-.164 1.229-.164 1.83 0 3.32 1.49 3.32 3.32 0 .783-.414 1.506-1.077 1.888a3.344 3.344 0 01-1.636.432H0c.046.262.112.523.2.783h18.232c.328 0 .647-.074.941-.219z"
                    transform="scale(0.85) translate(2, 2)"
                />
            </svg>
        ),
    },
    "AWS (S3, EC2, Lambda)": {
        glow: "hover:shadow-[0_12px_40px_rgba(255,153,0,0.15)]",
        borderColor: "hover:border-[#FF9900]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.7 5.9v12.2L12 24l10.3-5.9V5.9L12 0zm0 3.5c1.8 0 3.4.6 4.7 1.6L5.1 16.7c-1-1.3-1.6-2.9-1.6-4.7 0-4.6 3.7-8.3 8.5-8.3zm0 17c-1.8 0-3.4-.6-4.7-1.6L18.9 7.3c1 1.3 1.6 2.9 1.6 4.7 0 4.6-3.7 8.3-8.5 8.3z" />
            </svg>
        ),
    },
    "Git & GitHub Actions": {
        glow: "hover:shadow-[0_12px_40px_rgba(240,80,51,0.15)]",
        borderColor: "hover:border-[#F05033]/50",
        icon: (
            <svg className="w-8 h-8 transition-all group-hover:rotate-12 text-[#F05033]" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.747 2.748c.644-.228 1.387-.089 1.902.428.621.621.621 1.628 0 2.25-.62.62-1.628.62-2.25 0-.52-.52-.656-1.267-.423-1.91l-2.73-2.73c-.265.08-.544.12-.823.12-.55 0-1.08-.22-1.48-.62-.486-.485-.635-1.18-.46-1.78l-2.6-2.6L.453 10.93c-.604.604-.604 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.427-10.477c.604-.605.604-1.583 0-2.187z"
                    transform="scale(0.85) translate(2, 2)"
                />
            </svg>
        ),
    },
    "Vercel & Netlify": {
        glow: "hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        borderColor: "hover:border-black/60",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:-translate-y-px text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0L12 1.475L24 22.525Z" />
            </svg>
        ),
    },
    "Responsive Design": {
        glow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)]",
        borderColor: "hover:border-blue-400/50",
        icon: <Layout className="w-8 h-8 text-blue-500 transition-transform group-hover:scale-105" />,
    },
    "REST & GraphQL APIs": {
        glow: "hover:shadow-[0_12px_40px_rgba(225,0,152,0.15)]",
        borderColor: "hover:border-pink-400/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-110 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L21 7V17L12 22L3 17V7L12 2z" />
                <circle cx="12" cy="2" r="2" fill="currentColor" />
                <circle cx="21" cy="7" r="2" fill="currentColor" />
                <circle cx="21" cy="17" r="2" fill="currentColor" />
                <circle cx="12" cy="22" r="2" fill="currentColor" />
                <circle cx="3" cy="17" r="2" fill="currentColor" />
                <circle cx="3" cy="7" r="2" fill="currentColor" />
                <path d="M12 2l9 15H3L12 2zM12 22L3 7h18L12 22z" strokeWidth="1" />
            </svg>
        ),
    },
    "Effective Communication": {
        glow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)]",
        borderColor: "hover:border-emerald-400/50",
        icon: <MessageSquare className="w-8 h-8 text-emerald-500 transition-transform group-hover:-translate-y-0.5" />,
    },
    "Analytical Problem Solving": {
        glow: "hover:shadow-[0_12px_40px_rgba(239,68,68,0.15)]",
        borderColor: "hover:border-red-400/50",
        icon: <Brain className="w-8 h-8 text-red-500 transition-transform group-hover:scale-105" />,
    },
    "Team Collaboration": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]",
        borderColor: "hover:border-indigo-400/50",
        icon: <Users className="w-8 h-8 text-indigo-500 transition-transform group-hover:scale-105" />,
    },
    "Agile & Scrum": {
        glow: "hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)]",
        borderColor: "hover:border-amber-400/50",
        icon: <CheckCircle className="w-8 h-8 text-amber-500 transition-all group-hover:rotate-12" />,
    },
    "Stripe API": {
        glow: "hover:shadow-[0_12px_40px_rgba(99,91,255,0.15)]",
        borderColor: "hover:border-[#635BFF]/50",
        icon: (
            <svg className="w-8 h-8 text-[#635BFF] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M13.962 10.98c0-1.252-.962-1.782-2.483-1.782-1.614 0-3.328.618-4.468 1.258l-.946-2.585c1.472-.756 3.738-1.218 5.922-1.218 3.992 0 6.22 1.956 6.22 5.176 0 4.148-3.376 5.485-5.972 6.554-1.892.774-2.502 1.233-2.502 2.05 0 1.05.976 1.545 2.518 1.545 1.896 0 3.79-.696 4.966-1.39l.947 2.6c-1.464.912-3.926 1.39-6.273 1.39-4.218 0-6.495-2.023-6.495-5.267 0-4.048 3.208-5.328 6.012-6.467 1.767-.714 2.506-1.18 2.506-2.066z"
                    transform="scale(0.8) translate(3, 3)"
                />
            </svg>
        ),
    },
    "Shopify Storefront API": {
        glow: "hover:shadow-[0_12px_40px_rgba(149,191,71,0.15)]",
        borderColor: "hover:border-[#95BF47]/50",
        icon: (
            <svg className="w-8 h-8 text-[#95BF47] transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.8 6.4L17 2.3c-.2-.4-.6-.7-1-.7H8c-.4 0-.8.3-1 .7L5.2 6.4H1.5c-.8 0-1.5.7-1.5 1.5v12.3c0 1.2.9 2.2 2.1 2.2h19.8c1.2 0 2.1-1 2.1-2.2V7.9c0-.8-.7-1.5-1.5-1.5h-3.7zM8.5 3.1h7l1.4 3.3H7.1l1.4-3.3zm11.9 16.6c0 .4-.3.7-.7.7H4.3c-.4 0-.7-.3-.7-.7V9.5h16.8v10.2z" />
            </svg>
        ),
    },
    Firebase: {
        glow: "hover:shadow-[0_12px_40px_rgba(255,166,17,0.15)]",
        borderColor: "hover:border-[#FFA611]/50",
        icon: (
            <svg className="w-8 h-8 transition-transform group-hover:scale-105 text-[#FFA611]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.89 15.75L5.43 5.86c.07-.46.42-.82.88-.87.46-.05.9.19 1.09.61L9 8.25l2.89-5.46c.21-.4.65-.63 1.1-.57.45.06.82.38.93.82l2.19 8.76L3.89 15.75z" fill="#FFA000" />
                <path d="M20.09 17.78L12.01 22 3.89 15.75l8.12 4.22c.39.31.63.79.57 1.29l1.77-15.65c.06-.5-.43-.88-.93-.94-.5-.06-.99.17-1.2.63l-1.76 3.4z" fill="#F57C00" />
                <path d="M12.01 18.5L3.89 15.75l1.54-9.89 6.58 12.14 8.08-9.88.57 1.29-8.66 11.23z" fill="#FFCA28" />
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

                            {/* Skills Grid - Centered Cards with Descriptions */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {categorySkills.map((skill) => {
                                    const style = skillStyles[skill.name] || {
                                        glow: "hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]",
                                        borderColor: "hover:border-neutral-400/50",
                                        icon: getCategoryFallback(category),
                                    };

                                    return (
                                        <div key={skill.name} className={`group relative bg-white border border-neutral-300/40 rounded-[24px] p-4 sm:p-5 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer aspect-square ${style.borderColor} ${style.glow}`}>
                                            {/* Centered Icon Container */}
                                            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-50 group-hover:bg-white border border-neutral-200 group-hover:border-neutral-300/60 flex items-center justify-center transition-all duration-500 shadow-sm mb-2.5 sm:mb-3">
                                                <div className="scale-90 sm:scale-100 flex items-center justify-center">{style.icon}</div>
                                            </div>

                                            {/* Skill Name */}
                                            <span className="font-extrabold text-neutral-800 text-xs sm:text-sm tracking-tight transition-colors duration-500 group-hover:text-black mb-1">{skill.name}</span>

                                            {/* Description */}
                                            {skill.description && <p className="text-neutral-600 text-[10px] sm:text-xs font-medium leading-relaxed mt-1 transition-colors duration-500 group-hover:text-neutral-800 max-w-[155px] line-clamp-2">{skill.description}</p>}
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

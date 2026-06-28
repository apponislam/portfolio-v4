import React from "react";

// Centralized brand icons with native colors for consistent application styling
export function getBrandIcon(name: string, className = "w-4 h-4") {
    const normName = name.trim().toLowerCase();

    switch (normName) {
        case "github":
            return (
                <svg className={`${className} text-black`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            );
        case "linkedin":
            return (
                <svg className={`${className} text-[#0A66C2]`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            );
        case "facebook":
            return (
                <svg className={`${className} text-[#0866FF]`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            );
        case "twitter":
        case "x":
        case "x.com":
            return (
                <svg className={`${className} text-black`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case "react":
        case "react / next.js":
            return (
                <svg className={`${className} text-[#61DAFB]`} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                    <g stroke="currentColor">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            );
        case "next.js":
        case "next.js 14":
        case "next.js 15":
        case "next.js 14 (app router)":
            return (
                <svg className={className} viewBox="0 0 180 180" fill="none">
                    <circle cx="90" cy="90" r="90" fill="#000000" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.344L137.492 160.628C141.745 159.709 145.761 158.643 149.508 157.52Z" fill="#FFFFFF" />
                    <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
                </svg>
            );
        case "javascript":
        case "js":
            return (
                <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill="#000000" />
                </svg>
            );
        case "typescript":
        case "ts":
            return (
                <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M0 0h256v256H0V0z" fill="#3178C6" />
                    <path d="M136.917 111.492H97.714V224H78.36v-112.508H39.157V94.887h97.76v16.605zm80.208 51.528c0 23.473-14.747 34.168-38.307 34.168-23.013 0-36.467-12.433-41.996-24.873l18.423-10.597c4.606 8.75 10.593 16.598 23.951 16.598 12.436 0 18.882-5.986 18.882-15.19 0-25.795-39.231-18.424-39.231-52.506 0-19.805 13.819-32.325 35.056-32.325 19.344 0 31.36 9.213 36.425 21.65l-17.5 10.6c-4.145-8.293-9.21-12.894-19.817-12.894-10.594 0-15.659 4.605-15.659 12.894 0 22.107 39.227 16.593 39.227 50.175z" fill="#FFFFFF" />
                </svg>
            );
        case "tailwind css":
        case "tailwind css v4":
            return (
                <svg className={`${className} text-[#38BDF8]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
            );
        case "html5 / css3":
        case "html":
        case "css":
        case "html5 css3":
            return (
                <svg className={`${className} text-[#E34F26]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.038 8.002H8.384l-.234-2.62h9.124L17.5 3.013H5.275l.707 7.913h9.006l-.307 3.425-2.701.733-2.731-.738-.174-1.952H6.55l.342 3.827 5.088 1.412 5.069-1.406.634-7.143z" />
                </svg>
            );
        case "node.js":
            return (
                <svg className={`${className} text-[#339933]`} viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 0L2.4 5.5v11L12 24l9.6-5.5v-11L12 0zm5.5 15.6c-.3.5-.8.9-1.4 1.1-.6.2-1.3.3-2.1.3-1.1 0-2-.3-2.7-.9-.7-.6-1-1.4-1.1-2.5h2.3c.1.5.2.9.5 1.2.3.3.7.4 1.2.4.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8 0-.4-.2-.7-.5-.9-.3-.2-.9-.4-1.7-.7-1.1-.3-1.8-.7-2.3-1.2-.5-.5-.7-1.2-.7-2.1 0-.9.3-1.6 1-2.2.7-.6 1.6-.9 2.7-.9 1 0 1.8.2 2.4.7.6.5.9 1.1 1 1.9h-2.3c0-.4-.2-.7-.4-.9-.2-.2-.5-.3-.9-.3-.4 0-.6.1-.8.3-.2.2-.3.4-.3.7 0 .3.1.5.4.7.3.2.8.4 1.5.6 1.1.3 1.9.7 2.4 1.2.5.5.7 1.2.7 2.1-.1.9-.4 1.6-1.1 2.2z"
                        transform="scale(0.85) translate(2, 2)"
                    />
                </svg>
            );
        case "go (golang)":
        case "go":
            return (
                <svg className={`${className} text-[#00ADD8]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.07 7.74c0-1.86-1.3-3.32-3.83-3.32-2.58 0-3.9 1.48-3.9 3.32 0 1.83 1.32 3.3 3.9 3.3 2.53 0 3.83-1.47 3.83-3.3zm2.53 0c0 3.12-2.35 5.56-6.36 5.56-3.97 0-6.43-2.44-6.43-5.56C3.81 4.62 6.27 2.2 10.24 2.2c4.01 0 6.36 2.42 6.36 5.54zm5.54.54h-5.01c-.06.75-.41 1.29-1.07 1.63-.59.3-1.39.43-2.34.43-2.12 0-3.33-1.05-3.55-2.73h12.16c.14-.85.18-1.57.18-2.22 0-3.15-2.16-5.58-6.19-5.58-4.02 0-6.48 2.44-6.48 5.56s2.43 5.56 6.48 5.56c3.21 0 5.43-1.51 5.82-2.65z" />
                </svg>
            );
        case "express.js":
        case "express":
            return (
                <svg className={`${className} text-neutral-800`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            );
        case "postgresql":
            return (
                <svg className={`${className} text-[#336699]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            );
        case "mongodb":
            return (
                <svg className={`${className} text-[#13aa52]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.15 10.3c-.6-.7-1.6-1.5-2.7-1.9V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.9c-1.1.4-2.1 1.2-2.7 1.9-1 1.1-1.6 2.6-1.6 4.3 0 4.5 4.5 9 4.5 9.2 0 .1.1.2.2.2s.2-.1.2-.2c0-.2 4.5-4.7 4.5-9.2 0-1.7-.5-3.2-1.4-4.3zm-3.7 7.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm0-3.3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" />
                </svg>
            );
        case "prisma":
        case "prisma orm":
            return (
                <svg className={`${className} text-[#0c344b]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l11.4 6.6v10.8L12 24 .6 17.4V6.6L12 0zm0 3.3L3.8 8v8l8.2 4.7 8.2-4.7V8L12 3.3zm0 3.5l4.7 2.7v5.4L12 17.6l-4.7-2.7V9.5L12 6.8z" />
                </svg>
            );
        case "docker":
        case "docker & kubernetes":
        case "kubernetes":
            return (
                <svg className={`${className} text-[#2496ed]`} viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M13.983 8.871h-2.111c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H8.979c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H6.086c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893 0H.3c-.086 0-.153.074-.153.163v2.11c0 .088.067.162.153.162h2.111c.086 0 .153-.074.153-.162V9.034c0-.089-.067-.163-.153-.163zm-2.893-2.892h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H2.527c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H5.42c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162H8.313c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 0h2.111c.086 0 .153-.074.153-.163V3.706c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V5.82c0 .089.067.163.153.163zm2.893 2.892h2.111c.086 0 .153-.074.153-.163V6.541c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V8.65c0 .089.067.163.153.163zm2.893-5.785h2.111c.086 0 .153-.074.153-.163V.814c0-.088-.067-.162-.153-.162h-2.111c-.086 0-.153.074-.153.162V2.92c0 .089.067.163.153.163zm10.29 8.163c.277-.076.541-.186.793-.327.917-.514 1.488-1.503 1.488-2.585 0-2.482-2.02-4.502-4.502-4.502-.455 0-.895.068-1.312.196v1.28c.404-.108.815-.164 1.229-.164 1.83 0 3.32 1.49 3.32 3.32 0 .783-.414 1.506-1.077 1.888a3.344 3.344 0 01-1.636.432H0c.046.262.112.523.2.783h18.232c.328 0 .647-.074.941-.219z"
                        transform="scale(0.85) translate(2, 2)"
                    />
                </svg>
            );
        case "aws":
        case "aws (s3, ec2, lambda)":
        case "aws ecs":
            return (
                <svg className={`${className} text-[#FF9900]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L1.7 5.9v12.2L12 24l10.3-5.9V5.9L12 0zm0 3.5c1.8 0 3.4.6 4.7 1.6L5.1 16.7c-1-1.3-1.6-2.9-1.6-4.7 0-4.6 3.7-8.3 8.5-8.3zm0 17c-1.8 0-3.4-.6-4.7-1.6L18.9 7.3c1 1.3 1.6 2.9 1.6 4.7 0 4.6-3.7 8.3-8.5 8.3z" />
                </svg>
            );
        case "git & github actions":
        case "git":
        case "github":
            return (
                <svg className={`${className} text-[#F05033]`} viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.747 2.748c.644-.228 1.387-.089 1.902.428.621.621.621 1.628 0 2.25-.62.62-1.628.62-2.25 0-.52-.52-.656-1.267-.423-1.91l-2.73-2.73c-.265.08-.544.12-.823.12-.55 0-1.08-.22-1.48-.62-.486-.485-.635-1.18-.46-1.78l-2.6-2.6L.453 10.93c-.604.604-.604 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.427-10.477c.604-.605.604-1.583 0-2.187z"
                        transform="scale(0.85) translate(2, 2)"
                    />
                </svg>
            );
        case "vercel":
        case "vercel & netlify":
            return (
                <svg className={`${className} text-black`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0L12 1.475L24 22.525Z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg className={`${className} text-[#0A66C2]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
            );
        case "meta / coursera":
        case "meta":
            return (
                <svg className={`${className} text-[#0081FB]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.8 5.7c-1.3 0-2.6.6-3.5 1.7C14 6.3 12.5 5.7 11 5.7c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4c1.5 0 3-.6 3.8-1.7.9 1.1 2.2 1.7 3.5 1.7 3 0 5.4-2.4 5.4-5.4s-2.4-5.4-5.4-5.4zm0 8.8c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zm-7.8 0c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z" />
                </svg>
            );
        case "coursera":
            return (
                <svg className={`${className} text-[#0056D2]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c4.135 0 7.76-2.1 9.854-5.263l-2.91-1.68C17.472 19.345 14.887 20.4 12 20.4c-4.632 0-8.4-3.768-8.4-8.4s3.768-8.4 8.4-8.4c2.887 0 5.472 1.055 6.944 3.343l2.91-1.68C19.76 2.1 16.135 0 12 0z" />
                </svg>
            );
        case "twitter":
        case "x":
            return (
                <svg className={`${className} text-neutral-900`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case "facebook":
            return (
                <svg className={`${className} text-[#1877F2]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            );
        case "socket.io":
            return (
                <svg className={`${className} text-neutral-900`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.88 17.52h-3.76l1.2-4.8h-2.12l3.4-6.8h3.16l-1.32 5.2h2.24l-3.8 6.4z" />
                </svg>
            );
        case "html5 canvas api":
        case "html5 canvas":
            return (
                <svg className={`${className} text-[#F16529]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03345 19.1749 5.09333 19.4312 5.01168 19.6663C4.83151 20.1852 4.7709 20.7392 4.84659 21.2891C4.91979 21.8206 5.42168 22 5.95857 22H12Z" fill="none" />
                    <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                    <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
                    <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
                    <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
                </svg>
            );
        case "redis":
        case "redis pub/sub":
            return (
                <svg className={`${className} text-[#A32422]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "framer motion":
            return (
                <svg className={`${className} text-black`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0h24L12 12h12v12H0l12-12H0V0z" />
                </svg>
            );
        case "stripe":
        case "stripe api":
            return (
                <svg className={`${className} text-[#635BFF]`} viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M13.962 10.98c0-1.252-.962-1.782-2.483-1.782-1.614 0-3.328.618-4.468 1.258l-.946-2.585c1.472-.756 3.738-1.218 5.922-1.218 3.992 0 6.22 1.956 6.22 5.176 0 4.148-3.376 5.485-5.972 6.554-1.892.774-2.502 1.233-2.502 2.05 0 1.05.976 1.545 2.518 1.545 1.896 0 3.79-.696 4.966-1.39l.947 2.6c-1.464.912-3.926 1.39-6.273 1.39-4.218 0-6.495-2.023-6.495-5.267 0-4.048 3.208-5.328 6.012-6.467 1.767-.714 2.506-1.18 2.506-2.066z"
                        transform="scale(0.8) translate(3, 3)"
                    />
                </svg>
            );
        case "graphql":
        case "graphql client":
            return (
                <svg className={`${className} text-[#E10098]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L21 7V17L12 22L3 17V7L12 2z" />
                    <circle cx="12" cy="2" r="2" fill="currentColor" />
                    <circle cx="21" cy="7" r="2" fill="currentColor" />
                    <circle cx="21" cy="17" r="2" fill="currentColor" />
                    <circle cx="12" cy="22" r="2" fill="currentColor" />
                    <circle cx="3" cy="17" r="2" fill="currentColor" />
                    <circle cx="3" cy="7" r="2" fill="currentColor" />
                    <path d="M12 2l9 15H3L12 2zM12 22L3 7h18L12 22z" strokeWidth="1" />
                </svg>
            );
        case "shopify":
        case "shopify storefront api":
            return (
                <svg className={`${className} text-[#95BF47]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.8 6.4L17 2.3c-.2-.4-.6-.7-1-.7H8c-.4 0-.8.3-1 .7L5.2 6.4H1.5c-.8 0-1.5.7-1.5 1.5v12.3c0 1.2.9 2.2 2.1 2.2h19.8c1.2 0 2.1-1 2.1-2.2V7.9c0-.8-.7-1.5-1.5-1.5h-3.7zM8.5 3.1h7l1.4 3.3H7.1l1.4-3.3zm11.9 16.6c0 .4-.3.7-.7.7H4.3c-.4 0-.7-.3-.7-.7V9.5h16.8v10.2z" />
                </svg>
            );
        case "firebase":
        case "firebase authentication":
        case "firestore database":
            return (
                <svg className={`${className} text-[#FFA611]`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.89 15.75L5.43 5.86c.07-.46.42-.82.88-.87.46-.05.9.19 1.09.61L9 8.25l2.89-5.46c.21-.4.65-.63 1.1-.57.45.06.82.38.93.82l2.19 8.76L3.89 15.75z" fill="#FFA000" />
                    <path d="M20.09 17.78L12.01 22 3.89 15.75l8.12 4.22c.39.31.63.79.57 1.29l1.77-15.65c.06-.5-.43-.88-.93-.94-.5-.06-.99.17-1.2.63l-1.76 3.4z" fill="#F57C00" />
                    <path d="M12.01 18.5L3.89 15.75l1.54-9.89 6.58 12.14 8.08-9.88.57 1.29-8.66 11.23z" fill="#FFCA28" />
                </svg>
            );
        case "recharts":
            return (
                <svg className={`${className} text-[#00C49F]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            );
        case "websockets":
        case "websockets api":
            return (
                <svg className={`${className} text-indigo-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
            );
        default:
            // Fallback code/bracket icon
            return (
                <svg className={`${className} text-neutral-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            );
    }
}

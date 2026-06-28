<p align="center">
  <img src="public/avatar.png" width="120" height="120" style="border-radius: 50%;" alt="Appon Islam" />
</p>

<h1 align="center">Appon Islam — Portfolio v4</h1>

<p align="center">
  <strong>A premium, high-performance developer portfolio built with Next.js 16 & React 19</strong>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT" /></a>
</p>

---

## ✨ Overview

A meticulously crafted developer portfolio featuring smooth scroll animations, a bento-grid skills showcase with pixel-perfect brand SVG icons, interactive project case studies, and a functional contact form — all rendered server-side for instant load times and flawless SEO.

---

## 🖼️ Features

| Feature | Description |
|---|---|
| **Hero Section** | Dynamic introduction with avatar, animated headline, and CTA buttons |
| **Project Showcase** | Full-page project detail views with image galleries, tech stacks, and live/GitHub links |
| **Bento Skills Grid** | Categorized skill cards with official brand SVG icons and hover glow effects |
| **Education & Certs** | Timeline-style academic history and certification cards |
| **Work Experience** | Professional experience section with role details |
| **Contact Form** | MongoDB-backed contact form with real-time validation |
| **Smooth Scrolling** | Lenis-powered buttery-smooth page scrolling |
| **Responsive Design** | Fluid layouts optimized for all screen sizes |
| **SEO Optimized** | Proper meta tags, semantic HTML, and template-based page titles |

---

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** [TypeScript 5](https://typescriptlang.org)
- **UI Library:** [React 19](https://react.dev)

### Styling & UI
- **CSS:** [Tailwind CSS v4](https://tailwindcss.com)
- **Components:** [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com)
- **Icons:** [Lucide React](https://lucide.dev) + Custom Brand SVGs
- **Fonts:** [Geist Sans & Geist Mono](https://vercel.com/font)
- **Animations:** [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Utilities:** [clsx](https://github.com/lukeed/clsx), [class-variance-authority](https://cva.style), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### Backend & Data
- **Database:** [MongoDB](https://mongodb.com) (contact form submissions)
- **Data Layer:** Static JSON files (`/data`) for projects, skills, education, experience, and certificates

### Smooth Scrolling
- **Library:** [Lenis](https://lenis.darkroom.engineering/) for native-like smooth scroll behavior

---

## 📁 Project Structure

```
portfolio-v4/
├── app/
│   ├── api/              # API routes (contact form)
│   ├── contact/          # Contact page
│   ├── projects/         # Project listing & detail pages
│   ├── skills/           # Skills & expertise bento grid
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout (fonts, header, footer)
│   ├── loading.tsx       # Global loading skeleton
│   └── page.tsx          # Home page (hero, projects, skills, etc.)
├── components/
│   ├── BrandIcons/       # Centralized SVG brand icon registry
│   ├── ContactClient/    # Client-side contact form logic
│   ├── Footer/           # Site footer
│   ├── Header/           # Navigation header
│   ├── LenisProvider/    # Smooth scroll provider
│   ├── ProjectDetailInteractive/  # Interactive project detail view
│   └── ui/               # shadcn/ui primitives (buttons, cards, etc.)
├── data/
│   ├── certificates.json # Professional certifications
│   ├── details.json      # Personal info & social links
│   ├── education.json    # Academic background
│   ├── experience.json   # Work experience
│   ├── projects.json     # Project case studies
│   └── skills.json       # Technical & soft skills
├── lib/                  # Utility functions
├── public/               # Static assets (avatar, SVGs)
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/apponislam/portfolio-v4.git
cd portfolio-v4

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:3444**

### Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start development server on port 3444 |
| `build` | `npm run build` | Create optimized production build |
| `start` | `npm run start` | Start production server on port 3444 |
| `lint` | `npm run lint` | Run ESLint checks |

---

## 🌐 Environment Variables

To enable the contact form's MongoDB integration, create a `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, featured projects, skills marquee, education, experience |
| Skills | `/skills` | Full bento grid with categorized skill cards |
| Projects | `/projects` | Complete project listing with filtering |
| Project Detail | `/projects/[id]` | Individual project case study with gallery |
| Contact | `/contact` | Contact form with validation |

---

## 🎨 Design Highlights

- **Pixel-Perfect Brand Icons** — All technology icons use official SVG vectors sourced from [Simple Icons](https://simpleicons.org) and brand guidelines
- **Bento Grid Layout** — Skills organized in a modern masonry-style grid with per-card glow effects
- **Smooth Scroll** — Lenis-powered scroll with native feel, no jank
- **Geist Typography** — Vercel's custom font family for a clean, modern look
- **Color System** — Neutral base (`#eaeaea`) with vibrant accent glows per technology

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contact

**Appon Islam** — Full-Stack Developer

- 📧 Email: [apponislamdev@gmail.com](mailto:apponislamdev@gmail.com)
- 🔗 LinkedIn: [linkedin.com/in/apponislam](https://www.linkedin.com/in/apponislam)
- 🐙 GitHub: [github.com/apponislam](https://github.com/apponislam)
- 🐦 Twitter: [x.com/appon2003](https://x.com/appon2003)

---

<p align="center">
  Built with ❤️ using Next.js 16 & React 19
</p>

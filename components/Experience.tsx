import { Calendar, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "TechVanguard Solutions",
      duration: "2024 - Present",
      description:
        "Architected distributed microservices utilizing Go and gRPC, cutting service API response latency by 45%. Oversaw a 5-person engineering squad to rewrite legacy dashboards into modern Next.js SPAs.",
      bullets: [
        "Led migration of central data pipeline to Kafka and PostgreSQL.",
        "Optimized client-side rendering which boosted Core Web Vitals score from 62 to 96.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Quantum SaaS Ventures",
      duration: "2022 - 2024",
      description:
        "Engineered real-time telemetry dashboards utilizing Socket.io and React. Designed scalable PostgreSQL schemas and set up secure OAuth2/OpenID authorization layers.",
      bullets: [
        "Established CI/CD pipelines in GitHub Actions, slashing deploy times by 35%.",
        "Configured Redis clustering for highly available caching.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Stellar App Lab",
      duration: "2020 - 2022",
      description:
        "Maintained Node.js / Express backends. Coded pixel-perfect responsive HTML/CSS designs from Figma specifications and integrated third-party REST integrations.",
      bullets: [
        "Maintained 99.8% service uptime through automated test coverage additions.",
        "Created custom UI component library used across 3 sibling platforms.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          Professional Experience
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
        {/* Central Vertical Line (Desktop only) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20" />

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-stretch sm:justify-between relative ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Point Indicator */}
              <div className="absolute left-[-21px] sm:left-1/2 sm:transform sm:-translate-x-1/2 top-1.5 flex items-center justify-center z-20">
                <div className="h-4.5 w-4.5 rounded-full bg-brand-bg border-4 border-brand-primary shadow-sm animate-pulse-slow" />
              </div>

              {/* Experience Card */}
              <div className="w-full sm:w-[calc(50%-28px)] glass-panel p-6 md:p-8 rounded-3xl border border-brand-primary/10 hover:border-brand-primary/25 transition-all duration-300 shadow-md">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-brand-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/50 text-brand-primary text-xs font-bold">
                    <Calendar size={12} /> {exp.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-dark/75 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullets list */}
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-1.5 text-xs text-brand-dark/70"
                    >
                      <ChevronRight
                        size={14}
                        className="text-brand-secondary shrink-0 mt-0.5"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty Space filler for alignment */}
              <div className="hidden sm:block w-[calc(50%-28px)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

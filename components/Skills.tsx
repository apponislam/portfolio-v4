"use client";

import { Layout, Server, Cloud, Cpu, Terminal, Compass } from "lucide-react";
import {
  ReactIcon,
  NextjsIcon,
  TypescriptIcon,
  TailwindIcon,
  ReduxIcon,
  HtmlIcon,
  WebsocketIcon,
  NodejsIcon,
  GolangIcon,
  PostgresIcon,
  RedisIcon,
  GraphqlIcon,
  MongodbIcon,
  DockerIcon,
  KubernetesIcon,
  AwsIcon,
  GithubActionsIcon,
  NginxIcon,
  LinuxIcon,
  JavascriptIcon,
  PythonIcon,
  GitIcon,
  FigmaIcon
} from "./techIcons";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-brand-primary" size={24} />,
      skills: [
        { name: "React & Next.js", label: "Frameworks", icon: <NextjsIcon className="w-6 h-6" /> },
        { name: "TypeScript", label: "Language", icon: <TypescriptIcon className="w-6 h-6" /> },
        { name: "Tailwind CSS v4", label: "Styling", icon: <TailwindIcon className="w-6 h-6" /> },
        { name: "Redux Toolkit", label: "State Mgmt", icon: <ReduxIcon className="w-6 h-6" /> },
        { name: "HTML5 / SVG / Canvas", label: "Core", icon: <HtmlIcon className="w-6 h-6" /> },
        { name: "WebSockets & SSE", label: "Real-time", icon: <WebsocketIcon className="w-6 h-6" /> },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <Server className="text-brand-primary" size={24} />,
      skills: [
        { name: "Node.js & NestJS", label: "Runtimes", icon: <NodejsIcon className="w-6 h-6" /> },
        { name: "Go (Golang)", label: "Language", icon: <GolangIcon className="w-6 h-6" /> },
        { name: "PostgreSQL & Prisma", label: "Databases", icon: <PostgresIcon className="w-6 h-6" /> },
        { name: "Redis Caching", label: "Caching", icon: <RedisIcon className="w-6 h-6" /> },
        { name: "GraphQL & REST", label: "API Gateways", icon: <GraphqlIcon className="w-6 h-6" /> },
        { name: "MongoDB NoSQL", label: "Databases", icon: <MongodbIcon className="w-6 h-6" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-brand-primary" size={24} />,
      skills: [
        { name: "Docker Containers", label: "Virtualization", icon: <DockerIcon className="w-6 h-6" /> },
        { name: "Kubernetes", label: "Orchestration", icon: <KubernetesIcon className="w-6 h-6" /> },
        { name: "AWS Cloud", label: "Hosting", icon: <AwsIcon className="w-6 h-6" /> },
        { name: "GitHub Actions", label: "CI/CD Pipelines", icon: <GithubActionsIcon className="w-6 h-6" /> },
        { name: "Nginx Proxy", label: "Web Server", icon: <NginxIcon className="w-6 h-6" /> },
        { name: "Linux Administration", label: "Platform", icon: <LinuxIcon className="w-6 h-6" /> },
      ],
    },
    {
      title: "Languages & Tools",
      icon: <Cpu className="text-brand-primary" size={24} />,
      skills: [
        { name: "JavaScript", label: "Language", icon: <JavascriptIcon className="w-6 h-6" /> },
        { name: "Python", label: "Language", icon: <PythonIcon className="w-6 h-6" /> },
        { name: "Git & Versioning", label: "VCS", icon: <GitIcon className="w-6 h-6" /> },
        { name: "Figma UI/UX", label: "Design", icon: <FigmaIcon className="w-6 h-6" /> },
        { name: "Postman & APIs", label: "Testing", icon: <Compass className="w-6 h-6 text-brand-primary group-hover/card:text-brand-bg" /> },
        { name: "Linux Bash / Shell", label: "Scripting", icon: <Terminal className="w-6 h-6 text-brand-primary group-hover/card:text-brand-bg" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          Tech Stack & Tooling
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 md:p-8 rounded-3xl border border-brand-primary/10 shadow-md flex flex-col justify-between hover:border-brand-primary/25 transition-all duration-300 group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-brand-accent/50 group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  {category.title}
                </h3>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-white/60 border border-brand-primary/5 hover:border-brand-primary/25 hover:bg-brand-accent/30 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 group/card shadow-sm hover:scale-[1.03]"
                  >
                    {/* Icon Container */}
                    <div className="p-2 rounded-xl bg-brand-bg text-brand-primary group-hover/card:bg-brand-primary group-hover/card:text-brand-bg transition-colors duration-300">
                      {skill.icon}
                    </div>
                    {/* Label and Info */}
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-brand-dark leading-tight">
                        {skill.name}
                      </h4>
                      <p className="text-[9px] font-black text-brand-dark/45 uppercase tracking-wider">
                        {skill.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer */}
            <div className="mt-6 pt-4 border-t border-brand-primary/5 flex items-center justify-between text-xs text-brand-dark/50">
              <span>Verified Experience</span>
              <span className="font-bold text-brand-primary">{category.skills.length} competencies</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

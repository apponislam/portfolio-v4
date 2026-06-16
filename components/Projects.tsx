"use client";

import { useState } from "react";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const projectsList = [
    {
      title: "ApexCommerce Engine",
      category: "fullstack",
      description: "High-performance ecommerce architecture integrating a Next.js frontend with a Go backend. Features microsecond response times with Redis caching, PostgreSQL persistence, and Stripe Checkout.",
      tech: ["Next.js", "Golang", "PostgreSQL", "Redis", "Stripe"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Orion Collaborative IDE",
      category: "fullstack",
      description: "In-browser workspace allowing multiple developers to edit and execute code concurrently. Driven by WebSockets, Monaco Editor, and a sandboxed Docker execution API.",
      tech: ["React", "Node.js", "Docker", "WebSockets", "Monaco"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "SaaSify Operations Portal",
      category: "frontend",
      description: "A premium admin control panel featuring canvas-based telemetry charts, real-time notification feeds, custom drag-and-drop workspace layout grids, and full dark-theme capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "LogSentinel Daemon",
      category: "backend",
      description: "Centralized logging and metrics agent written in Go. Compresses, indexes, and streams server telemetry directly into a distributed ClickHouse database with high throughput.",
      tech: ["Golang", "ClickHouse", "gRPC", "Docker", "Prometheus"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "PromptHub AI Portal",
      category: "frontend",
      description: "A prompt engineering collaborative playground allowing users to draft, test, and semantic-search prompts. Integrated with vector databases for semantic recommendations.",
      tech: ["Next.js", "Pinecone", "OpenAI API", "TailwindCSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "TaskFlow Scheduler",
      category: "backend",
      description: "Distributed job queuing and task execution engine designed for reliable background workloads. Integrates job retry strategies, logging, and smart concurrency rate limits.",
      tech: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "Express"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          Featured Engineering Work
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
              filter === cat.id
                ? "bg-brand-primary text-brand-bg shadow-md"
                : "bg-white border border-brand-primary/10 text-brand-dark hover:border-brand-primary/45 hover:bg-brand-accent/30"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-3xl overflow-hidden border border-brand-primary/10 hover:border-brand-primary/30 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-md group"
          >
            {/* Project Header Banner / Design */}
            <div className="p-6 pb-2">
              {/* Category Pill */}
              <span className="inline-block px-3 py-1 rounded-lg bg-brand-accent text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
                {project.category === "fullstack"
                  ? "Full Stack"
                  : project.category === "frontend"
                  ? "Frontend"
                  : "Backend"}
              </span>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed min-h-[100px]">
                {project.description}
              </p>
            </div>

            {/* Project Meta Stack & Links */}
            <div className="p-6 pt-2">
              {/* Tech Stack Badge list */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white/70 border border-brand-primary/5 text-brand-dark/75 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-primary/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-dark/70 hover:text-brand-primary transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Repository
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

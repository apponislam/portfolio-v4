'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  User, 
  Code, 
  GitBranch, 
  Users, 
  Globe, 
  Sparkles,
  BookOpen,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { getBrandIcon } from './BrandIcons';

interface Collaborator {
  name: string;
  role: string;
  github: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  coverPhoto?: string;
  pictures?: string[];
  tags: string[];
  technologiesUsed?: string[];
  client: string;
  year: string;
  startDate?: string;
  endDate?: string;
  liveLink?: string;
  productionLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
  hasCollaborators?: boolean;
  collaborators?: Collaborator[];
  link: string;
}

interface Props {
  project: Project;
}

export default function ProjectDetailInteractive({ project }: Props) {
  const [activeTab, setActiveTab] = useState<'story' | 'tech' | 'gallery'>('story');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const duration = project.startDate && project.endDate 
    ? `${project.startDate} — ${project.endDate}` 
    : project.year;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* LEFT PANEL: Visual Showcase & Primary Action Card (Sticky) */}
      <div className="lg:col-span-6 flex flex-col gap-6 lg:sticky lg:top-28">
        
        {/* Cover Canvas with Glass Info Overlay */}
        <div className="relative aspect-[16/10] w-full rounded-[32px] overflow-hidden border border-neutral-300/50 bg-neutral-200 shadow-md group">
          <Image
            src={project.coverPhoto || project.image}
            alt={project.title}
            width={1200}
            height={750}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover w-full h-full scale-[1.01] hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Glass details bar at bottom of image */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-2xl flex items-center justify-between shadow-lg">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">Timeline</span>
              <span className="text-xs font-black text-neutral-900">{duration}</span>
            </div>
            <div className="h-6 w-[1px] bg-neutral-300/40" />
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">Status</span>
              <span className="inline-flex items-center gap-1 text-xs font-black text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Complete
              </span>
            </div>
          </div>
        </div>

        {/* Major Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-black py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider"
            >
              <Globe className="w-4 h-4" />
              Launch Live App
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-neutral-200 text-neutral-400 text-xs font-black py-4 rounded-2xl border border-neutral-300/40 uppercase tracking-wider cursor-not-allowed opacity-60"
            >
              <Globe className="w-4 h-4" />
              Launch Live App
            </button>
          )}

          {project.productionLink ? (
            <a
              href={project.productionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-950 text-xs font-black py-4 rounded-2xl border border-neutral-300/60 shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider"
            >
              Production Build
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-neutral-100 text-neutral-400 text-xs font-black py-4 rounded-2xl border border-neutral-300/20 uppercase tracking-wider cursor-not-allowed opacity-60"
            >
              Production Build
            </button>
          )}
        </div>

        {/* Technologies under buttons */}
        {project.technologiesUsed && project.technologiesUsed.length > 0 && (
          <div className="bg-white/40 border border-neutral-300/30 rounded-[24px] p-5 flex flex-col gap-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400">Built with</span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-neutral-300/30 text-[10px] font-bold text-neutral-800 rounded-lg shadow-sm"
                >
                  <span className="shrink-0">{getBrandIcon(tech, "w-3.5 h-3.5")}</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: Workspace (Dynamic Segmented Control & Details) */}
      <div className="lg:col-span-6 flex flex-col gap-8">
        
        {/* Project Title Area */}
        <div className="border-b border-neutral-300/30 pb-6">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-neutral-900 mb-4 leading-none">
            {project.title}
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base font-semibold leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* MODERN UX TABBED SYSTEM (Segmented Control) */}
        <div className="bg-neutral-200/60 border border-neutral-300/40 p-1.5 rounded-2xl flex gap-1">
          <button
            onClick={() => setActiveTab('story')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
              activeTab === 'story'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Story
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
              activeTab === 'tech'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Specs
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
              activeTab === 'gallery'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Gallery
          </button>
        </div>

        {/* ACTIVE TAB CONTAINER */}
        <div className="min-h-[250px] transition-all duration-300">
          
          {/* TAB 1: STORY (OVERVIEW) */}
          {activeTab === 'story' && (
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="bg-white/60 border border-neutral-300/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
                <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-500" /> Executive Summary
                </h3>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {project.detailedDescription || project.description}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TECH & TEAM SPECS */}
          {activeTab === 'tech' && (
            <div className="flex flex-col gap-6 animate-fade-in-up">
              
              {/* Project Details */}
              <div className="bg-white border border-neutral-300/40 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                <h3 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                  Project Info
                </h3>
                <div className="flex flex-col gap-1 text-xs sm:text-sm">
                  <span className="text-neutral-400 font-semibold uppercase tracking-wider text-[9px] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> Timeline
                  </span>
                  <span className="font-bold text-neutral-900">{duration}</span>
                </div>
              </div>

              {/* Technologies */}
              {project.technologiesUsed && project.technologiesUsed.length > 0 && (
                <div className="bg-white border border-neutral-300/40 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologiesUsed.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300/30 text-[10px] sm:text-xs font-bold text-neutral-800 rounded-xl transition-colors"
                      >
                        <span className="shrink-0">{getBrandIcon(tech, "w-4 h-4")}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Repos */}
              {(project.githubFrontend || project.githubBackend) && (
                <div className="bg-white border border-neutral-300/40 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" /> Source Repositories
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl text-xs font-bold text-neutral-800 transition-colors group"
                      >
                        <span className="flex items-center gap-2">
                          <GitBranch className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                          Frontend Workspace
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl text-xs font-bold text-neutral-800 transition-colors group"
                      >
                        <span className="flex items-center gap-2">
                          <GitBranch className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                          Backend Architecture
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Collaborators */}
              {project.hasCollaborators && project.collaborators && project.collaborators.length > 0 && (
                <div className="bg-white border border-neutral-300/40 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Project Collaborators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.collaborators.map((collab, idx) => (
                      <a
                        key={idx}
                        href={collab.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-3.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl transition-all group text-left"
                      >
                        <span className="text-xs font-bold text-neutral-900 flex items-center justify-between">
                          {collab.name}
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mt-1">
                          {collab.role}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: GALLERY (IMAGE SLIDESHOW / LIGHTBOX PREVIEW) */}
          {activeTab === 'gallery' && (
            <div className="flex flex-col gap-6 animate-fade-in-up">
              {project.pictures && project.pictures.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.pictures.map((pic, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedImage(pic)}
                      className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-300/30 bg-neutral-100 shadow-sm cursor-zoom-in group"
                    >
                      <Image
                        src={pic}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        width={800}
                        height={450}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold bg-black/60 px-3 py-1.5 rounded-full uppercase tracking-wider">
                          View Large
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-neutral-300/30 rounded-3xl p-8 text-center text-xs font-semibold text-neutral-500">
                  No screenshots uploaded for this project yet.
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800">
            <Image
              src={selectedImage}
              alt="Preview Zoomed"
              width={1920}
              height={1080}
              sizes="100vw"
              className="object-contain w-full h-full max-h-[85vh] mx-auto"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border border-white/20 transition-all"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

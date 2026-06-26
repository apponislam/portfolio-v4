import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const projects = projectsData;


  return (
    <main className="container mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          All Projects
        </h1>
        <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">
          A complete showcase of systems, products, and software projects developed over the past few years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group flex flex-col bg-white border border-neutral-300/40 rounded-[32px] p-4 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 rounded-2xl border border-neutral-200">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-[9px] font-black text-black px-4 py-2 rounded-full uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  View Case Study
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-neutral-400 font-extrabold tracking-widest uppercase">
                  Project &bull; {project.year}
                </span>
              </div>
              
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-2 transition-colors flex items-center justify-between">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-neutral-900 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </h2>
              
              <p className="text-neutral-500 text-xs sm:text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold text-neutral-700 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

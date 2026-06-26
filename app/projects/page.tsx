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
            className="group flex flex-col bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-50 border-b border-neutral-100">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-neutral-400 font-semibold tracking-wide uppercase">
                  {project.client}
                </span>
                <span className="text-xs text-neutral-400 font-medium">{project.year}</span>
              </div>
              
              <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-500 transition-colors flex items-center justify-between">
                {project.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
              </h2>
              
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-neutral-50 border border-neutral-100 text-[10px] font-medium rounded text-neutral-500"
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

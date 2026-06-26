import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import portfolioData from '../../../data/portfolio.json';


interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col">
      {/* Back to Projects Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black mb-8 transition-colors self-start"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      {/* Hero Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Cover Image */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 mb-12 shadow-sm">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Project Specs and Detailed Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Detailed Description Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3">
            Overview
          </h2>
          <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Specs Column */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
          <h2 className="text-sm font-bold tracking-wider text-neutral-400 uppercase">
            Project Specs
          </h2>
          
          <div className="flex flex-col gap-4 text-xs">
            <div className="flex items-center justify-between border-b border-neutral-50 pb-2">
              <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5" /> Client
              </span>
              <span className="font-semibold text-neutral-800">{project.client}</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-neutral-50 pb-2">
              <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5" /> Year
              </span>
              <span className="font-semibold text-neutral-800">{project.year}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-neutral-400 flex items-center gap-1.5 font-medium">
                <Tag className="w-3.5 h-3.5" /> Technologies
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-semibold text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-semibold py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-sm"
            >
              Visit Project Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

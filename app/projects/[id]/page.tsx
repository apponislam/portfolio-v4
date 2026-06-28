import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Tag } from 'lucide-react';
import projectsData from '../../../data/projects.json';
import ProjectDetailInteractive from '@/components/ProjectDetailInteractive/ProjectDetailInteractive';

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

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const typedProjects = projectsData as Project[];
  const project = typedProjects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  
  const typedProjects = projectsData as Project[];
  const project = typedProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 md:px-8 pt-4 pb-12 md:pt-6 md:pb-16 flex flex-col min-h-screen">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black mb-6 transition-colors self-start"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to projects
      </Link>

      {/* Render the interactive client layout */}
      <ProjectDetailInteractive project={project} />
    </main>
  );
}

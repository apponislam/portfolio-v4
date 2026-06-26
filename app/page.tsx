import Link from 'next/link';
import { ArrowRight, ArrowUpRight, GraduationCap, Award, ExternalLink, Briefcase } from 'lucide-react';
import detailsData from '@/data/details.json';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import educationData from '@/data/education.json';
import certificatesData from '@/data/certificates.json';
import experienceData from '@/data/experience.json';

export default function Home() {
  const details = detailsData;
  const projects = projectsData;
  const skills = skillsData;
  const education = educationData;
  const certificates = certificatesData;
  const experience = experienceData;

  // Limit featured projects to first 3
  const featuredProjects = projects.slice(0, 3);


  
  // Highlight some skills for the scrolling marquee ticker
  const tickerSkills = [...skills.map(s => s.name), ...skills.map(s => s.name)];

  return (
    <main className="w-full flex flex-col items-center">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-28 pb-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          {details.availableForHire && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300/40 rounded-full text-xs font-semibold text-neutral-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new opportunities
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-none">
            {details.name}
          </h1>
          
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-neutral-500">
            {details.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-medium">
            {details.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-black py-4 px-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300/60 text-xs font-black py-4 px-8 rounded-2xl shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-wider"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Column: Profile Picture Container */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[40px] overflow-hidden border border-neutral-300/50 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              <img
                src="/avatar.png"
                alt={details.name}
                className="object-cover w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </section>

      {/* 2. Infinite Sliding Skills Marquee */}
      <section className="w-full border-y border-neutral-100 bg-white py-8 overflow-hidden mb-24">
        <div className="relative w-full overflow-x-hidden flex items-center">
          <div className="animate-marquee flex gap-12 text-sm font-semibold text-neutral-400 tracking-wider uppercase whitespace-nowrap">
            {tickerSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <span>{skill}</span>
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2">
              Featured Work
            </h2>
            <p className="text-neutral-500 text-sm">
              A curated selection of core applications built with modern tools.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 hover:text-orange-500 transition-colors mt-4 md:mt-0 group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-neutral-400 font-extrabold tracking-widest uppercase">
                    Project &bull; {project.year}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-2 transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-neutral-900 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold text-neutral-700 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-[10px] font-bold text-neutral-400 rounded-lg">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Work Experience Section */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-neutral-800" />
            Work Experience
          </h2>
          <p className="text-neutral-500 text-sm">
            My professional career path and past employment history.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {experience.map((work, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 shadow-sm"
            >
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full mb-3">
                  {work.duration}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{work.role}</h3>
                <p className="text-sm font-medium text-neutral-500 mb-3">{work.company} &bull; {work.location}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Education & Academic Background */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-neutral-800" />
            Education
          </h2>
          <p className="text-neutral-500 text-sm">
            Academic milestones and studies in software engineering.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-4 shadow-sm"
            >
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-50 dark:bg-orange-950/20 px-2.5 py-1 rounded-full mb-3">
                  {edu.duration}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{edu.degree}</h3>
                <p className="text-sm font-medium text-neutral-500 mb-3">{edu.institution} &bull; {edu.field}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Certificates Section */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2 flex items-center gap-2">
            <Award className="w-7 h-7 text-neutral-800" />
            Certifications
          </h2>
          <p className="text-neutral-500 text-sm">
            Industry accomplishments and technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md hover:border-neutral-200 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-neutral-400 font-medium">{cert.date}</span>
                <Award className="w-5 h-5 text-neutral-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base mb-1 group-hover:text-orange-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-neutral-500 text-xs mb-6">{cert.issuer}</p>
              
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                >
                  Verify Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

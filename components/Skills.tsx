import { Layout, Server, Cloud, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-brand-primary" size={24} />,
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS v4", level: 95 },
        { name: "Redux & State Mgmt", level: 85 },
        { name: "HTML5 / Canvas / SVG", level: 90 },
        { name: "WebSockets & SSE", level: 80 },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <Server className="text-brand-primary" size={24} />,
      skills: [
        { name: "Node.js (Express/Nest)", level: 92 },
        { name: "Go (Golang)", level: 85 },
        { name: "PostgreSQL & Prisma", level: 88 },
        { name: "Redis Caching", level: 80 },
        { name: "GraphQL & REST APIs", level: 90 },
        { name: "MongoDB / NoSQL", level: 82 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-brand-primary" size={24} />,
      skills: [
        { name: "Docker Containers", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "AWS (S3, EC2, Lambda)", level: 82 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Nginx & Load Balancing", level: 80 },
        { name: "Linux SysOps & Shell", level: 85 },
      ],
    },
    {
      title: "Languages & Tools",
      icon: <Cpu className="text-brand-primary" size={24} />,
      skills: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Go & Python", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "REST Client & Postman", level: 95 },
        { name: "Linux Shell Scripting", level: 80 },
        { name: "UI Design (Figma)", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          My Technical Superpowers
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Skills Bar Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-brand-dark/95">{skill.name}</span>
                      <span className="font-bold text-brand-primary">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-brand-accent/40 rounded-full overflow-hidden">
                      {/* Inner Progress Indicator */}
                      <div
                        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro-badge count footer */}
            <div className="mt-6 pt-4 border-t border-brand-primary/5 flex items-center justify-between text-xs text-brand-dark/50">
              <span>Verified Experience</span>
              <span className="font-bold text-brand-primary">{category.skills.length} core competencies</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

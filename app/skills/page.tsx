import skillsData from '@/data/skills.json';

export default function Skills() {
  const skills = skillsData;


  // Group skills by category
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <main className="container mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Skills & Expertise
        </h1>
        <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">
          A comprehensive overview of programming languages, frameworks, developer tools, and design methodologies.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          
          return (
            <div key={category} className="flex flex-col gap-6">
              <h2 className="text-lg font-bold text-neutral-400 tracking-wider uppercase border-b border-neutral-100 pb-2">
                {category}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border border-neutral-100 hover:border-neutral-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group flex items-center justify-between"
                  >
                    <span className="font-semibold text-neutral-800 group-hover:text-orange-500 transition-colors text-sm">
                      {skill.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-orange-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

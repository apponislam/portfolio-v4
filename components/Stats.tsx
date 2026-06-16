import { Code2, Award, Users2, Rocket } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      icon: <Code2 className="text-brand-primary" size={28} />,
      value: "5+",
      label: "Years of Experience",
      description: "Building production systems",
    },
    {
      icon: <Rocket className="text-brand-primary" size={28} />,
      value: "25+",
      label: "Projects Completed",
      description: "Shipped to happy clients",
    },
    {
      icon: <Users2 className="text-brand-primary" size={28} />,
      value: "99.9%",
      label: "Client Satisfaction",
      description: "Based on reviews",
    },
    {
      icon: <Award className="text-brand-primary" size={28} />,
      value: "15+",
      label: "Tech Mastered",
      description: "Full stack ecosystem",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 container mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsList.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-3xl flex items-center gap-4 hover:scale-[1.03] transition-all duration-300 border border-brand-primary/10 group"
          >
            <div className="p-3 rounded-2xl bg-brand-accent/50 group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-black text-brand-dark tracking-tight leading-none mb-1">
                {stat.value}
              </p>
              <h3 className="text-sm font-bold text-brand-primary tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-brand-dark/65 mt-0.5">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

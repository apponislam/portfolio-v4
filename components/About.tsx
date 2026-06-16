"use client";

import { useState } from "react";
import { User, Lightbulb, Shield, Code, HeartHandshake } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const tabsContent = {
    story: {
      title: "My Tech Journey",
      content:
        "I started my engineering journey over 5 years ago, diving deep into computer science principles and software engineering. Since then, I have worked with startups and enterprises, building SaaS dashboards, complex database engines, and high-performance user interfaces. I love bridging the gap between design and functionality.",
      icon: <User className="text-brand-primary" />,
    },
    philosophy: {
      title: "Development Philosophy",
      content:
        "I believe that code should be read like literature and run like clockwork. I focus on writing modular, test-driven systems that are self-documenting and easy to scale. Performance optimization is not an afterthought for me; it is built into the foundation of every component I write.",
      icon: <Lightbulb className="text-brand-primary" />,
    },
    values: {
      title: "Core Values",
      content:
        "Transparency, pixel-perfect attention to detail, and a user-first mindset drive everything I do. I actively collaborate with cross-functional teams to translate abstract business goals into stable technical architectures, ensuring the end-user experiences are seamless, fast, and secure.",
      icon: <HeartHandshake className="text-brand-primary" />,
    },
  };

  const keyStrengths = [
    {
      icon: <Code size={20} className="text-brand-primary" />,
      title: "Clean & Modern Architecture",
      desc: "Following SOLID principles and clean code structures.",
    },
    {
      icon: <Shield size={20} className="text-brand-primary" />,
      title: "Security & Performance First",
      desc: "Robust API protections, caching strategies, and lazy loading.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          Crafting High-Performance Full Stack Solutions
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side Info */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-2xl font-bold text-brand-dark">
            Who is Appon Islam?
          </h3>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            I am a Full Stack Developer located at the intersection of creative frontends and highly scalable backends. I focus on creating systems that are highly responsive, secure, and delightful to interact with.
          </p>
          <p className="text-base text-brand-dark/75 leading-relaxed">
            Whether deploying Serverless functions on AWS, orchestrating containerized microservices with Docker, or building real-time collaboration dashboards using WebSockets, I design with end-user delight and engineering excellence in mind.
          </p>

          <div className="space-y-4 pt-4">
            {keyStrengths.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-brand-accent/30 border border-brand-primary/5">
                <div className="p-2.5 rounded-xl bg-white text-brand-primary flex items-center justify-center shadow-sm h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{item.title}</h4>
                  <p className="text-sm text-brand-dark/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Interactive Tabs */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 md:p-8 border border-brand-primary/10 shadow-lg">
          {/* Tab Selector */}
          <div className="flex bg-brand-accent/40 p-1.5 rounded-2xl gap-2 mb-6">
            {(Object.keys(tabsContent) as Array<keyof typeof tabsContent>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all capitalize ${
                  activeTab === tab
                    ? "bg-brand-primary text-brand-bg shadow-sm"
                    : "text-brand-dark hover:bg-brand-accent/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="space-y-4 min-h-[200px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-primary/10">
                  {tabsContent[activeTab as keyof typeof tabsContent].icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark">
                  {tabsContent[activeTab as keyof typeof tabsContent].title}
                </h4>
              </div>
              <p className="text-brand-dark/75 leading-relaxed text-base">
                {tabsContent[activeTab as keyof typeof tabsContent].content}
              </p>
            </div>

            {/* Quote block style inside tab */}
            <div className="border-l-4 border-brand-secondary pl-4 py-1.5 bg-brand-accent/20 rounded-r-xl">
              <p className="text-xs italic text-brand-dark/60">
                &ldquo;Engineering is the art of organizing and directing people and controlling the forces and materials of nature for the benefit of the human race.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

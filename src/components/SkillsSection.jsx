import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Angular", category: "frontend" },

  // Backend
  { name: "C", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "Prolog", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: ".NET", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "SQLAlchemy", category: "backend" },
  { name: "Flutter", category: "backend" },
  { name: "Assembly", category: "backend" },
  { name: "Dart", category: "backend" },
  { name: "Lisp", category: "backend" },
  { name: "VHDL", category: "backend" },
  { name: "Spring Boot", category: "backend" },

  // Tools
  { name: "Git", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Azure", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "MySQL", category: "tools" },
  { name: "Oracle", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "OpenAI API", category: "tools" },
  { name: "Hugging Face", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "MS Office", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/25 border-y border-border/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading eyebrow="// toolchain">
          My <span className="text-primary">Skills</span>
        </SectionHeading>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full font-mono text-[11px] md:text-xs uppercase tracking-wider transition-all duration-300 border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_28px_hsl(var(--primary)/0.35)] scale-[1.02]"
                  : "bg-card/55 border-border/80 text-foreground/85 hover:border-primary/45 hover:shadow-[0_0_20px_hsl(var(--primary)/0.12)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="interactive-panel p-3 sm:p-4 rounded-xl min-w-0 overflow-hidden flex items-center justify-center group motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-1"
            >
              <h3 className="font-medium text-xs sm:text-sm md:text-base leading-tight text-center break-words group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

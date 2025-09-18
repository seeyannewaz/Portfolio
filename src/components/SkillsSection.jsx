import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Dart", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Flutter", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Chakra UI", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "TypeScript", category: "frontend" },

  // Backend
  { name: "C", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Assembly", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "SQLAlchemy", category: "backend" },
  { name: "OpenAI API", category: "backend" },

  // Tools
  { name: "Visual Studio", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ IDEA", category: "tools" },
  { name: "Jupyter", category: "tools" },
  { name: "Google Colab", category: "tools" },
  { name: "Git/GitHub/GitLab", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Postman", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
              className="bg-card p-3 sm:p-4 rounded-lg shadow-xs card-hover min-w-0 overflow-hidden flex items-center justify-center"
            >
              <h3
                className="font-medium text-xs sm:text-sm md:text-base leading-tight text-center break-words"
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

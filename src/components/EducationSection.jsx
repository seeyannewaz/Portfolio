// src/components/EducationSection.jsx
import { SectionHeading } from "@/components/SectionHeading";
import { GraduationCap } from "lucide-react";

const COURSEWORK = [
  "Computer Architecture (MIPS)",
  "Discrete Mathematics",
  "Data Structures & Algorithms",
  "Software Engineering",
  "Programming Languages & Paradigms",
  "Programming in a UNIX Environment",
  "Probability & Statistics in CS and SE",
  "Database Systems",
  "Computer Networks",
  "Digital Logic and Computer Design",
  "Linear Algebra",
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <SectionHeading eyebrow="// academics">
          My <span className="text-primary">Education</span>
        </SectionHeading>
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary border border-primary/25 shadow-[0_0_28px_hsl(var(--primary)/0.15)]">
            <GraduationCap className="h-7 w-7" />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8 card-hover text-left noise-overlay">
          {/* Top row: School + location | Dates */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
            <h3 className="text-lg md:text-xl font-extrabold">
              The University of Texas at Dallas (Richardson, TX)
            </h3>
            <p className="text-sm font-semibold text-primary mt-1">
              Aug 2022 – May 2026
            </p>
          </div>

          {/* Degree + GPA */}
          <p className="text-sm md:text-base text-foreground/90 mb-3">
            <span className="font-semibold">B.S. in Computer Science</span>{" "}
            <span className="text-foreground/70">(GPA: 3.91)</span>
          </p>

          {/* Honors */}
          <p className="text-sm md:text-base mb-3">
            <span className="font-semibold">Honors:</span>{" "}
            <span className="text-foreground/90">
              Academic Excellence Scholarship, Texas Competitive Scholarship, Dean’s List, Edexcel High Achievers’ Award, The Daily Star Award
            </span>
          </p>

          {/* Coursework inline with dot separators */}
          <p className="text-sm md:text-base">
            <span className="font-semibold">Coursework:</span>{" "}
            <span className="text-foreground/90">
              {COURSEWORK.map((c, i) => (
                <span key={i}>
                  {c}
                  {i < COURSEWORK.length - 1 ? " • " : ""}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

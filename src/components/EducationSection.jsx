// src/components/EducationSection.jsx
import { GraduationCap } from "lucide-react";

const COURSEWORK = [
  "Object Oriented Programming in Java & C++",
  "Computer Architecture (MIPS)",
  "Discrete Mathematics",
  "Data Structures & Algorithms",
  "Programming Languages & Paradigms",
  "Programming in a UNIX Environment",
  "Probability & Statistics in CS and SE",
  "Database Systems",
  "Computer Networks",
  "Digital Logic and Computer Design"
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Title with icon */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="flex justify-center mb-14">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl shadow-xs p-6 md:p-8 card-hover text-left">
          {/* Top row: School + location | Dates */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
            <h3 className="text-lg md:text-xl font-extrabold">
              The University of Texas at Dallas, Richardson, TX
            </h3>
            <p className="text-sm font-semibold text-primary mt-1">
              Aug 2022 – May 2026
            </p>
          </div>

          {/* Degree + GPA */}
          <p className="text-sm md:text-base text-foreground/90 mb-3">
            <span className="font-semibold">B.S. in Computer Science</span>{" "}
            <span className="text-foreground/70">(GPA: 3.89)</span>
          </p>

          {/* Honors */}
          <p className="text-sm md:text-base mb-3">
            <span className="font-semibold">Honors:</span>{" "}
            <span className="text-foreground/90">
              Dean’s List, Academic Excellence Scholarship
            </span>
          </p>

          {/* Coursework inline with dot separators */}
          <p className="text-sm md:text-base">
            <span className="font-semibold">Coursework:</span>{" "}
            <span className="text-foreground/90">
              {COURSEWORK.map((c, i) => (
                <span key={i}>
                  {c}
                  {i < COURSEWORK.length - 1 ? " · " : ""}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

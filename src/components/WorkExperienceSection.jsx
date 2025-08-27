// src/components/WorkExperienceSection.jsx
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    role: "Peer Tutor for Calculus and Linear Algebra",
    company: "Student Success Center, The University of Texas at Dallas",
    period: "Aug 2023 – Present",
    points: [
      "Helping students understand complex Calculus and Linear Algebra concepts via one-on-one tutoring; achieved a 100% satisfaction rate.",
      "Adapting strategies to learner styles, contributing to grade increases for 60% of students.",
      "Fostering a growth-mindset environment and boosting student confidence in Calculus and Linear Algebra."
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Paycom",
    period: "May 2025 – Aug 2025",
    tech: "ASP.NET Core, C#, React, TypeScript, Apache OpenNLP, PdfPig",
    points: [
      "Built a full-stack PDF data-extraction pipeline for new-client onboarding with potential savings of $1M+.",
      "Designed an interactive annotations tool and intelligent table detection to save up to 5 days per client.",
      "Engineered and trained custom NLP models (NER) to extract structured data entities.",
      "Architected backend extraction to infer relationships and auto-classify data.",
      "Managed GitLab-based CI/CD and version control in a collaborative, constraint-driven environment.",
    ],
  },
];
const METRIC_SPLIT_RE =
  /(\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?(?:[KkMmBb])?\+?%?)/g;
const METRIC_TEST_RE =
  /\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?(?:[KkMmBb])?\+?%?/;

function highlightMetrics(text) {
  return text.split(METRIC_SPLIT_RE).map((part, i) =>
    METRIC_TEST_RE.test(part) ? (
      <span key={i} className="font-bold text-foreground">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="flex justify-center mb-14">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
            <Briefcase className="h-6 w-6" />
          </div>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-border" />

          <ol className="space-y-10">
            {EXPERIENCES.map((exp, idx) => {
              const isLeft = idx % 2 === 0; // alternate sides on desktop
              return (
                <li key={idx} className="relative">
                  {/* Dot */}
                  <span
                    className={cn(
                      "hidden md:flex absolute top-3 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full ring-4 ring-background",
                      "bg-primary shadow-md"
                    )}
                    aria-hidden="true"
                  />

                  {/* Mobile: left border timeline */}
                  <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

                  <div
                    className={cn(
                      "grid md:grid-cols-2 gap-6 md:gap-10 items-start",
                      // add left padding on mobile for the vertical line and dot
                      "pl-10 md:pl-0"
                    )}
                  >
                    {/* Desktop spacer on one side to create alternating layout */}
                    {isLeft ? null : <div className="hidden md:block" />}

                    {/* Card */}
                    <article
                      className={cn(
                        "relative bg-card rounded-xl shadow-xs p-6 border border-border card-hover",
                        "md:max-w-[560px]",
                        // offset from center line a bit for breathing space
                        isLeft ? "md:ml-auto" : "md:mr-auto"
                      )}
                    >

                      {/* Mobile icon */}
                      <div className="md:hidden mb-3 flex items-center gap-2 text-primary">
                      </div>

                      <header className="mb-3">
                        <h3 className="text-xl font-semibold leading-snug">{exp.role}</h3>
                        <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                        <p className="text-sm font-semibold text-primary mt-1">
                          {exp.period}
                        </p>
                        {exp.tech && (
                          <p className="font-medium text-foreground/80">
                            Tech: {exp.tech}
                          </p>
                        )}
                      </header>

                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {exp.points.map((p, i) => (
                          <li key={i}>{highlightMetrics(p)}</li>
                        ))}
                      </ul>
                    </article>

                    {/* If the card was on the left, add spacer on the right for symmetry */}
                    {isLeft ? <div className="hidden md:block" /> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

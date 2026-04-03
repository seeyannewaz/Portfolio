// src/components/WorkExperienceSection.jsx
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

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
    company: "Paycom, USA",
    period: "May 2025 – Aug 2025",
    tech: "ASP.NET Core, C#, React, TypeScript, Apache OpenNLP, PdfPig",
    points: [
      "Built a full-stack PDF data-extraction pipeline for new-client onboarding with potential savings of $100K+.",
      "Designed an interactive annotations tool and intelligent table detection to save up to 5 days per client.",
      "Engineered and trained custom NLP models (NER) to extract structured data entities.",
      "Architected backend extraction to infer relationships and auto-classify data.",
      "Managed GitLab-based CI/CD and version control in a collaborative, constraint-driven environment.",
    ],
  },
  {
    role: "Backend Software Developer",
    company: "Association for Computing Machinery, The University of Texas at Dallas Chapter",
    period: "Feb 2024 – Apr 2024",
    tech: "Dart, Flutter, Firebase, Cloud Firestore, OpenAI API, GPT-4 Turbo",
    points: [
      "Collaborated with a team of 5 to develop a full-stack android app connecting 50+ university organizations with 30,000+ students through organization-hosted events to foster community engagement.",
      "Trained and integrated an AI chatbot using OpenAI's GPT-4 Turbo for personalized event recommendations with 90% accuracy.",
      "Designed a dynamic calendar with Firestore and integrated date formatting for real-time event management, boosting functionality and achieving 93% user satisfaction.",
      "Optimized Firestore database schema for 50% faster data retrieval than default SQL database, and seamless real-time synchronization, ensuring data integrity and efficient storage.",
    ],
  },
  {
    role: "Teaching Assistant, High Schoool Mathematics",
    company: "The Study Town, Bangladesh",
    period: "Jun 2020 – Jul 2022",
    points: [
      "Provided support to the Mathematics department in delivering effective instruction to 500+ students.",
      "Worked closely with the classroom teacher, assisting in lesson planning, classroom management, and student engagement, to ensure a positive learning environment.",
      "Offered guidance and feedback to 100+ students on their assignments, exams, and homework, helping them improve their performance and understanding of the subject matter.",
    ],
  },
  {
    role: "Coordinator",
    company: "Nerd Community, Bangladesh",
    period: "Aug 2020 – May 2022",
    points: [
      "Provided free academic tutoring through Nerd Community (largest Facebook platform in Bangladesh, 40K+ members).",
      "Delivered clear explanations of complex concepts, helping 40K+ students improve grades and meet their academic goals.",
      "Collaborated with a diverse student base, fostering an inclusive learning environment that encouraged engagement and knowledge sharing",
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
      <span key={i} className="font-extrabold text-primary">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/25 border-y border-border/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading eyebrow="// chronology">
          Work <span className="text-primary">Experience</span>
        </SectionHeading>
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary border border-primary/25 shadow-[0_0_28px_hsl(var(--primary)/0.15)]">
            <Briefcase className="h-7 w-7" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/70 via-border to-accent/70" />

          <ol className="space-y-10">
            {EXPERIENCES.map((exp, idx) => {
              const isLeft = idx % 2 === 0; // alternate sides on desktop
              return (
                <li key={idx} className="relative">
                  {/* Dot */}
                  <span
                    className={cn(
                      "hidden md:flex absolute top-3 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full ring-4 ring-background",
                      "bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.55)]"
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
                        "relative glass-card rounded-xl p-6 border border-border/80 card-hover noise-overlay",
                        "md:max-w-[560px]",
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

import { ArrowDown, Cpu, Sparkles, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const TYPING_LINE = "Full-stack · ML/AI · Data-driven systems";

function TypingPrompt({ text }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setShown(text);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 38);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <p className="font-mono text-sm md:text-base text-left max-w-xl mx-auto min-h-[1.6em] px-4 py-3 rounded-xl border border-border/80 bg-card/40 backdrop-blur-md shadow-sm">
      <span className="text-muted-foreground select-none">&gt; </span>
      <span className="text-accent">{shown}</span>
      <span
        className="inline-block w-2 h-4 ml-0.5 align-middle bg-primary animate-caret-blink motion-reduce:animate-none motion-reduce:opacity-100"
        aria-hidden
      />
    </p>
  );
}

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div
        className="tech-hero-grid absolute inset-0 motion-safe:animate-grid-pan pointer-events-none opacity-80"
        aria-hidden
      />
      <div
        className="hero-glow-orb absolute -top-32 left-1/2 -translate-x-1/2 w-[min(100vw,720px)] h-[min(100vw,720px)] pointer-events-none opacity-70"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden
      />

      <div className="container max-w-4xl mx-auto text-center z-10 relative scanlines-subtle rounded-3xl border border-border/40 bg-card/15 backdrop-blur-sm px-4 py-12 md:py-16 shadow-[0_0_80px_hsl(var(--primary)/0.08)]">
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/60 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/60 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/50 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/50 rounded-br-lg pointer-events-none" />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="tech-pill font-mono inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            SYS.ONLINE
          </span>
          <span className="tech-pill font-mono inline-flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-primary" aria-hidden />
            BUILD_MODE
          </span>
          <span className="tech-pill font-mono inline-flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5 text-accent" aria-hidden />
            STACK_READY
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            <span className="opacity-0 animate-fade-in font-sans"> Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 font-sans">
              {" "}
              Seeyan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 font-sans">
              {" "}
              Newaz
            </span>
          </h1>

          <div className="opacity-0 animate-fade-in-delay-2 max-w-2xl mx-auto">
            <TypingPrompt text={TYPING_LINE} />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I&apos;m a software developer passionate about problem-solving, innovation, and
            building impactful solutions through full-stack development, machine learning,
            artificial intelligence and data analysis. I&apos;m always eager for
            opportunities—whether internships, collaborations, or employment—that challenge me
            and help me grow as a software developer.
          </p>

          {/* <div className="flex flex-wrap justify-center gap-3 pt-2 opacity-0 animate-fade-in-delay-3">
            {["React", "Python", "Cloud", "AI/ML"].map((label) => (
              <span
                key={label}
                className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md border border-primary/25 bg-primary/5 text-foreground/90 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
              >
                {label}
              </span>
            ))}
          </div> */}

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="cosmic-button inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 opacity-90" aria-hidden />
              View My Work
            </a>
            <a href="#contact" className="outline-button">
              Initialize contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce motion-reduce:animate-none z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
      </div>
    </section>
  );
};

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/80 bg-card/25 backdrop-blur-md">
      <div className="container flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground font-mono text-center sm:text-left">
          &copy; {new Date().getFullYear()} Seeyan Newaz · All systems nominal
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-4 py-2 text-sm font-medium text-primary hover:border-primary/45 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Top
          </span>
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};

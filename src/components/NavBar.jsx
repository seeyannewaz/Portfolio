// NavBar.jsx
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));

    const pickActive = () => {
      const mark = window.innerHeight * 0.3;
      let best = ids[0];
      let bestDist = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const anchor = r.top + Math.min(r.height * 0.2, 80);
        const dist = Math.abs(anchor - mark);
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      }
      setActiveId(best);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "py-3 bg-background/75 backdrop-blur-xl border-border/60 shadow-[0_8px_32px_hsl(var(--foreground)/0.06)]"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-lg md:text-xl font-bold flex items-center gap-2 group"
          href="#hero"
        >
          {/* <span className="font-mono text-[10px] md:text-xs text-primary/90 tracking-widest uppercase hidden sm:inline border border-primary/30 px-2 py-0.5 rounded-md bg-primary/5 group-hover:border-primary/50 transition-colors">
            SN
          </span> */}
          <span className="relative z-10 text-left">
            <span className="text-glow text-foreground font-semibold">Seeyan Newaz</span>
            <span className="text-muted-foreground font-medium"> Portfolio</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item, key) => {
            const id = item.href.slice(1);
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "nav-link-glow px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                  activeId === id
                    ? "text-primary nav-active"
                    : "text-foreground/75 hover:text-foreground"
                )}
              >
                {item.name}
              </a>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 rounded-lg border border-border/80 bg-card/50 backdrop-blur-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 z-[60] h-[100dvh] bg-background/95 backdrop-blur-xl",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="relative w-full h-full flex flex-col items-center justify-center gap-6 text-lg font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-lg border border-border bg-card/80"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "font-mono text-sm tracking-wider uppercase",
                  activeId === item.href.slice(1) ? "text-primary" : "text-foreground/80"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
      setIsScrolled(window.scrollY > 10); // bugfix: screenY -> scrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // unlock
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Seeyan Newaz </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* Inline (non-floating) toggle on desktop */}
          <ThemeToggle />
        </div>

        {/* right-side controls on mobile (toggle + burger) */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Inline (non-floating) toggle on mobile */}
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 z-[60] h-[100dvh] bg-background/95 backdrop-blur-md",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)} // click backdrop to close
        >
          <div
            className="relative w-full h-full flex flex-col items-center justify-center space-y-8 text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button at top right */}
            <button
              className="absolute top-4 right-4 p-2 rounded-md"
              aria-label="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
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

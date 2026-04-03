import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

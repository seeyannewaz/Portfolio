import { cn } from "@/lib/utils";

export const SectionHeading = ({ eyebrow, children, className }) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.32em] text-primary/85 mb-3 select-none">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
    </div>
  );
};

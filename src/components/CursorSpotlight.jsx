import { useEffect, useRef, useState } from "react";

export const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() =>
        setPos({ x: e.clientX, y: e.clientY })
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[3] opacity-80 dark:opacity-100"
      aria-hidden
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.14), transparent 55%)`,
      }}
    />
  );
};

import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Resume from "../assets/Resume.pdf";
import myImg from "../assets/myImg.jpg";

export const AboutSection = () => {
  // Only enable interactive tilt on devices with a fine pointer (i.e., mouse)
  const prefersMouse = useMemo(
    () =>
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(pointer: fine)").matches
        : false,
    []
  );

  const [transform, setTransform] = useState("");
  const handleMouseMove = (e) => {
    if (!prefersMouse) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = -(((y / rect.height) - 0.5) * 10);
    const rotateY = (((x / rect.width) - 0.5) * 10);
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };
  const resetTransform = () => setTransform("");

  // Measure the cards column height and match the photo height to it (desktop only)
  const cardsColRef = useRef(null);
  const [cardsHeight, setCardsHeight] = useState(null);

  useEffect(() => {
    if (!cardsColRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Only lock height for md+ screens; let mobile be auto
        const isMd = window.matchMedia("(min-width: 768px)").matches;
        setCardsHeight(isMd ? entry.contentRect.height : null);
      }
    });
    ro.observe(cardsColRef.current);
    // Also update on viewport changes
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (!cardsColRef.current) return;
      setCardsHeight(mq.matches ? cardsColRef.current.getBoundingClientRect().height : null);
    };
    mq.addEventListener?.("change", onChange);
    return () => {
      ro.disconnect();
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* 3-column grid on desktop: [Text] [Cards] [Photo] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* LEFT: Photo — height matches middle column on md+; auto on mobile */}
          <div className="flex md:block justify-center">
            <div
              className={
                "relative w-56 sm:w-64 md:w-auto md:min-w-[260px] lg:min-w-[300px] " +
                // On desktop, let height be driven by measured cards height
                "aspect-[3/4] md:aspect-auto " +
                "transition-transform duration-300 will-change-transform hover:scale-102 focus:scale-102"
              }
              style={cardsHeight ? { height: cardsHeight } : undefined}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTransform}
            >
              {/* inner tilt wrapper so height lock applies to outer box cleanly */}
              <div
                className="absolute inset-0"
                style={{ transform }}
                aria-label="Portrait of Seeyan Newaz"
              >
                {/* 3D frame behind */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/80 via-secondary/80 to-primary/60 shadow-2xl translate-x-5 translate-y-5"></div>

                {/* Image */}
                <img
                  src={myImg}
                  alt="Seeyan Newaz"
                  className="relative w-full h-full object-cover rounded-xl border-4 border-background shadow-xl select-none pointer-events-none"
                  draggable="false"
                />
              </div>
            </div>
          </div>
          {/* MIDDLE: Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Aspiring Software Developer</h3>

            <p className="text-muted-foreground">
              Having worked at <b><i>ACM UTD</i></b> as a backend developer and at <b><i>Paycom</i></b> as a software developer intern, I have developed a strong foundation
              in both backend and frontend services, and gained hands-on experience in various programming languages and frameworks.
            </p>

            <p className="text-muted-foreground">
              I'm a full-stack developer passionate about creating elegant solutions to complex problems. I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving software development landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT: 3 stacked skill cards */}
          <div ref={cardsColRef} className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web and Software Development</h4>
                  <p className="text-muted-foreground">Creating responsive websites and software applications with modern frameworks and technologies.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

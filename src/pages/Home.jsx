import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { CursorSpotlight } from "../components/CursorSpotlight";
import { EducationSection } from "../components/EducationSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { WorkExperienceSection } from "../components/WorkExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <CursorSpotlight />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <EducationSection />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <WorkExperienceSection />
        </ScrollReveal>
        <ScrollReveal delay={40}>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <ContactSection />
        </ScrollReveal>
        <Footer />
      </main>
    </div>
  );
};

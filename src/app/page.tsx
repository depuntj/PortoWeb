import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Each section has an ID that corresponds to the navigation links */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <CTASection />
      </section>

      <Footer />
    </div>
  );
}

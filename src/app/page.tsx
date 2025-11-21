import "./globals.css";
import { HomeHero } from "@/components/sections/home-hero.section";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSection } from "@/components/sections/service.section";
import { ProjectSection } from "@/components/sections/project-section";
import { QuestionSection } from "@/components/sections/questions.section";
import { SkillSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="z-0 overflow-clip">
      <section id="home">
        <HomeHero />
      </section>
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>
      <section id="services" className="scroll-mt-20">
        <ServiceSection />
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectSection />
      </section>
      <section id="skills" className="scroll-mt-20">
        <SkillSection />
      </section>
      <section id="questions" className="scroll-mt-20">
        <QuestionSection />
      </section>
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
    </main>
  );
}

import "./globals.css";
import { getQueryClient } from "@/components/lib/quary-client";
import { HomeHero } from "@/components/sections/home-hero.section";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { ServiceSection } from "@/components/sections/service.section";

export default function Home() {
  const quaryClient = getQueryClient();
  return (
    <main className="z-0 overflow-clip">
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}

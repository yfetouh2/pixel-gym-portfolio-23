

import { Header } from "@/components/Header";

import { HeroSection } from "@/components/HeroSection";

import { AboutSection } from "@/components/AboutSection";

import { ProjectsSection } from "@/components/ProjectsSection";

import { ExperienceSection } from "@/components/ExperienceSection";

import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

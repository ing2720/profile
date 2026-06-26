import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection profile={profile} />
        <AboutSection />
        <FeaturedProjectsSection projects={featuredProjects} />
        <SkillsSection skillCategories={skillCategories} />
        <ExperienceSection experiences={experiences} />
      </main>
      <Footer />
    </>
  );
}

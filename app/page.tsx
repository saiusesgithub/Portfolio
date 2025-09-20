import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { AchievementsSection } from "@/components/achievements-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ProjectsSection } from "@/components/projects-section"
import JourneyRoadmap from "@/components/journey-roadmap"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <JourneyRoadmap />
      <AchievementsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

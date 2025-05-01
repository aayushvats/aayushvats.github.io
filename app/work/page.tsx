"use client";

import { motion } from "framer-motion";
import { ExperienceSection } from "@/components/work/experience-section";
import { EducationSection } from "@/components/work/education-section";
import { SkillsSection } from "@/components/work/skills-section";
import { ProjectSection } from "@/components/work/project-section";
import { AchievementSection } from "@/components/work/achievement-section";
import { MainLayout } from "@/components/layout/main-layout";

export default function WorkPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-8 sm:space-y-12 lg:space-y-16"
      >
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectSection />
        <AchievementSection />
      </motion.div>
    </MainLayout>
  );
}

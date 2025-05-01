"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/hero-section";
import { Contact } from "@/components/contact";
import { MainLayout } from "@/components/layout/main-layout";
import { Section } from "@/components/layout/section";

const animationConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
  viewport: { once: true, amount: 0.1 },
};

export default function Home() {
  return (
    <MainLayout>
      <motion.div
        {...animationConfig}
        className="space-y-5 sm:space-y-12 lg:space-y-12"
      >
        <HeroSection />
        <Section>
          <motion.div {...animationConfig}>
            <h2 className="text-[22px] font-medium pt-5 font-medium ">
              Socials
            </h2>
          </motion.div>
          <motion.div {...animationConfig} className="space-y-2">
            <p className="text-[16px] pt-[-4] pb-8 leading-relaxed text-muted-foreground">
              Follow me on my socials to see different aspects of my life.
            </p>
            <Contact />
          </motion.div>
        </Section>
      </motion.div>
    </MainLayout>
  );
}

"use client";

import { motion } from "framer-motion";
import { SkillCategory, skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-[28px] font-medium">Skills</h2>
      <div className="space-y-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <h3 className="text-[20px] font-medium">{category.category}</h3>
            <p className="text-[16px] text-muted-foreground">
              {category.skills.join(" · ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

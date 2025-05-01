"use client";

import { motion } from "framer-motion";
import { Education, education } from "@/data/education";

export function EducationSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-[28px] font-medium">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] sm:text-[17px] font-medium">
                {edu.degree}
              </h3>
              <p className="text-sm sm:text-[17px] text-muted-foreground">
                {edu.duration}
              </p>
            </div>

            <p className="text-[16px] text-muted-foreground w-[70%]">
              {edu.school}
            </p>
            <p className="text-[16px] text-muted-foreground">
              {edu.grade && `(${edu.grade})`}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

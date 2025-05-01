"use client";

import { motion } from "framer-motion";
import { Experience, experiences } from "@/data/experience";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="space-y-5">
      <h1 className="text-[22px] font-medium pb-5">Experience</h1>
      <div className="space-y-8">
        {experiences.map((job) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-[20px] font-medium">
                {job.companyUrl ? (
                  <Link 
                    href={job.companyUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {job.company}
                  </Link>
                ) : (
                  job.company
                )}
              </h3>
              <span className="text-[16px] text-muted-foreground">
                {job.duration}
              </span>
            </div>
            <p className="text-[14px] text-muted-foreground font-medium">
              {job.role}
            </p>
            <p className="text-[16px] text-muted-foreground w-[80%]">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

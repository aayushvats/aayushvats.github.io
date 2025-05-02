"use client";

import { motion } from "framer-motion";
import { Experience, experiences } from "@/data/experience";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="space-y-5">
      <h2 className="text-[28px] font-medium">Experience</h2>
      <motion.div 
        className="space-y-8 relative"
        animate={{ 
          height: showAll ? "auto" : "450px",
          transition: { duration: 0.5 }
        }}
        style={{ overflow: "hidden" }}
      >
        {experiences.map((job, index) => (
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
        
        {!showAll ? (
          <>
            <div 
              className="absolute bottom-0 left-0 right-0 h-[250px]" 
              style={{
                background: `linear-gradient(to bottom, var(--experience-gradient-start), var(--experience-gradient-end))`
              }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-0.5"
            >
              <button
                onClick={() => setShowAll(true)}
                className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="text-sm">View All</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-0.5 mt-8"
          >
            <button
              onClick={() => setShowAll(false)}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ChevronUp className="h-3.5 w-3.5" />
              <span className="text-sm">View Less</span>
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

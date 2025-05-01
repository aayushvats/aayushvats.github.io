"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export function ProjectSection() {
  const projects = [
    {
      title: "Astroyapper",
      description:
        "Astroyapper is a SaaS, it uses AI and pesonal information to compute astronomical calculations, made possible by using the algorithms and processes used by astrologers to generate predictions.",
      technologies: ["React", "Firebase", "Typescript", "Tailwind", "Render"],
      demo: "https://astroyapper.com",
    },
    {
      title: "Meetster",
      description:
        "Meetster aims to making scheduling IRL meets, easy and fun. Meetster is currently in protoype development, and can be waitlisted.",
      technologies: ["React + Vite", "Supabase", "Typescript"],
      demo: "https://meetster.gaurshubham.com",
    },

    {
      title: "Anti AI Website",
      description:
        "Built company website and HR management system, streamlining 6,000+ monthly applications.",
      technologies: ["React", "Next.js", "PostgreSQL", "Javascript", "AWS"],
      demo: "https://antiai.ltd",
    },
    {
      title: "CyberBattleSim (Microsoft)",
      description:
        "Enhanced simulation functionalities and refined neural network algorithms during research internship.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Linux"],
      github: "https://github.com/microsoft/CyberBattleSim",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-8"
    >
      <h2 className="text-[28px] font-medium">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-medium">{project.title}</h3>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-[16px] text-muted-foreground leading-relaxed w-[80%]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[14px] text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

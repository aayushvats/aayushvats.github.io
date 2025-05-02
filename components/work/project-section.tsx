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
      title: "Automated Driving Detection",
      description: "Cross-platform trip detection system using Swift and Kotlin that utilizes Minew E8 BLE iBeacon tags to distinguish personal vehicle usage, integrating Google Maps API for visualizing routes with 80% trip detection accuracy.",
      technologies: ["Android Development", "iOS Development", "Flutter", "Kotlin", "Swift", "Minew SDK", "Dart"],
      demo: "https://youtube.com/shorts/ew-i-xqprhg?feature=share",
      github: "https://github.com/aayushvats/automated-driving-detection",
    },
    {
      title: "Universal Media Controller",
      description: "Created an open-source plugin published on pub.dev (150 points, 500+ downloads) that leverages native APIs to detect and control media playback within apps and widgets.",
      technologies: ["Open Source", "Pub Dev", "Developer Plugin", "Flutter", "Dart", "Kotlin"],
      demo: "https://pub.dev/packages/flutter_media_controller",
      github: "https://github.com/aayushvats/flutter_media_controller",
    },
    {
      title: "Delhi Metro Tracker",
      description: "Built a real-time metro ride tracker that alerts users near their stop, leveraging DMRC Momentum data and location services with underground fallback logic.",
      technologies: ["CLocation Manager", "Location Services", "SQLite", "Kotlin", "Swift", "Flutter", "Dart"],
      github: "https://github.com/aayushvats/dmrc",
    },
    {
      title: "Podcasts",
      description: "A podcasts app with custom UI made elements and animations, parsing through RSS feeds.",
      technologies: ["Swift", "SwiftUI", "Core Data", "RESTful APIs"],
      demo: "https://www.linkedin.com/posts/aayush-vats_hey-folks-its-been-a-year-since-google-activity-7312203046820663296-EKz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADM3HqsBjxiaAmyGWsFCrattpCTX6OWhZuY",
      github: "https://github.com/aayushvats/podcasts",
    },
    {
      title: "Gym Logger",
      description: "A gym session logger built with SwiftUI, utlising SQLite storage, and Charts library. Custom made Muscle Map.",
      technologies: ["Swift", "SwiftUI", "Core Data", "SQLite", "RESTful APIs"],
      github: "https://github.com/aayushvats/gym-tracking",
    },
    {
      title: "Budi Travel",
      description: "A travel app with access management, connecting you with local support, featuring Stripe payments and optimized RESTful POST and PUSH APIs.",
      technologies: ["Android Development", "iOS Development", "Flutter", "Dart", "RESTful APIs", "Stripe"],
      demo: "https://buditravel.com/",
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

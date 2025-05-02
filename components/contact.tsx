"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  Instagram,
  Facebook,
  Rss,
  NotebookPen,
  Code,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/aayushvats/",
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/aayush-vats/",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Leetcode",
    icon: Code,
    href: "https://leetcode.com/aayushvats/",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:aayushvats@protonmail.com",
    color: "hover:text-[#e4405f]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/rick.313x/",
    color: "hover:text-[#e4405f]",
  },
];

export function Contact() {
  return (
    <div className="relative z-50 flex flex-wrap gap-3 sm:gap-5 mt-[-4]   rounded-lg shadow-md">
      {socialLinks.map((link) => (
        <div key={link.name} className="relative z-20">
          <Button size="sm" className="z-[50]" asChild></Button>
          <Link
            href={link.href}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className={` gap-0 text-sm sm:text-base text-muted-foreground transition-colors dark:hover:text-white relative z-30 ${link.color}`}
          >
            <link.icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </Link>
        </div>
      ))}
    </div>
  );
}

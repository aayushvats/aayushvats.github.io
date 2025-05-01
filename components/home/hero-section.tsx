"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-4 sm:space-y-4"
    >
      <h1 className="text-[22px] font-medium pb-5 font-medium">Aayush Vats</h1>
      <div className="space-y-2 sm:space-y-8">
      <div className="space-y-4 sm:space-y-8  text-sm sm:text-base lg:text-[16px] leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a mobile developer by trade, tech nerd by nature. Ever since I could press buttons,
            I&apos;ve been poking around with gadgets, apps, and whatever shiny thing the internet was
            hyping that week. Being an early adopter is second nature to me, if it's fresh and game-changing,
            I'm already exploring it.
          </p>
          <p>
            I strongly believe in the philosophy, &quot;An idiot admires complexity, a genius admires
            simplicity&quot;. I also moonlight as a designer, because making things look good should
            never be an afterthought. Great design is invisible, until it&apos;s missing.
          </p>
          <p>
            When I&apos;m not debugging or chasing down rogue pixels, you&apos;ll probably find me sketching.
            Paper, iPad, napkin—it doesn&apos;t matter. It&apos;s my version of mental yoga, and it keeps
            things weird (in a good way).
          </p>
          <p>
            I like building things that feel simple but smart. Tech should be clever, not complicated. If it
            makes someone say “hey, that&apos;s neat,” I know I&apos;m on the right track.
          </p>
        </div>

        <div className="flex pt-2 flex-wrap gap-2.5 lg:text-[16px] sm:gap-4">
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link href="/work">
              <p>My Work</p>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link href="/about">
              <p>About Me</p>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group text-base sm:text-lg"
          >
            <Link
              href="https://drive.google.com/file/d/1RjjtpFOU4q2AwxChJ2uwlITxmFc_1kny/view?usp=sharing"
              rel="noopener noreferrer"
            >
              <p>Resume</p>
              <FileText className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

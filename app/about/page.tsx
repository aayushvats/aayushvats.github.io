"use client";

import { motion } from "framer-motion";
import { images, books } from "@/data/about";
import { Carousel } from "@/components/carousel";
import { MainLayout } from "@/components/layout/main-layout";
import { Section } from "@/components/layout/section";
import { Timeline } from "@/components/about/timeline";
import { ReadingList } from "@/components/about/reading-list";

const timelineEvents = [
  { year: "2003", description: "Born in Jodhpur, Rajasthan, India." },
  {
    year: "2010",
    description: "Used PC for the first time, instant crush.",
  },
  { year: "2015", description: "Started using QBasic in school." },
  {
    year: "2021",
    description: "Started Studying Engineering, MBM University Jodhpur.",
  },
  {
    year: "2022",
    description:
      "Used Linux Kernel for the first time, instantly became a cult follower.",
  },
  {
    year: "2023",

    description:
      "Interned at NIT Trichy, Studied Cybersecurity, Reinforcement Learning and dove deeper into AI.",
  },
  {
    year: "2024",
    description:
      "Rebuilt my life after a setback from last year, Joined a early startup . Moved to Jaipur, India.",
  },
  {
    year: "2024",
    description:
      "Left the startup, Joined a US Based Company as a Software Engineer.",
  },
  {
    year: "2024",
    description: "Left the company to work on my own saas idea, Meetster.",
  },
  {
    year: "2025",
    description:
      "Started building Astroyapper.com, but left it after some time due to difference of vision with the co-founder.",
  },
  {
    year: "2025",
    description:
      "Joined a Startup as a Software Engineer. Moved to Banglore, India",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="space-y-14 sm:space-y-12 lg:space-y-16">
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.01 }}
          >
            <h2 className="text-[22px] font-medium pb-5">
              About Me in 10 mins.
            </h2>
          </motion.div>
          <motion.div
            className="space-y-4 sm:space-y-8 text-sm sm:text-base lg:text-[16px] leading-relaxed text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.01 }}
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  <b>Who are you anyways?</b> Good Question, I&apos;m Shubham,
                  here&apos;s my story. Since my childhood, I was fascinated by
                  computers and technology. At 10, I was curious enough to learn
                  PowerPoint on my own. As a result, I spent years of my
                  childhood learning about them, fixing my computer, taking
                  apart hard drives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  I&apos;ve spent countless hours playing Condition Zero, Total
                  Overdose, Grand Theft Auto, Need For Speed etc. I first learnt
                  programming using QBasic during my school, thanks to Windows
                  XP & computer viruses I learnt the habit of fixing errors,
                  early in life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  Other than programming I enjoy astrophotography, a hobby I
                  picked up casually exploring my phone camera&apos;s
                  capabilities, I&apos;ve captured different shots of moons,
                  stars & nebulas. During my college, I started writing my own
                  blog,{" "}
                  <a href="https://blog.gaurshubham.com/">
                    <span className="text-primary">The Zero Days of Life</span>
                  </a>{" "}
                  where I write about my daily life, my failures, challenges
                  etc.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  My work is a reflection of my inspirations. I have been very
                  much inspired by fictional characters, music & programmers,
                  people such as Iron Man (for putting his passion for
                  technology above everything else), Rocky Balboa (for never
                  giving up), Kevin Mitnick (for being my hacker inspiration),
                  Linus Torvalds (for his beautiful contribution to open
                  source), Karate Kid (for teaching me wax on, wax off!), Pink
                  Floyd (for every one of their life altering hits).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  I don&apos;t like using properitary softwares, I like to use
                  free and open source softwares. I like to work with open
                  source softwares, and I avoid getting into the walled garden
                  of ecosystems.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              I like living alone.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <p>
              I do like socialising and meeting new people constantly, but
              sometimes I just live alone, process my thoughts, work on the
              things I want to do, rather than just follow where the group goes,
              I do hate larger groups where the decision making is made by the
              alpha of the group. I like working with small sets of people, and
              I enjoy the prospect of knowing everyone closely. The rules change
              when I travel, I try to strike up conversations with new people,
              make friends and go along.
            </p>
            <p>
              Apart from this, to really become great at something I need to
              spend a lot of time alone on it, to gain that unwavering focus is
              important for me. People play a huge role in that, and through
              time I have realised a one good friend is enough to live a
              meaningful life, everything good above that is a luxury. I try to
              make my days even by having a evening
              <span className="text-primary"> chai</span> with my friend outside
              my home where we discuss about our thoughts and ideas.
            </p>
          </motion.div>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              Entropy & Life.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 sm:space-y-8"
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p>
              The goal of every journey is to gain more entropy (the ability for
              life to be spontaneous) all I work for is to gain a little more
              entropy, that extra ability to indulge in my pursuits without
              having to think about the constraints. The core of humanly life
              has always been the pursuit of &quot;the more&quot; and I
              don&apos;t find myself very different here.
            </p>
          </motion.div>
        </Section>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <ReadingList books={books} />
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              Technology.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p>
              As vague it may sound to you, but there&apos;s a very specific
              reason why I&apos;m putting it here, As a child growing up in
              2000s, Science and Technology were noble pursuits and something
              that provided a deep meaning to life, the ability to understand
              the universe and see the universe in it&apos;s true form has
              always been fascinating. Technology provided a way for me to mask
              my identity and be cool, the understanding of complex systems,
              devices, protocols etc. has made me interested to try out
              different things and make something useful out of it.
            </p>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: "easeOut", delay: 0.9 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              Timeline for context.
            </h2>
          </motion.div>
          <Timeline events={timelineEvents} />
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              I don&apos;t like stability.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 sm:space-y-8"
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p>
              {" "}
              <b>Wait, What? </b>
              The answer is simple, I don&apos;t like limiting myself to
              specific outcomes and possibilities and settle early in life.
              I&apos;ve always wanted to work on different technologies, learn
              something new every day, changing cities, learning about cultures,
              people and living life to it&apos;s meaning to me which is{" "}
              <span className="text-primary">&quot;change&quot;</span>.
              It&apos;s better to mould life, see its true meaning, and live up
              to it, than to accept what&apos;s given by default.
            </p>
            <p>
              The core of a man&apos;s spirit comes from new experiences, I live
              by this thought, and I try to implement it in my life. By trying
              to go beyond my comfort zone and to do things without delving into
              the spiral of thoughts and possibilites. At a time, getting stable
              would be necessary until that let me see life in it&apos;s true
              colors.
            </p>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-[22px] font-medium pb-5 font-medium">
              Questions? Thoughts?
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="leading-relaxed text-muted-foreground">
              <b>Heya Stranger, </b>I love talking to people, and I write back
              to every mail. you can write me{" "}
              <a
                href="mailto:shubham.gaur7116@gmail.com"
                className="text-primary"
              >
                here
              </a>
              .
            </p>
          </motion.div>
        </Section>
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </Section>
      </div>
    </MainLayout>
  );
}

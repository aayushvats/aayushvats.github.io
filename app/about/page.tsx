"use client";

import { motion } from "framer-motion";
import { images, songs as songs } from "@/data/about";
import { Carousel } from "@/components/carousel";
import { MainLayout } from "@/components/layout/main-layout";
import { Section } from "@/components/layout/section";
import { Timeline } from "@/components/about/timeline";
import { Playlist } from "@/components/about/reading-list";

const timelineEvents = [
  {
    year: "2001", description: "Born in New Delhi, India."
  },
  {
    year: "2011", description: "Started using QBasic and PC Logo in school.",
  },
  {
    year: "2015", description: "Got into HTML/CSS and little bit JS."
  },
  {
    year: "2019", description: "Joined BPIT, Delhi for B.Tech in Computer Science.",
  },
  {
    year: "2019", description: "Used Linux Kernel for the first time, instantly became a cult follower.",
  },
  {
    year: "2020", description: "Started Freelancing, and built my first mobile app.",
  },
  {
    year: "2021", description: "Began designing along with contantly interning at multiple startups.",
  },
  {
    year: "2022", description: "Left all startups to focus on oncoming placement season.",
  },
  {
    year: "2023", description: "Cracked multiple interviews and joined Yamaha Motor India as a Software Engineer.",
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
                  <b>Who are you anyways?</b> Good Question, I&apos;m Aayush,
                  here&apos;s a bit of my story.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  I grew up in the early 2000s, right into the world already
                  buzzing software devs and big tech companies. Since then I&apos;ve
                  been fascinated by technology, curious about how things work.
                  As a result, I spent years of my childhood learning about them,
                  fixing my computer, taking and apart hard drives. Thanks to Windows
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
                  I got into programming early in life with things like QBasic, PC Logo 
                  and Borland C++. I went from flashing whatever new ROM was cool then,
                  onto my old Android, to building a UI from scratch because the existing
                  one looked too boring.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  Programming isn&apos;t just a subject, it&apos;s like a superpower.
                  Why search for a tool when you can build the toolbox? My work has 
                  always been a reflection of my interests and needs. From making a weather
                  application because my phone didn&apos;t come with one and other free
                  alternatives looked ugly, to building complex system to screenshare from 
                  my Mac to my Galaxy, I almost exclusively build things which solve
                  real problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p>
                  In a world where everything is an app, I find myself wearing two hats. At
                  times, I&apos;m a consumer, navigating through the App Store. But more
                  often than not, I&apos;m a creator, ideating, designing and developing the
                  apps that I use.
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
              The Work I Do.
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
              Right now, I&apos;m working as a Software Developer at Yamaha Motor
              India, where I&apos;ve been a part of 3 different teams spread across
              the world. Each of which taught me more than the previous. I&apos;ve
              led the development of smart, sensor-powered mobile applications.
              We&apos;re talking real-time driving detection, complex ployline
              algorithms, and even trip tracking natively using Bluetooth and GPS.
              I have written native code in Swift and Kotlin, wrangled Python event
              logics, and even migrated entire applications to Flutter for better performance.
            </p>
            <p>
              Before Yamaha, I have been an intern in multiple startups and organizations,
              where I worked on a variety of projects. I&apos;ve worked at DRDO, Hack2Skill,
              Coding Blocks, and other startups, where I was involved in everything from
              designing to developing end-to-end applications.
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
              The Person Behind the Code.
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
              Development isn&apos;t the only thing that drives me. I seldom freelance
              as a designer. I believe that design should whisper, not shout. I love apps
              that feel obvious in hindsight — the kind that makes you think, &quot;of course,
              this is how it should work.&quot;. When I&apos;m not coding, I&apos;m sketching,
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
            <Playlist songs={songs} />
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
              I don't chase stability, not because I don&apos;t value it, but because
              I&apos;d rather be uncomfortable than unfulfilled. I&apos;ve worked in
              startups, freelanced, shipped products, scrapped ideas, and walked away
              from what didn&apos;t align with my vision. It&apos;s part of the process.
              Change is the constant I&apos;ve come to admire — new tech, new cities, new people.
              That&apos;s how entropy, or what I call freedom to create, increases.
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
                href="mailto:aayushvats@protonmail.com"
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

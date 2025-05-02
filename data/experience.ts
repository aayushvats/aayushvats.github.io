export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  description: string;
  detailDescription?: string;
}

export const experiences: Experience[] = [
  {
    company: "Yamaha Motor",
    companyUrl: "https://yamaha-motor.com/",
    role: "Software Development Engineer",
    duration: "Feb 2023 - Present",
    description: "Worked on 3 production applications — 2 minor projects and 1 flagship project — and numerous proof-of-concept projects. Led a team of 3 developers, contributing to a total revenue of ₹40 crore for the company. Successfully developed and deployed solutions using Swift, Kotlin, Flutter, Dart, C#, and Python."
  },
  {
    company: "Hack 2 Skill",
    companyUrl: "https://hack2skill.com/",
    role: "Software Designer Developer Intern",
    duration: "Jun 2022 - Aug 2022",
    description: "Joined as a seed-stage intern, designed and developed the onboarding flow of the Phase 2 of the main hackathon platform. Used Figma, Framer and React",
  },
  {
    company: "Coding Blocks by VMC",
    companyUrl: "https://www.codingblocks.com/index.html",
    role: "UX Developer Intern",
    duration: "Apr 2022 - Jun 2022",
    description: "Restructured the brand identity and colabborated in ongoing projects. Worked on the coding platform website and other ongoing projects. Utilized Vanilla JS.",
  },
  {
    company: "DRDO",
    companyUrl: "https://www.drdo.gov.in/drdo/",
    role: "Summer Research Intern",
    duration: "Oct 2021 - Dec 2021",
    description: "Worked on in-house server and internal tools. Developed a web application for the internal team to manage their work and tasks. Used Javascript, Java, and SQL.",
  },
  {
    company: "Offbeat",
    role: "Software Developer Intern",
    duration: "Nov 2020 - Jan 2021",
    description: "Led the implementation of a new feature in the existing mobile application. Utilised React Native, Kotlin, Flutter and Firebase. Integrated Google OAuth. Unfortuantely, the company shut down a few months later because of lack of funding.",
  },
  {
    company: "HomeFlic WeGrow",
    companyUrl: "https://www.linkedin.com/company/homeflic-wegrow/?originalSubdomain=in",
    role: "Freelance Software Developer",
    duration: "Sep 2020 - Dec 2020",
    description: "Developed and distributed the mobile application for the startup, from scratch. The app was a showcase and marketplace of the ed-tech courses they offered. Used Flutter to create the crossplatform app.",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["C++", "Java", "Python", "Rust", "Solidity", "Embedded C"],
  },
  {
    category: "Web Development",
    skills: [
      "HTML/CSS/JS",
      "React",
      "NodeJS",
      "Django",
      "NextJS",
      "SQL",
      "MongoDB",
    ],
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    category: "Tools",
    skills: ["Bash", "Sublime Text", "VS Code", "Vim"],
  },
  {
    category: "Others",
    skills: [
      "Git",
      "Github",
      "Vim",
      "Linux",
      "VM",
      "Docker",
      "AWS",
      "Playwright",
    ],
  },
];

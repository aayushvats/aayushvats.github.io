export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "C#",
      "Swift",
      "Objective C",
      "SQL",
      "Python"
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      "Flutter",
      "Kotlin",
      "KVM",
      "Swift",
      "SwiftUI",
      "Dart",
      "Swift Package Manager",
      "Nativescript",
      "React Native",
    ],
  },
  {
    category: "Tools",
    skills: [
      "XCode",
      "Android Studio",
      "Webstorm",
      "VS Code",
      "Azure DevOps",
      "Firebase",
      "Vim",
      "Emacs"
    ],
  },
];

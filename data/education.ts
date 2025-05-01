export interface Education {
  degree: string;
  school: string;
  duration: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "B.E. Electronics & Communication Engg.",
    school: "MBM University, Jodhpur",
    duration: "2021 – 2025",
  },
  {
    degree: "Physics, Chemistry, Mathematics",
    school: "G.S. jangid Memorial Public School, Jodhpur",
    duration: "2019 – 2021",
    grade: "71.6%",
  },
];

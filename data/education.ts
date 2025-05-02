export interface Education {
  degree: string;
  school: string;
  duration: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "GGSIPU, Delhi",
    duration: "2019 – 2023",
    grade: "9.0 GPA",
  },
  {
    degree: "Physics, Chemistry, Mathematics",
    school: "Apeejay School, Pitampura",
    duration: "2018 – 2019",
    grade: "91.6%",
  },
];

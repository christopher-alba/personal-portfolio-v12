export const skills: Skills[] = [
  {
    title: "UX + UI Design",
    points: ["Website", "Desktop", "Mobile"],
    summary:
      "I am able to design simple user experiences for applications that gives exceptional user experiences. This can sometimes involve designing seamless user interfaces for web/desktop/mobile applications.",
  },
  {
    title: "Software Design",
    points: ["Frontend", "Backend", "Speed to market", "Enterprise"],
    summary:
      "Whether it's the frontend or backend side of applications, I can design their architecture based on requirements; this can involve startup environments or enterprise-level solutions.",
  },
  {
    title: "Database Architecture",
    points: ["Relational", "Non-Relational", "Cloud", "On-Premise"],
    summary:
      "I am knowledgeable and experienced on both relational and non-relational database, and can help design their structure to help you with simple data needs.",
  },
  {
    title: "Coding",
    points: ["Maintainable", "Scalable", "Readable", "Platform Agnostic"],
    summary:
      "Having experience coding at the hardware level from university, and at the software abstraction level in my career, I am familiar in coding with low-level and high-level languages.",
  },
];

export type Skills = {
  title: string;
  points: string[];
  summary: string;
};

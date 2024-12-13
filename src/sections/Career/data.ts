type Company = {
  name: string;
  dateString: string;
  startDate: string;
  endDate: string | undefined;
  position: string;
  type: string;
  nameShort: string;
  technologies: string[];
  website: string;
  summary: string;
};
type Companies = Company[];

export const timelineItems: Companies = [
  {
    summary:
      "As a software engineer, I am responsible for creating and maintaining frontend, and backend web applications. I have touched some aspects of Artificial Intelligence, and have designed some UI/UX flows on Figma, which were then implemented in production applications.",
    type: "Work",
    name: "Turners Automotive Group Digital",
    nameShort: "TAG Digital",
    position: "Software Engineer",
    dateString: "July 2023 - Present",
    startDate: "July 2023",
    endDate: undefined,
    technologies: [
      "Typescript",
      "Cypress",
      "Angular",
      "Javascript",
      "C#",
      "Cucumber",
      "Microsoft Teams",
      "AWS",
      "Bitbucket",
      "Open API",
      ".NET Frameworks",
      "X Unit",
      "Python",
    ],
    website: "https://www.turnersautogroup.co.nz/",
  },
  {
    summary:
      "As a graduate software engineer, I was responsible for maintaining the end to end integration tests that were written in Java using the Playwright testing library. I used this opportunity to learn the different software flows in the business. Even though I did not create or maintain software, I needed to have a slight understanding of how it works and what its suppose to do.",
    type: "Work",
    name: "Turners Automotive Group Digital",
    nameShort: "TAG Digital",
    position: "Graduate Software Engineer",
    dateString: "June 2022 - July 2023",
    startDate: "June 2022",
    endDate: "July 2023",
    technologies: [
      "Typescript",
      "Cypress",
      "Vue",
      "Angular",
      "Javascript",
      "C#",
      "Java",
      "Playwright",
      "Cucumber",
      "Microsoft Teams",
      "AWS",
      "Bitbucket",
      ".NET Frameworks",
    ],
    website: "https://www.turnersautogroup.co.nz/",
  },
  {
    summary:
      "I joined Henry Schein in my penultimate year of university as an intern. Working mainly in C#, I designed and developed web applications, doing both the frontend and backend. After each piece of work, I would present what I've accomplished to a large audience online, where I would receive constructive feedback on my work.",
    type: "Internship",
    name: "Henry Schein One",
    nameShort: "HSO",
    position: "Fullstack Software Developer Intern",
    dateString: "November 2021 - February 2022 (400 hours)",
    startDate: "November 2021",
    endDate: "February 2022",
    technologies: [
      "C#",
      "Blazor",
      ".NET",
      "Figma",
      "Microsoft Teams",
      "Microsoft Azure",
    ],
    website: "https://henryscheinone.co.nz/",
  },
  {
    summary:
      "I joined Jasper as an intern in my second year of university. Here I worked primarily in Javascript, specifically in the frontend of a React application. Here they adopted GraphQL to make API calls to their server instead of REST, which was an interesting technology for me to learn. This was my first job in the IT industry.",
    type: "Internship",
    name: "Jasper",
    nameShort: "Jasper",
    position: "Frontend Software Engineer Intern",
    dateString: "November 2020 - February 2021 (416 hours)",
    startDate: "November 2020",
    endDate: "February 2021",
    technologies: [
      "Javascript",
      "React",
      "Styled Components",
      "Inhouse Design System",
      "Figma",
      "Cypress",
      "Jest",
      "React Testing Library",
      "GraphQL",
      "Apollo",
      "Notion",
      "Linear",
      "Gihub",
    ],
    website: "https://www.jasper.io/",
  },
];

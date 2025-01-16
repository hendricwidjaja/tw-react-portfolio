import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import reviewer1 from "../assets/testimonials/reviewer1.jpg";
import reviewer2 from "../assets/testimonials/reviewer2.jpg";
import reviewer3 from "../assets/testimonials/reviewer3.jpg";
import reviewer4 from "../assets/testimonials/reviewer4.jpg";

export const HERO_CONTENT = `I consider myself an aspiring full stack web developer. Previously a cost planner/contract administrator in the construction industry. I design, manage and deliver projects with every pixel in mind. This is a glance at my software development journey so far. If you're interested in working together, have some feedback (or just wanted to say hello) please feel free to reach out, follow me on my socials or get in touch via the links below.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2025",
    role: "Diploma of IT",
    company: "Coder Academy",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2019",
    role: "Bachelor of Construction Management & Property",
    company: "University of New South Wales",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const REVIEWS = [
  {
    name: "John Doe",
    title: "CEO of John Doe Pty Ltd",
    picture: reviewer1,
    highlight: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla"',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem dolorum? Illum, doloribus. Illo nam atque praesentium error nemo aliquam. Doloribus, exercitationem dolorum? Illum, doloribus. Illo nam atque praesentium error nemo aliquam Doloribus, exercitationem dolorum? Illum, doloribus. Illo nam atque praesentium error nemo aliquam."
  },
  {
    name: "Brianna Ford",
    title: "CEO of BF Company",
    picture: reviewer2,
    highlight: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla"',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus."
  },
  {
    name: "Terrance Williams",
    title: "Director of Williams Pty Ltd",
    picture: reviewer3,
    highlight: '"Lorem ipsum dolor sit amet consectetur. Dolores, nulla"',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus."
  },
  {
    name: "Joanna Chen",
    title: "Lead Software Engineer at JC & Co",
    picture: reviewer4,
    highlight: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla"',
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem dolorum? Illum, doloribus. Illo nam atque praesentium error nemo aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus"
  },
]
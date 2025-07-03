// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  email,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: "#projects-anchor",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Mern Stack Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Theme Developer",
    icon: backend,
  },
  {
    title: "Git",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Mern Stack,Wordpress",
    company_name: "Tekvill",
    icon: shopify,
    iconBg: "#fff",
    date: "november 2023 - present",
    points: [
      "Started with WordPress at Tekvill, building responsive, SEO-friendly websites with custom themes and plugins.",
      "Expanded into MERN stack development to create full-stack web apps with dynamic user interfaces and APIs.",
      "Delivered scalable solutions like dashboards and e-commerce systems using React, Node.js, and MongoDB.",
      "Collaborated with cross-functional teams to turn real-world requirements into clean, production-ready code.",
    ],
  },
  {
    title: "Internship",
    company_name: "Bytewise",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "september 2023 - november 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Plata Real Estate",
    description:
      "A custom WordPress theme for a real estate platform featuring property listings, virtual tours, and agent connections with intuitive search and filtering capabilities.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Custom Theme",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    // source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://plata.realestate/",
  },
  {
    name: "800 Sayara",
    description:
      "A WordPress platform for car enthusiasts featuring vehicle listings, reviews, and dealership connections with comprehensive search and comparison tools.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Custom Theme",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    live_site_link: "https://800sayara.com/",
  },
  {
    name: "Essura",
    description:
      "A WordPress platform for insurance services featuring policy comparisons, agent locator, and educational resources with intuitive search and application tools.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Custom Theme",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    live_site_link: "https://essura.com/",
  },
  {
    name: "Tekvill",
    description:
      "A WordPress platform for technology solutions featuring service listings, project showcases, and client testimonials with comprehensive search and contact tools.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Custom Theme",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    live_site_link: "https://tekvill.com/",
  },
  {
    name: "Zero Swipe",
    description:
      "A Next.js platform for efficient content discovery featuring intuitive swipe gestures, personalized recommendations, and seamless user interactions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    live_site_link: "https://zero-psi.vercel.app/",
  },
  {
    name: "Finame",
    description:
      "A WordPress platform for financial services featuring loan calculators, advisor matching, and educational resources with intuitive navigation and application tools.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Custom Theme",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/finame",
    live_site_link: "https://finame.ca/",
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/esha-arif-b82030298/",
  },
  {
    name: "email",
    icon: email,
    link: "mailto:esharif0322@gmail.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/EshaArif-1234",
  },
] as const;

import type { ReactNode } from "react";
import { Code2, LayoutGrid, LucideIcon, ShieldCheck } from "lucide-react";

export const profile = {
  name: "Tamanna Afroz",
  role: "Software Engineer ",
  residence: "Bangladesh",
  city: "Dhaka",
  experience: "1.5+ years",
  email: "afroztamanna66@gmail.com",
  phone: "+8801318917873",
  location: "677A, Adabor, Dhaka,Bangladesh",
  availability: "Available Remote",
  rating: "Top Rated",
};

export const hero = {
  badge: "Building modern web experiences",
  titleA: "Software Engineer",
  subtitle:
    "I design and develop high-performance web applications with modern backend, clean frontend, and production-ready architecture.",
  ctas: {
    primary: { label: "Explore Now", href: "https://github.com/TamannaAfroz2666" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
  tags: ["Express.js", "Nest.js", "PostgreSQL", "Prisma", 'Docker', "GraphQL", "MongoDB", "React.js", "Vue.js", "Next.js", "TypeScript", "Unit Test"],
  // public/ folder assets:
  backgroundImage: "/hero-bg.jpg",
  personImage: "/profilePic.png",
  avatar: "/avatar.jpg",
};

export const skills = [
  { name: "Express.js", level: 100 },
  { name: "Nest.js", level: 70 },
  { name: "MongoDB", level: 100 },
  { name: "PostgreSQL", level: 100 },
  { name: "Docker", level: 95 },
  { name: "EL", level: 95 },
  { name: "GraphQL", level: 95 },
  { name: "JavaScript", level: 100 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 100 },
  { name: "Vue.js", level: 78 },
  { name: "Next.js", level: 100 },
];

export const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "10", label: "Completed Projects" },

];

export type ServiceItem = {
  title: string;
  icon: LucideIcon;
  desc: string;
};

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    icon: Code2,
    desc: "Modern, fast, SEO-friendly websites with Next.js, TypeScript and best practices.",
  },
  {
    title: "UI/UX Design",
    icon: LayoutGrid,
    desc: "Clean layout, strong hierarchy, accessible design and component-driven UI systems.",
  },
  {
    title: "API Integration",
    icon: ShieldCheck,
    desc: "Professional API integration (REST/GraphQL), auth flows and performance optimization.",
  },
];

export type ProjectItem = {
  title: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "Hiwork",
    desc: "Hiwork is an open job portal site in popular in Japan. They offer world-class different kinds of jobs for different countries basis.",
    tags: ["Nest.js", "PostgreSQL", "Prisma", "Docker", "Next.js", "JavaScript", "Tailwind"],
    liveUrl: "https://www.hiwork.jp/en",
    image: "/logoHiwork.png",
    codeUrl: "#",
  },
  {
    title: "Sawari Air Lines",
    desc: "MySawariAirLines is a travel booking platform that allows users to search, compare, and purchase airline tickets and hotel bookings through a seamless and user-friendly interface",
    tags: ["React.js", "SASS", "Redux", "Frontend"],
    liveUrl: "#",
    image: "/white.jpg",
    codeUrl: "#",
  },
  {
    title: "Ambor",
    desc: "The Ambor name is a popular e-commerce site. Ambor's mission is to create a new collection of dresses, for girls, women, and Gents who are looking online or offline for fabric and unique collections. ",
    tags: ["React.js", "Vue.js", "SASS", "Redux", "Frontend"],
    image: "/ambor.png",
    liveUrl: "https://ambor.com.bd/",
    codeUrl: "#",
  },
  // {
  //   title: "API Client App",
  //   desc: "Frontend integration sample with auth, loading states and errors.",
  //   tags: ["REST", "Auth", "State"],
  //   image: "/white.jpg",
  //   liveUrl: "#",
  //   codeUrl: "#",
  // },
];

export type TimelineItem = {
  title: string;
  desc: string;
  role?: string;
  date?: string;
  cta?: string | null;
};

export const education : TimelineItem[] = [
   {
    title: "Daffodil International University",
    role: "Graduated",
    date: "Dec 2019 - Dec 2023",
    desc: "Bachelor's Degree in Software Engineering Daffodil International University, Dhaka, Bangladesh",
    // cta: "Bachelor's",
  },
  {
    title: "Software Architecture Course",
    role: "Student",
    date: "jan 2022 - apr 2022",
    desc: "Software Architectures and design",
    cta: null,
  },

];



export const work  : TimelineItem[] = [
    {
    title: "B-cause., Inc ",
    role: "Junior Software Developer",
    date: "Mar 2024 - Oct 2025",
    desc: "Working on multiple projects with different teams using Nest.js,Prisma, Docker, PostgreSQL, React ecosystem, Ant, Event Driven Programming, Cache, etc. ",
    cta: null,
  },
  {
    title: "Sawari Overseas",
    role: "Front-End Developer",
    date: "Sept 2022 - Oct 2023",
    desc: "Building out Sawari’s technology stack underpinning the future of the alternatives industry using PostgreSQL, Cypress, React ecosystem, Event Driven Programming,  Mui, SASS, Redux, etc.  ",
    // cta: "RECOMMENDATION",
  },

];
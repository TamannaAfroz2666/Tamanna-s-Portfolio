import type { ReactNode } from "react";
import { Code2, LayoutGrid, LucideIcon, ShieldCheck } from "lucide-react";

export const profile = {
  name: "Tamanna Afroz",
  role: "Full stack Developer ",
  residence: "Bangladesh",
  city: "Dhaka",
  experience: "1.5+ years",
  email: "afroztamanna66@gmail.com",
  phone: "+8801318917873",
  location: "Dhaka, BD",
  availability: "Available Remote",
  rating: "Top Rated",
};

export const hero = {
  badge: "Building modern web experiences",
  titleA: "Discover my Amazing",
  titleB: "Portfolio",
  titleC: "Space!",
  subtitle:
    "I build design mockups, dashboards and full-stack products with Next.js + TypeScript.",
  ctas: {
    primary: { label: "Explore Now", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
  tags: ["Next.js", "TypeScript", "Tailwind", "UI/UX"],
  // public/ folder assets:
  backgroundImage: "/hero-bg.jpg",
  personImage: "/hero-person.png",
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
  { value: "10+", label: "Years Experience" },
  { value: "143", label: "Completed Projects" },
  { value: "114", label: "Happy Customers" },
  { value: "20+", label: "Honors & Awards" },
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
};

export const projects: ProjectItem[] = [
  {
    title: "Portfolio Landing",
    desc: "A clean, fast portfolio with responsive layout and smooth UX.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Dashboard UI",
    desc: "Admin dashboard UI with cards, tables, and charts-ready layout.",
    tags: ["UI", "Components", "Responsive"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce UI",
    desc: "Product grid, details page layout and modern checkout flow mockup.",
    tags: ["Design", "UX", "Frontend"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "API Client App",
    desc: "Frontend integration sample with auth, loading states and errors.",
    tags: ["REST", "Auth", "State"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

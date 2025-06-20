import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const services = [
  {
    ico: <Code />,
    title: "Custom Website Development",
    description:
      "Expertise in building high-performing, responsive, and accessible websites. " +
      "Utilize the latest technologies and frameworks to ensure an optimal user experience",
  },
  {
    ico: <Braces />,
    title: "Web Application Development",
    description:
      "Expertise in building robust and secure web applications. " +
      "Integrate advanced functionalities like e-commerce, online payments, and content management systems",
  },
  {
    ico: <HandHelping />,
    title: "Technology Consulting",
    description:
      "Offer strategic advice to help businesses leverage technology effectively. " +
      "Recommend the best technology solutions to meet your client's business goals",
  },
  {
    ico: <Blocks />,
    title: "System Integration",
    description:
      "Connect your website or web application with third-party systems like CRMs, ERPs, and marketing platforms. " +
      "Build custom integrations to meet your client's specific requirements.",
  },
  {
    ico: <Wrench />,
    title: "Maintenance and Support",
    description:
      "Monitor performance and troubleshoot issues promptly. " +
      "Regularly update code and technologies for security and compatibility",
  },
  {
    ico: <DraftingCompass />,
    title: "Mockup Integration",
    description:
      "Bridge the gap between design and development, ensuring pixel-perfect implementation. Maintain design fidelity throughout the development process",
  },
];

export const works = [
  {
    title: "Glorious Portfolio",
    type: "landing",
    description: "A simple and beautiful portfolio to present Théo Balick's work and career.",
    image: "/images/works/work1.png",
    link: "/"
  },
  {
    title: "Esis Social Website",
    type: "webapp",
    description: "Lorem ipsum dolor sit amet...",
    image: "/images/works/work7.png",
    link: "/"
  },
  {
    title: "Adrian's Portfolio",
    type: "landing",
    description: "Modern & Minimal JS Mastery Portfolio",
    image: "/images/works/work4.png",
    link: "/"
  },
  {
    title: "Iceberg Investment",
    type: "webapp",
    description: "Your partner for integrating IT solutions...",
    image: "/images/works/work3.png",
    link: "/"
  },
  {
    title: "Venissa's Portfolio",
    type: "template",
    description: "Lorem ipsum dolor sit amet...",
    image: "/images/works/work6.png",
    link: "/"
  },
  {
    title: "Tailus UI React",
    type: "template",
    description: "Highly customizable components...",
    image: "/images/works/work5.png",
    link: "/"
  },
];


export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/yuossef-ahmed/",
  },
  {
    id: 2,
    img: <FaGithub />,
    href: "https://github.com/elMofaker",
  },
  {
    id: 3,
    img: <FaFacebookF />,
    href: "https://www.facebook.com/yuossef.ahmed.786312", 
  },
  {
    id: 4,
    img: <FaInstagram />,
    href: "https://www.instagram.com/y.u.o.s.s.e.f_e.l_f.a.d.a.l.y/", 
  },
  {
    id: 5,
    img: <FaWhatsapp />,
    href: "https://wa.me/+201021170207",
  },
];

export const skills = [
  { name: "frontend", description: "", percentage: 95 },
  { name: "backend", description: "", percentage: 75 },
];

export const skillsIcons = [
  "typescript",
  "javascript",
  "jetbrains",
  "webstorm",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "figma",
];

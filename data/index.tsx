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
    title: "Coffe Time",
    type: "landing",
    description: "Coffee Shop Template",
    image: "/images/works/work5.png",
    link: "https://coffee-landing-page-fawn.vercel.app/",
  },
  {
    title: "Syrian Gourmet",
    type: "landing",
    description: "Syrian Gourmet Landing Page",
    image: "/images/works/work1.png",
    link: "https://syrian-gourmet-landing-page.vercel.app/",
  },
  {
    title: "Masser / sa",
    type: "landing",
    description: "Landing page for a Saudi company",
    image: "/images/works/work4.png",
    link: "https://masser.vercel.app/",
  },
  {
    title: "Estadel",
    type: "landing",
    description: "Landing page for a Saudi company",
    image: "/images/works/work7.png",
    link: "https://estadel-landing-page.vercel.app/",
  },
  {
    title: "Hatf",
    type: "landing",
    description: "Website for a Saudi programming company",
    image: "/images/works/work6.png",
    link: "https://hatf-landing-page.vercel.app/",
  },
  {
    title: "TAJ",
    type: "landing",
    description: "Website for a Saudi programming company",
    image: "/images/works/work3.png",
    link: "https://taj-landing-page.vercel.app/",
  },
  {
    title: "motazmcqs",
    type: "webapp",
    description: "A Libyan website dedicated to generating questions for medical students",
    image: "/images/works/work8.png",
    link: "https://motazmcqs.com/",
  },
  {
    title: "alandlyisalib",
    type: "webapp",
    description: "An online library offering a wide range of academic and cultural resources for readers and researchers.",
    image: "/images/works/work9.png",
    link: "https://lib-sepia.vercel.app/",
  },
  {
    title: "Business card pro",
    type: "template",
    description: "Modern and contemporary business card containing your personal information",
    image: "/images/works/work10.png",
    link: "https://abdulla-hamdy.vercel.app/",
  },
  {
    title: "Business card",
    type: "template",
    description: "Modern and contemporary business card containing your personal information",
    image: "/images/works/work11.png",
    link: "https://moustafa-elsafty.vercel.app/",
  },
  {
    title: "Vionila Login",
    type: "template",
    description: "Wi-Fi login page",
    image: "/images/works/work2.png",
    link: "https://vionila-sign-in.vercel.app/",
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

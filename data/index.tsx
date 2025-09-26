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
    type: "freelance",
    description: "Coffee Shop Template",
    image: "/images/works/work5.png",
    link: "https://coffee-landing-page-fawn.vercel.app/",
  },
  {
    title: "Syrian Gourmet",
    type: "freelance",
    description: "Syrian Gourmet Landing Page",
    image: "/images/works/work1.png",
    link: "https://syrian-gourmet-landing-page.vercel.app/",
  },
  {
    title: "Masser / sa",
    type: "hatf",
    description: "Landing page for a Saudi company",
    image: "/images/works/work4.png",
    link: "https://masser.vercel.app/",
  },
  {
    title: "Estadel",
    type: "hatf",
    description: "Landing page for a Saudi company",
    image: "/images/works/work7.png",
    link: "https://estadel-landing-page.vercel.app/",
  },
  {
    title: "Hatf",
    type: "hatf",
    description: "Website for a Saudi programming company",
    image: "/images/works/work6.png",
    link: "https://hatf-landing-page.vercel.app/",
  },
  {
    title: "Asfour Engineering",
    type: "freelance",
    description: "Export company website",
    image: "/images/works/work12.png",
    link: "https://www.asfour-engineering.com/",
  },
  {
    title: "motazmcqs",
    type: "freelance",
    description: "A Libyan website dedicated to generating questions for medical students",
    image: "/images/works/work8.png",
    link: "https://motazmcqs.com/",
  },
  {
    title: "alandlyisalib",
    type: "freelance",
    description: "An online library offering a wide range of academic and cultural resources for readers and researchers.",
    image: "/images/works/work9.png",
    link: "https://lib-sepia.vercel.app/",
  },

  {
    title: "Restaurant",
    type: "algorithms",
    description: "Restaurant offering services and menu",
    image: "/images/works/work13.png",
    link: "https://mealify1.netlify.app/",
  },
  {
    title: "Active MK",
    type: "algorithms",
    description: "Life coach platform",
    image: "/images/works/work14.png",
    link: "https://activemk.com/",
  },
  {
    title: "PTC",
    type: "algorithms",
    description: "Vocational Training Center (PTC)",
    image: "/images/works/work15.png",
    link: "https://ptc-pm.com/",
  },
  {
    title: "Jamal al-Din Abu Ayta",
    type: "algorithms",
    description: "Dairy company",
    image: "/images/works/work16.png",
    link: "https://jolly-sherbet-2e4838.netlify.app/",
  },
  {
    title: "Panssee",
    type: "scope-code",
    description: "Online store for selling cosmetics",
    image: "/images/works/work17.png",
    link: "https://panssee.com/",
  },
  {
    title: "Geniemart",
    type: "scope-code",
    description: "Online furniture store",
    image: "/images/works/work18.png",
    link: "https://geniemart.online/",
  },
  {
    title: "Royal Harvest Egypt",
    type: "scope-code",
    description: "Royal Harvest Egypt is an Egyptian company specializing in exporting fresh agricultural ",
    image: "/images/works/work19.png",
    link: "https://royalharvestegypt.com/",
  },
  {
    title: "Hoda Academy",
    type: "scope-code",
    description: "Al-Huda Academy is an online platform offering a variety of religious and educational courses and resources.",
    image: "/images/works/work20.png",
    link: "https://hoda-academy.com/",
  },
  {
    title: "Agency Platform",
    type: "scope-code",
    description: "A company specialized in developing games and software",
    image: "/images/works/work21.png",
    link: "https://agancy-platform.netlify.app/",
  },
  {
    title: "NIRVA",
    type: "scope-code",
    description: "A store that sells special clothing",
    image: "/images/works/work22.png",
    link: "https://main--cyber-712.netlify.app/",
  },
  {
    title: "Sky Food",
    type: "scope-code",
    description: "Food Industries Company",
    image: "/images/works/work23.png",
    link: "https://sky-food.netlify.app/",
  },
  {
    title: "Simple Life",
    type: "scope-code",
    description: "Film production company",
    image: "/images/works/work24.png",
    link: "https://nimble-pegasus-a94d14.netlify.app/",
  },
  {
    title: "Greenmind",
    type: "scope-code",
    description: "Online store for selling everything green",
    image: "/images/works/work25.png",
    link: "https://greenmind-pearl.vercel.app/",
  },
  {
    title: "Prosperix",
    type: "scope-code",
    description: "Investment company",
    image: "/images/works/work26.png",
    link: "https://prosperix-beta.vercel.app/",
  },
  {
    title: "Flex Living",
    type: "scope-code",
    description: "Real estate company",
    image: "/images/works/work27.png",
    link: "https://flex-living-ochre.vercel.app/",
  },
  {
    title: "BATU",
    type: "scope-code",
    description: "BATU University website",
    image: "/images/works/work28.png",
    link: "https://batu-university.vercel.app/",
  },
  {
    title: "AHFAD ALMOUKHTAR OIL",
    type: "scope-code",
    description: "Oil company",
    image: "/images/works/work29.png",
    link: "http://almoukhtargrandsons.com/",
  },
  {
    title: "B I U",
    type: "scope-code",
    description: "B I U University",
    image: "/images/works/work30.png",
    link: "https://bruneiinternationaluniversity.uk/",
  },
  {
    title: "La Vida Hotel",
    type: "scope-code",
    description: "La Vida Hotel is a luxurious hotel offering a range of amenities and services.",
    image: "/images/works/work31.png",
    link: "https://la-vida-hotel.vercel.app/",
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

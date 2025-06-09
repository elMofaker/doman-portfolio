"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Coffe Time",
    description: "Coffee Shop Template",
    image: "/images/projects/coffe.png",
    tag: ["All", "Landing"],
    previewUrl: "https://coffee-landing-page-fawn.vercel.app/",
  },
  {
    id: 2,
    title: "Vionila Login",
    description: "Wi-Fi login page",
    image: "/images/projects/login-vaulena.png",
    tag: ["All", "Landing"],
    previewUrl: "https://vionila-sign-in.vercel.app/",
  },
  {
    id: 3,
    title: "Syrian Gourmet",
    description: "Syrian Gourmet Landing Page",
    image: "/images/projects/sengafore.png",
    tag: ["All", "Landing"],
    previewUrl: "https://syrian-gourmet-landing-page.vercel.app/",
  },
  {
    id: 4,
    title: "Masser / sa",
    description: "Landing page for a Saudi company",
    image: "/images/projects/masser.png",
    tag: ["All", "Landing"],
    previewUrl: "https://masser.vercel.app/",
  },
  {
    id: 5,
    title: "Estadel",
    description: "Landing page for a Saudi company",
    image: "/images/projects/estadel.png",
    tag: ["All", "Landing"],
    previewUrl: "https://estadel-landing-page.vercel.app/",
  },
  {
    id: 6,
    title: "Hatf",
    description: "Website for a Saudi programming company",
    image: "/images/projects/hatf.png",
    tag: ["All", "Landing"],
    previewUrl: "https://hatf-landing-page.vercel.app/",
  },
  {
    id: 7,
    title: "TAJ",
    description: "Website for a Saudi programming company",
    image: "/images/projects/taj.png",
    tag: ["All", "Landing"],
    previewUrl: "https://taj-landing-page.vercel.app/",
  },
  {
    id: 8,
    title: "motazmcqs",
    description: "A Libyan website dedicated to generating questions for medical students",
    image: "/images/projects/",
    tag: ["All", "webApp"],
    previewUrl: "https://motazmcqs.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Landing"
          isSelected={tag === "Landing"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WebApp"
          isSelected={tag === "WebApp"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

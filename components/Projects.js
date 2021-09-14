import { useState } from "react";
import { Flex, Image, Text, Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import { SiReact, SiNextDotJs, SiTensorflow } from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "MarketBuddy",
    description:
      "Real-time Stock analysis dashboard featuring live financial data and sentiment analysis on recent news articles pertaining to individual stocks",
    technologies: [
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
      { icon: <SiTensorflow />, techName: "Tensorflow.js" },
      { icon: "", techName: "Chakra-UI" },
      { icon: "", techName: "Yahoo Finance API" },
    ],
    image: { src: "/MarketBuddy.JPG", alt: "MarketBuddy" },
    links: {
      external: "https://marketbuddy.vercel.app",
      gitHub: "https://github.com/JacobiClark/marketbuddy",
    },
  },
  {
    title: "Tanner Jensen Art",
    description:
      "Art Portfolio populated by images retrieved from a CMS back-end allowing the client to manage content using an online dashboard",
    technologies: [
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
      { icon: "", techName: "Chakra-UI" },
      { icon: "", techName: "Sanity.CMS" },
      { icon: "", techName: "GROQ" },
    ],
    image: { src: "/tannerJensenArt.JPG", alt: "MarketBuddy" },
    links: {
      external: "https://tannerjensenart.vercel.app",
      gitHub: "https://github.com/JacobiClark/JensenPrints",
    },
  },
  {
    title: "Quick-Tab",
    description:
      "Dashboard that allows users to directly search from a list of websites without having to route through a search engine.",
    technologies: [
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
    ],
    image: { src: "/quickTab.JPG", alt: "Quick-Tab" },
    links: {
      external: "https://quick-tab.vercel.app",
      gitHub: "https://github.com/JacobiClark/Quick-Tab",
    },
  },
];

const Projects = () => {
  return (
    <Box>
      {projectData.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          links={project.links}
        />
      ))}
    </Box>
  );
};

export default Projects;

import { useState } from "react";
import { Flex, Image, Text, Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import {
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiJava,
  SiReact,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVisualstudiocode,
  SiNodeDotJs,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const techSkills = [
  {
    techType: "Languages",
    technologies: [
      { icon: <SiJavascript />, techName: "JavaScript" },
      { icon: <SiNodeDotJs />, techName: "Node.js" },
      { icon: "", techName: "SQL" },
      { icon: <SiMysql />, techName: "MySQL" },
      { icon: <SiPostgresql />, techName: "PostgresQL" },
      { icon: <SiGraphql />, techName: "GraphQL" },
      { icon: <SiPython />, techName: "Python" },
      { icon: <SiJava />, techName: "Java" },
    ],
  },
  {
    techType: "Languages",
    technologies: [
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
      { icon: "", techName: "Chakra-UI" },
      { icon: "", techName: "Sanity.CMS" },
      { icon: "", techName: "GROQ" },
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
      { icon: "", techName: "Chakra-UI" },
      { icon: "", techName: "Sanity.CMS" },
      { icon: "", techName: "GROQ" },
    ],
  },
];

const Skills = () => {
  return (
    <Box border="2px" borderColor="gray.200" borderRadius="md">
      {techSkills.map((skillType) => {
        return (
          <Flex
            key={skillType.techType}
            wrap="wrap"
            border="2px"
            borderColor="black"
            borderRadius="md"
            m="1%"
          >
            <Flex align="center" m="1%">
              <Text fontSize="xl" m="2%">
                {skillType.techType}:
              </Text>
              <Flex wrap="wrap" mb="8px">
                {skillType.technologies.map((technology) => {
                  return (
                    <Flex
                      key={technology}
                      bg="rgb(44,49,61)"
                      borderRadius="md"
                      align="center"
                      p="6px"
                      mr="8px"
                      mt="8px"
                    >
                      <Box mr="5px">{technology.icon}</Box>
                      <Text mr="5px">{technology.techName}</Text>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>{" "}
          </Flex>
        );
      })}
    </Box>
  );
};

export default Skills;

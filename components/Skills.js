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
  SiGithub,
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
    techType: "Libraries/ Frameworks",
    technologies: [
      { icon: <SiReact />, techName: "React" },
      { icon: <SiNextDotJs />, techName: "Next.js" },
      { icon: "", techName: "Chakra-UI" },
      { icon: "", techName: "Sanity.CMS" },
    ],
  },
  {
    techType: "Tools/Utilities:",
    technologies: [
      { icon: <SiHtml5 />, techName: "HTML5" },
      { icon: <SiCss3 />, techName: "CSS3" },
      { icon: <SiGithub />, techName: "GitHub" },
      { icon: <SiVisualstudiocode />, techName: "VSCode" },
    ],
  },
];

const Skills = () => {
  return (
    <Box border="2px" borderColor="gray.200" borderRadius="md" mt="7px">
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
            <Flex align="center">
              <Box w="140px" flexShrink="0" align="center">
                <Text fontSize="xl">
                  {skillType.techType}
                  {":"}
                </Text>
              </Box>
              <Flex wrap="wrap" mb="8px" ml="10px">
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
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Skills;

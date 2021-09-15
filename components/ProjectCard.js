import { useState } from "react";
import { Flex, Image, Text, Box, Center } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <Flex wrap="wrap" mt="7px">
      <Flex
        wrap="wrap"
        border="2px"
        borderColor="gray.200"
        borderRadius="md"
        p="1%"
      >
        <Image
          border="2px"
          borderColor="black"
          borderRadius="md"
          src={props.image.src}
          alt={props.image.alt}
          w={["100%", "100%", "50%"]}
        ></Image>
        <Box flex="1" p="2%">
          <Center h="20px">
            <Link href={props.links.external}>
              <a>
                <Text fontSize="2xl" color="teal.500">
                  {props.title}
                </Text>
              </a>
            </Link>
          </Center>
          <Text fontSize="large" mt="2%">
            {props.description}
          </Text>
          <Flex wrap="wrap">
            {props.technologies.map((technology) => {
              return (
                <Flex
                  bg="rgb(44,49,61)"
                  borderRadius="md"
                  align="center"
                  p="6px"
                  mr="8px"
                  mt="8px"
                  key={technology.techName}
                >
                  <Box mr="5px">{technology.icon}</Box>
                  <Text mr="5px">{technology.techName}</Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex wrap="wrap" mt="4%">
            <Box mr="10px">
              <Link href={props.links.external}>
                <a>
                  <FaExternalLinkAlt size={25} />
                </a>
              </Link>
            </Box>{" "}
            <Box mr="10px">
              <Link href={props.links.gitHub}>
                <a>
                  <FaGithub size={25} />
                </a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;

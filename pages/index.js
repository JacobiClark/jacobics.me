import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  forwardRef,
  SlideFade,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const MotionBox = motion(Box);

export default function Home() {
  return (
    <SlideFade in={true} offsetY={200}>
      <Heading
        as="h1"
        fontSize={{ base: "28px", md: "40px", lg: "48px" }}
        mb={3}
        mt="20px"
      >
        Hello, I&apos;m Jacob Clark.
      </Heading>
      <Text fontSize="2xl">
        I&apos;m a React Developer that enjoys building web applications with
        React, Node, and JavaScript.{" "}
      </Text>
      <Text fontSize="2xl" mt="1%">
        I&apos;m currently exploring opportunities to develop software in a
        professional environment as well as building side-projects to increase
        my software development skill-set.{" "}
      </Text>
      <Text fontSize="2xl" mt="1%">
        Please feel free to check out some of the technologies I have experience
        with and projects I have built.{" "}
      </Text>
      <Center mt="50px">
        <Text fontSize="4xl">Skills</Text>
      </Center>
      <Skills />
      <Center mt="50px">
        <Text fontSize="4xl">Projects</Text>
      </Center>
      <Projects />
    </SlideFade>
  );
}

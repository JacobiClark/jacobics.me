import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
  Center,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NextLink from "next/link";

const Links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Me",
    route: "/about",
  },
  {
    name: "Resume",
    route: "/bookmarks",
  },
];

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <Flex
        p="2"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        maxW="7xl"
      >
        <Link href="/">
          <a>
            <Text fontSize="2xl">{"{JC}"}</Text>
          </a>
        </Link>
        <Box>
          {/*<IconButton
            onClick={onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon w="8" h="8" />}
            display={["flex", "none"]}
            size="lg"
            mr="2"
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Jacob Clark</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...#dfe6e9</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>*/}
          <HStack display={[/*"none", */ "flex"]}>
            <a href="/Jacob_Clark_CS_Resume.PDF" target="_blank">
              <Button colorScheme="facebook">Resume</Button>{" "}
            </a>
          </HStack>
        </Box>
      </Flex>
    </Center>
  );
};

export default Header;

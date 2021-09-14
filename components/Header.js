import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  HStack,
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

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex p="2" alignItems="center" justifyContent="space-between">
        <Text fontSize="large">Jacob Clark</Text>
        <Box>
          <IconButton
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
          </Drawer>
          <HStack display={["none", "flex"]}>
            <Link href="/">
              <a>
                <Box bg="#B7C2DA" p="7px" borderRadius="md">
                  <Text color="black" fontWeight="medium">
                    Home
                  </Text>
                </Box>
              </a>
            </Link>
            <Button colorScheme="facebook">About Me</Button>
            <Button colorScheme="facebook">Resume</Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default Header;

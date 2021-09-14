import Header from "./Header";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container maxW="container.xl" p="10px">
        {children}
      </Container>
    </div>
  );
};

export default Layout;

import { Button, HStack, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/gamehub_logo.webp";
import { useColorMode } from "@/components/ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="80px"></Image>
      <Text>NavBar</Text>
      <Button onClick={toggleColorMode}>Toggle Mode</Button>
    </HStack>
  );
};

export default NavBar;

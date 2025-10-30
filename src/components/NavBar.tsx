import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gamehub_logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justify="space-between" paddingRight="10px" paddingLeft="15px">
      <Image src={logo} boxSize="80px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

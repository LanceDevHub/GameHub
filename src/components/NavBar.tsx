import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gamehub_logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack paddingRight="10px" paddingLeft="15px">
      <Image src={logo} boxSize="80px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

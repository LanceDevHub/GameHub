import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { Platform } from "@/hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms?: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
    "neo-geo": FaGamepad,
    "game-boy-advance": FaGamepad,
    "atari-2600": FaGamepad,
    "commodore-amiga": FaGamepad,
    "3do": FaGamepad,
    "sega-saturn": SiSega,
  };

  if (platforms.length === 0) {
    return (
      <HStack>
        <Text fontSize="sm" color="gray.400">
          No platforms
        </Text>
      </HStack>
    );
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          <Icon
            key={platform.id}
            as={IconComponent ?? BsGlobe}
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;

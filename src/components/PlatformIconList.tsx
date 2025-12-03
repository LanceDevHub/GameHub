import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms?: Platform[]; // optional
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  if (platforms.length === 0) {
    // always return a valid node
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
        // fallback to a globe if slug not in map
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

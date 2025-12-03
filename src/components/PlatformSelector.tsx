import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { HiCog } from "react-icons/hi";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" width={170}>
          <Icon as={HiCog} />
          {selectedPlatform?.name || "Select Platform"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content maxH="200px" minW="10rem">
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => {
                  platform.id === 2
                    ? onSelectPlatform(platform) // Playstation API currently not working
                    : onSelectPlatform(platform);
                }}
                disabled={platform.id === 2 ? true : false} // Playstation API currently not working => disabled it
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortAscending } from "react-icons/hi";

const SortSelector = () => {
  const [value, setValue] = useState("");
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" width={125}>
          <HiSortAscending /> Sort
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              {items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

const items = [
  { label: "Relevance", value: "relev" },
  { label: "Date added", value: "date" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "release" },
  { label: "Popularity", value: "pop" },
  { label: "Average rating", value: "avg" },
];

export default SortSelector;

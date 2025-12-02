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
        <Button variant="outline" size="sm" width={160}>
          <HiSortAscending /> Sort by: {value === "" ? "" : value}
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
  { label: "Relevance", value: "Relevance" },
  { label: "Date added", value: "Date" },
  { label: "Name", value: "Name" },
  { label: "Release date", value: "Release" },
  { label: "Popularity", value: "Popularity" },
  { label: "Average rating", value: "Avg Rating" },
];

export default SortSelector;

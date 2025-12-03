import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" width={185}>
          <Icon as={HiSortAscending} /> Sort by:{" "}
          {currentSortOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup>
              {sortOrders.map((item) => (
                <Menu.RadioItem
                  key={item.value}
                  value={item.value}
                  onClick={() => onSelectSortOrder(item.value)}
                >
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

const sortOrders = [
  { label: "Relevance", value: "" },
  { label: "Date added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average rating", value: "-rating" },
];

export default SortSelector;

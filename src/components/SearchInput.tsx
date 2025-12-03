import { Icon, Input, InputElement, InputGroup } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchtext: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<Icon as={BsSearch} />}>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="outline"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

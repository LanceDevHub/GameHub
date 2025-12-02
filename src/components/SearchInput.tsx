import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;

import { Box } from "@chakra-ui/react";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" height={340} width="320px">
      {children}
    </Box>
  );
};

export default GameCardContainer;

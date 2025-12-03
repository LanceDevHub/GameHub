import useGames from "@/hooks/useGames";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data = [], error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 10 });

  // Loading state
  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        columnGap="4"
        rowGap="10"
        padding="10px"
        justifyItems="center"
        alignItems="center"
      >
        {skeletons.map((_, idx) => (
          <GameCardContainer key={idx}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );
  }

  // Error state
  if (error) {
    return (
      <Box textAlign="center" padding="20px">
        <Text fontSize="xl" color="red.500">
          {error}
        </Text>
      </Box>
    );
  }

  // No results
  if (!data || data.length === 0) {
    return (
      <Box textAlign="center" padding="20px">
        <Text fontSize="xl" color="gray.500">
          No results found
        </Text>
      </Box>
    );
  }

  // Normal results
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      columnGap="4"
      rowGap="10"
      padding="10px"
      justifyItems="center"
      alignItems="center"
    >
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

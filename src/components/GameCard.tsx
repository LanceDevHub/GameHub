import { Card, Heading, HStack, Image, Text, Box } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game?: Game;
}

const GameCard = ({ game }: { game?: Game }) => {
  if (!game) {
    // No game at all
    return (
      <Card.Root>
        <Card.Body
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <Text fontSize="md" color="gray.500">
            Game not available
          </Text>
        </Card.Body>
      </Card.Root>
    );
  }

  // Use your internal template for missing image
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Heading fontSize="xl">{game.name || "Unknown Game"}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

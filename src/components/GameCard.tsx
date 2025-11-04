import type { GiPlatform } from "react-icons/gi";
import { type Game, type Platform } from "../hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    // When using overflow hidden it means that we can round up the
    // upper borders of the picture beacuse its to big for bordering otherwise
    <Card.Root borderRadius={10} overflow="hidden" width="350px">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

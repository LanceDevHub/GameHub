import type { GiPlatform } from "react-icons/gi";
import { type Game, type Platform } from "../hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    // When using overflow hidden it means that we can round up the
    // upper borders of the picture beacuse its to big for bordering otherwise
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;

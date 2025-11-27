import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // Checks if we on "bigger devices" -> lg or "mobile" -> base
  const isLg = useBreakpointValue({ base: false, lg: true }); // true if lg or above

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show when={isLg}>
        <GridItem area="aside" paddingX={1}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        ></PlatformSelector>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

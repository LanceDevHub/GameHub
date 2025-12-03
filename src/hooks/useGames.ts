import type { GameQuery } from "@/App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms?: Platform[]; // child platforms
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  // Determine which platform IDs to send to the API
  const platformIds = gameQuery.platform
    ? gameQuery.platform.platforms && gameQuery.platform.platforms.length > 0
      ? gameQuery.platform.platforms.map((p) => p.id) // use child platforms
      : [gameQuery.platform.id] // fallback to parent ID
    : undefined;

  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds?.join(","), // API expects comma-separated child IDs
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
};

export default useGames;

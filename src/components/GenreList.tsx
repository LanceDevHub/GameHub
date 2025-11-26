import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading)
    return (
      <HStack alignSelf="center" padding={10}>
        <Spinner padding={10} />
      </HStack>
    );

  return (
    <List.Root variant="plain">
      {data.map((g) => (
        <List.Item key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="45px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(g)}
              fontSize="lg"
              variant="plain"
            >
              {g.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

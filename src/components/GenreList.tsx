import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading)
    return (
      <HStack alignSelf="center" padding={10}>
        <Spinner padding={10} />
      </HStack>
    );

  return (
    <>
      <Heading fontSize="2xl" paddingX={10} paddingY={5}>
        {" "}
        Genres{" "}
      </Heading>
      <List.Root variant="plain">
        {data.map((g) => (
          <List.Item key={g.id} paddingY="4px">
            <HStack>
              <Image
                boxSize="50px"
                borderRadius={15}
                src={getCroppedImageUrl(g.image_background)}
                objectFit="cover"
              ></Image>
              <Button
                onClick={() => onSelectGenre(g)}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="ghost"
                whiteSpace="normal"
                paddingX={1}
              >
                {g.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
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
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

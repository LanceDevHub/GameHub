import { Badge, Stack, Text } from "@chakra-ui/react";

interface Props {
  score?: number | null;
}

const CriticScore = ({ score }: Props) => {
  if (score === undefined || score === null) {
    return (
      <Stack direction="row">
        <Text fontSize="sm" color="gray.400">
          N/A
        </Text>
      </Stack>
    );
  }

  const numericScore = Number(score);

  // directly set background & text color
  let bg = "red.500";
  let color = "white";

  if (numericScore > 75) bg = "green.500";
  else if (numericScore > 60) bg = "yellow.400";

  return (
    <Stack direction="row">
      <Badge fontSize="14px" px={2} borderRadius="4px" bg={bg} color={color}>
        {numericScore}
      </Badge>
    </Stack>
  );
};

export default CriticScore;

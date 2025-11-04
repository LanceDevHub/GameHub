import { Badge, Stack } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Stack direction="row">
      <Badge
        colorPalette={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </Stack>
  );
};

export default CriticScore;

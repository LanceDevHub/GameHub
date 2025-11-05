import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton width="320px" height={200} />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;

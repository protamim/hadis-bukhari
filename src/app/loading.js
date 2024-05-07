import { Skeleton } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return (
    <>
      <Skeleton h="56px" bg='white' color={"white"} fadeDuration={6} />
      <Skeleton h="50vh" bg='white' color={"white"} fadeDuration={6} />
    </>
  );
};

export default LoadingSkeleton;

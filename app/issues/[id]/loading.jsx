import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const LoadingIssueDetails = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="3" className="items-center">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetails;

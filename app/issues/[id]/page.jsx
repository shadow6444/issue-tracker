import { StatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Link from "next/link";

const IssueDetails = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="3" className="items-center">
          <StatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <Markdown>{issue.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Link href={`/issues/${params.id}/edit`} className="flex items-center gap-2">
            <HiOutlinePencilAlt />
            Edit Issue
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetails;

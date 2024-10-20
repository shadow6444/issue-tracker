import { StatusBadge } from "@/app/components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueDetails = ({ issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="3" className="items-center">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
};

export default IssueDetails;

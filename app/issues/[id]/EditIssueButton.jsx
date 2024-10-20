import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi";

const EditIssueButton = ({issueId}) => {
  return (
    <Button>
      <Link
        href={`/issues/edit/${issueId}`}
        className="flex items-center gap-2"
      >
        <HiOutlinePencilAlt />
        Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;

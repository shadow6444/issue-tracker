import prisma from "@/prisma/client";
import React from "react";

const IssueDetails = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.status}</p>
      <p>{issue.description}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetails;

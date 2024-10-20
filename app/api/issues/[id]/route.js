import IssueSchema from "@/app/validationSchemas";
import prisma from "@/prisma/client";

const PATCH = async (request, { params }) => {
  const body = await request.json();
  const validation = IssueSchema.safeParse(body);

  if (!validation.success) {
    return new Response(JSON.stringify(validation.error.format()), {
      status: 400,
    });
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    return new Response(JSON.stringify({ error: "Invalid Issue!" }), {
      status: 404,
    });
  }

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return new Response(JSON.stringify(updatedIssue), { status: 200 });
};

export { PATCH };

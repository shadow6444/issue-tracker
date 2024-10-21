import authOptions from "@/app/auth/authOptions";
import IssueSchema, { patchIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

const PATCH = async (request, { params }) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response(JSON.stringify({}), { status: 401 });
  const body = await request.json();
  const validation = patchIssueSchema.safeParse(body);

  if (!validation.success) {
    return new Response(JSON.stringify(validation.error.format()), {
      status: 400,
    });
  }

  const { title, description, assignedToUserId } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid User!" }), {
        status: 400,
      });
    }
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
      title,
      description,
      assignedToUserId,
    },
  });

  return new Response(JSON.stringify(updatedIssue), { status: 200 });
};

const DELETE = async (request, { params }) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response(JSON.stringify({}), { status: 401 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    return new Response(JSON.stringify({ error: "Invalid Issue!" }), {
      status: 404,
    });
  }

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return new Response(JSON.stringify({}));
};

export { PATCH, DELETE };

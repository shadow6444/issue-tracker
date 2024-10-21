import authOptions from "@/app/auth/authOptions";
import createIssueSchema from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";

const POST = async (request) => {
  const session = await getServerSession(authOptions);

  if (!session) return new Response(JSON.stringify({}), { status: 401 });
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return new Response(JSON.stringify(validation.error.errors), {
      status: 400,
    });

  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return new Response(JSON.stringify(newIssue), { status: 201 });
};

export { POST };

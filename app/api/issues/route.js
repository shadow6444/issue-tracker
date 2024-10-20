import prisma from "@/prisma/client";
import { z } from "zod";
import createIssueSchema from "@/app/validationSchemas";

const POST = async (request) => {
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

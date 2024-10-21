const { default: prisma } = require("@/prisma/client");

const GET = async (request) => {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return new Response(JSON.stringify(users), { status: 200 });
};

export { GET };

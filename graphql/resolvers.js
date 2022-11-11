import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const resolvers = {
  Query: {
    getAllUsers: async () => await prisma.user.findMany()
  }
};
export default resolvers;
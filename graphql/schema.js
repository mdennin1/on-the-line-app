import { PrismaClient } from "@prisma/client";
import { gql } from "apollo-server"; //'graphql-tag';"apollo-server";

const prisma = new PrismaClient()
export const resolvers = {
  Query: {
    getAllUsers: async (parent, args, context, info) => await prisma.user.findMany()
  }
};

export const typeDefs = gql`
type User{
    id: ID!
    username: String!
    email: String!
}

type Query {
    getAllUsers: [User]
}
`;

export default { resolvers, typeDefs };
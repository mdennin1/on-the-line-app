// import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

// const prisma = new PrismaClient();

const typeDefs = gql`
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => console.log('users returned')
  }
};

const server = new ApolloServer({ resolvers, typeDefs });
// server.listen({ port: 4000 });
const {url} = await startStandaloneServer(server);
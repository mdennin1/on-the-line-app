import { ApolloServer, gql } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
// import { typeDefs } from "./graphql/typeDefs";
// import { resolvers } from "./graphql/resolvers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const typeDefs = gql`
type User{
    id: ID!
    username: String!
    email: String!
    firstName: String
}

type Query {
    getAllUsers: {
        User{
            id
            __typeName
            username
            email
            firstName
        }
    }
}
`;

const resolvers = {
  Query: {
    getAllUsers: async () => await prisma.user.findMany()
  }
};

const server = new ApolloServer({ resolvers, typeDefs });
const {url} = await startStandaloneServer(server, {context: ()=>{}, listen: { port: 4000 }});
console.log(`**server url => ${url}`);
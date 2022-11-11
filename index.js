/*
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers, typeDefs } from "./graphql/schema";
*/
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from "@prisma/client";
import { gql } from 'apollo-server';

const prisma = new PrismaClient();

const typeDefs = gql`
type User{
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    city: String
    street: String
    zip: String
}

type Query {
    getAllUsers: {
        User{
            id
            __typeName
            username
            email
            firstName
            lastName
            city
            street
            zip
        }
    }
}
`;

const resolvers = {
    Query: {
      getAllUsers: async (parent, args, context, info) => { 
        return await prisma.user.findMany();
      },
    }
};

const server = new ApolloServer({ resolvers, typeDefs });
const port = process?.env?.PORT ?? 4000;
const {url} = async () => await startStandaloneServer(server, { context: () => console.log(`server listening on port ${port}`), listen: { port } });
console.log(`**server url => ${url}`);
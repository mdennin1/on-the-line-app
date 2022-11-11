/*
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
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
      getAllUsers: async () => await prisma.user.findMany()
    }
};

const server = new ApolloServer({ resolvers, typeDefs });
const {url} = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`**server url => ${url}`);
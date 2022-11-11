import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const startServer = async () => {
    const app = express();
    const httpServer = createServer(app);


    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({
        app, 
        path: '/api'
    });

    httpServer.listen({ port: process.env.PORT || 2900 }, () => console.log(`serve listening on localhost:4000${apolloServer.graphqlPath}`));

//
startServer();
    
}
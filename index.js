import {ApolloServer} from "apollo-server-express";
import express from 'express';
import schema from "./graphql/schema.js";

const server = new ApolloServer(schema);
const app = express();

await server.start();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

/*import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from "./graphql/schema.js";
//
const server = new ApolloServer(schema);
const port = process?.env?.PORT ?? 4000;
const {url} = await startStandaloneServer(server, { listen: { port } });
console.log(`**server url => ${url}`);*/
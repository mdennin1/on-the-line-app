import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from "./graphql/schema.js"; //import { resolvers, typeDefs } from "./graphql/schema";

const server = new ApolloServer(schema);
const port = process?.env?.PORT ?? 4000;
const {url} = await startStandaloneServer(server, { context: () => console.log(`server listening on port ${port}`), listen: { port } });
console.log(`**server url => ${url}`);
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({ resolvers, typeDefs });
const {url} = await startStandaloneServer(server, {context: ()=>{}, listen: { port: 4000 }});
console.log(`**server url => ${url}`);
// import { gql } from "apollo-server-express";
import { gql } from "@apollo/server";

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

export default typeDefs;
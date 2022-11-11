import { gql } from "apollo-server"; 

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

export default typeDefs;
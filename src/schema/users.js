const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    following: [User]!
    followers: [User]!
  }

  type Query {
    getAllUsers: [User!]!
    following: [User]!
    followers: [User]!
  }
`;

module.exports = typeDefs;

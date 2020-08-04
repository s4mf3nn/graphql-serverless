const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    gender: Gender
    creationDate: String!
    metadataCreationDate: String!
    following: [User]!
    followers: [User]!
  }

  type LoginResponse {
    token: String
    user: User
  }

  enum Gender {
    male
    female
  }

  type Query {
    getAllUsers: [User!]!
    getUser(id: ID!): User!
    following: [User]!
    followers: [User]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!, gender: Gender): LoginResponse!
  }
`;

module.exports = typeDefs;

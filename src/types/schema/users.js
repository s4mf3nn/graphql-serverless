const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    gender: Gender
    following: [User]!
    followers: [User]!
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
    createUser(name: String!, email: String!, gender: Gender): User!
  }
`;

module.exports = typeDefs;

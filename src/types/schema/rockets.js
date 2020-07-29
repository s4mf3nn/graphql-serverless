const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Rocket {
    id: ID!
    name: String!
    type: String!
  }
  type Query {
    getAllRockets: [Rocket]!
    getRocket(id: ID!): Rocket!
  }
`;

module.exports = typeDefs;

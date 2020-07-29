const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Launch {
    id: ID!
    mission: String!
    year: String!
    date: String!
    success: Boolean
    rocket: Rocket!
  }
  type Query {
    getAllLaunches: [Launch]!
    getLaunch(id: ID!): Launch!
  }
`;

module.exports = typeDefs;

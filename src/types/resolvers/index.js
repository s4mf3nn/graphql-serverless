const { mergeResolvers } = require("@graphql-tools/merge");
const launches = require("./launches");
const rockets = require("./rockets");
const users = require("./users");

const resolvers = [launches, rockets, users];

module.exports = mergeResolvers(resolvers);

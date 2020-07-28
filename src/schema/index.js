const { mergeTypeDefs } = require("@graphql-tools/merge");
const launches = require("./launches");
const rockets = require("./rockets");
const users = require("./users");

const typeDefs = [launches, rockets, users];

module.exports = mergeTypeDefs(typeDefs, { all: true });

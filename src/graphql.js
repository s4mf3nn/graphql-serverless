const { ApolloServer } = require("apollo-server-lambda");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  debug: false,
  typeDefs,
  resolvers,
});

const main = server.createHandler();

module.exports.main = (event, context, callback) => {
  function callbackFilter(error, output) {
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }

  main(event, context, callbackFilter);
};

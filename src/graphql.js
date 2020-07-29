import { ApolloServer } from "apollo-server-lambda";
import typeDefs from "./types/schema";
import resolvers from "./types/resolvers";

const server = new ApolloServer({ debug: false, typeDefs, resolvers });

const main = server.createHandler();

exports.main = (event, context, callback) => {
  function callbackFilter(error, output) {
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }
  main(event, context, callbackFilter);
};

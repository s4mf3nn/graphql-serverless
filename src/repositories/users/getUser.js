import * as dynamoDbLib from "../../libs/dynamodb";
import { ApolloError } from "apollo-server-lambda";

const usersTable = process.env.usersTable;

export async function getUser(userId) {
  const params = {
    TableName: usersTable,
    Key: {
      id: userId,
    },
  };
  try {
    const result = await dynamoDbLib.call("get", params);
    return result.Item;
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}
import * as dynamoDbLib from "../../libs/dynamodb";
import { ApolloError } from "apollo-server-lambda";

const usersTable = process.env.usersTable;

export async function createUser(data) {
  const params = {
    TableName: usersTable,
    Item: data,
    ConditionExpression: "attribute_not_exists(externalId)"
  };

  try {
    await dynamoDbLib.call("put", params);
    return data;
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}
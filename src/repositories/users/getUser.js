import * as dynamoDbLib from "../../libs/dynamodb";
import { ApolloError } from "apollo-server-lambda";

const usersTable = process.env.usersTable;

export async function getUserById(userId) {
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

export async function queryUser(indexName, indexValue) {
  const params = {
    TableName: usersTable,
    IndexName: indexName,
    ExpressionAttributeValues: { ":pk": indexValue },
    KeyConditionExpression: "email = :pk",
  }

  try {
    const result = await dynamoDbLib.call("query", params);
    return result.Items[0];
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}
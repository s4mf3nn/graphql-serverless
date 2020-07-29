import * as dynamoDbLib from "../../libs/dynamodb";
import { ApolloError } from "apollo-server-lambda";

const usersTable = process.env.usersTable;

export async function getAllUsers() {
  const params = {
    TableName: usersTable,
    ScanIndexForward: false,
  };

  try {
    const results = await dynamoDbLib.call("scan", params);
    return results.Items;
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}
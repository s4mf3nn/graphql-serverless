import * as dynamoDbLib from "../../libs/dynamodb";
import { ApolloError } from "apollo-server-lambda";

const followersTable = process.env.followersTable;

export async function getFollowing(id) {
  const params = {
    TableName: followersTable,
    IndexName: "followingIndex",
    KeyConditionExpression: "following = :following",
    ExpressionAttributeValues: {
      ":following": id,
    },
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    return result.Items;
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}

export async function getFollowers(id) {
  const params = {
    TableName: followersTable,
    IndexName: "followerIndex",
    ExpressionAttributeValues: {
      ":follower": id,
    },
    KeyConditionExpression: "follower = :follower",
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    return result.Items;
  } catch (e) {
    console.log(e);
    return new ApolloError(e, 500);
  }
}

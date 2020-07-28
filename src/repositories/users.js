import * as dynamoDbLib from "../libs/dynamodb";
const usersTable = process.env.usersTable;
const followersTable = process.env.followersTable;

export async function getAllUsers() {
  const results = await dynamoDbLib.call("scan", {
    TableName: usersTable,
    ScanIndexForward: false,
  });
  return results.Items;
}

export async function getUser(userId) {
  const params = {
    TableName: usersTable,
    Key: {
      id: userId,
    },
  };
  try {
    const result = await dynamoDbLib.call("get", params);
    return result.Items;
  } catch (e) {
    console.log(e);
  }
}

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
  }
}

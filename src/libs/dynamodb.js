import AWS from "aws-sdk";

AWS.config.update({ region: process.env.awsRegion });

export const call = (action, params) => {
  if (process.env.IS_OFFLINE === "true") {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8080",
    });
    return dynamoDb[action](params).promise();
  } else {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
  }
};
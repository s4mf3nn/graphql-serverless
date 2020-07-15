const co = require('co');
const AWS = require('aws-sdk');
AWS.config.region = 'eu-west-3';
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableOrders = process.env.tableOrders;
const tableUsers = process.env.tableUsers;

const getUsersPerOrder = co.wrap(function* (email) {
  try {
    console.log('Init ops against dynamodb');

    const userParams = {
      TableName: tableUsers,
      Key: {
        email
      }
    };

    const ordersParams = {
      TableName: tableOrders,
      FilterExpression: 'email = :email',
      ExpressionAttributeValues: {
        ':email': email
      },
      Key: {
        order
      }
    };

    const [user, orders] = yield [
      dynamodb.get(userParams).promise(),
      dynamodb.scan(ordersParams).promise(),
    ];

    console.log('Got from dynamo', user, orders);

    const userBySchema = Object.assign({}, user.Item, {
      orders: orders.Items
    });

    return userBySchema;

  } catch (e) {
    console.log(e.message);
  }
});
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema
} = require('graphql');

const { getUserPerOrder } = require('./helpers');
const { User } = require('./types');

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    user: {
      type: User,
      args: {
        email: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolver: (_, { email }) => {
        return getUserPerOrder(email);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: Root
});

module.exports = {
  schema
}
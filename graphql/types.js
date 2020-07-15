const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const Orders = new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    createdAt: { type: GraphQLString },
    comment: { type: GraphQLString }
  }
});

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    orders: { type: new GraphQLList(Orders) }
  }
});

module.exports = {
  User
}
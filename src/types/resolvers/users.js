const { getAllUsers } = require("../../services/users/getAllUsers");
const { getUser } = require("../../services/users/getUser");
const { createUser } = require("../../services/users/createUser");
const { getAllFollowing } = require("../../services/followers/getAllFollowing");
const { getAllFollowers } = require("../../services/followers/getAllFollowers");

module.exports = {
  Query: {
    getAllUsers: () => getAllUsers(),
    getUser: (_, { id }) => getUser(id)
  },
  User: {
    following: (root) => getAllFollowing(root),
    followers: (root) => getAllFollowers(root)
  },
  Mutation: {
    createUser: async (_, args) => createUser(args)
  }
}

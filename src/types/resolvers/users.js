const { getAllUsers } = require("../../services/users/getAllUsers");
const { createUser } = require("../../services/users/createUser");
const { getAllFollowing } = require("../../services/followers/getAllFollowing");
const { getAllFollowers } = require("../../services/followers/getAllFollowers");

module.exports = {
  Query: {
    getAllUsers: () => getAllUsers(),
  },
  User: {
    following: (getAllUsers) => getAllFollowing(getAllUsers),
    followers: (getAllUsers) => getAllFollowers(getAllUsers),
  },
  Mutation: {
    createUser: async (_, args) => createUser(args)
  }
}

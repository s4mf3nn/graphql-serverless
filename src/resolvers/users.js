const {
  getAllUsers,
  getFollowing,
  getFollowers,
} = require("../services/users");

module.exports = {
  Query: {
    getAllUsers: () => getAllUsers(),
  },
  User: {
    following: (getAllUsers) => getFollowing(getAllUsers),
    followers: (getAllUsers) => getFollowers(getAllUsers),
  },
};

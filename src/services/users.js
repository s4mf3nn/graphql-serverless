const {
  getAllUsers: usersRepo,
  getUser: userRepo,
  getFollowing: followingRepo,
  getFollowers: followersRepo,
} = require("../repositories/users");

async function getAllUsers() {
  try {
    const resUser = await usersRepo();
    return resUser;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getUser(userId) {
  try {
    const resUser = await userRepo(userId);
    return resUser;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getFollowing(parent) {
  const followingList = [];
  try {
    const following = await followingRepo(parent.id);
    if (!following) {
      return followingList;
    }
    // TODO Faire un getBatchItem
    following.map((following) => {
      const user = getUser(following.follower);
      followingList.push(user);
    });
    return followingList;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}

async function getFollowers(parent) {
  const followersList = [];
  try {
    const followers = await followersRepo(parent.id);
    if (!followers) {
      return followersList;
    }
    // TODO Faire un getBatchItem
    followers.map((follower) => {
      const user = getUser(follower.following);
      followersList.push(user);
    });
    return followersList;
  } catch (e) {
    console.log("ERROR : ", e.message);
    return e.message;
  }
}
module.exports = {
  getAllUsers,
  getUser,
  getFollowing,
  getFollowers,
};

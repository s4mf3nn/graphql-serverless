import * as folowersRepo from "../../repositories/followers/followers";
import * as usersRepo from "../../repositories/users/getUser";
const repo = { ...folowersRepo, ...usersRepo };

export const getAllFollowing = async (parent) => {
  const followingList = [];
  const following = await repo.getFollowing(parent.id);
  if (!following) return followingList;

  following.map(item => {
    const user = repo.getUser(item.follower);
    followingList.push(user);
  });

  return followingList;
}
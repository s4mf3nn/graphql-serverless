import * as folowersRepo from "../../repositories/followers/followers";
import * as usersRepo from "../../repositories/users/getUser";
const repo = { ...folowersRepo, ...usersRepo };

export const getAllFollowing = async (root) => {
  const following = await repo.getFollowing(root.id);
  if (!following) return;

  const followingList = [];
  following.map(item => {
    const user = repo.getUser(item.follower);
    followingList.push(user);
  });

  return followingList;
}
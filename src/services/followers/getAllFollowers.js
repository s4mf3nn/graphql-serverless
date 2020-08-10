import * as folowersRepo from "../../repositories/followers/followers";
import * as usersRepo from "../../repositories/users/getUser";
const repo = { ...folowersRepo, ...usersRepo };

export const getAllFollowers = async (root) => {
  const followers = await repo.getFollowers(root.id);
  if (!followers) return;

  const followersList = [];
  followers.map(item => {
    const user = repo.getUserById(item.following);
    followersList.push(user);
  });

  return followersList;
}
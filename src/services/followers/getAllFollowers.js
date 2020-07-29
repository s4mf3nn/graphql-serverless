import * as folowersRepo from "../../repositories/followers/followers";
import * as usersRepo from "../../repositories/users/getUser";
const repo = { ...folowersRepo, ...usersRepo };

export const getAllFollowers = async (parent) => {
  const followersList = [];
  const followers = await repo.getFollowers(parent.id);
  if (!followers) return followersList;

  followers.map(item => {
    const user = repo.getUser(item.following);
    followersList.push(user);
  });

  return followersList;
}
import * as repo from "../../repositories/users/createUser";

export async function createUser(args) {
  const user = await repo.createUser(args);
  return user;
}
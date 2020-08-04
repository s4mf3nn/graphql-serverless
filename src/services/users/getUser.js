import { ApolloError } from "apollo-server-lambda";
import * as repo from "../../repositories/users/getUser";

export async function getUser(userId) {
  const user = await repo.getUserById(userId);
  if (!user) throw new ApolloError("User not found", 404);
  return user;
}
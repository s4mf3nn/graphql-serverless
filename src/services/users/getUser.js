import { ApolloError } from "apollo-server-lambda";
import * as repo from "../../repositories/users/getUser";

export async function getUser(userId) {
  const user = await repo.getUser(userId);
  if (!user) throw new ApolloError("No user found", 404);
  return user;
}
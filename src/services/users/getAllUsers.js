import { ApolloError } from "apollo-server-lambda";
import * as repo from "../../repositories/users/getAllUsers";

export async function getAllUsers() {
  const users = await repo.getAllUsers();
  if (!users) throw new ApolloError("No users found", 404);
  return users;
}
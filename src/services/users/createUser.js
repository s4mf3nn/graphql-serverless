import Joi from "@hapi/joi";
import { uuid } from 'uuidv4';
import { ApolloError } from "apollo-server-lambda";
import * as repo from "../../repositories/users/createUser";

const userValidator = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid("male", "female").required()
  })

  const { error } = schema.validate(data);
  if (error) throw new ApolloError(error, 400);
}

export async function createUser(args) {
  await userValidator(args);
  args.id = uuid();
  const user = await repo.createUser(args);
  return user;
}
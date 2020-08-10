import Joi from "@hapi/joi";
import { uuid } from 'uuidv4';
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { ApolloError } from "apollo-server-lambda";
import * as getUserRepo from "../../repositories/users/getUser";
import * as createUserRepo from "../../repositories/users/createUser";
const repo = { ...getUserRepo, ...createUserRepo };

const jwtSecret = process.env.jwtSecret;
const saltRounds = process.env.saltRounds;
const tokenExpiryInDay = process.env.tokenExpiryInDay;

const userValidator = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    gender: Joi.string().valid("male", "female").required()
  })

  const { error } = schema.validate(data);
  if (error) throw new ApolloError(error, 400);
}

const hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(parseInt(saltRounds));
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const createJwt = async (data) => {
  delete data.password;
  data.exp = Math.floor(Date.now() / 1000) + 86400 * tokenExpiryInDay;
  return jwt.sign(JSON.stringify(data), jwtSecret);
};

export async function createUser(data) {
  await userValidator(data);

  const [emailAlreadyExists, hash] = await Promise.all([
    repo.queryUser("emailIndex", data.email),
    hashPassword(data.password),
  ]);

  if (emailAlreadyExists) throw new ApolloError("Email address already taken.", 409);

  data.id = uuid();
  data.password = hash;
  data.creationDate = Date.now();
  data.metadataCreationDate = new Date().toLocaleString();

  const user = await repo.createUser(data);

  if (user === null) throw new ApolloError(`User creation failed : ${e}`, 500);

  return {
    token: await createJwt(data),
    user: data
  };
}
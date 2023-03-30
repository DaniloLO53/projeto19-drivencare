import userRepositories from "../repositories/userRepositories.js";
import messages from "../utils/constants/messages.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import tokenGenerators from "./tokenGenerator.js";

dotenv.config();

async function create({ name, email, password, is_doctor }) {
  const { rows: users } = await userRepositories.getByEmail(email);
  const [user] = users;

  if (user) {
    throw new Error(messages.USER_ALREADY_EXISTS);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const uuid = uuidv4();

  await userRepositories.insertUser({
    name,
    email,
    password: hashPassword,
    is_doctor,
    uuid,
  });
}

async function enter({ email, password }) {
  const { rows: users } = await userRepositories.getByEmail(email);
  if (users.length === 0) throw new Error(messages.NO_USER);

  const [user] = users;
  const { uuid: userUuid } = user;

  await descrypt(password, user.password);

  const token = tokenGenerators.generateToken(userUuid);

  const sessionUuid = uuidv4();

  await userRepositories.insertSession({ token, userUuid, sessionUuid });

  return token;
}

async function createSpecialization({ name, doctorUuid }) {
  const specializationUuid = uuidv4();

  await userRepositories.insertSpecialization({
    specialization: name,
    doctorUuid,
    specializationUuid,
  });
}

async function descrypt(passwordFromRequest, passwordFromDb) {
  const validPassword = await bcrypt.compare(passwordFromRequest, passwordFromDb);

  if (!validPassword) throw new Error(messages.NO_USER);
}

export default {
  create,
  enter,
  createSpecialization,
};

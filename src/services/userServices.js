import userRepositories from "../repositories/userRepositories.js";
import messages from "../utils/constants/messages.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import tokenHandler from "./tokenHandler.js";

async function create({ name, email, password, is_doctor, is_admin }) {
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
    is_admin,
  });
}

async function enter({ email, password }) {
  const { rows: users } = await userRepositories.getByEmail(email);
  if (users.length === 0) throw new Error(messages.NO_USER);

  const [user] = users;

  await descrypt(password, user.password);

  const token = tokenHandler.generate(user);

  return token;
}

async function get(data) {
  const { rows: doctors } = await userRepositories.get(data);

  return doctors;
}

async function getDates(uuid) {
  console.log("ser", uuid);
  const { rows: dates } = await userRepositories.getDates(uuid);

  return dates;
}

async function descrypt(passwordFromRequest, passwordFromDb) {
  const validPassword = await bcrypt.compare(passwordFromRequest, passwordFromDb);

  if (!validPassword) throw new Error(messages.NO_USER);
}

async function assignSpecialization({ specialization_uuid, doctor_uuid }) {
  const { rows: users } = await userRepositories.getBySpecialization({
    doctor_uuid,
    specialization_uuid,
  });
  const [user] = users;

  if (user) {
    throw new Error(messages.ALREADY_HAVE_SPECIALIZATION);
  }
  const uuid = uuidv4();

  await userRepositories.assignSpecialization({
    uuid,
    doctor_uuid,
    specialization_uuid,
  });
}

export default {
  create,
  enter,
  get,
  getDates,
  assignSpecialization,
};

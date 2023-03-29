import usersRepositories from '../repositories/usersRepositories.js'
import customExceptions from '../utils/customExceptions.js';
import jwt from 'jsonwebtoken';
import { NO_USER, USER_ALREADY_EXISTS } from '../utils/exceptionMessages.js';
import bcrypt from 'bcrypt';
import v4 from 'uuidv4';
import { DAY_TO_MILLISECONDS } from '../utils/conversions.js';
import dotenv from 'dotenv';

dotenv.config();

async function hashPassoword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}

function createToken(uuid) {
  const days = 3;
  const key = process.env.SECRET_KEY;
  console.log('key', key)
  try {
    const token = jwt.sign({ uuid }, key, {
      expiresIn: DAY_TO_MILLISECONDS * days / 1000
    });

    return token;
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
}

async function create(data) {
  const {
    email,
    name,
    password,
    typeOfUser
  } = data;

  try {
    const { rows: users } = await usersRepositories.findByEmail(email, typeOfUser);

    if (users.length > 0) throw new customExceptions.conflict(USER_ALREADY_EXISTS);

    const hashedPassword = await hashPassoword(password);
    const uuidValue = v4.uuid();

    console.log('UUID: ', uuidValue)

    await usersRepositories.insertUser(typeOfUser, email, name, hashedPassword, uuidValue);

    return users;
  } catch (error) {
    if (error.code) throw error;
    throw new Error(error);
  }
};

async function enter(data) {
  const {
    email,
    typeOfUser
  } = data;

  try {
    const { rows: users } = await usersRepositories.findByEmail(email, typeOfUser);

    if (users.length === 0) throw new customExceptions.badRequest(NO_USER);

    const userUuid = users[0].uuid;
    const token = createToken(userUuid);

    await usersRepositories.insertSession(typeOfUser, userUuid, token);

    return token;
  } catch (error) {
    if (error.code) throw error;
    throw new Error(error);
  }
};

export default {
  create,
  enter
};

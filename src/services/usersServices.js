import usersRepositories from '../repositories/usersRepositories.js'
import { CONFLICT, INTERNAL_SERVER_ERROR } from '../utils/codes.js';
import customExceptions from '../utils/customExceptions.js';
import { USER_ALREADY_EXISTS } from '../utils/exceptionMessages.js';
import bcrypt from 'bcrypt';

async function hashPassoword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
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

    await usersRepositories.insert(typeOfUser, email, name, hashedPassword);

    return users;
  } catch (error) {
    if (error.code) throw error;
    throw new Error(error);
  }
};

export default {
  create,
};

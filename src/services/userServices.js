import userRepositories from "../repositories/userRepositories";
import messages from "../utils/constants/messages";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function create({ name, email, password, is_doctor }) {
  const { rows: users } = await userRepositories.getByEmail(email);
  const [user] = users;

  if (user) {
    const hashPassword = await bcrypt.hash(password, 10);
    const uuid = uuidv4();

    await userRepositories.insertUser({
      name,
      email,
      password: hashPassword,
      is_doctor,
      uuid,
    });
    return;
  }

  throw new Error(messages.CONFLICT);
}

export default {
  create,
};

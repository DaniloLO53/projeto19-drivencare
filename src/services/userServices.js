import userRepositories from "../repositories/userRepositories";
import messages from "../utils/constants/messages";
import bcrypt from "bcrypt";

async function create({ name, email, password, is_doctor }) {
  const { rows: users } = await userRepositories.getByEmail(email);
  const [user] = users;

  if (user) {
    const hashPassword = await bcrypt.hash(password, 10);
    await userRepositories.create({ name, email, password: hashPassword, is_doctor });
    return;
  }

  throw new Error(messages.CONFLICT);
}

export default {
  create,
};

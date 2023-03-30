import userRepositories from "../repositories/userRepositories.js";
import messages from "../utils/constants/messages.js";

async function verify(request, response, next) {
  const { authorization } = request.headers;
  const token = authorization?.replace("Bearer ", "");

  const { rows: infos } = await userRepositories.verifyIsDoctor(token);

  const [info] = infos;

  if (infos.length === 0 || !info.is_doctor) throw new Error(messages.UNAUTHORIZED);

  console.log(infos);

  next();
}

export default {
  verify,
};

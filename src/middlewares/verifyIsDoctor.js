import userRepositories from "../repositories/userRepositories.js";
import codes from "../utils/constants/codes.js";
import messages from "../utils/constants/messages.js";

async function verify(request, response, next) {
  const { authorization } = request.headers;
  const token = authorization?.replace("Bearer ", "");

  const { rows: infos } = await userRepositories.verifyIsDoctor(token);

  const [info] = infos;

  if (infos.length === 0 || !info.is_doctor)
    return response.status(codes.UNAUTHORIZED).send(messages.UNAUTHORIZED);

  console.log(infos);
  response.locals.doctor_uuid = info.uuid;

  next();
}

export default {
  verify,
};

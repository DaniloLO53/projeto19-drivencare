import tokenHandler from "../services/tokenHandler.js";
import codes from "../utils/constants/codes.js";
import messages from "../utils/constants/messages.js";

async function verify(request, response, next) {
  const { authorization } = request.headers;
  const token = authorization?.replace("Bearer ", "");

  tokenHandler.verify(token, (error, user) => {
    if (error) return response.status(codes.FORBIDDEN).send(messages.UNAUTHORIZED);

    if (!user || !user.is_doctor)
      return response.status(codes.FORBIDDEN).send(messages.UNAUTHORIZED);

    response.locals.doctor_uuid = user.uuid;
  });

  next();
}

export default {
  verify,
};

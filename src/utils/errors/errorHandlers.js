import codes from "../constants/codes.js";
import messages from "../constants/messages.js";

function handle(error, response) {
  const {
    UNAUTHORIZED,
    INTERNAL_SERVER_ERROR,
    BAD_REQUEST,
    CONFLICT,
    UNPROCESSABLE_ENTITY,
  } = codes;

  const { USER_ALREADY_EXISTS, NO_USER } = messages;

  switch (error.message) {
    case UNAUTHORIZED:
      return response.status(UNAUTHORIZED).send({ error: error.message });
    case NO_USER:
      return response.status(BAD_REQUEST).send({ error: error.message });
    case USER_ALREADY_EXISTS:
      return response.status(CONFLICT).send({ error: error.message });
    case UNPROCESSABLE_ENTITY:
      return response.status(UNPROCESSABLE_ENTITY).send({ error: error.message });
    default:
      return response.status(INTERNAL_SERVER_ERROR).send({ error: error.message });
  }
}

export default {
  handle,
};

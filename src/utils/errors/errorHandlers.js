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

  let statusCode;

  console.log(error);

  switch (error.message) {
    case UNAUTHORIZED:
      statusCode = UNAUTHORIZED;
      break;
    case NO_USER:
      statusCode = BAD_REQUEST;
      break;
    case USER_ALREADY_EXISTS:
      statusCode = CONFLICT;
      break;
    case UNPROCESSABLE_ENTITY:
      statusCode = UNPROCESSABLE_ENTITY;
      break;
    default:
      statusCode = INTERNAL_SERVER_ERROR;
  }

  return response.status(statusCode).send({ error: error.message });
}

export default {
  handle,
};

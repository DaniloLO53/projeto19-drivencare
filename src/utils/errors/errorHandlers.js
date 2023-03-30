import codes from "../constants/codes";

function handle(error, response) {
  const { UNAUTHORIZED, INTERNAL_SERVER_ERROR } = codes;

  switch (error.message) {
    case UNAUTHORIZED:
      return response.status(UNAUTHORIZED).send({ error: error.message });
    default:
      return response.status(INTERNAL_SERVER_ERROR).send({ error: error.message });
  }
}

export default {
  handle,
};

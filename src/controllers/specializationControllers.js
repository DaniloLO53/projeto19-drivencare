import specializationServices from "../services/specializationServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { name } = request.body;
  const { CREATED } = codes;

  try {
    await specializationServices.create({ name });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

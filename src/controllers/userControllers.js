import userServices from "../services/userServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { name, password, email, is_doctor } = request.body;
  const { CREATED } = codes;

  try {
    await userServices.create({ name, password, email, is_doctor });

    return response.sendStatus(CREATED);
  } catch (error) {
    console.log(error);
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

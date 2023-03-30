import specizalizationDateServices from "../services/specizalizationDateServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { specialization_uuid, date_uuid } = request.body;
  const { CREATED } = codes;

  try {
    await specizalizationDateServices.create({ specialization_uuid, date_uuid });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

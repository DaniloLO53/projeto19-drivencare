import specializationServices from "../services/specializationServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { name } = request.body;
  const { CREATED } = codes;

  try {
    const doctorUuid = response.locals.doctor_uuid;
    await specializationServices.create({ name, doctorUuid });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

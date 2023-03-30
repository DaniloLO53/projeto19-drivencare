import userServices from "../services/userServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function createDate(request, response) {
  const { name } = request.body;
  const { CREATED } = codes;

  try {
    const doctorUuid = response.locals.doctor_uuid;
    await userServices.createSpecialization({ name, doctorUuid });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  createDate,
};

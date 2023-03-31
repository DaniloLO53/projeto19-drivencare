import consultationServices from "../services/consultationServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { specialization_date_uuid } = request.body;
  const { CREATED } = codes;

  try {
    const patient_uuid = response.locals.patient_uuid;

    await consultationServices.create({
      specialization_date_uuid,
      patient_uuid,
    });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

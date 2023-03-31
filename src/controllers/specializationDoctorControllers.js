import specizalizationDoctorServices from "../services/specializationDoctorServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { specialization_uuid, doctor_uuid } = request.body;
  const { CREATED } = codes;

  try {
    await specizalizationDoctorServices.create({ specialization_uuid, doctor_uuid });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
};

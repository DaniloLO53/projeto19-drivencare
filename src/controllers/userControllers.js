import userServices from "../services/userServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function create(request, response) {
  const { name, password, email, is_doctor, is_admin } = request.body;
  const { CREATED } = codes;

  try {
    await userServices.create({ name, password, email, is_doctor, is_admin });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

async function enter(request, response) {
  const { email, password } = request.body;
  const { CREATED } = codes;

  try {
    const token = await userServices.enter({ password, email });

    return response.status(CREATED).send({ token });
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

async function get(request, response) {
  const { name, specialization, district, city, state } = request.query;
  const { OK } = codes;

  try {
    const doctors = await userServices.get({
      name,
      specialization,
      district,
      city,
      state,
    });

    return response.status(OK).send({ doctors });
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

async function getDates(request, response) {
  const { uuid } = request.params;
  const { OK } = codes;

  try {
    const dates = await userServices.getDates(uuid);

    return response.status(OK).send({ dates });
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

async function assignSpecialization(request, response) {
  const { specialization_uuid } = request.body;
  const doctor_uuid = response.locals.doctor_uuid;
  const { CREATED } = codes;

  try {
    await userServices.assignSpecialization({ specialization_uuid, doctor_uuid });
    console.log(specialization_uuid);

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

async function assignSpecializationToDate(request, response) {
  const { specialization_uuid, date_uuid } = request.body;
  const { CREATED } = codes;

  try {
    await userServices.assignSpecializationToDate({ specialization_uuid, date_uuid });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  create,
  enter,
  get,
  getDates,
  assignSpecialization,
  assignSpecializationToDate,
};

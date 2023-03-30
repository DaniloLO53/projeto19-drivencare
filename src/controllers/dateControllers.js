import dateServices from "../services/dateServices.js";
import codes from "../utils/constants/codes.js";
import errorHandlers from "../utils/errors/errorHandlers.js";

async function createDate(request, response) {
  const { start, finish, day, avaliable } = request.body;
  const { CREATED } = codes;

  try {
    const doctorUuid = response.locals.doctor_uuid;

    await dateServices.getDate({ start, day });

    await dateServices.create({
      start,
      finish,
      day,
      avaliable,
      doctorUuid,
    });

    return response.sendStatus(CREATED);
  } catch (error) {
    errorHandlers.handle(error, response);
  }
}

export default {
  createDate,
};

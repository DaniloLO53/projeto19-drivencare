import codes from "../utils/codes.js";
import usersServices from '../services/usersServices.js';
import customExceptions from "../utils/customExceptions.js";

async function enter(request, response) {
  const { email, password, typeOfUser } = request.body;

  try {
    // await usersServices.create(email, password, name)
  } catch (error) {
    console.log('Error: ', error);

    return response.status(codes.CREATED);
  }
};

async function create(request, response) {
  const { email, password, name, typeOfUser } = request.body;

  try {
    console.log('Create: ', email)
    await usersServices.create({email, password, name, typeOfUser});

    return response.sendStatus(codes.CREATED);
  } catch (error) {
    console.log('Error: ', error);
    const status = customExceptions.hasValidCode(error.code)
      || codes.INTERNAL_SERVER_ERROR;

    return response.status(status).send(error.message);
  }
};

export default {
  create,
  enter
};

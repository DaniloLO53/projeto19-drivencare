import { CONFLICT, CREATED, INTERNAL_SERVER_ERROR } from "../utils/codes.js";
import usersServices from '../services/usersServices.js';

async function enter(request, response) {
  const { email, password, typeOfUser } = request.body;

  try {
    // await usersServices.create(email, password, name)
  } catch (error) {
    console.log('Error: ', error);

    return response.status(CREATED);
  }
};

async function create(request, response) {
  const { email, password, name, typeOfUser } = request.body;

  try {
    console.log('Create: ', email)
    await usersServices.create({email, password, name, typeOfUser});

    return response.sendStatus(CREATED);
  } catch (error) {
    console.log('Error: ', error);

    return response.status(error.code || INTERNAL_SERVER_ERROR).send(error.message);
  }
};

export default {
  create,
  enter
};

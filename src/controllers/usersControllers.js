import { CREATED, INTERNAL_SERVER_ERROR } from "../utils/codes.js";
import usersServices from '../services/usersServices.js';

async function enter(request, response) {
  const { email, password, typeOfUser } = request.body;

  try {
    await usersServices.create(email, password, name)
  } catch (error) {
    console.log('Error: ', error);

    return response.status(CREATED);
  }
};

async function create(request, response) {
  const { email, password, name, typeOfUser } = request.body;

  try {
    await create(email, password, name, typeOfUser);

    return response.sendStatus(CREATED);
  } catch (error) {
    console.log('Error: ', error);

    return response.status(INTERNAL_SERVER_ERROR).send(error);
  }
};

export default {
  create,
  enter
};

import { CREATED } from "../utils/codes";

async function signIn(request, response) {
  const { body } = request;

  try {

  } catch (error) {
    console.log('Error: ', error);

    return response.status(CREATED);
  }
};

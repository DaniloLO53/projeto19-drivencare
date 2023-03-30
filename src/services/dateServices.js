import { v4 as uuidv4 } from "uuid";
import dateRepositories from "../repositories/dateRepositories.js";

async function create({ start, finish, day, doctorUuid, avaliable }) {
  const dateUuid = uuidv4();

  await dateRepositories.insert({
    start,
    finish,
    day,
    avaliable,
    doctorUuid,
    dateUuid,
  });
}

export default {
  create,
};

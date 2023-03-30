import { v4 as uuidv4 } from "uuid";
import dateRepositories from "../repositories/dateRepositories.js";
import messages from "../utils/constants/messages.js";

async function create({ start, finish, day, doctorUuid, avaliable }) {
  const dateUuid = uuidv4();
  const { rows: dates } = await dateRepositories.isOverLapping({ day, start, finish });
  console.log(dates);
  const [date] = dates;

  console.log(date);

  if (date) throw new Error(messages.CONTENT_ALREADY_EXISTS);

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

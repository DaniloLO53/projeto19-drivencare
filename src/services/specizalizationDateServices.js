import { v4 as uuidv4 } from "uuid";
import specializationDateRepositories from "../repositories/specializationDateRepositories.js";

async function create({ date_uuid, specialization_uuid }) {
  const specialization_date_uuid = uuidv4();

  await specializationDateRepositories.insert({
    date_uuid,
    specialization_uuid,
    specialization_date_uuid,
  });
}

export default {
  create,
};

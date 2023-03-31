import { v4 as uuidv4 } from "uuid";
import consultationRepositories from "../repositories/consultationRepositories.js";

async function create({ specialization_date_uuid, patient_uuid }) {
  const consultation_uuid = uuidv4();

  await consultationRepositories.insert({
    specialization_date_uuid,
    patient_uuid,
    consultation_uuid,
  });
}

export default {
  create,
};

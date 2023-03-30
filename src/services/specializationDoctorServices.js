import { v4 as uuidv4 } from "uuid";
import specializationDoctorRepositories from "../repositories/specializationDoctorRepositories.js";

async function create({ doctor_uuid, specialization_uuid }) {
  const specialization_doctor_uuid = uuidv4();

  await specializationDoctorRepositories.insert({
    doctor_uuid,
    specialization_uuid,
    specialization_doctor_uuid,
  });
}

export default {
  create,
};

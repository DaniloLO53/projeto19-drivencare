import { v4 as uuidv4 } from "uuid";
import specializationRepositories from "../repositories/specializationRepositories.js";

async function create({ name }) {
  const specializationUuid = uuidv4();

  await specializationRepositories.insert({
    specialization: name,
    specializationUuid,
  });
}

export default {
  create,
};

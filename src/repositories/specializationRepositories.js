import db from "../database/database.js";

async function insert({ doctorUuid, specializationUuid, specialization }) {
  return await db.query(
    `
        INSERT INTO specializations (uuid, user_uuid, name)
        VALUES ($1, $2, $3)
    `,
    [specializationUuid, doctorUuid, specialization],
  );
}

export default {
  insert,
};

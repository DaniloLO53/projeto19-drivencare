import db from "../database/database.js";

async function insert({ specializationUuid, specialization }) {
  return await db.query(
    `
        INSERT INTO specializations (uuid, name)
        VALUES ($1, $2)
    `,
    [specializationUuid, specialization],
  );
}

export default {
  insert,
};

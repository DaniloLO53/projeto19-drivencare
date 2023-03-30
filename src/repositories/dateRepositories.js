import db from "../database/database.js";

async function insert({ start, finish, day, doctorUuid, dateUuid, avaliable }) {
  return await db.query(
    `
        INSERT INTO dates (start, finish, day, doctor_uuid, avaliable, uuid)
        VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [start, finish, day, doctorUuid, avaliable, dateUuid],
  );
}

export default {
  insert,
};

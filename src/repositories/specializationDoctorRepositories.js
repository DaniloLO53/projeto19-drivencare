import db from "../database/database.js";

async function insert({ date_uuid, specialization_uuid, specialization_doctor_uuid }) {
  return await db.query(
    `
        INSERT INTO specializations_date (uuid, date_uuid, specialization_uuid)
        VALUES ($1, $2)
    `,
    [specialization_doctor_uuid, date_uuid, specialization_uuid],
  );
}

export default {
  insert,
};

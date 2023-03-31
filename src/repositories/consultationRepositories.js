import db from "../database/database.js";

async function insert({ specialization_date_uuid, patient_uuid, consultation_uuid }) {
  return await db.query(
    `
        INSERT INTO specializations (uuid, patient_uuid, specialization_date_uuid)
        VALUES ($1, $2, $3)
    `,
    [consultation_uuid, patient_uuid, specialization_date_uuid],
  );
}

export default {
  insert,
};

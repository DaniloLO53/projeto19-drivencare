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

async function get({ start, day }) {
  return await db.query(
    `
        SELECT * FROM dates WHERE start = $1 AND day = $2
    `,
    [start, day],
  );
}

async function isOverLapping({ start, finish, day }) {
  console.log(start);
  return await db.query(
    `
      SELECT start, finish FROM dates 
      WHERE (start::time, finish::time) OVERLAPS ($1::time, $2::time)
      AND day = $3
    `,
    [start, finish, day],
  );
}

export default {
  insert,
  get,
  isOverLapping,
};

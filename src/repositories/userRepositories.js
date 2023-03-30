import db from "../database/database.js";

async function getByEmail(email) {
  return await db.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email],
  );
}

async function insertUser({ name, email, password, is_doctor, is_admin, uuid }) {
  return await db.query(
    `
        INSERT INTO users (name, email, password, is_doctor, uuid, is_admin)
        VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [name, email, password, is_doctor, uuid, is_admin],
  );
}

async function insertSession({ token, userUuid, sessionUuid }) {
  return await db.query(
    `
        INSERT INTO sessions (token, user_uuid, uuid)
        VALUES ($1, $2, $3)
    `,
    [token, userUuid, sessionUuid],
  );
}

async function verifyIsDoctor(token) {
  return await db.query(
    `
    SELECT users.is_doctor, users.uuid
    FROM users
    JOIN sessions
      ON sessions.user_uuid = users.uuid
    WHERE token = $1
  `,
    [token],
  );
}

export default {
  getByEmail,
  insertUser,
  verifyIsDoctor,
  insertSession,
};

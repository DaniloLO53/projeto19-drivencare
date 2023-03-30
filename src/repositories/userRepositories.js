import db from "../database/database.js";

async function getByEmail(email) {
  return await db.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email],
  );
}

async function insertUser({ name, email, password, is_doctor, uuid }) {
  return await db.query(
    `
        INSERT INTO users (name, email, password, is_doctor, uuid)
        VALUES ($1, $2, $3, $4, $5)
    `,
    [name, email, password, is_doctor, uuid],
  );
}

async function verifyIsDoctor(token) {
  return await db.query(
    `    
    SELECT users.is_doctor
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
};

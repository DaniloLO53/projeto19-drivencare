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

export default {
  getByEmail,
  insertUser,
};

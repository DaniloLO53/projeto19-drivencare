import db from '../database/database.js';

async function findByEmail(email, typeOfUser) {
  console.log('findByEmail: ', typeOfUser);

  const query = {
    text: `SELECT * FROM "${typeOfUser}" WHERE "email" = $1`,
    values: [email],
  };

  return await db.query(query);
}


async function insertUser(typeOfUser, email, name, password, uuid) {
  const query = {
    text: `INSERT INTO "${typeOfUser}"(email, name, password, uuid) VALUES($1, $2, $3, $4)`,
    values: [email, name, password, uuid],
  };

  return await db.query(query);
};

async function insertSession(typeOfUser, uuid, token) {
  const query = {
    text: `INSERT INTO sessions(user_type, user_uuid, token) VALUES($1, $2, $3)`,
    values: [typeOfUser, uuid, token],
  };

  return await db.query(query);
};

export default {
  findByEmail,
  insertUser,
  insertSession
};

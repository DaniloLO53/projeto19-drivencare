import db from '../database/database.js';

async function findByEmail(email, typeOfUser) {
  console.log('findByEmail: ', typeOfUser);

  const query = {
    text: `SELECT * FROM "${typeOfUser}" WHERE "email" = $1`,
    values: [email],
  };

  return await db.query(query);
}


async function insert(typeOfUser, email, name, password) {
  const query = {
    text: `INSERT INTO "${typeOfUser}"(email, name, password) VALUES($1, $2, $3)`,
    values: [email, name, password],
  };

  return await db.query(query);
};

export default {
  findByEmail,
  insert,
};

import db from "../database/database.js";

async function getByEmail(email) {
  return await db.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email],
  );
}

async function getBySpecialization({ specialization_uuid, doctor_uuid }) {
  return await db.query(
    `    
    SELECT * FROM specializations_doctor
    WHERE specialization_uuid = $1 AND doctor_uuid = $2
  `,
    [specialization_uuid, doctor_uuid],
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

async function assignSpecialization({ uuid, doctor_uuid, specialization_uuid }) {
  return await db.query(
    `
        INSERT INTO specializations_doctor (uuid, doctor_uuid, specialization_uuid)
        VALUES ($1, $2, $3)
    `,
    [uuid, doctor_uuid, specialization_uuid],
  );
}

async function get({ name, specialization, district, city, state }) {
  console.log(name, district);
  let query = `
    SELECT u.uuid AS user_uuid,
    u.name AS user_name,
    d.name AS district_name,
    sp.name AS specialization_name,
    ct.name AS city_name,
    st.uf AS state_uf
    FROM users u
    LEFT JOIN locations l
      ON l.user_uuid = u.uuid
    LEFT JOIN districts d
      ON d.id = l.district_id
    LEFT JOIN cities ct
      ON ct.id = d.city_id
    LEFT JOIN states st
      ON st.id = ct.state_id
    LEFT JOIN specializations_doctor spd
      ON spd.doctor_uuid = u.uuid
    LEFT JOIN specializations sp
      ON sp.uuid = spd.specialization_uuid
    WHERE u.name ILIKE '%${name}%'`;

  specialization && (query += ` AND sp.name ILIKE '%${specialization}%'`);
  district && (query += ` AND d.name ILIKE '%${district}%'`);
  city && (query += ` AND ct.name ILIKE '%${city}%'`);
  state && (query += ` AND st.uf ILIKE '%${state}%'`);

  query += " ORDER BY district_name, user_name";

  return await db.query(query);
}

async function getDates(uuid) {
  return await db.query(
    `    
    SELECT uuid, start, finish, day, avaliable FROM dates WHERE uuid = $1;
  `,
    [uuid],
  );
}

export default {
  getByEmail,
  insertUser,
  insertSession,
  assignSpecialization,
  get,
  getDates,
  getBySpecialization,
};

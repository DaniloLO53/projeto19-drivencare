import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

// const users = generateUsers(50);

function generateUsers(n) {
  const users = [];

  for (let i = 0; i < n; i++) {
    const uuid = uuidv4();
    const name = faker.name.fullName();
    const email = faker.internet.email();
    const password = Math.floor(100 + Math.random() * 900);
    const specs = generateSpecializations();
    const dates = generateDates(20);

    const user = { uuid, name, email, password, specs, dates };
    users.push(user);
  }

  return users;
}

function generateSpecializations() {
  const specializations = [
    "Cardiologia",
    "Dermatologia",
    "Endocrinologia",
    "Gastroenterologia",
    "Hematologia",
    "Neurologia",
    "Oftalmologia",
    "Oncologia",
    "Ortopedia",
    "Pediatria",
  ];

  const randomSpec = Math.floor(Math.random() * (specializations.length - 2));
  const specs = [
    { name: specializations[randomSpec], uuid: uuidv4() },
    { name: specializations[randomSpec + 1], uuid: uuidv4() },
  ];

  return specs;
}

function generateDates(n) {
  const array = [];

  for (let i = 0; i < n; i++) {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 2) * 30; // múltiplos de 30
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1; // de 1 a 12
    const day = Math.floor(Math.random() * 31) + 1; // de 1 a 31
    const formattedDay = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
    const start = `${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }`;
    const finish = `${hour < 10 ? "0" + (hour + 1) : hour + 1}:${
      minute < 10 ? "0" + minute : minute
    }`;
    const avaliable = Math.random() < 0.5;
    array.push({ start, finish, day: formattedDay, avaliable });
  }

  return array;
}

// function generateSQLUsers() {
//   let sql = "INSERT INTO users(uuid, name, email, password, is_doctor) VALUES ";

//   users.forEach(({ uuid, name, email, password }) => {
//     sql += `('${uuid}', '${name}', '${email}', '${password}', true),`;
//   });
//   sql = sql.slice(0, -1);

//   return sql;
// }
console.log(generateUsers(50));
console.log(generateDates(50));

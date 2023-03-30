import { DAY_TO_MILLISECONDS } from "../utils/constants/conversions.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generate(user) {
  const days = 3;
  const key = process.env.SECRET_KEY;
  const token = jwt.sign(user, key, {
    expiresIn: (DAY_TO_MILLISECONDS * days) / 1000,
  });

  return token;
}

function verify(token, callback) {
  const key = process.env.SECRET_KEY;

  jwt.verify(token, key, callback);
}

export default {
  generate,
  verify,
};

import { DAY_TO_MILLISECONDS } from "../utils/constants/conversions.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function generateToken(uuid) {
  const days = 3;
  const key = process.env.SECRET_KEY;
  const token = jwt.sign({ uuid }, key, {
    expiresIn: (DAY_TO_MILLISECONDS * days) / 1000,
  });

  return token;
}

export default {
  generateToken,
};

import { DAY_TO_MILLISECONDS } from "../utils/constants/conversions";
import jwt from "jsonwebtoken";

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

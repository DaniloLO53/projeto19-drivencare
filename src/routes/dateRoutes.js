import express from "express";
import dateControllers from "../controllers/dateControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import { dateSchema } from "../schemas/data.js";

const dateRoute = express.Router();

dateRoute.post(
  "/create",
  validateSchema(dateSchema),
  verifyIsDoctor.verify,
  dateControllers.createDate,
);

export default dateRoute;

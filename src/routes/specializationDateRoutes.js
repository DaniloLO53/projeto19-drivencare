import express from "express";
import specializationDateControllers from "../controllers/specializationDateControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import { specializationSchema } from "../schemas/data.js";

const specializationDateRoute = express.Router();

specializationDateRoute.post(
  "/create",
  validateSchema(specializationSchema),
  verifyIsDoctor.verify,
  specializationDateControllers.create,
);

export default specializationDateRoute;

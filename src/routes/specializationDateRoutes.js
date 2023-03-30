import express from "express";
import specializationControllers from "../controllers/specializationControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import { specializationSchema } from "../schemas/data.js";

const specializationDateRoute = express.Router();

specializationDateRoute.post(
  "/create",
  validateSchema(specializationSchema),
  verifyIsDoctor.verify,
  specializationControllers.create,
);

export default specializationDateRoute;

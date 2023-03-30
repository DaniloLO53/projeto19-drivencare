import express from "express";
import specializationDoctorControllers from "../controllers/specializationDoctorControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import { specializationSchema } from "../schemas/data.js";

const specializationDoctorRoute = express.Router();

specializationDoctorRoute.post(
  "/create",
  validateSchema(specializationSchema),
  verifyIsDoctor.verify,
  specializationDoctorControllers.create,
);

export default specializationDoctorRoute;

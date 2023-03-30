import express from "express";
import specializationControllers from "../controllers/specializationControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsAdmin from "../middlewares/verifyIsAdmin.js";
import { specializationSchema } from "../schemas/data.js";

const specializationRoute = express.Router();

specializationRoute.post(
  "/create",
  validateSchema(specializationSchema),
  verifyIsAdmin.verify,
  specializationControllers.create,
);

export default specializationRoute;

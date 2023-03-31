import express from "express";
import consultationControllers from "../controllers/consultationControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { consultationSchema } from "../schemas/data.js";

const consultationRoute = express.Router();

consultationRoute.post(
  "/create",
  validateSchema(consultationSchema),
  consultationControllers.create,
);

export default consultationRoute;

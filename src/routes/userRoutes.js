import express from "express";
import specializationControllers from "../controllers/specializationControllers.js";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import { specializationSchema } from "../schemas/data.js";
import signinSchema from "../schemas/signin.js";
import signupSchema from "../schemas/signup.js";

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema), userControllers.create);
userRoute.post("/sign-in", validateSchema(signinSchema), userControllers.enter);

userRoute.post(
  "/specializations",
  validateSchema(specializationSchema),
  verifyIsDoctor.verify,
  specializationControllers.createSpecialization,
);

export default userRoute;

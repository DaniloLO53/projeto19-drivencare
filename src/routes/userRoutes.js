import express from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import paramSchema from "../schemas/params.js";
import signinSchema from "../schemas/signin.js";
import signupSchema from "../schemas/signup.js";

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema), userControllers.create);
userRoute.post("/sign-in", validateSchema(signinSchema), userControllers.enter);
userRoute.get(
  "/search/:name?/:specialization?/:district?/:city?/:state?",
  validateSchema(paramSchema),
  userControllers.get,
);

export default userRoute;

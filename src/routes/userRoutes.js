import express from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import signinSchema from "../schemas/signin.js";
import signupSchema from "../schemas/signup.js";

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema), userControllers.create);
userRoute.post("/sign-in", validateSchema(signinSchema));

export default userRoute;

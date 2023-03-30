import express from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import signinSchema from "../schemas/signin.js";
import signupSchema from "../schemas/signup.js";

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema));
userRoute.post("/sign-in", validateSchema(signinSchema));

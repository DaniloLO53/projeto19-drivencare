import express from "express";
import userControllers from "../controllers/userControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import verifyIsDoctor from "../middlewares/verifyIsDoctor.js";
import verifyIsPatient from "../middlewares/verifyIsPatient.js";
import querySchema from "../schemas/query.js";
import signinSchema from "../schemas/signin.js";
import signupSchema from "../schemas/signup.js";

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema), userControllers.create);
userRoute.post("/sign-in", validateSchema(signinSchema), userControllers.enter);
userRoute.get("/users", validateSchema(querySchema, true), userControllers.get);
userRoute.post(
  "/users/specializations",
  verifyIsDoctor.verify,
  userControllers.assignSpecialization,
);
userRoute.get("/users/:uuid/dates", verifyIsPatient.verify, userControllers.getDates);

export default userRoute;

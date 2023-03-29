import express from 'express';
import { validateSchema } from '../middlewares/validateMiddleware.js';
import usersControllers from '../controllers/usersControllers.js';
import { signupSchema } from '../schemas/signupSchema.js';
import { signinSchema } from '../schemas/signinSchema.js';

const userRoute = express.Router();

userRoute.post("/sign-up", validateSchema(signupSchema), usersControllers.create);
userRoute.post("/sign-in", validateSchema(signinSchema), usersControllers.enter);

export default userRoute;

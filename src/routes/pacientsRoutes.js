import express from 'express';
import { validateSchema } from '../middlewares/validateMiddleware.js';
import usersControllers from '../controllers/usersControllers.js';
import { signupSchema } from '../schemas/signupSchema.js';
import { signinSchema } from '../schemas/signinSchema.js';

const pacientRouter = express.Router();

pacientRouter.post("/sign-in", validateSchema(signinSchema), usersControllers.enter);
pacientRouter.post("/sign-up", validateSchema(signupSchema), usersControllers.create);

export default pacientRouter;

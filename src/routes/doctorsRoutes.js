import express from 'express';
import usersControllers from '../controllers/usersControllers.js';
import { signupSchema } from '../schemas/signupSchema.js';
import { signinSchema } from '../schemas/signinSchema.js';
import { validateSchema } from '../middlewares/validateMiddleware.js';

const doctorRouter = express.Router();

doctorRouter.post("/sign-up", validateSchema(signupSchema), usersControllers.create);
doctorRouter.post("/sign-in", validateSchema(signinSchema), usersControllers.enter);

export default doctorRouter;

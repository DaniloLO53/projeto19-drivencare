import express from 'express';
import { validateSchema } from '../middlewares/validateMiddleware.js';
import usersControllers from '../controllers/usersControllers.js';
import { signupSchema } from '../schemas/signupSchema.js';
import { signinSchema } from '../schemas/signinSchema.js';

const pacientRoute = express.Router();

export default pacientRoute;

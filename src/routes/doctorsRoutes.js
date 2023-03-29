import express from 'express';
import usersControllers from '../controllers/usersControllers.js';
import { signupSchema } from '../schemas/signupSchema.js';
import { signinSchema } from '../schemas/signinSchema.js';
import { validateSchema } from '../middlewares/validateMiddleware.js';

const doctorRoute = express.Router();

export default doctorRoute;

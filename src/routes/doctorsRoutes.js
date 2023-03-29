import express from 'express';
import validate from '../middlewares/validateMiddleware';
import usersControllers from '../controllers/usersControllers.js';

const doctorRouter = express.Router();

doctorRouter.post("/sign-up", validate, usersControllers.create);
doctorRouter.post("/sign-in", validate, usersControllers.enter);

export default { doctorRouter };
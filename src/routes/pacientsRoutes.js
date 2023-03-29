import express from 'express';
import validate from '../middlewares/validateMiddleware';
import usersControllers from '../controllers/usersControllers.js';

const pacientRouter = express.Router();

pacientRouter.post("/sign-up", validate, usersControllers.create);
pacientRouter.post("/sign-in", validate, usersControllers.enter);

export default { pacientRouter };
import express from 'express';
import validate from '../middlewares/validate.middleware';

const pacientRouter = express.Router();

pacientRouter.post('/sign-in', validate);

export default { pacientRouter };
import express from 'express';
import consultationsRoutes from './consultationsRoutes.js';
import doctorsRoute from './doctorsRoutes.js';
import pacientsRoute from './pacientsRoutes.js';
import userRoute from './usersRoutes.js';

const router = express.Router();

router.use('/', [userRoute, doctorsRoute, pacientsRoute]);

export default router;

import express from 'express';
import consultationsRoutes from './consultations.routes.js';
import doctorsRoutes from './doctors.routes.js';
import pacientsRoutes from './pacients.routes.js';

const router = express.Router();

router.use([consultationsRoutes, doctorsRoutes, pacientsRoutes]);

export default { router };

import express from 'express';
import consultationsRoutes from './consultationsRoutes.js';
import doctorsRoutes from './doctorsRoutes.js';
import pacientsRoutes from './pacientsRoutes.js';

const router = express.Router();

// router.use('/doctors', doctorsRoutes);
router.use('/pacients', pacientsRoutes);

export default router;

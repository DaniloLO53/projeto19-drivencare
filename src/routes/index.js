import { Router } from "express";
import consultationRoute from "./consultationRoutes.js";
import dateRoute from "./dateRoutes.js";
import specializationDateRoute from "./specializationDateRoutes.js";
import specializationDoctorRoute from "./specializationDoctorRoutes.js";
import specializationRoute from "./specializationRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/specializations", specializationRoute);
routes.use("/specializations-dates", specializationDateRoute);
routes.use("/specializations-doctors", specializationDoctorRoute);
routes.use("/consultations", consultationRoute);
routes.use("/dates", dateRoute);

export default routes;

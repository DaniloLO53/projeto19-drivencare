import { Router } from "express";
import dateRoute from "./dateRoutes.js";
import specializationDateRoute from "./specializationDateRoutes.js";
import specializationRoute from "./specializationRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/specializations", specializationRoute);
routes.use("/specializations-dates", specializationDateRoute);
routes.use("/dates", dateRoute);

export default routes;

import { Router } from "express";
import dateRoute from "./dateRoutes.js";
import specializationRoute from "./specializationRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/specializations", specializationRoute);
routes.use("/dates", dateRoute);

export default routes;

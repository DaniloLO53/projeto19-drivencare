import { Router } from "express";
import dateRoute from "./dateRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/dates", dateRoute);

export default routes;

import {Router} from "express";

// General Routes
// User/Auth
import authRoutes from "./general/auth/authRoutes";
import userRoutes from "./general/user/userRoutes";
// Hierarchy
import hierarchyRoutes from "./general/hierarchy/hierarchyRoutes";
// Nite Log Routes
// Schedule
import scheduleRoutes from "./nite-log/scheduleRoutes";

const router = Router();

export default (): Router => {
    authRoutes(router);
    userRoutes(router);
    hierarchyRoutes(router);

    scheduleRoutes(router);

    return router;
}
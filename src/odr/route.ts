import express, { Router } from "express";
import * as odrController from "./controller";
const router: Router = express.Router();

export const odrRoutes = () => {
    router.post("/search", odrController.search);
    router.post("/select", odrController.select);
    return router;
};

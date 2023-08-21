import express, { Router } from "express";
import { search, init, confirm, status, select,cancel,track,support,rating } from "./controller";
const router: Router = express.Router();

export const scholarshipsRoutes = () => {
  router.post("/search", search);
  router.post("/select", select);
  router.post("/init", init);
  router.post("/confirm", confirm);
  router.post("/status", status);
  router.post("/cancel", cancel);
  router.post("/track", track);
  router.post("/support", support);
  router.post("/rating", rating);
  return router;
};

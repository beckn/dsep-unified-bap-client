import express, { Request, Response } from "express";
import {
  searchScholarshipService,
  statusScholarshipService,
  confirmScholarshipService,
  initScholarshipService,
  selectScholarshipService,
  cancelScholarshipService,
  trackScholarshipService,
  supportScholarshipService,
  ratingScholarshipService
} from "./services";
export const search = async (req: Request, res: Response) => {
  const { data, status = 200 } = await searchScholarshipService(req.body);
  return res.status(status).json(data);
};

export const select = async (req: Request, res: Response) => {
  const { data, status = 200 } = await selectScholarshipService(req?.body);
  return res.status(status).json(data);
};

export const init = async (req: Request, res: Response) => {
  const { data, status = 200 } = await initScholarshipService(req.body);
  return res.status(status).json(data);
};

export const confirm = async (req: Request, res: Response) => {
  const { data, status = 200 } = await confirmScholarshipService(req.body);
  return res.status(status).json(data);
};
export const status = async (req: Request, res: Response) => {
  const { data, status = 200 } = await statusScholarshipService(req.body);
  return res.status(status).json(data);
};
export const cancel = async (req: Request, res: Response) => {
  console.log("REQ",req)
  const { data, status = 200 } = await cancelScholarshipService(req.body);

  return res.status(status).json(data);
};
export const track = async (req: Request, res: Response) => {
  const { data, status = 200 } = await trackScholarshipService(req.body);

  return res.status(status).json(data);
};
export const support = async (req: Request, res: Response) => {
  const { data, status = 200 } = await supportScholarshipService(req.body);

  return res.status(status).json(data);
};
export const rating = async (req: Request, res: Response) => {
  const { data, status = 200 } = await ratingScholarshipService(req.body);

  return res.status(status).json(data);
};


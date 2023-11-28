import express, { Request, Response } from "express";
import {
  searchScholarshipService,
  statusODRService,
  confirmScholarshipService,
  initScholarshipService,
  selectScholarshipService
} from "./services";
import requestIp from "request-ip";
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
  console.log(
    "Status Controller Called from =====>======>",
    requestIp.getClientIp(req)
  );
  const { data, status = 200 } = await statusODRService(req.body);
  return res.status(status).json(data);
};

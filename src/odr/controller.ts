import { Response, Request } from "express";
import {
    searchOdr,
    selectOdr,

} from "./services";

export const search = async (req: Request, res: Response) => {
    const { data, status = 200 } = await searchOdr(req.body);
    res.status(status).json(data);
};



export const select = async (req: Request, res: Response) => {
    const { data, status = 200 } = await selectOdr(req.body);
    res.status(status).json(data);
};
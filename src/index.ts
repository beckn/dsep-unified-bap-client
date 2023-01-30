import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { jobSearchController } from "./job/controller";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 4005;

const router = (express.Router());
app.use(router);
app.use(express.json())
app.use('/jobs', jobSearchController)

app.get("/", (req: Request, res: Response) => {
  res.send("dsep unified bap client is working");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

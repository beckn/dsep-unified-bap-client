import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { mentorSearchController, mentorInitController, mentorSelectController, mentorConfirmController} from "./mentor/controller";
import {userInfo} from "./user/controller"

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 4004;

const router = (express.Router());
app.use(router);
app.use(express.json())

//Mentoring & Coaching
app.use('/mentorsearch', mentorSearchController)
app.use('/mentorinit', mentorInitController)
app.use('/mentorselect', mentorSelectController)
app.use('/mentorconfirm', mentorConfirmController)

app.get("/", (req: Request, res: Response) => {
  res.send("dsep unified bap client is working");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

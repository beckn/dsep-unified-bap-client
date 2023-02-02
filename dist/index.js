"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const controller_1 = require("./job/controller");
const controller_2 = require("./mentor/controller");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT || 4004;
const router = (express_1.default.Router());
exports.app.use(router);
exports.app.use(express_1.default.json());
exports.app.use('/jobs', controller_1.jobSearchController);
//Mentoring & Coaching
exports.app.use('/mentorsearch', controller_2.mentorSearchController);
exports.app.use('/mentorinit', controller_2.mentorInitController);
exports.app.use('/mentorselect', controller_2.mentorSearchController);
exports.app.use('/mentorconfirm', controller_2.mentorInitController);
exports.app.get("/", (req, res) => {
    res.send("dsep unified bap client is working");
});
exports.app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

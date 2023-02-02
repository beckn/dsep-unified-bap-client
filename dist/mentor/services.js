"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMentorConfirm = exports.getMentorSelect = exports.getMentorInit = exports.getMentorSearch = void 0;
const axios_1 = __importDefault(require("axios"));
function getMentorSearch(mentorSearchDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mentorSearchResult = yield axios_1.default.post('https://65b6-103-154-203-92.in.ngrok.io/search', mentorSearchDTO);
            console.log(">>ACK Response from protocol server", mentorSearchResult);
            return mentorSearchResult;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getMentorSearch = getMentorSearch;
function getMentorInit(mentorInitDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mentorInitResult = yield axios_1.default.post('https://65b6-103-154-203-92.in.ngrok.io', mentorInitDTO);
            console.log(">>ACK Response from protocol server", mentorInitResult);
            return mentorInitResult;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getMentorInit = getMentorInit;
function getMentorSelect(mentorSelectDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mentorSelectResult = yield axios_1.default.post('https://65b6-103-154-203-92.in.ngrok.io', mentorSelectDTO);
            console.log(">>ACK Response from protocol server", mentorSelectResult);
            return mentorSelectResult;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getMentorSelect = getMentorSelect;
function getMentorConfirm(mentorConfirmDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mentorConfirmResult = yield axios_1.default.post('https://65b6-103-154-203-92.in.ngrok.io', mentorConfirmDTO);
            console.log(">>ACK Response from protocol server", mentorConfirmResult);
            return mentorConfirmResult;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getMentorConfirm = getMentorConfirm;

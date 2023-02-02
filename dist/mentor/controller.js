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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mentorConfirmController = exports.mentorSelectController = exports.mentorInitController = exports.mentorSearchController = void 0;
const MentorDTO_1 = require("./dto/MentorDTO");
const services_1 = require("./services");
const mentorSearchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mappedMentorSearchRequest = MentorDTO_1.MentorDTO.toMentorSearchRequest(req.body);
    const mentorSearchResponse = yield (0, services_1.getMentorSearch)(mappedMentorSearchRequest);
    const mappedMentorSearchResponse = MentorDTO_1.MentorDTO.toMentorSearchResponse(mentorSearchResponse);
    res.send(mappedMentorSearchResponse);
});
exports.mentorSearchController = mentorSearchController;
const mentorInitController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mappedMentorInitRequest = MentorDTO_1.MentorDTO.toMentorSearchRequest(req.body);
    const mentorInitResponse = yield (0, services_1.getMentorInit)(mappedMentorInitRequest);
    const mappedMentorInitResponse = MentorDTO_1.MentorDTO.toMentorInitResponse(mentorInitResponse);
    res.send(mappedMentorInitResponse);
});
exports.mentorInitController = mentorInitController;
const mentorSelectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mappedMentorSelectRequest = MentorDTO_1.MentorDTO.toMentorSelectRequest(req.body);
    const mentorSelectResponse = yield (0, services_1.getMentorSelect)(mappedMentorSelectRequest);
    const mappedMentorSelectResponse = MentorDTO_1.MentorDTO.toMentorSelectResponse(mentorSelectResponse);
    res.send(mappedMentorSelectResponse);
});
exports.mentorSelectController = mentorSelectController;
const mentorConfirmController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mappedMentorConfirmRequest = MentorDTO_1.MentorDTO.toMentorConfirmRequest(req.body);
    const mentorConfirmResponse = yield (0, services_1.getMentorConfirm)(mappedMentorConfirmRequest);
    const mappedMentorConfirmResponse = MentorDTO_1.MentorDTO.toMentorConfirmResponse(mentorConfirmResponse);
    res.send(mappedMentorConfirmResponse);
});
exports.mentorConfirmController = mentorConfirmController;

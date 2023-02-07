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
exports.onConfirmJob = exports.onSelectJob = exports.onInitJob = exports.initJob = exports.selectJob = exports.searchJob = exports.getJobConfirm = exports.getJobOnSearch = void 0;
const axios_1 = __importDefault(require("axios"));
const helper_1 = require("../helper");
const dotenv_1 = __importDefault(require("dotenv"));
const schema_helper_1 = require("./schema_helper");
dotenv_1.default.config();
const gatewayUrl = process.env.GATEWAY_URL || "";
function getJobOnSearch(postBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.contextOnSearch)('jobs', 'on_search', postBody.transaction_id, postBody.message_id);
            const jobSchemaConstructer = {
                context,
                message: {},
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/on_search`, jobSchemaConstructer, config);
            return (0, schema_helper_1.onSearchResponseBuilder)(bppResp);
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.getJobOnSearch = getJobOnSearch;
function getJobConfirm(postBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.contextOnSearch)('jobs', 'confirm', postBody.transaction_id, postBody.message_id);
            const message = (0, schema_helper_1.confirmMessageBuilder)(postBody);
            const jobSchemaConstructer = {
                context,
                message
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/confirm`, jobSchemaConstructer, config);
            return bppResp;
        }
        catch (error) {
            console.error(error);
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.getJobConfirm = getJobConfirm;
function searchJob(postBody) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.searchContextBuilder)("jobs", "search");
            const message = (0, schema_helper_1.searchJobMessageBuilder)(postBody);
            const jobSchemaConstructer = {
                context,
                message,
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/search`, jobSchemaConstructer, config);
            return { context: { transaction_id: jobSchemaConstructer.context.transaction_id, message_id: jobSchemaConstructer.context.message_id }, network: bppResp.data, };
        }
        catch (error) {
            console.error(error);
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.searchJob = searchJob;
function selectJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const requestBody = (0, schema_helper_1.buildSelectRequest)(body);
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/select`, requestBody, config);
            return { network: bppResp.data, context: requestBody === null || requestBody === void 0 ? void 0 : requestBody.context };
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.selectJob = selectJob;
function initJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.searchContextBuilder)("jobs", "init");
            const message = (0, schema_helper_1.initJobMessageBuilder)(body);
            const jobSchemaConstructer = {
                context,
                message,
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/init`, jobSchemaConstructer, config);
            return { network: bppResp.data, transiction_id: jobSchemaConstructer.context.transaction_id, message_id: jobSchemaConstructer.context.message_id };
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.initJob = initJob;
function onInitJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.searchContextBuilder)("jobs", "on_init");
            const message = (0, schema_helper_1.onInitJobMessageBuilder)(body);
            const jobSchemaConstructer = {
                context,
                message,
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/on_init`, jobSchemaConstructer, config);
            return { network: bppResp.data, transiction_id: jobSchemaConstructer.context.transaction_id, message_id: jobSchemaConstructer.context.message_id };
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.onInitJob = onInitJob;
function onSelectJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.searchContextBuilder)("jobs", "on_select");
            const message = (0, schema_helper_1.onSelectJobMessageBuilder)(body);
            const jobSchemaConstructer = {
                context,
                message,
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/on_select`, jobSchemaConstructer, config);
            return { network: bppResp.data, transiction_id: jobSchemaConstructer.context.transaction_id, message_id: jobSchemaConstructer.context.message_id };
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.onSelectJob = onSelectJob;
function onConfirmJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const context = (0, helper_1.searchContextBuilder)("jobs", "on_confirm");
            const message = (0, schema_helper_1.onConfirmMessageBuilder)(body);
            const jobSchemaConstructer = {
                context,
                message,
            };
            const config = {
                headers: {
                    "Content-Type": "application/JSON",
                },
            };
            let bppResp = yield axios_1.default.post(`${gatewayUrl}/on_confirm`, jobSchemaConstructer, config);
            return { network: bppResp.data, transiction_id: jobSchemaConstructer.context.transaction_id, message_id: jobSchemaConstructer.context.message_id };
        }
        catch (error) {
            return {
                error: error,
                errorOccured: true,
            };
        }
    });
}
exports.onConfirmJob = onConfirmJob;

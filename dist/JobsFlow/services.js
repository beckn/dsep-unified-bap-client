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
exports.onConfirmJob = exports.confirmJob = exports.onInitJob = exports.initJob = exports.onSelectJob = exports.selectJob = exports.onSearchJob = exports.searchJob = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const schema_helper_1 = require("./schema_helper");
const onSelectResponse_json_1 = __importDefault(require("./mock/onSelectResponse.json"));
const onSearchResponse_json_1 = __importDefault(require("./mock/onSearchResponse.json"));
const onInitResponse_json_1 = __importDefault(require("./mock/onInitResponse.json"));
const onConfirmResponse_json_1 = __importDefault(require("./mock/onConfirmResponse.json"));
dotenv_1.default.config();
const gatewayUrl = process.env.GATEWAY_URL || "";
const localNetwork = process.env.JOB_NETWORK;
function searchJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildSearchRequest)(body);
            console.log(JSON.stringify(payload));
            let response = onSearchResponse_json_1.default;
            if (localNetwork != 'local') {
                const headers = { "Content-Type": "application/JSON" };
                let res = yield axios_1.default.post(`${gatewayUrl}/search`, payload, { headers });
                response = res === null || res === void 0 ? void 0 : res.data;
            }
            return (0, schema_helper_1.buildSearchResponse)(response, body);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.searchJob = searchJob;
function onSearchJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildOnSearchRequest)(body);
            const headers = { "Content-Type": "application/JSON" };
            let response = yield axios_1.default.post(`${gatewayUrl}/on_search`, payload, { headers });
            return (0, schema_helper_1.buildOnSearchResponse)(response === null || response === void 0 ? void 0 : response.data, body);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.onSearchJob = onSearchJob;
function selectJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildSelectRequest)(body);
            console.log(JSON.stringify(payload));
            let response = onSelectResponse_json_1.default;
            if (localNetwork != 'local') {
                const headers = { "Content-Type": "application/JSON" };
                let res = yield axios_1.default.post(`${gatewayUrl}/select`, payload, { headers });
                response = res === null || res === void 0 ? void 0 : res.data;
            }
            return (0, schema_helper_1.buildSelectResponse)(response, body);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.selectJob = selectJob;
function onSelectJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildOnSelectRequest)(body);
            const headers = { "Content-Type": "application/JSON" };
            let response = yield axios_1.default.post(`${gatewayUrl}/on_select`, payload, { headers });
            return (0, schema_helper_1.buildOnSelectResponse)(response === null || response === void 0 ? void 0 : response.data, body);
        }
        catch (error) {
            return { error: error, errorOccured: true, };
        }
    });
}
exports.onSelectJob = onSelectJob;
function initJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildInitRequest)(body);
            console.log(JSON.stringify(payload));
            let response = onInitResponse_json_1.default;
            if (localNetwork != 'local') {
                const headers = { "Content-Type": "application/JSON" };
                let res = yield axios_1.default.post(`${gatewayUrl}/init`, payload, { headers });
                response = res.data;
            }
            return (0, schema_helper_1.buildInitResponse)(response);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.initJob = initJob;
function onInitJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildOnInitRequest)(body);
            const headers = { "Content-Type": "application/JSON" };
            let response = yield axios_1.default.post(`${gatewayUrl}/on_init`, payload, { headers });
            return (0, schema_helper_1.buildOnInitResponse)(response === null || response === void 0 ? void 0 : response.data);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.onInitJob = onInitJob;
function confirmJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('aiia');
            const { payload } = (0, schema_helper_1.buildConfirmRequest)(body);
            console.log(JSON.stringify(payload));
            let response = onConfirmResponse_json_1.default;
            if (localNetwork != 'local') {
                const headers = { "Content-Type": "application/JSON" };
                let res = yield axios_1.default.post(`${gatewayUrl}/confirm`, payload, { headers });
                response = res.data;
            }
            return (0, schema_helper_1.buildConfirmResponse)(response);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.confirmJob = confirmJob;
function onConfirmJob(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = (0, schema_helper_1.buildOnConfirmRequest)(body);
            const headers = { "Content-Type": "application/JSON" };
            let response = yield axios_1.default.post(`${gatewayUrl}/on_confirm`, payload, { headers });
            return (0, schema_helper_1.buildOnConfirmResponse)(response.data);
        }
        catch (error) {
            return { error: error, errorOccured: true };
        }
    });
}
exports.onConfirmJob = onConfirmJob;
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
exports.jobSearchController = void 0;
const schema_1 = require("./schema");
const services_1 = require("./services");
const jobSearchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(">>req.body::", req.body);
    const mappedRequest = schema_1.JobDTO.toJobRequest(req.body);
    console.log(">>req  mappedReq ::", mappedRequest);
    const response = yield (0, services_1.getJob)(mappedRequest);
    console.log(">> resp  mappedReq ::", response);
    // get ACK URL and hit on_{api_call} again.
    // before hitting, mappedRequest.transaction_id = {transactino_id}
    // const response = await getOnSearch(api_url, mappedRequest);
    // 
    const mappedResponse = schema_1.JobDTO.toJobResponse(response);
    // 
    res.send(mappedResponse);
});
exports.jobSearchController = jobSearchController;
// app.post() 

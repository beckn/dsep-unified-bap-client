"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDTO = void 0;
class JobDTO {
    static toJobResponse(data) {
        return {
            id: 'some ID',
            // custom_status: data.message.ack.status
            custom_status: "custom status"
        };
    }
    static toJobRequest(data) {
        let request = {
            context: {
                country: "custom country",
                domain: "custom domain",
                city: "custom city",
                action: "custom action",
                core_version: "custom version",
                bap_id: "custom bap_id",
                transaction_id: "custom transaction_id",
                message_id: "custom message_id",
                timestamp: 'custom timestamp',
                bap_uri: 'custom bap_uri'
            },
            message: {
                "intent": {
                    "item": {
                        "descriptor": {
                            "name": 'custom name'
                        }
                    }
                }
            }
        };
        /**
         *
         * if (data.provider_name){
         *  req.context.provider = data.provider_name
         * }
         *
         *
         * if (data.gender){
         *  req.message.intent.item.desc...gender = data.gender
         * }
         *
         *
         */
        return request;
    }
}
exports.JobDTO = JobDTO;

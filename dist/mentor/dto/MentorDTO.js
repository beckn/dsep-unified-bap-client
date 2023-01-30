"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorDTO = void 0;
class MentorDTO {
    static toMentorResponse(data) {
        return {
            id: 'some ID',
            custom_status: data.message.ack.status,
        };
    }
    static toMentorRequest(data) {
        let request = {
            context: {
                domain: "custom domain",
                country: "custom country",
                city: "custom city",
                action: "custom action",
                bap_id: "custom bap_id",
                bap_uri: "custom bap_uri",
                timestamp: "custom timestamp",
                message_id: "custom message_id",
                core_version: "custom core_version",
                ttl: "custom ttl",
                transaction_id: "custom transcation_id"
            },
            message: {
                "intent": {
                    "item": {
                        "descriptor": {
                            "name": "custom search"
                        }
                    }
                }
            }
        };
        return request;
    }
}
exports.MentorDTO = MentorDTO;

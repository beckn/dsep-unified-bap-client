import { JobRequestDto } from './job.interface'

export class JobDTO {
    // static toJobResponse(data: any): JobResponseDto {
    static toJobResponse(data: any)  {
        return {
            id: 'some ID',
            // custom_status: data.message.ack.status,
            custom_status:"202"
        };
    }

    static toJobRequest(data: any) {
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
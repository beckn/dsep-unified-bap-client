export interface MentorRequestDto{
    "context": MentorContextDTO,

    "message": {
        "intent": {
            "item": {
                "descriptor": {
                    "name": String
                }
            }
        }
    }
}

export interface MentorContextDTO {
    "domain": String,
    "country": String,
    "city": String,
    "action": String,
    "bap_id": String,
    "bap_uri": String,
    "timestamp": String,
    "message_id": String,
    "core_version": String,
    "ttl": String,
    "transaction_id": String
}


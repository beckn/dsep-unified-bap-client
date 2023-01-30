export interface ScholarshipDTO{
    "context": ScholarshipContextDTO,

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

export interface ScholarshipContextDTO{
    "domain": String,
    "country": String,
    "city": String,
    "action": String,
    "core_version": String,
    "bap_id": String,
    "bap_uri": String,
    "transaction_id": String,
    "message_id": String,
    "timestamp": String
}
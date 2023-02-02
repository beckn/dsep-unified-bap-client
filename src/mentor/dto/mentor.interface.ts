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

//Search
export interface MentorSearchRequestDto{
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

//Init
export interface MentorInitRequestDto{
    "context": MentorContextDTO,
    "message": {
        "order": {
            "items": [
                {
                    "id": String
                }
            ],
            "fulfillments": [
                {
                    "id": String
                }
            ],
            "billing": {
                "name": String,
                "phone": String,
                "email": String,
                "time": {
                    "timezone": String
                }
            }
        }
    }
}

//Select
export interface MentorSelectRequestDto{
    "context": MentorContextDTO,
    "message": {
        "order": {
            "item": {
                "id": String
            }
        }
    }
}

//Confirm
export interface MentorConfirmRequestDto{
    "context": MentorContextDTO,
    "message": {
        "order": {
            "items": [
                {
                    "id": String
                }
            ],
            "fulfillments": [
                {
                    "id": String
                }
            ],
            "billing": {
                "name": String,
                "phone": String,
                "email": String,
                "time": {
                    "timezone": String
                }
            }
        }
    }
}

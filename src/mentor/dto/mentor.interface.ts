@dto()
export class MentorContextDTO {

    @include()
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
@dto()
export class MentorSearchRequestDto {

    @include()
    @nested(
        () => MentorContextDTO,
        false /* Set to true if this is an array otherwise false */
    )
    "context": MentorContextDTO;

    @include()
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
@dto()
export class orderItemsDto{
    @include()
    "id": String
}

@dto()
export class orderFulfillmentsDto{
    @include()
    "id": String
}

@dto()
export class orderBillingDto{
    @include()
    "name": String,
    "phone": String,
    "email": String,
    "time": {
        "timezone": String
    }
}

@dto()
export class MentorInitRequestDto {

    @include()
    @nested(
        () => MentorContextDTO,
        false 
    )
    "context": MentorContextDTO;

    @include()
    "message": {
        "order": {
            "items":
                @include
                @nested(
                    () => orderItemsDto,
                    true
                )
                "items": orderItemsDto;

                @include
                @nested(
                    () => orderFulfillmentsDto,
                    true
                )
                "fulfillments": orderFulfillmentsDto;

                @include
                @nested(
                    () => orderBillingDto,
                    false
                )
                "billing": orderBillingDto;
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


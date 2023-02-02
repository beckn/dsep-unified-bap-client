import { MentorSearchRequestDto } from './mentor.interface'
export class MentorDTO {

    static toMentorSearchRequest(data: any): any {
        return{
            let mentorSearchRequestResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    intent: {
                        item: {
                            descriptor: {
                                name: data.message.intent.item.descriptor.name
                            }
                        }
                    }
                }
            }
            return mentorSearchRequestResult
        }
    }

    static toMentorInitRequest(data: any): any {
        return{
            let mentorInitRequestResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    order: {
                        items: [
                            {
                                id: data.message.order.items.id
                            }
                        ],
                        fulfillments: [
                            {
                                id: data.message.order.fulfillments.id
                            }
                        ],
                        billing: {
                            name: data.message.order.billing.name,
                            phone: data.message.order.billing.phone,
                            email: data.message.order.billing.email,
                            time: {
                                timezone: data.message.order.billing.time.timezone
                            }
                        }
                    }
                }
            };
            return mentorInitRequestResult;
        }
    }

    static toMentorSelectRequest(data: any): any {
        return{
            let mentorSelectRequestResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    order: {
                        item: {
                            id: data.message.order.item.id
                        }
                    }
                }
            };
            return mentorSelectRequestResult;
        }
    }

    static toMentorConfirmRequest(data: any): any {
        return{
            let mentorConfirmRequestResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    order: {
                        items: [
                            {
                                id: data.message.order.items.id
                            }
                        ],
                        fulfillments: [
                            {
                                id: data.message.order.fulfillments.id
                            }
                        ],
                        billing: {
                            name: data.message.order.billing.name,
                            phone: data.message.order.billing.phone,
                            email: data.message.order.billing.email,
                            time: {
                                timezone: data.message.order.billing.time.timezone
                            }
                        }
                    }
                }
            };
            return mentorConfirmRequestResult;
        }
    }

    static toMentorSearchResponse(data: any)  {
        return {
            context: {
                domain: data.context.domain,
                country: data.context.country,
                city: data.context.city,
                action: data.context.action,
                bpp_id: data.context.bpp_uri,
                bpp_uri: data.context.bpp_uri,
                timestamp: data.context.timestamp,
                transaction_id: data.context.transaction_id,
                message_id: data.context.message_id
            },
            message: {
                catalog: {
                    providers: [
                        {
                            categories: [
                                {
                                    id: data.message.catalog.providers[0].categories[0].id,
                                    descriptor: {
                                        code: data.message.catalog.providers.categories.descriptor.code,
                                        name: data.message.catalog.providers.categories.descriptor.name
                                    }
                                }
                            ]
                        }
                    ]
                }    
            }    
        }
    }

    static toMentorInitResponse(data: any): any {
        return{
            let mentorInitResponseResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    order: {
                        id: data.message.order.id
                    }
                }                  
            };
            return mentorInitResponseResult;
        }
    }

    static toMentorSelectResponse(data: any): any {
        return{
            let mentorSelectResponseResult = {
                context: {
                    domain: data.context.domain,
                    country: data.context.country,
                    city: data.context.city,
                    action: data.context.action,
                    bap_id: data.context.bap_id,
                    bap_uri: data.context.bap_uri,
                    timestamp: data.context.timestamp,
                    message_id: data.context.message_id,
                    core_version: data.context.core_version,
                    ttl: data.context.ttl,
                    transaction_id: data.context.transaction_id
                },
                message: {
                    order: {
                        provider: {
                            categories: [{
                                id: "Educational Leadership",
                                descriptor: {
                                    code: "Educational Leadership",
                                    name: "Educational Leadership"
                                }
                            }]
                        }
                    }
                }          
            };
            return mentorSelectResponseResult;
        }
    }
  
} 
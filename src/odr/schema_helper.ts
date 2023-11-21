import moment from "moment";
import { v4 as uuid } from "uuid";
export const buildContext = (input: any = {}) => {
    return {
        domain: input?.domain,
        action: input?.action ?? "",
        // location: { city: { code: process.env.CITY || (input?.city ?? "") }, country: { code: process.env.COUNTRY || (input?.country ?? "") } },
        version: process.env.CORE_VERSION || (input?.core_version ?? ""),
        bap_id: process.env.BAP_ID ?? input?.bapId,
        bap_uri: process.env.BAP_URI ?? input?.bapUri,
        bpp_id: input?.bppId,
        bpp_uri: input?.bppUri,
        transaction_id: input?.transactionId ?? uuid(),
        message_id: input?.messageId ?? uuid(),
        timestamp: input.timestamp ?? moment().toISOString(),
        ttl: "P1M"
    };
};


export const buildSearchRequest = (input: any = {}) => {
    const context = buildContext({ domain: input?.context?.domain, action: "search" });
    const intent: any = {};
    const optional: any = {};
    if (input?.searchString) {
        intent.item = { descriptor: { name: input?.searchString } };
    }

    if (input?.category) {
        intent.category = { descriptor: { name: input?.category?.categoryName } };
    }

    const message = { intent: intent };
    console.log("message", message);
    return { payload: { context, message }, optional };
};

export const buildSelectRequest = (input: any = {}) => {
    const context = buildContext({
        category: "jobs",
        action: "select",
        bppId: input?.context?.bppId,
        bppUri: input?.context?.bppUri,
        transactionId: input?.context?.transactionId
    });
    const message = {
        order: {
            provider: { id: input?.companyId },
            items: [{ id: input?.jobs?.jobId }]
        }
    };

    return { payload: { context, message } };
};

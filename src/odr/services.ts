import axiosInstance from "axios";
import dotenv from "dotenv";
import https from "https";
import {
    buildSelectRequest,
    buildSearchRequest,

} from "./schema_helper";
dotenv.config();
const gatewayUrl = process.env.GATEWAY_URL || "";
const jobNetwork = process.env.JOB_NETWORK;
const backendApiUrl = process.env.BACKEND_API_BASE_URL;

const axios = axiosInstance.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

export async function searchOdr(body: any): Promise<any> {
    try {
        const { payload } = buildSearchRequest(body);
        console.log(JSON.stringify(payload));
        const headers = { "Content-Type": "application/JSON" };
        const searchRes = await axios.post(`${gatewayUrl}/search`, payload, {
            headers
        });

        return { data: searchRes?.data?.responses };
    } catch (error) {
        console.log(error);
        return { error: JSON.stringify(error), errorOccured: true };
    }
}


export async function selectOdr(body: any): Promise<any> {
    try {
        const { payload } = buildSelectRequest(body);
        console.log(JSON.stringify(payload));


        const headers = { "Content-Type": "application/JSON" };
        let res = await axios.post(`${gatewayUrl}/select`, payload, { headers });


        return res;
    } catch (error: any) {
        return { error: error, errorOccured: true };
    }
}

import axios from "axios";
import {
  buildSearchRequest,
  buildOnSearchMergedResponse,
  buildSearchResponse,
  buildInitRequest,
  buildInitResponse,
  buildConfirmRequest,
  buildConfirmResponse,
  buildStatusRequest,
  buildStatusResponse,
  buildSelectRequest,
  buildSelectResponse,
  buildCancelRequest,
  buildCancelResponse,
  buildTrackRequest,
  buildTrackResponse,
  buildSupportRequest,
  buildSupportResponse,
  buildRatingRequest,
  buildRatingResponse
} from "./schema-build-helper";
import searchTrainingResponse from "./mocks/searchTrainingResponse.json";
import initTrainingResponse from "./mocks/initTrainingResponse.json";
import confirmTrainingResponse from "./mocks/confirmTrainingResponse.json";
import selectTrainingResponse from "./mocks/selectTrainingResponse.json";
import cancelTrainingResponse from "./mocks/cancelTrainingResponse.json";


const gatewayUrl = process.env.GATEWAY_URL;
const trainingNetwork = process.env.TRAINING_NETWORK;
const backendApiUrl = process.env.BACKEND_API_BASE_URL;

export const searchTrainingService = async (body: any): Promise<any> => {
  try {
    const { payload, optional } = buildSearchRequest(body);
    console.log(JSON.stringify(payload));

    let searchResponse: any = {};
    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      const searchRes = await axios.post(`${gatewayUrl}/search`, payload, { headers });
      const itemRes = await Promise.all([
        optional?.user?.email ? axios.get(`${backendApiUrl}/user/item/saved/${optional.user.email}`, { headers }) : null,
        optional?.user?.email ? axios.get(`${backendApiUrl}/user/item/applied/${optional.user.email}`, { headers }) : null
      ]).then(res => res).catch(err => null);
      const res = { searchRes, itemRes };
      searchResponse = buildOnSearchMergedResponse(res, body);
    } else {
      searchResponse = buildSearchResponse({ data: searchTrainingResponse }, body);
    }

    return searchResponse;
  } catch (error: any) {
    console.log(error);
    return { error: error, errorOccured: true };
  }
};

export const initTrainingService = async (body: any): Promise<any> => {
  try {
    const initRequest = buildInitRequest(body);
    console.log(JSON.stringify(initRequest.payload));

    let initResponse: any = {};
    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(`${gatewayUrl}/init`, initRequest.payload, { headers });
      initResponse = buildInitResponse(res, body);
    } else {
      initResponse = buildInitResponse({ data: initTrainingResponse }, body);
    }

    return initResponse;
  } catch (error: any) {
    console.log(JSON.stringify(error?.response?.data));
    return { error: error, errorOccured: true };
  }
};

export const confirmTrainingService = async (body: any): Promise<any> => {
  try {
    const confirmRequest = buildConfirmRequest(body);
    console.log(JSON.stringify(confirmRequest.payload));

    let confirmResponse: any = {};
    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/confirm`,
        confirmRequest.payload,
        { headers }
      );
      confirmResponse = buildConfirmResponse(res, body);
    } else {
      confirmResponse = buildConfirmResponse({ data: confirmTrainingResponse }, body);
    }

    return confirmResponse;
  } catch (error) {
    console.log(error);
    return { error: error, errorOccured: true };
  }
};

export const statusTrainingService = async (body: any): Promise<any> => {
  try {
    const statusRequest = buildStatusRequest(body);
    console.log(JSON.stringify(statusRequest.payload));

    let statusResponse: any = {};
    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/search`,
        statusRequest.payload,
        { headers }
      );
      statusResponse = buildStatusResponse(res?.data, body);
    } else {
      statusResponse = buildStatusResponse(selectTrainingResponse, body);
    }

    return { data: statusResponse };
  } catch (error) {
    return { error: error, errorOccured: true };
  }
};

export const selectTrainingService = async (body: any): Promise<any> => {
  try {
    const selectRequest = buildSelectRequest(body);
    console.log(JSON.stringify(selectRequest.payload));

    let selectResponse: any = {};
    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/select`,
        selectRequest.payload,
        { headers }
      );
      selectResponse = buildSelectResponse(res, body);
    } else {
      selectResponse = buildSelectResponse({ data: selectTrainingResponse }, body);
    }

    return selectResponse;
  } catch (error: any) {
    console.log(error);
    return { error: error, errorOccured: true };
  }
};
export const cancelTrainingService = async (body: any): Promise<any> => {
  try {
   
    const cancelRequest = buildCancelRequest(body);
    console.log(JSON.stringify(cancelRequest));

    let cancelResponse: any = {};

    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/cancel`,
        cancelRequest.payload,
        { headers }
      );
      cancelResponse = buildCancelResponse(res?.data, body);
    } else {
      cancelResponse = buildCancelResponse(cancelTrainingResponse, body);
    }
    return { data: cancelResponse };
  } catch (error) {
    return { error: error, errorOccured: true };
  }
};

export const trackTrainingService = async (body: any): Promise<any> => {
  try {
    const trackRequest = buildTrackRequest(body);
    console.log(JSON.stringify(trackRequest));

    let trackResponse: any = {};

    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(`${gatewayUrl}/track`, trackRequest.payload, {
        headers
      });
      trackResponse = buildTrackResponse(res?.data);
    } else {
      trackResponse = buildTrackResponse(cancelTrainingResponse);
    }
    return { data: trackResponse };
  } catch (error) {
    return { error: error, errorOccured: true };
  }
};

export const ratingTrainingService = async (body: any): Promise<any> => {
  try {
    const ratingRequest = buildRatingRequest(body);
    console.log(JSON.stringify(ratingRequest));

    let ratingResponse: any = {};

    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/rating`,
        ratingRequest.payload,
        {
          headers
        }
      );
      ratingResponse = buildRatingResponse(res?.data);
    } else {
      ratingResponse = buildRatingResponse(cancelTrainingResponse);
    }
    return { data: ratingResponse };
  } catch (error: any) {
    return { error: error, errorOccured: true };
  }
};
export const supportTrainingService = async (body: any): Promise<any> => {
  try {
    const supportRequest = buildSupportRequest(body);
    console.log(JSON.stringify(supportRequest));

    let supportResponse: any = {};

    if (trainingNetwork !== "local") {
      const headers = { "Content-Type": "application/JSON" };
      let res = await axios.post(
        `${gatewayUrl}/support`,
        supportRequest.payload,
        {
          headers
        }
      );
      supportResponse = buildSupportResponse(res?.data);
    } else {
      supportResponse = buildSupportResponse(cancelTrainingResponse);
    }
    return { data: supportResponse };
  } catch (error) {
    return { error: error, errorOccured: true };
  }
};

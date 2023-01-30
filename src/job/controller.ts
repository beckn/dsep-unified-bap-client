import { Response, Request } from 'express';
import { app } from '../index';
import { JobDTO } from './dto/JobDTO';
import { getJob } from './services';

export const jobSearchController = async (req: Request, res: Response) => {
  console.log(">>req.body::",req.body)

  const mappedRequest = JobDTO.toJobRequest(req.body)
  console.log(">>req MappedReq ::",mappedRequest)

  const response = await getJob(mappedRequest);
  console.log(">>resp  mappedReq ::",response)

  // get ACK URL and hit on_{api_call} again.
  // before hitting, mappedRequest.transaction_id = {transaction_id}
  // const response = await getOnSearch(api_url, mappedRequest);
  // 

  const mappedResponse = JobDTO.toJobResponse(response)
  res.send(mappedResponse)
}

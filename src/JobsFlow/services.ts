import axios from 'axios';
import { JobDTO } from "./schema";

export async function getJob(jobDTO: JobDTO): Promise<any> {
    const result = await axios.post('https://45e6-103-154-203-92.in.ngrok.io ', jobDTO);
        console.log("Response>>",result.data);
        return result.data;
}


import axios from 'axios';
import { JobRequestDto } from './dto/job.interface';

// export async function getJob(jobDTO: JobRequestDto): Promise<any> {
export async function getJob(jobDTO: any): Promise<any> {
    try{
    const result = await axios.post('https://gateway.becknprotocol.io/bg/search', jobDTO)
    console.log(">>Response",result)
    return result;
    }catch (error) {
        console.error(error);
    }
}


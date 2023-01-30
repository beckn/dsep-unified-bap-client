import axios from 'axios';

export async function getJob(jobDTO: any): Promise<any> {
    try{
        const result = await axios.post('http://localhost:3000/search', jobDTO)
        console.log(">>Response",result)
        return result;
    }catch (error) {
        console.error(error);
    }
}


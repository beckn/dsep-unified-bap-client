import axios from 'axios';

export async function getMentorSearch(mentorSearchDTO: any): Promise<any> {
    try{
        const mentorSearchResult = await axios.post('https://65b6-103-154-203-92.in.ngrok.io/search', mentorSearchDTO)
        console.log(">>ACK Response from protocol server",mentorSearchResult)
        return mentorSearchResult;
    }catch (error) {
        console.error(error);
    }
}

export async function getMentorInit(mentorInitDTO: any): Promise<any> {
    try{
        const mentorInitResult = await axios.post('https://65b6-103-154-203-92.in.ngrok.io', mentorInitDTO)
        console.log(">>ACK Response from protocol server",mentorInitResult)
        return mentorInitResult;
    }catch (error) {
        console.error(error);
    }
}

export async function getMentorSelect(mentorSelectDTO: any): Promise<any> {
    try{
        const mentorSelectResult = await axios.post('https://65b6-103-154-203-92.in.ngrok.io', mentorSelectDTO)
        console.log(">>ACK Response from protocol server",mentorSelectResult)
        return mentorSelectResult;
    }catch (error) {
        console.error(error);
    }
}

export async function getMentorConfirm(mentorConfirmDTO: any): Promise<any> {
    try{
        const mentorConfirmResult = await axios.post('https://65b6-103-154-203-92.in.ngrok.io', mentorConfirmDTO)
        console.log(">>ACK Response from protocol server",mentorConfirmResult)
        return mentorConfirmResult;
    }catch (error) {
        console.error(error);
    }
}




import { Response, Request } from 'express';
import { MentorDTO } from './dto/MentorDTO';
import { getMentorSearch, getMentorInit, getMentorSelect, getMentorConfirm } from './services';

export const mentorSearchController = async (req: Request, res: Response) => {

  const mappedMentorSearchRequest = MentorDTO.toMentorSearchRequest(req.body)
  const mentorSearchResponse = await getMentorSearch(mappedMentorSearchRequest);
  const mappedMentorSearchResponse = MentorDTO.toMentorSearchResponse(mentorSearchResponse)
  res.send(mappedMentorSearchResponse)
}

export const mentorInitController = async (req: Request, res: Response) => {
    
      const mappedMentorInitRequest = MentorDTO.toMentorSearchRequest(req.body)
      const mentorInitResponse = await getMentorInit(mappedMentorInitRequest);
      const mappedMentorInitResponse = MentorDTO.toMentorInitResponse(mentorInitResponse)
      res.send(mappedMentorInitResponse)
    
}

export const mentorSelectController = async (req: Request, res: Response) => {
    
    const mappedMentorSelectRequest = MentorDTO.toMentorSelectRequest(req.body)
    const mentorSelectResponse = await getMentorSelect(mappedMentorSelectRequest);
    const mappedMentorSelectResponse = MentorDTO.toMentorSelectResponse(mentorSelectResponse)
    res.send(mappedMentorSelectResponse)
  
}

export const mentorConfirmController = async (req: Request, res: Response) => {
    
    const mappedMentorConfirmRequest = MentorDTO.toMentorConfirmRequest(req.body)
    const mentorConfirmResponse = await getMentorConfirm(mappedMentorConfirmRequest);
    const mappedMentorConfirmResponse = MentorDTO.toMentorConfirmResponse(mentorConfirmResponse)
    res.send(mappedMentorConfirmResponse)
  
}

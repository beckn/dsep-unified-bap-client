import { UserDto } from './mentor.interface'
export class MentorDTO {

    static toMentorSearchRequest(data: any): any {
        return{
            const searchMapper = buildMapper(MentorSearchRequestDto);
            const searchSerialized = searchMapper.serialize(data);
        }
    }

    static toMentorInitRequest(data: any): any {
        return{
            const initMapper = buildMapper(MentorSearchRequestDto);
            const initSerialized = initMapper.serialize(data);
        }
    }
} 
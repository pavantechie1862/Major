import { ClubInformation } from "./clubInformation.model";
import { Messages } from "./messages.model";

export class clubHistory {
    clubId:string;
    clubInformation:ClubInformation;
    messages:Messages[];
    constructor(clubId:string,clubInformation:ClubInformation,messages:Messages[]) {
        this.clubId=clubId;
        this.clubInformation=clubInformation;
        this.messages=messages;
    }
}
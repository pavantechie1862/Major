import { ClubDescription } from "./clubDescription.model";
import { ClubParticipants } from "./clubParticipant.model";
import { ClubRequest } from "./clubRequest.model";

export class GroupInfo {
    clubId?:string;
    clubDescription:ClubDescription;
    clubParticipants:ClubParticipants[];
    clubRequests:ClubRequest[];
    constructor(clubDescription:ClubDescription,clubParticipants:ClubParticipants[],clubRequests:ClubRequest[]) {
        this.clubDescription=clubDescription;
        this.clubParticipants=clubParticipants;
        this.clubRequests=clubRequests;
    }
}
import { Role } from "../enums/role";

export class ClubParticipants {
    participantId: string;
    participantName: string;
    participantEmail:string;
    participantRole: Role;
    isActive: boolean;
    isBlocked: boolean;
    constructor(participantId: string,participantName: string,participantEmail:string,participantRole: number,isActive: boolean,isBlocked: boolean) {
        this.participantEmail=participantEmail;
        this.participantId=participantId;
        this.participantName=participantName;
        this.participantRole=participantRole;
        this.isActive=isActive;
        this.isBlocked=isBlocked;
    }
}


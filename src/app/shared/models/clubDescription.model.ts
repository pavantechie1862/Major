import { ClubType } from "../enums/clubType";

export class ClubDescription {
    clubName: string;
    description: string;
    clubProfilePicture:string;
    clubType: ClubType;
    clubCreatedBy:string;
    clubCreatedOn: string;
    clubParticipantsCount: number;
    isMuted: boolean;
    constructor(clubName: string,description: string,clubProfilePicture:string,clubType: ClubType,clubCreatedBy:string,clubCreatedOn: string,clubParticipantsCount: number,isMuted: boolean) {
        this.clubName=clubName;
        this.description=description;
        this.clubProfilePicture=clubProfilePicture;
        this.clubType=clubType;
        this.clubCreatedBy=clubCreatedBy;
        this.clubCreatedOn=clubCreatedOn;
        this.clubParticipantsCount=clubParticipantsCount;
        this.isMuted=isMuted
    }
}
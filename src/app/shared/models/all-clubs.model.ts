import { ClubType } from "../enums/clubType";
export class club {
    clubId:string;
    clubName:string;
    description:string;
    clubCreatedBy:string;
    clubCreatedOn:string;
    clubParticipantsCount:number;
    clubProfilePicture:string;
    clubType:ClubType;
    isClubMember:boolean;
    isRequested:boolean;
    constructor(clubId:string,clubName:string,description:string,clubCreatedBy:string,clubCreatedOn:string,clubParticipantsCount:number,clubProfilePicture:string,clubType:ClubType,isClubMember:boolean,isRequested:boolean) {
        this.clubId=clubId;
        this.clubName=clubName;
        this.description=description;
        this.clubCreatedBy=clubCreatedBy;
        this.clubCreatedOn=clubCreatedOn;
        this.clubParticipantsCount=clubParticipantsCount;
        this.clubProfilePicture=clubProfilePicture;
        this.clubType=clubType;
        this.isClubMember=isClubMember;
        this.isRequested=isRequested;
    }
}
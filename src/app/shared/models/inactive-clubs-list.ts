import { ClubType } from "../enums/clubType";

export class InactiveClub {
    id?:string;
    clubTitle:string;
    clubDescription:string;
    createdBy:string;
    createdOn:Date;
    clubType:ClubType;
    deactivatedBy:string;
    deactivatedOn:string;
    reason:string;
    constructor(clubTitle:string,clubDescription:string,createdBy:string,createdOn:Date,clubType:ClubType,deactivatedBy:string,deactivatedOn:string,reason:string) {
        this.clubTitle=clubTitle;
        this.clubDescription=clubDescription;
        this.createdBy=createdBy;
        this.createdOn=createdOn;
        this.clubType=clubType;
        this.deactivatedBy=deactivatedBy;
        this.deactivatedOn=deactivatedOn;
        this.reason=reason;
    }
}
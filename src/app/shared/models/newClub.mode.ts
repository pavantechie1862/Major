import { ClubType } from "../enums/clubType";
import { clubMember } from "./clubMember.model";

export class NewClub {
    clubId?:string;
    name:string;
    description:string;
    profilePicture:string;
    clubType:ClubType;
    clubAdmins?:clubMember[];
    clubMembers?:clubMember[];
    constructor( name:string,description:string,profilePicture:string,clubType:ClubType,clubAdmins:clubMember[],clubMembers:clubMember[]) {
        this.name=name;
        this.description=description;
        this.profilePicture=profilePicture;
        this.clubType=clubType;
        this.clubAdmins=clubAdmins;
        this.clubMembers=clubMembers;
    }
}
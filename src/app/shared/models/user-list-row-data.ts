import { Role } from "../enums/role";
import { userStatus } from "../enums/userStatus";

export class UserListData {
    id?:string;
    userName:string;
    userEmail:string;
    userMobile:number;
    addedBy:string;
    addedOn:Date;
    userStatus:userStatus;
    userRole:Role;
    activeClubs:number;
    constructor(userName:string,userEmail:string,userMobile:number,addedBy:string,addedOn:Date,userStatus:userStatus,userRole:Role,activeClubs:number){
        this.userName=userName;
        this.userEmail=userEmail;
        this.userMobile=userMobile;
        this.addedBy=addedBy;
        this.addedOn=addedOn;
        this.userStatus=userStatus;
        this.userRole=userRole;
        this.activeClubs=activeClubs;
    }
}
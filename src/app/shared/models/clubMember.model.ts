export class  clubMember {
    userId?:string;
    userName:string;
    userJobTitle?:string;
    userProfilePicture?:string;
    constructor(userId:string,userName:string,userJobTitle:string,userProfilePicture:string) {
        this.userId=userId;
        this.userName=userName;
        this.userJobTitle=userJobTitle;
        this.userProfilePicture=userProfilePicture;
    }
}


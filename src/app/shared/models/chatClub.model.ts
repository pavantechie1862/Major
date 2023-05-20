export class clubList {
    recieverId!:string;
    recieverName:string;
    lastMessageUserId:string;
    lastMessageUserName:string;
    lastMessage:string;
    lastMessageTime:string;
    profilePicture:string;
    unseenMessageCount:number;
    isUserFavorite:boolean;
    constructor(clubName:string,lastMessageUserId:string,lastMessageUserName:string,lastMessage:string,lastMessageTime:string,profilePicture:string,unseenMessageCount:number,isUserFavorite:boolean) {
        this.recieverName=clubName;
        this.lastMessageUserId=lastMessageUserId;
        this.lastMessageUserName=lastMessageUserName
        this.lastMessage=lastMessage;
        this.lastMessageTime=lastMessageTime;
        this.profilePicture=profilePicture;
        this.unseenMessageCount=unseenMessageCount;
        this.isUserFavorite=isUserFavorite;
    }
}



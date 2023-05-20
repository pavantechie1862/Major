import { RequestStatus } from "../enums/requestStatus";

export class ChatUser {
    receiverId:string;
    receiverName:string;
    lastMessage:string;
    lastAttachment:string;
    lastMessageUserName:string;
    lastMessageTime:string;
    profilePicture:string;
    unseenMessageCount:number;
    isUserFavorite:boolean;
    requestStatus:RequestStatus;
    requestedBy:string;
    constructor(receiverId:string,receiverName:string,lastMessage:string,lastAttachment:string,lastMessageUserName:string,lastMessageTime:string,profilePicture:string,unseenMessageCount:number,isUserFavorite:boolean,requestStatus:RequestStatus,requestedBy:string) {
        this.receiverId=receiverId;
        this.receiverName=receiverName;
        this.lastMessage=lastMessage;
        this.lastAttachment=lastAttachment;
        this.lastMessageUserName=lastMessageUserName;
        this.lastMessageTime=lastMessageTime;
        this.profilePicture=profilePicture;
        this.unseenMessageCount=unseenMessageCount;
        this.isUserFavorite=isUserFavorite;
        this.requestStatus=requestStatus;
        this.requestedBy=requestedBy;
    }
}



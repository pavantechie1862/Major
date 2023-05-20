import { MessgeBody } from "./messageBody.model";

export class Messages {
    senderId:string;
    recieverId:string;
    senderName:string;
    senderProfilePicture:string;
    messageBody:MessgeBody;
    messageAttachment:string[];
    messageTime:string;
    constructor(senderId:string,recieverId:string,senderName:string,senderProfilePicture:string,messageBody:MessgeBody,messageAttachment:string[],messageTime:string) {
        this.senderId=senderId;
        this.recieverId=recieverId;
        this.senderName=senderName;
        this.senderProfilePicture=senderProfilePicture;
        this.messageBody=messageBody;
        this.messageAttachment=messageAttachment;
        this.messageTime=messageTime;
    }
}
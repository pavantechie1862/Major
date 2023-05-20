import { ChatInformation } from "./chatInformation.model";
import { Messages } from "./messages.model";

export class ChatHistory {
    chatId:string;
    chatInformation:ChatInformation;
    messages:Messages[];
    constructor(chatId:string,chatInformation:ChatInformation,messages:Messages[]) {
        this.chatId=chatId;
        this.chatInformation=chatInformation;
        this.messages=messages;
    }
}
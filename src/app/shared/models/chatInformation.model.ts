export class ChatInformation {
    chatName:string;
    isFavouriteChat:boolean;
    isChatMuted:boolean;
    constructor(chatName:string,isFavouriteChat:boolean,isChatMuted:boolean) {
        this.chatName=chatName;
        this.isFavouriteChat=isFavouriteChat;
        this.isChatMuted=isChatMuted;
    }
}
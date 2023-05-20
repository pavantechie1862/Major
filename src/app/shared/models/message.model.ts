export interface message {
    time:string;
    message:string;
    senderId:string;
    isInstruction?:boolean;
    seen?:boolean;
}
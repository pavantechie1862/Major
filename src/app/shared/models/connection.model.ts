export class connection {
    userId?:string;
    imgUrl?:string;
    name?:string;
    about?:string;
    mutualConnections?:number;
    mail?:string;
    contact?:number;
    constructor(imgUrl:string,name:string,about:string,mutualConnections:number,mail:string,contact:number)
    {
        this.userId="";
        this.imgUrl=imgUrl;
        this.name!=name;
        this.about!=about;
        this.mutualConnections!=mutualConnections;
        this.mail!=mail;
        this.contact!=contact;
    }
}


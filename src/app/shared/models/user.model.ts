export class User {
    userId:string;
    imgUrl:string;
    name:string;
    mutualClubs:number;
    mutualConnections:number;    
    constructor(userId:string,imgUrl:string,name:string,mutualClubs:number,mutualConnections:number){
        this.userId=userId;
        this.imgUrl=imgUrl;
        this.name=name;
        this.mutualClubs=mutualClubs;
        this.mutualConnections=mutualConnections;
    }    
}


export class ClubRequest {
    requestedUserId: string;
    name: string;
    email: string;
    profilePicture: string;
    constructor(requestedUserId: string,name: string,email: string,profilePicture: string) {
        this.requestedUserId=requestedUserId;
        this.name=name;
        this.email=email;
        this.profilePicture=profilePicture;
    }
}
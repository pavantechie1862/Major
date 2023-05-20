export class CreateNewUser{
    firstName: string;
    middleName: string;
    lastName: string;
    displayName: string;
    phone: string;
    email: string;
    inviteToCorporateClub: boolean;

    constructor(firstName?: string, middleName?: string, lastName?: string, displayName?: string, phone?: string, email?: string, inviteToCorporateClub?: boolean){
        this.firstName = firstName!;
        this.middleName = middleName!;
        this.lastName = lastName!;
        this.displayName = displayName!;
        this.phone = phone!;
        this.email = email!;
        this.inviteToCorporateClub = inviteToCorporateClub!;
    }
}
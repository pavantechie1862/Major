export class ClubInformation {
    clubName:string;
    isFavouriteClub:boolean;
    isClubMuted:boolean;
    constructor(clubName:string,isFavouriteClub:boolean,isCLubMuted:boolean)
    {
        this.clubName=clubName;
        this.isClubMuted=isCLubMuted;
        this.isFavouriteClub=isFavouriteClub;
    }
}
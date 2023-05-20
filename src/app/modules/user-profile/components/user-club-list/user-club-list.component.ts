import { Component } from '@angular/core';

export interface UserClubs{
  clubName: string;
  clubImage: string;
  clubDescription: string;
  clubParticipantsCount: number;
  createdBy: string;
  createdOn: Date;
  isAdmin?: boolean;
}

@Component({
  selector: 'app-user-club-list',
  templateUrl: './user-club-list.component.html',
  styles: [
  ]
})
export class UserClubListComponent {
  userClubSearch: string="";

  userClubs: UserClubs[] = [
    {
      clubName: "Bikers Adventures Club",
      clubImage: "https://t4.ftcdn.net/jpg/02/39/33/41/360_F_239334146_kKEiyZtmgs3Ieu3MocjtWAk9ALGa6Fug.jpg",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: true,
    },
    {
      clubName: "iPhone Users Club",
      clubImage: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-k67645eaah5dkph6a893cnem33-20190911102432.Medi.jpeg",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: false,
    },
    {
      clubName: "Designers Club",
      clubImage: "https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: true,
    },
    {
      clubName: "Developers Club",
      clubImage: "https://firstlinesoftware.com/wp-content/uploads/2021/12/logo-first-line-background-1-1024x576.jpg",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: false,
    },
    {
      clubName: "Sports Authority Club",
      clubImage: "https://t4.ftcdn.net/jpg/02/86/76/77/360_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: true,
    },
    {
      clubName: "Awesome Staff Club",
      clubImage: "https://snacknation.com/wp-content/uploads/2021/07/employee-recognition-header.png",
      clubDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit, velit egestas efficitur egestas, massa elit blandit velit, eu vehicula ligula mi vel dolor.",
      clubParticipantsCount: 250,
      createdBy: "Jawahaar",
      createdOn: new Date(),
      isAdmin: false,
    }
  ]
}

import { Component,OnInit } from '@angular/core';
import { clubList } from 'src/app/shared/models/chatClub.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: []
})

export class ClubListComponent implements OnInit {
  clubList!:clubList[];
  currentUserId:string=this.homeService.currentUserId;
  searchText="";

  constructor(private homeService:HomeService){}

  ngOnInit():void {
    this.homeService.getAllClubs().subscribe(
      (data)=>{ this.homeService.clubsList=data;
                this.homeService.clubs.next(this.homeService.clubsList)
              }
    )
    this.homeService.clubs.subscribe(
        (data)=>{ 
                data.sort((a,b)=>new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
                this.clubList=data;
      }
    )
  }

  sameDate(date: string): boolean {
    let chatDate = new Date(date);
    let todayDate = new Date();
    return todayDate.toDateString() == chatDate.toDateString() ? true : false;
  }

  makeAllSeen(club:clubList) {
    club.unseenMessageCount=0;
    this.homeService.updateUnseenMessages(club.recieverId,club).subscribe();
  }
  
}

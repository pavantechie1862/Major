import { Component } from '@angular/core';

import { ChatUser} from 'src/app/shared/models/chatUser.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styles: [
  ]
})
export class ThreadListComponent {
  chatList!:ChatUser[];
  searchText:string="";
  currentUserId:string=this.homeService.currentUserId;
  currentUserName:string=this.homeService.currentUserName;

  constructor(private homeService:HomeService){}

  ngOnInit(): void {
    this.homeService.getAllChats().subscribe(
      (data)=>{this.homeService.chatList=data;
               this.homeService.chats.next(data);
              }
    )
    this.homeService.chats.subscribe(
      (data)=>{
        data.sort((a,b)=>new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
        this.chatList=data;
      }
    )
  }

  sameDate(date: string): boolean {
    let chatDate = new Date(date);
    let todayDate = new Date();
    return todayDate.toDateString() == chatDate.toDateString() ? true : false;
  }

  makeAllSeen(chat:ChatUser) {
    chat.unseenMessageCount=0;
    this.homeService.updateUnseenCount(chat.receiverId,chat).subscribe();
  }
}

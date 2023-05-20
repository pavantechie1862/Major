import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { clubList } from 'src/app/shared/models/chatClub.model';
import { ChatUser } from 'src/app/shared/models/chatUser.model';
import { GroupInfo } from 'src/app/shared/models/groupInfo.model';
import { clubHistory } from 'src/app/shared/models/clubHistory.model';
import { ChatHistory } from 'src/app/shared/models/chatHistory.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  clubs:BehaviorSubject<clubList[]>=new BehaviorSubject<clubList[]>([]);
  chats:BehaviorSubject<ChatUser[]>=new BehaviorSubject<ChatUser[]>([]);
  clubsList:clubList[]=[];
  chatList:ChatUser[]=[];
  public currentUserId:string="1";
  public currentUserName:string="sreeja";

  constructor(private http:HttpClient) { 
  }

  getChatHistory(id:string) {
    return this.http.get<ChatHistory>(`https://6447b5c27bb84f5a3e468976.mockapi.io/thread-history/${id}`)
  }

  getChat(id:string) {
    return this.http.get<ChatUser>(`https://6447b5c27bb84f5a3e468976.mockapi.io/thread-list/${id}`);
  }

  getAllChats() {
    return this.http.get<ChatUser[]>("https://6447b5c27bb84f5a3e468976.mockapi.io/thread-list")
  }

  getAllClubs() {
    return this.http.get<clubList[]>("https://6422e057001cb9fc20323726.mockapi.io/Clubs-List");
  }

  getClubHistory(id:string) {
    return this.http.get<clubHistory>(`https://6422e057001cb9fc20323726.mockapi.io/clubHistory/${id}`);
  }

  makeFavorite(clubId:string) {
    let clubIndex=this.clubsList.findIndex((ob)=>ob.recieverId===clubId);
    this.clubsList[clubIndex].isUserFavorite=!this.clubsList[clubIndex].isUserFavorite;
    this.clubs.next(this.clubsList);
    return this.http.put(`https://6422e057001cb9fc20323726.mockapi.io/clubs/${clubId}`,this.clubsList[clubIndex]); 
  }

  updateLastMessage(id:string,club:clubList) {
    return this.http.put(`https://6422e057001cb9fc20323726.mockapi.io/clubs/${id}`,club); 
  }

  getClubInfo(id:String) {
    return this.http.get<GroupInfo>(`https://642bac03d7081590f926e766.mockapi.io/clubinfo/${id}`);
  }
  
  updateClubHistory(id:string,club:clubHistory) {
    return this.http.put(`https://6422e057001cb9fc20323726.mockapi.io/clubHistory/${id}`,club);
  }

  updateClubInfo(id:string,club:GroupInfo) {
    return this.http.put(`https://642bac03d7081590f926e766.mockapi.io/clubinfo/${id}`,club);
  }

  updateUnseenMessages(id:string,club:clubList) {
    return this.http.put(`https://6422e057001cb9fc20323726.mockapi.io/Clubs-List/${id}`,club);
  }

  updateChatHistory(id:string,chat:ChatHistory) {
    return this.http.put(`https://6447b5c27bb84f5a3e468976.mockapi.io/thread-history/${id}`,chat);
  }

  updateChatList(id:string,chatUser:ChatUser) {
    return this.http.put(`https://6447b5c27bb84f5a3e468976.mockapi.io/thread-list/${id}`,chatUser);
  }

  updateUnseenCount(id:string,chatUser:ChatUser) {
    return this.http.put(`https://6447b5c27bb84f5a3e468976.mockapi.io/thread-list/${id}`,chatUser);
  }
}



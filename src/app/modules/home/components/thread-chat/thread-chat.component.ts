import { Component, TemplateRef } from '@angular/core';
import { ChatUser} from 'src/app/shared/models/chatUser.model';
import { ActivatedRoute } from '@angular/router';


import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { HomeService } from '../../services/home.service';
import { ChatHistory } from 'src/app/shared/models/chatHistory.model';



@Component({
  selector: 'app-thread-chat',
  templateUrl: './thread-chat.component.html',
  styles: [
  ]
})

export class ThreadChatComponent {

  chatId!:string;
  chat!:ChatHistory;
  chatUser!:ChatUser;
  modalRef!: BsModalRef;
  message:string="";
  isFavorite:string=""; 
  isMuted:string="";
  currentUserId:string="1";
  files:any=[];
  toggled:boolean=false;

  constructor(private route:ActivatedRoute,
              private homeService:HomeService,
              private modalService: BsModalService)
  {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.chatId=String(params.get("id"));
        this.homeService.getChatHistory(this.chatId).subscribe(
          (data)=>{this.chat=data;
                  this.chat.chatInformation.isFavouriteChat==true ? this.isFavorite="Remove as Favorite":this.isFavorite="Mark as Favorite";
                  this.chat.chatInformation.isChatMuted==true ? this.isMuted="Unmute Notifications" : this.isMuted="Mute Notifications"; 
                  console.log(this.chat);
                  }
        )
        this.homeService.getChat(this.chatId).subscribe(
          (data)=>{this.chatUser=data;}
        )
      }
    )
  } 

  openSmallModal(smallTemplate: TemplateRef<any>){
    this.modalRef = this.modalService.show(smallTemplate,{ class: 'small-modal'});
  }

  addMessage() {
    if(this.message.trim()!="" || this.files.length!=0){
      this.chat.messages.push({senderId:this.currentUserId,recieverId: "2",senderName: "Booking Club",senderProfilePicture: "assets/apple.png",messageBody: {message: this.message,messageType: false},messageAttachment:this.files,messageTime:String(new Date())});
      this.updateList();
    }
    this.message="";
    this.files=[];
    this.homeService.updateChatHistory(this.chatId,this.chat).subscribe()
  }

  updateList() {
    this.chatUser.lastMessage=this.message=="" && this.files.length!=0 ? "Sent a File" :this.message;
    this.chatUser.lastMessageTime=String(new Date());
    this.chatUser.lastMessageUserName=this.chat.chatInformation.chatName;
    let chatIndex=this.homeService.chatList.findIndex((thread)=>thread.receiverId==this.chatId);
    this.homeService.chatList[chatIndex]=this.chatUser;
    this.homeService.chats.next(this.homeService.chatList);
    this.homeService.updateChatList(this.chatId,this.chatUser).subscribe();
  }

  connectChat() {
    this.chatUser.requestStatus=2;
  }

  blockChat() {
    this.chatUser.requestStatus=3;
  }

  uploadFiles(event:any){
    console.log(event.target.files);
    if(this.files.length<3) {
      for(let i=0;i<event.target.files.length;i++) 
      {
        this.files.push(event.target.files[i].name);
      }
    }
    else {
      window.alert("cannot upload more than 3 files");
    }
  }

  handleEmoji(e:any)  {
    console.log("entered")
    this.message +=  e.char;
    console.log('Emoji Name',  e.name);
  }

  changeToggle() {
    if(this.toggled)
      this.toggled=!this.toggled;
  }

  deleteFile(i:number) {
    this.files.splice(i,1);
  }

  makeFavorite() {
    console.log("entered favorite")
    if(this.isFavorite=="Remove as Favorite") {
      this.isFavorite="Mark as Favorite";
      this.chat.messages.push({senderId:this.currentUserId,recieverId: "2",senderName: "Booking Club",senderProfilePicture: "assets/apple.png",messageBody: {message: "You have Removed the club from Favorites",messageType: true},messageAttachment:this.files,messageTime:String(new Date())})
    }
    else {
       this.isFavorite="Remove as Favorite";
       this.chat.messages.push({senderId:this.currentUserId,recieverId: "2",senderName: "Booking Club",senderProfilePicture: "assets/apple.png",messageBody: {message: "You have added the club to Favorites ",messageType: true},messageAttachment:this.files,messageTime:String(new Date())})
    }
    let chatIndex=this.homeService.chatList.findIndex((object)=>object.receiverId==this.chatId)
    this.homeService.chatList[chatIndex].isUserFavorite=!this.homeService.chatList[chatIndex].isUserFavorite;
    this.homeService.chats.next(this.homeService.chatList);
    this.homeService.updateChatHistory(this.chatId,this.chat).subscribe();
    this.chatUser.isUserFavorite=!this.chatUser.isUserFavorite;
    this.homeService.updateChatList(this.chatId,this.chatUser);
  }

  muteClub() {
    if(this.isMuted=="Mute Notifications") {
      this.isMuted="Unmute Notifications";
      this.chat.messages.push({senderId:this.currentUserId,recieverId: "2",senderName: "Booking Club",senderProfilePicture: "assets/apple.png",messageBody: {message: "You have Muted Notifications ",messageType: true},messageAttachment:this.files,messageTime:String(new Date())})
    }
    else {
      this.isMuted="Mute Notifications";
      this.chat.messages.push({senderId:this.currentUserId,recieverId: "2",senderName: "Booking Club",senderProfilePicture: "assets/apple.png",messageBody: {message: "You have Unmuted Notifications ",messageType: true},messageAttachment:this.files,messageTime:String(new Date())})
    }
    this.chat.chatInformation.isChatMuted=!this.chat.chatInformation.isChatMuted;
    this.homeService.updateChatHistory(this.chatId,this.chat).subscribe();
    this.modalRef.hide();
  }
}

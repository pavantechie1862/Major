import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GroupInfo } from 'src/app/shared/models/groupInfo.model';
import { HomeService } from '../../services/home.service';
import { ClubParticipants } from 'src/app/shared/models/clubParticipant.model';
import { ClubRequest } from 'src/app/shared/models/clubRequest.model';

import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-club-info',
  templateUrl: './club-info.component.html',
  styleUrls: []
})
export class ClubInfoComponent {

  clubid!: string;
  club!:GroupInfo;
  outssideClick!:boolean;
  modalRef!:BsModalRef
  adminText="";
  blockedText="";
  isClubMuted!:boolean;

  constructor(private homeService:HomeService,
              private route:ActivatedRoute,
              private modalService:BsModalService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
        this.clubid=String(params.get("id"));
        // this.club=this.homeService.getClubDetails(this.clubid);
        this.homeService.getClubInfo(this.clubid).subscribe(
          (data)=>{this.club=data;
                   this.isClubMuted=data.clubDescription.isMuted;
                   console.log(this.club);
          }
        )
      }
    )
  }

  getDropdownText(member:ClubParticipants) {
    if(member.participantRole==1 || member.participantRole==2) {
      this.adminText="Remove as Admin";
    }
    else {
      this.adminText="Make as Admin";
    }
    if(member.isBlocked==true) {
      this.blockedText="Un Block Member";
    }
    else {
       this.blockedText="Block Member";
    }
  }

  changeAdmin(member:ClubParticipants,i:number) {
    console.log("old participant=",this.club.clubParticipants[i]);
    if(member.participantRole==3){
      member.participantRole=2;
    }
    else {
      member.participantRole=3;
    }
    this.club.clubParticipants[i]=member;
    console.log("new participant=",this.club.clubParticipants[i]);
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe();
  }
  
  changeStatus(member:ClubParticipants,i:number) {
    if(member.isBlocked)
    {
        member.isBlocked=false;
        member.isActive=true;
    }
    else {
      member.isBlocked=true;
    }
    this.club.clubParticipants[i]=member;
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe();
  }

  addParticipant(request:ClubRequest,i:number) {
    console.log("new request",request);
    let participant:ClubParticipants={
      participantId:request.requestedUserId,
      participantName:request.name,
      participantEmail:request.email,
      participantRole:3,
      isActive:true,
      isBlocked:false
    }
    this.club.clubParticipants.push(participant);
    this.club.clubRequests.splice(i);
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe();
  } 

  removeRequest(i:number) {
    this.club.clubRequests.splice(i);
  }

  openModal(template:TemplateRef<any>) {
    this.modalRef=this.modalService.show(template,{class:'small-modal'})
  }

  hide() {
    this.modalRef.hide();
  }

  muteClub() {
    console.log("this club is muted in group Info",this.isClubMuted);
    this.isClubMuted=!this.isClubMuted;
    this.club.clubDescription.isMuted=this.isClubMuted;
    console.log("after mute",this.isClubMuted);
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe(
      (data)=>{console.log("after mute in clubInfo",data)}
    );
    this.homeService.getClubHistory(this.clubid).pipe(
      switchMap((data) => {
        data.clubInformation.isClubMuted = this.club.clubDescription.isMuted;
        return this.homeService.updateClubHistory(this.clubid, data);
      })
    ).subscribe();
  }

  changeClubType() {
    console.log("Triggered on toggle switch");
    if(this.club.clubDescription.clubType==1) 
        this.club.clubDescription.clubType=3
    else {
      this.club.clubDescription.clubType=1;
    }
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe();
  }

  changePublicClubType() {
    if(this.club.clubDescription.clubType==1)
      this.club.clubDescription.clubType=2;
    else 
      this.club.clubDescription.clubType=1;
    this.homeService.updateClubInfo(this.clubid,this.club).subscribe();
  }

}

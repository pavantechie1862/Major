import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: []
})
export class MythreadsComponent {

  modalRef!: BsModalRef;
  
  connectionList:User[]=[
    {userId:"user1",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user2",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user3",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user4",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user5",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user6",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user7",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user8",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
    {userId:"user9",name:"Sreeja",imgUrl:"assets/apple.png",mutualClubs:20,mutualConnections:32},
  ]
  

  constructor(private modalService:BsModalService)
  {}

  openModal(template:TemplateRef<any>) {
    this.modalRef=this.modalService.show(template,{class:'small-modal w-400'})
  }
  
}

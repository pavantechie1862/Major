import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddClubComponent } from 'src/app/shared';

@Component({
  selector: 'app-my-clubs',
  templateUrl: './my-clubs.component.html',
  styleUrls: []
})
export class MyclubsComponent {
  ifClubs:boolean=true;
  modalReference!:BsModalRef;

  constructor(public modalService: BsModalService){}

  openAddClubForm(){
    this.modalReference=this.modalService.show(AddClubComponent,{class: 'large-modal w-900'})
  }
}

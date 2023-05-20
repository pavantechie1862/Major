import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddClubComponent } from 'src/app/shared';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styles: [
  ]
})
export class AllClubsComponent {
  modalReference!: BsModalRef;

  constructor(public modalService: BsModalService){}

  openAddClubForm(){
    this.modalReference = this.modalService.show(AddClubComponent, {class: 'large-modal w-900'});
  }

}

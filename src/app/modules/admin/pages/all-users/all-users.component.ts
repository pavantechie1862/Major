import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddUserComponent } from '../../components/add-user/add-user.component';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styles: [
  ]
})
export class AllUsersComponent {
  modalReference!: BsModalRef;
  constructor(public modalService: BsModalService){}

  openAddUserForm(){
    this.modalReference = this.modalService.show(AddUserComponent, {class: 'small-modal'});
  }
}

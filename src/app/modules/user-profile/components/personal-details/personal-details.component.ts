import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditPersonalDetailsComponent } from '../edit-personal-details/edit-personal-details.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styles: [
  ]
})
export class PersonalDetailsComponent {

  modalReference!: BsModalRef;
  constructor(public modalService: BsModalService){}
  
  personalDetails = {
    firstName: 'Ayesha',
    middleName: '',
    lastName: 'Patel',
    gender: 'Female',
    dob: new Date(),
    martialStatus: 'Single',
    bloodGroup: 'A Positive',
    about: 'Nothing can stop you. Be you'
  }

  openPersonalDetailsForm(){
    this.modalReference = this.modalService.show(EditPersonalDetailsComponent, {class: 'small-modal'});
  }
}

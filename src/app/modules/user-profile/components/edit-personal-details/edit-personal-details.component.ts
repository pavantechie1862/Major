import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-personal-details',
  templateUrl: './edit-personal-details.component.html',
  styles: [
  ]
})
export class EditPersonalDetailsComponent {
  firstName!: string;
  middleName!: string;
  lastName!: string;
  displayName!: string;
  phone!: string;
  email!: string;
  inviteToCorporateClub!: boolean;

  addUserForm!: FormGroup;

  constructor(public modalReference: BsModalRef,
    public modalService: BsModalService,
    private formBuilder: FormBuilder
    ) {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      displayName: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      inviteToCorporateClub: [false]
    });
  }
}
